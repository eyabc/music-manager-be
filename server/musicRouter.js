import express from 'express';
import { Music } from '../models';
import { upload } from '../middleware/fileUpload';
import multer from 'multer';
import fs from 'fs';

const musicRouter = express.Router();

musicRouter.get('/musics', async (req, res) => {
    try {
        const music = await Music.findAll();
        res.status(200).send({ music });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

});

musicRouter.get('/music', async (req, res) => {
    try {
        const { id } = req.query;
        const music = await Music.findOne({ id });
        res.status(200).send({ music });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

musicRouter.post('/music', async (req, res) => {
    try {
        const path = await new Promise((resolve, reject) => {
            upload(req, res, err => {
                if (err instanceof multer.MulterError || err)
                    return reject(err);
                resolve(req.file.path);
            });
        });

        const { body: { title, album, track, artist } } = req;
        await Music.create({ title, album, track, artist, path });
        res.status(200).send();

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
    }
});
musicRouter.post('/update-music', async (req, res) => {
    try {
        const newPath = await new Promise((resolve, reject) => {
            upload(req, res, err => {
                if (err instanceof multer.MulterError || err)
                    return reject(err);
                resolve(req.file);
            });
        });
        const { body: { title, album, track, artist, id } } = req;
        const music = await Music.findOne({ id });
        const newData = {
            title, album, track, artist,
        };

        if (newPath) {
            fs.unlinkSync(music.path);
            newData.path = newPath.path;
        }

        await music.update(newData);
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

musicRouter.delete('/music', async (req, res) => {
    try {
        const { id } = req.query;
        const music = await Music.findOne({ id });
        fs.unlinkSync(music.path);
        await Music.destroy({ where: { id } });
        res.status(200).send();
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default musicRouter;
