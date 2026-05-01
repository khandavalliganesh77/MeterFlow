import Redis from "ioredis";

console.log("Redis URL:", process.env.REDIS_URL); // 👈 yaha add karo

const redis = new Redis(process.env.REDIS_URL);

export default redis;