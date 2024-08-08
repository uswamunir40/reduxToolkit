import cors from 'cors';

const whitelist = ['http://localhost:5173'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.error(`Not allowed by CORS: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    }
};

const setupCors = cors(corsOptions);

export default setupCors;