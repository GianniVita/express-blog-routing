const express = require('express')
const app = express()
const PORT = 3000
const postRouter = require('./routes/posts')

app.listen(PORT, () => {
    console.log(`Example my blog is listening on http://localhost:${PORT} `);
    
})

const articles = [
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

// //root
// app.get('/', (req,res) => {
//     res.send('Welcome to my Blog')
// })


// // Index
// app.get('/articles' , (req, res) => {
//     res.send('Hello Boolean Blog!')
//  })

// //show
// app.get('api/articles/:id', (req, res) => {
//   res.send('Dettagli del Blod' + req.params.id);
// })

// //store
// app.post('api/articles', (req, res) => {
//      res.send('Creazione nuovo articolo' + req.params.id);
// });


// //update
// app.put('api/articles/:id', (req, res) => {
//   res.send('Modifica integrale degli articoli' + req.params.id);
// });

//  //modify
// app.patch('api/articles/:id', (req,res) => {
//     res.send('Modifica parziale degli articoli' + res.params.id);
//  });

//  //destroy
//  app.delete('api/articles/:id', (req, res) => {
//     res.send('Eliminazione degli articoli' + res.params.id);
// })

app.use('/posts', postRouter)