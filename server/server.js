const path = require('path')
const fs = require('fs');
let chirpArray = [{
    "Chirper1": "This chirp number 1!",
    "Chirper2": "This chirp number 2!",
    "Chirper3": "This chirp number 3!",
    "Chirper4": "This chirp number 4!",
    "Chirper5": "This chirp number 5!"
}]

let chirpyPath = path.join(__dirname, '../chirps.json');

fs.rename("../chirps.json", JSON.stringify(chirpArray), function (err) {
    if (err) {
        console.log(err)
    }
}
)

fs.readFile(chirpyPath, {
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data);
})
