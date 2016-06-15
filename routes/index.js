'use strict';
var express = require('express');
var request = require('request');
var router = express.Router();
router.all('/api/*', function (req, res, next) {
    request({
        uri: 'http://redmine.pfrus.com/' + req.params[0],
        method: req.method,
        qs: req.query
    }, function (error, response, body) {
        var headers = response.headers, statusCode = response.statusCode;
        for (var header in headers) {
            if (header === 'www-authenticate')
                continue;
            res.header(header, headers[header]);
        }
        if (error !== null) {
            return next(error);
        }
        if (!(statusCode >= 200 && statusCode < 300)) {
            var err = new Error(headers.status);
            err['status'] = statusCode;
            return next(err);
        }
        return res.status(statusCode).send(body);
    });
});
module.exports = router;
