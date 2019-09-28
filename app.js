const db = require("./db/firebase");
const express = require("express"); 
const app = express();
const bodyParser = require('body-parser'); 
const port = 4000;

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
    db.chatRef.doc("item").set(data).then(response => {
        res.send(200);
    });
});

app.listen(port, () => {
    console.log(`Express connected port ${port}`)
})


