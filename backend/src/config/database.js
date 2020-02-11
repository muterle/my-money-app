const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//module.exports = mongoose.connect('mongodb://localhost/mymoney');
module.exports = mongoose.connect('mongodb://admin:admindb@cluster0-shard-00-00-k649d.mongodb.net:27017,cluster0-shard-00-01-k649d.mongodb.net:27017,cluster0-shard-00-02-k649d.mongodb.net:27017/mymoney?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useMongoClient: true 
});

mongoose.Error.messages.Number.min = "O valor {VALUE} é menor que o limite de '{MIN}'.";
mongoose.Error.messages.Number.max = "O valor {VALUE} é maior que o limite de '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";