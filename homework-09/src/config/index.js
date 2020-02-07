module.exports = {
  port: process.env.PORT || 3005,
  filePath: './static/image.jpg',
  rate: 1024 * 1024,
  minRate: 1024 * 64,
  highWaterMarkLimit: 1024 * 1024
};
