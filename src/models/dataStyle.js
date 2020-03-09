const firebase = require('firebase-admin');
const db = firebase.database();

var readData = ({
    temperature:{
        type: String,
        required: true,
    },
    umidade:{
        type: String,
        required: true,
    },
    dateRegister:{
        type: String,
        required:true,
    },
});
    module.exports = {
        getData(){
    readData.dateRegister = new Date().toString();
    var ref = db.ref("umi");
    var lastData = ref.limitToLast(1);
    lastData.once("child_added", function(snapshot){
        readData.umidade = snapshot.val();
    });
    var ref = db.ref("temp");
    lastData = ref.limitToLast(1);
    lastData.once("child_added", function(snapshot){
        readData.temperature = snapshot.val();
    });
        return readData;
    }       
    };