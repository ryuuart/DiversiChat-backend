const axios = require('axios'); 
const APIKEY = "trnsl.1.1.20190928T181413Z.819722b270a742a2.04b31d175c7280e19c153c925e29400224d512da";

let translate = (source, target, data) => {
    let string = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEY}&lang=${source}-${target}&text=${data.message}`;
    console.log(string)
    axios.get(string).then((response) => {
        let newData = data; 
        newData.message = response.data.text[0];
        return newData;
    }).catch(err => {
        console.log("There is error");
    })
}

module.exports = {translate}