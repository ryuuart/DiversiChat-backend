const express = require('express'); 
const router = express.Router(); 
const db = require("../db/firebase");

router.get("/", (req, res) => {
    res.send("Hellow world from haha"); 
});


// ALL MESSAGES 
router.get("/messages", (req, res) => {
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

// ENGLISH
router.get("/messages-en", (req, res) => {
    let messages = [];
    db.chatRefEngish.orderBy("date").get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.statusStatus(400);
    })
})

// SPANISH 
router.get("/messages-es", (req, res) => {
    let messages = [];
    db.chatRefSpanish.orderBy("date").get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.statusStatus(400);
    })
})

// CHINESE
router.get("/messages-zh", (req, res) => {
    let messages = [];
    db.chatRefChinese.orderBy("date").get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.statusStatus(400);
    })
})

// JAPANESE
router.get("/messages-ja", (req, res) => {
    let messages = [];
    db.chatRefJapanese.orderBy("date").get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.statusStatus(400);
    })
})

// HINDI
router.get("/messages-hi", (req, res) => {
    let messages = [];
    db.chatRefHindi.orderBy("date").get().then(snapshot => {
        snapshot.forEach(doc => {
            messages.push(doc.data());
        });
        res.json(messages);
    }).catch(e => {
        console.log(e); 
        res.statusStatus(400);
    })
})

module.exports = router;