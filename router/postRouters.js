const express = require('express'); 
const router = express.Router(); 
const axios = require('axios'); 
const db = require("../db/firebase");

const APIKEYTRANSLATE = "trnsl.1.1.20190928T181413Z.819722b270a742a2.04b31d175c7280e19c153c925e29400224d512da";


// ALL MESSAGES 
router.post("/add-chat", (req, res) => {
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

router.post("/add-chat-test", async (req, res) => {
    let data = req.body;

    if (!data.date) {
        res.sendStatus(400);
    } else {
        const source = data.language.substr(0, 2); 
        
        //Translate to
        let strEN = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEYTRANSLATE}&lang=${source}-en&text=${encodeURIComponent(data.message)}`;
        let strZH = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEYTRANSLATE}&lang=${source}-zh&text=${encodeURIComponent(data.message)}`;
        let strES = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEYTRANSLATE}&lang=${source}-es&text=${encodeURIComponent(data.message)}`;
        let strJA = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEYTRANSLATE}&lang=${source}-ja&text=${encodeURIComponent(data.message)}`;
        let strHI = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEYTRANSLATE}&lang=${source}-hi&text=${encodeURIComponent(data.message)}`;

        axios.get(strEN).then((response) => {
            // English
            data.message = response.data.text[0];
            data.language = "en";
            console.log(data);
            
            return db.chatRefEngish.doc(data.date).set(data)
        })
        .then(() => {
            return axios.get(strZH)
        })
        .then((response) => {
            // Chinese
            data.message = response.data.text[0];
            data.language = "zh";
            console.log(data);

            return db.chatRefChinese.doc(data.date).set(data);
        })
        .then(() => {
            return axios.get(strES)
        })
        .then((response) => {
            // Spanish
            data.message = response.data.text[0];
            data.language = "es";
            console.log(data);

            return db.chatRefSpanish.doc(data.date).set(data);
        })
        .then(() => {
            return axios.get(strJA);
        })
        .then((response) => {
            // Japanese
            data.message = response.data.text[0];
            data.language = "ja";
            console.log(data);

            return db.chatRefJapanese.doc(data.date).set(data);
        })
        .then(() => {
            return axios.get(strHI);
        })
        .then((response) => {
            // Hindi
            data.message = response.data.text[0];
            data.language = "hi";
            console.log(data);
            
            return db.chatRefHindi.doc(data.date).set(data);
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log("There is error", err);
            res.end();
        })
    }
});

module.exports = router;