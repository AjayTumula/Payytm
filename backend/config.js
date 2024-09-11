import 'dotenv/config';

const JWT_SECRET = process.env.SECRETKEY;
module.exports = JWT_SECRET;