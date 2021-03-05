const rp = require('request-promise');
const fs = require('fs');
const path = require('path')

let articlePath = path.join(__dirname, "popular-articles.json")

rp('https://www.reddit.com/r/popular.json')
    .then(body => {
        JSON.parse(body).data.children.forEach(item => {
            bodyArray = [];
            bodyArray.push({
                title: item.data.title,
                url: item.data.url, 
                author: item.data.author 
            });
            console.log(bodyArray)
            fs.appendFileSync(articlePath, JSON.stringify(bodyArray))
        })
            
        //writeFile requires callback and writeFileSync does not
    })
    .catch(err => {
        console.log(err);
    })













