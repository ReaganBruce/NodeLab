const rp = require('request-promise');
const fs = require('fs');
const path = require('path');



rp('https://www.reddit.com/r/popular.json')
    .then(articles => {
        JSON.parse(articles).data.children.forEach(article => {
            const exitFile = path.extname(article.data.url)
            if (exitFile == ".jpg" || exitFile == ".gif" || exitFile == ".png") {
                const articlePath = path.join(__dirname, `downloads/${article.data.id}${exitFile}`);
                let requestImg = {
                    uri: article.data.url,
                    encoding: 'base64'
                }

                rp(requestImg)
                    .then((image) => {
                        fs.writeFile(articlePath, image, 'base64', function (err) {
                            if (err) {
                                console.log(err)
                            }
                        })

                    }).catch(err => {
                        console.log(err);
                    })
            }



        })






    }).catch(err => {
        console.log(err);
    })








