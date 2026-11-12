const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp'
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  if (decoded === '/atlas') return path.join(root, 'atlas.html');
  const normalized = path.normalize(decoded).replace(/^([.][.][\\/])+/, '');
  return path.join(root, normalized === '/' ? 'index.html' : normalized);
}

const server = http.createServer((req, res) => {
  const filePath = safePath(req.url || '/');
  fs.stat(filePath, (statError, stats) => {
    if (!statError && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': mime[ext] || 'application/octet-stream',
        'Cache-Control': ext === '.html' || ext === '.json' ? 'no-cache' : 'public, max-age=3600'
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    if ((req.url || '/').split('?')[0] === '/manus-routes.json') {
      const routeFile = path.join(root, 'public', 'manus-routes.json');
      res.writeHead(200, { 'Content-Type': mime['.json'], 'Cache-Control': 'no-cache' });
      fs.createReadStream(routeFile).pipe(res);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página não encontrada');
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`NeuroAtlas disponível em http://0.0.0.0:${port}`);
});
