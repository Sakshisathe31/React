import { config as conf } from 'dotenv';
conf();

const _config = {
    port: process.env.PORT || 3000, // Provide a default port if not defined
    databaseUrl: process.env.MONGO_CONNECTION_STRING || "", // Avoid undefined if the env variable is missing
    env: process.env.NODE_ENV ,
};

export const config = Object.freeze(_config);
