import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import globalRouter from './server/globalRouter'
import userRouter from './server/userRouter'
import musicRouter from './server/musicRouter'


import sequelize from './models/index'
sequelize.sequelize.sync();

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api', globalRouter);
app.use('/api/user', userRouter);
app.use('/api', musicRouter);

export default app;
