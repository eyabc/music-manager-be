import dotenv from 'dotenv';

dotenv.config();

export default {
    'development': {
        'username': process.env.RDS_USER,
        'password': process.env.RDS_PASSWORD,
        'database': process.env.RDS_DATABASE,
        'host': process.env.RDS_HOST,
        'dialect': 'mysql',
    },
    'test': {
        'username': 'root',
        'password': null,
        'database': 'database_test',
        'host': '127.0.0.1',
        'dialect': 'mysql',
    },
    'production': {
        'username': 'root',
        'password': null,
        'database': 'database_production',
        'host': '127.0.0.1',
        'dialect': 'mysql',
    },
};
