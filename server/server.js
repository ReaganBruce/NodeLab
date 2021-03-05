const path = require('path')
const fs = require('fs');
let chirpArray = [
    {
        username: "Reagan",
        message: "yay!!"
    },
    {
        username: "Reagan",
        message: "yay!!"
    },
    {
        username: "Reagan",
        message: "yay!!"
    },
    {
        username: "Reagan",
        message: "yay!!"
    },
    {
        username: "Reagan",
        message: "yay!!"
    }

]

let chirpyPath = path.join(__dirname, '../chirps.json');

fs.writeFile(chirpyPath, JSON.stringify(chirpArray), function (err) {
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
