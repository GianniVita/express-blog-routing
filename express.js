const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Example my blog is listening on http://localhost:${PORT} `);
    
})

const blog = [
    {
        titolo: "Ciambellone",
        contenuto: "Buonissimo",
        immagine: "/img/ciambellone.jpeg",
        tags: ["dolce", "colazione", "semplice"],
    },
    {
        titolo: "Cracker di Barbabietola",
        contenuto: "Ma cosa sto guardando",
        immagine: "/img/cracker_barbabietola.jpeg",
        tags: ["snack", "salato", "veloce"],
    },
    {
        titolo: "Pane Fritto Dolce",
        contenuto: "Ci ho ripensato, da NON provare",
        immagine: "/img/pane_fritto_dolce.jpeg",
        tags: ["dolce", "merenda", "tradizione"],
    },
    {
        titolo: "Pasta alla Barbabietola",
        contenuto:
            "Sembra quel tipico piatto da ristorante a 5 stelle che lo provi e sa di legno",
        immagine: "/img/pasta_barbabietola.jpeg",
        tags: ["pasta", "vegetariano", "veloce"],
    },
    {
        titolo: "Torta Paesana",
        contenuto: "Immagini IA tipo:",
        immagine: "/img/torta_paesana.jpeg",
        tags: ["dolce", "rustico", "tradizione"],
    },
];



app.get('/' , (req, res) => {
    res.send('Hello Boolean!')
})

app.get('/product/', (req, res) => {
    console.log(req.params.id);
    
})

app.get('/product/:id', (req, res) => {
    console.log(req.params.id);

})





