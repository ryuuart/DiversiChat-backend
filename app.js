const db = require("./db/firebase");
const express = require("express"); 
const app = express();
const bodyParser = require('body-parser'); 
const port = 4000;
const cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hellow world"); 
});

app.get("/messages", (req, res) => {
    let messages = [];
    db.chatRef.get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.status(400);
    })
})

app.post("/add-chat", (req, res) => {
    let data = req.body;
    console.log(data);
    db.chatRef.doc().set(data).then(response => {
        res.send(200);
    });
});

app.listen(port, () => {
    console.log(`Express connected port ${port}`)
})


