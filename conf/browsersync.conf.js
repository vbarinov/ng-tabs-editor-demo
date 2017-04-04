const conf = require('./gulp.conf');
const fs = require('fs');
const path = require('path');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ]
    },
    open: true,
    middleware: [
      {
        route: `/api`,
        handle: (req, res, next) => {
          const jsonPath = path.join(path.dirname(__dirname), conf.path.src(`/tabs.json`));
          if (fs.existsSync(jsonPath)) {
            const readable = fs.createReadStream(jsonPath);
            readable.pipe(res);
          } else {
            res.writeHead(404);
          }

          next();
        }
      }
    ]
  };
};
