const path = require('path');
const fsp = require('fs').promises;
const zlib = require('zlib');
const { promisify } = require('util');

const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);

const inputDirName = 'input';
const outputDirName = 'output';
const outputFileName = 'result.json.gz';

const inputDir = path.join(process.cwd(), inputDirName);
const outputFile = path.join(process.cwd(), outputDirName);
const pathOutPutFile = path.join(outputFile, outputFileName);

async function getInputFileList() {
  try {
    const files = await fsp.readdir(inputDirName);
    return files.map((file) => path.join(inputDir, file));
  } catch (e) {
    console.log(`Error in getInputFileList ${e}`);
  }
}

async function getObjectFromFile(filePath) {
  try {
    const compressedBuffer = await fsp.readFile(filePath);
    const jsonBuffer = await gunzip(compressedBuffer);
    const json = jsonBuffer.toString();
    const object = JSON.parse(json);
    return object;
  } catch (e) {
    console.log(`Error ${e}`);
  }
}

function rebuildUrl(originalUrl) {
  const url = new URL(originalUrl);
  const fileInfo = path.parse(url.toString());
  url.searchParams.append('files', fileInfo.name);
  url.searchParams.append('type', fileInfo.ext);
  url.protocol = 'https';
  url.pathname = 'devices';
  return url.href;
}

async function buildOutputObject(files) {
  const result = {};
  for (const file of files) {
    try {
      const object = await getObjectFromFile(file);
      object.url = rebuildUrl(object.url);
      const name = path.basename(file.toLowerCase(), '.json.gz');
      result[name] = object;
      return result;
    } catch (e) {
      console.log(`Error buildOutputObject: ${e}`);
    }
  }
}

async function saveOutput(object) {
  const buf = Buffer.from(JSON.stringify(object));
  try {
    const compressBuf = await gzip(buf);
    await fsp.writeFile(pathOutPutFile, compressBuf);
  } catch (e) {
    console.log(`Error ${e}`);
  }
}

async function start() {
  try {
    const inputFiles = await getInputFileList();
    const outputObject = await buildOutputObject(inputFiles);
    await saveOutput(outputObject);
  } catch (e) {
    console.log(`Error in start ${e}`);
  }
}

start().catch((err) => console.error('🐞  🤪  🐛\n', err));
