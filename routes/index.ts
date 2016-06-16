'use strict';

import * as express from 'express';
import * as request from 'request';

const router = express.Router();

router.all('/api/*', (req, res, next) => {
  request({
    uri: 'http://redmine.pfrus.com/' + req.params[0],
    method: req.method,
    qs: req.query
  }, (error, response, body) => {
    const { headers, statusCode } = response;
    for (let header in headers) {
      if (header === 'www-authenticate') continue;
      res.header(header, headers[header]);
    }
    if (error !== null) {
      return next(error);
    }
    if (!(statusCode >= 200 && statusCode < 300)) {
      const err = new Error(headers.status);
      err['status'] = statusCode;
      return next(err);
    }
    return res.status(statusCode).send(body);
  });
});

export = router;
