const router = require('express').Router();
const Livre = require('../entity/Livre');
const cors = require('cors');

const optionsMethodGet = {
    origin: "http://localhost:63342",
    methods: [ 'GET', 'PUT', 'DELETE' ]
};

router.use(cors(optionsMethodGet));

router.get('/livre', async (req, res) => {

    let livres = await Livre.findAll();

    res.json(livres);
});

router.get('/livre/:id', async (req, res) => {

    const livre = await Livre.findByPk(req.params.id);

    if (!livre) {
        res.status(404).json({error: 'Not found'});
        return;
    }

    res.json(livre);
});

router.post('/livre', async (req, res) => {
    try {
        let livre = await Livre.create(req.body);
        res.status(201).json(livre);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
});

router.put('/livre/:id', async (req, res) => {

    if (req.body.id) {
        if (parseInt(req.params.id) !== parseInt(req.body.id)) {
            res.status(400).json({error: 'Les ids doivent correspondre'});
            return;
        }
    }

    await Livre.update(req.body, {where: {id: req.params.id}});

    res.status(204).json();
})
;

router.delete('/livre/:id', async (req, res) => {

    await Livre.destroy({where: {id: req.params.id}});
    res.status(204).json(); // status 200/202/204/404
});

module.exports = router;
