//cursoController.js

//Request libraries
var request = require('request');

//Exporting keys
var keys = require('../keys/key');

module.exports = {
    show: function (req, res) {
        var options = {
            method: 'GET',            
            url: keys.base_url + 'courses',
            headers: {
                'cache-control': 'no-cache',
                Authorization: keys.token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.send(body);
        });
    }
}
