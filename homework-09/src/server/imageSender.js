const fs = require('fs');
const { pipeline, Transform } = require('stream');
const config = require('../config');
const Limiter = require('./limiter');


const rs = fs.createReadStream(config.filePath)//, { highWaterMark: config.highWaterMarkLimit });
const rate = Math.max(config.rate, config.minRate);
const limiter = new Limiter(rate);

function sendJPEG(res){
  pipeline(rs, limiter, res, err => {
    if (err) console.error(err);
    console.log('Success!');
  });
}

module.exports = {
  sendJPEG
};
