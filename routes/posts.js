const express = require('express')
const router = express.Router();

// Index
router.get('/', (req, res) => {
    res.send('Hello Boolean Blog!')
})

//show
router.get('/:id', (req, res) => {
    res.send('Dettagli del Blod' + req.params.id);

})

//store
router.post('/', (req, res) => {
    res.send('Creazione nuovo articolo' + req.params.id);
});


//update
router.put('/:id', (req, res) => {
    res.send('Modifica integrale degli articoli' + req.params.id);
});

//modify
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale degli articoli' + res.params.id);
});

//destroy
router.delete('/:id', (req, res) => {
    res.send('Eliminazione degli articoli' + res.params.id);
})


module.express = router;