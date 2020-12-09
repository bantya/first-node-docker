let express = require('express');
let app = express();
let bodyparser = require('body-parser');
let primes = require('./prime');

app.use(bodyparser.urlencoded({extended: false}));

let logger = function(req, resp, next){
    console.log(req.url);
    console.log(req.method);

    next();
}

let sayhello = (req, resp) => {
    resp.sendFile('form.html', {root:__dirname});
}

let checkPrime = function(req, resp){
      console.log(primes.primes(req.query.num));
      resp.send(primes.primes(req.query.num));
}

app.use(logger);
app.get('/calc', checkPrime);
app.use('/', sayhello);

app.listen(8081, () => {
    console.log('Server is started on 8080')
})
