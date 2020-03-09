var firebase = require('firebase-admin');
const express = require('express'); //ajuda com rotas e controllers
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

var serviceAccount = require("./serviceAccountKey.json"); // chave adicionada para acesso ao db
firebase.initializeApp({
    credential : firebase.credential.cert(serviceAccount),      // parâmetros para login no db
    databaseURL: "https://testeesp32-48ea2.firebaseio.com/"     // especificados na página principal do firebase
});

app.use('/api', require("./src/routes")); // em qualquer requisição, va buscar no arquivo routes
app.listen(3001);


