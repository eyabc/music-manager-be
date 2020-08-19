import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import globalRouter from './server/globalRouter'
import userRouter from './server/userRouter'
import musicRouter from './server/musicRouter'


import sequelize from './models/index'
sequelize.sequelize.sync();

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/music', musicRouter);

export default app;
