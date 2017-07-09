var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages = [{
        text: 'some text',
        owner: 'Tim'
    },
    {
        text: 'other message',
        owner: 'Jane'
    },
    {
        text: 'Message from ben',
        owner: 'Ben'
    }
];
// use body parser middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// api router
var apiRouter = express.Router();
apiRouter.get('/', (req, res) => {
    res.send('hello');
})

apiRouter.get('/messages', (req, res) => {
    res.json(messages);
})

apiRouter.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(m => m.owner == user);
    res.json(result);
})

apiRouter.post('/messages', (req, res) => {
    messages.push(req.body);
    //res.sendStatus(200);
    res.json(req.body);
})

app.use("/api", apiRouter);

app.listen(1234);