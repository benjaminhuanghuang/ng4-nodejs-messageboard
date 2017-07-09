var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

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
var users = [];

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

// auth router
var authRouter = express.Router();

authRouter.post('/register', (req, res) => {
    var index = users.push(req.body) - 1;

    var user = users[index];
    user.id = index;

    var token = jwt.sign(user.id, '123');
    res.json({
        firstName: user.firstName,
        token
    });
})

app.use("/api", apiRouter);
app.use("/auth", authRouter);

app.listen(1234);