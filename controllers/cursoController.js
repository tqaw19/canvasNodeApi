//cursoController.js

//Request libraries
var request = require('request');

//Exporting keys
var keys = require('../keys/key');

module.exports = {
    cursos: function (req, res) {
        let options = {
            method: 'GET',            
            url: keys.base_url + 'courses',
            headers: {
                'cache-control': 'no-cache',
                Authorization: keys.token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);  
            res.send(JSON.parse(body));
        });
    },

    enrollments: function (req, res) {
        let options = {
            method: 'GET',            
            url: keys.base_url + 'courses/' + req.params.course_id + '/enrollments' ,
            headers: {
                'cache-control': 'no-cache',
                Authorization: keys.token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);           
            res.send(JSON.parse(body));
            
        });
    },
    
    assignments: function (req, res) {
        let options = {
            method: 'GET',            
            url: keys.base_url + 'courses/' + req.params.course_id + '/assignments' ,
            headers: {
                'cache-control': 'no-cache',
                Authorization: keys.token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);           
            res.send(JSON.parse(body));
            
        });
    },






}
