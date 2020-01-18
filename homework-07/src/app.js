const http = require('http');
const os = require('os');

const total = Math.round(os.totalmem() / 1e6);
const free = (os.freemem() / 1e6).toFixed(3);
const allocated = (total - free).toFixed(3);
const userBearer = 'Max Test1234';
const cryptoUserBearer = new Buffer.from(userBearer).toString('base64');
console.log('cryptoUserBearer', cryptoUserBearer);

http
  .createServer((req, res) => {
    console.log('req.url', req.url);
    const headers = JSON.stringify(req.headers).includes('authorization');
    console.log('headers', headers);
    if (req.url === '/metrics' && headers) {
      if (new URL(req.headers.host + req.url).searchParams.get('filter')) {
        if (new URL(req.headers.host + req.url).searchParams.get('filter') === 'total') {
          res.setHeader('Authorization', cryptoUserBearer);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(
            JSON.stringify({
              now: new Date(),
              total: Number(total),
            }),
          );
          res.end();
        } else if (new URL(req.headers.host + req.url).searchParams.get('filter') === 'free') {
          res.setHeader('Authorization', cryptoUserBearer);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(
            JSON.stringify({
              now: new Date(),
              free: Number(free),
            }),
          );
          res.end();
        } else if (new URL(req.headers.host + req.url).searchParams.get('filter') === 'allocated') {
          res.setHeader('Authorization', cryptoUserBearer);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(
            JSON.stringify({
              now: new Date(),
              allocated: Number(allocated),
            }),
          );
          res.end();
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.write(
            JSON.stringify({
              now: new Date(),
              message: 'Filter value is not valid',
            }),
          );
          res.end();
        }
      } else {
        res.setHeader('Authorization', cryptoUserBearer);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(
          JSON.stringify({
            now: new Date(),
            message: 'OK',
            total: Number(total),
            free: Number(free),
            allocated: Number(allocated),
          }),
        );
        res.end();
      }
    } else if (req.url === '/limit') {
      if (req.method === 'POST' && headers) {
        let body = '';
        req.on('data', (chunk) => {
          console.log('chunk', chunk);
          body += chunk;
        });
        req.on('end', () => {
          if (body) {
            try {
              const data = JSON.parse(body);
              console.log('data.limit', data.limit);
              if (data.limit < 0 && typeof data.limit !== Number) {
                console.log('error');
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.write(
                  JSON.stringify({
                    now: new Date(),
                    message: 'New value for minimum free memory limit is not valid number',
                  }),
                );
                res.end();
              } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const message =
                  free < data.limit
                    ? `Available memory is under the defined limit`
                    : `Minimum free memory limit is successfully set to ${data.limit} MB`;
                res.write(
                  JSON.stringify({
                    now: new Date(),
                    message,
                  }),
                );
                res.end();
              }
            } catch (error) {
              console.log('ERROR', error);
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.write(
                JSON.stringify({
                  message: 'Invalid data',
                }),
              );
              res.end();
            }
          }
        });
      }
    } else if (!headers) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.write(
        JSON.stringify({
          now: new Date(),
          message: 'Unauthorized',
        }),
      );
      res.end();
    } else {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.write(
        JSON.stringify({
          message: 'Internal error occured',
        }),
      );
      res.end();
    }
  })
  .listen(8080);

console.log('server running on port 8080');
