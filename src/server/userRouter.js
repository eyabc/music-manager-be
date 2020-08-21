import express from 'express';
import { User } from '../models';

const userRouter = express.Router();

userRouter.post('/sign-in', async (req, res) => {
    try {
        const {
            body: { login_id, login_password },
        } = req;
        console.log(req.body);

        const result = await User.findOne({
            where: {
                login_id, login_password,
            },
        });
        if (result)
            res.send(200, { result });
        res.send(200, { code: 1, message: '아이디나 비밀번호를 확인해 주세요.' });
    } catch (error) {
        return res.send(500, { message: error.message });
    }

});


userRouter.post('/sign-up', async (req, res) => {
    try {
        const {
            body: { name, login_id, login_password, passwordCheck },
        } = req;

        const isDuplicateId = await User.findOne({
            login_id,
        });
        if (isDuplicateId)
            return res.send(200, { code: 1, message: 'duplicated Id!' });

        login_password === passwordCheck &&
        await User.create({
            name,
            login_id,
            login_password,
        });
        return res.send(200);
    } catch (error) {
        return res.send(500, { message: error.message });
    }
});

userRouter.put('/password', async (req, res) => {
    try {
        const {
            body: { login_id, currentPassword, newPassword },
        } = req;

        const user = await User.findOne({
            where: {
                login_id,
            },
        });
        if (currentPassword !== user.dataValues.login_password)
            return res.send(200, { code: 1, message: '현재 비밀번호가 틀렸습니다.' });

        user.update({
            login_password: newPassword,
        });
        res.send(200);
    } catch (error) {
        return res.send(500, { message: error.message });
    }
});


export default userRouter;
