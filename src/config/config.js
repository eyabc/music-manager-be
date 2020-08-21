import config from 'my/app/config';

const env = process.env.NODE_ENV || 'development';

export default {
    [env]: {
        url: config.mysql.migrate,
        dialect: 'mysql',
        migrationStorageTableName: 'SequelizeMeta'
    }
};