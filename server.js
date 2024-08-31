const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

app.get('/api/base', cors(corsOptions), (req, res) => {
    res.json(
        {
            "blocklist": [
                {
                    'url': 'https://www.silver-aniage.ru/66-katsute-mahou-shoujo-to-aku-wa-tekitai-shiteita',
                    'poster': 'https://i.postimg.cc/Zq7r8zV0/volsh-ofi.png',
                    'player': '',
                    'season': 'false'
                },
                {
                    'url': 'https://www.silver-aniage.ru/64-tensei-shitara-slime-datta-ken',
                    'player': 'https://kodik.online/serial/58716/RmvG4a6efcac94',
                    'player2': 'https://kodik.online/serial/60998/RmvG4aedb3527f',
                    'poster': 'https://desu.shikimori.one/uploads/poster/animes/37430/2dd416dc513bcf4cbdd74ae64fab1255.jpeg',
                    'season': 'true'
                },
                {
                    'url': 'https://www.silver-aniage.ru/65-Link-Click',
                    'poster': 'https://i.mydramalist.com/WP7JlD_4f.jpg',
                    'player': 'https://kodik.online/serial/60998/RmvG4aedb3527f',
                    'season': 'false'
                },
                {
                    'url': 'https://www.silver-aniage.ru/55-tokidoki-bosotto-russia',
                    'poster': 'https://i.postimg.cc/ZRX5mwKw/alya-neshakal-ii.png',
                    'player': 'https://kodik.online/serial/60230/RmvG4a06a93578',
                    'season': 'false'
                }
            ]
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})