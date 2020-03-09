const express = require('express');
const firebase = require('firebase-admin');
const routes = express.Router();
var db = firebase.database();

const ProductController = require('./controllers/ProductController');


routes.get("/data", ProductController.index); // se for uma requisição de get, use a função index
                    // Usar .get sempre que a rota retirar algo do db


module.exports = routes; 