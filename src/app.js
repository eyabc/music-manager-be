import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import globalRouter from './server/globalRouter'
import userRouter from './server/userRouter'
import musicRouter from './server/musicRouter'


import sequelize from './models'
sequelize.sequelize.sync();

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api', globalRouter);
app.use('/api', userRouter);
app.use('/api', musicRouter);

export default app;
