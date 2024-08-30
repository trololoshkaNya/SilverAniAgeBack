const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/api/base', (req, res) => {
    res.json([
        {
            'url': 'https://www.silver-aniage.ru/66-katsute-mahou-shoujo-to-aku-wa-tekitai-shiteita',
            'poster': 'https://desu.shikimori.one/uploads/poster/animes/57217/008f8a58a8cfda4627a3bb8438e750a0.jpeg',
            'player': '',
            'season': 'false'
        },
        {
            'url': 'https://www.silver-aniage.ru/64-tensei-shitara-slime-datta-ken',
            'player': 'https://kodik.online/serial/58716/RmvG4a6efcac94',
            'player2': 'https://kodik.online/serial/60998/RmvG4aedb3527f',
            'season': 'true'
        },
        {
            'url': 'https://www.silver-aniage.ru/65-Link-Click',
            'poster': 'https://i.mydramalist.com/WP7JlD_4f.jpg',
            'player': 'https://kodik.online/serial/60998/RmvG4aedb3527f',
            'season': 'false'
        },
    ]

    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})