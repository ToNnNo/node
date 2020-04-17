const router = require('express').Router();
const Livre = require('../entity/Livre');

router.get('/livre/add', async (req, res) => {

    // insert into
    /*Livre.create( { titre: "Harry Potter à l'école des sorciers", parution: new Date('1997-06-26')} );
    Livre.create( { titre: "Harry Potter et la chambre des secrets", parution: new Date('1998-07-02')} );
    Livre.create( { titre: "Harry Potter et le Prisonnier d'Azkaban", parution: new Date('1999-10-19')} );

    res.redirect('/livre');*/

    res.render('livre/edit.html');

});

router.post('/livre/add', async (req, res) => {

    Livre.create( req.body );

    res.redirect('/livre');
});

router.get('/livre', async (req, res) => {

    let livres = await Livre.findAll();

    res.render('livre/index.html', { livres });
});

router.get('/livre/:id', async (req, res) => {

    // const livre = await Livre.findByPk(req.params.id);
    const livre = await Livre.findOne({
        attributes: ['id', 'titre', 'resume', 'parution'],
        where: { id: req.params.id }
    });

    res.json(livre);
});

module.exports = router;
