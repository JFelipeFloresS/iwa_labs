const http = require("http"),
    axios = require("axios");

http.createServer((req, res) => {
    //res.write(readJSON());
    res.write(users.join(", ") + "\n" + emails.join(", "));
    res.end();
}).listen(8000);

function readJSON() {
    return JSON.stringify(require('./albums.json'));
}

let users, emails = [];

(async function getNames() {

    try {
        const {
            data
        } = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user => user.name);
        emails = data.map(user => user.email);
    } catch (e) {
        console.log(e);
    }

})()