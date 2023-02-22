
const mongoose = require('mongoose');


class Database {
    constructor() {

        this.connection = null;
    }
    connect(){
        const mongo_url= "mongodb+srv://<usuario>:d<senha>@cluster0.moosa97.mongodb.net/AROnline?retryWrites=true&w=majority"
        console.log('tentando conexão com banco de dados...');
        
    

        mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Conectado com o banco de dados.');
            this.connect = mongoose.connection;
   
        }).catch(err => {
            console.error(err);
        });
    }
}

module.exports = Database;