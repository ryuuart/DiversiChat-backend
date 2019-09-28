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
    db.chatRef.orderBy("date").get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.statusStatus(400);
    })
})

app.post("/add-chat", (req, res) => {
    let data = req.body;
    if (!data.date) {
        res.sendStatus(400);
    } else {
        console.log(data);
        db.chatRef.doc(data.date).set(data).then(response => {
            res.sendStatus(200);
        });
    }

});

app.listen(port, () => {
    console.log(`Express connected port ${port}`)
})


