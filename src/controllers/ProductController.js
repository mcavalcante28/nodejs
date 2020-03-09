const firebase = require('firebase-admin');
const dataStyle = require('../models/dataStyle');
const express = require('express'); //ajuda com rotas e controllers
const app = express();
var newData = {};

module.exports = {
    async index(req, res){
        newData = dataStyle.getData();
        return res.json(newData);
    }
    
    

};