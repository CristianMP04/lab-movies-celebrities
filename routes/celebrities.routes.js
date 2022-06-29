const router = require("express").Router();


const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

// all your routes here


router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity.hbs");
});

router.post("celebrities/create", (req, res, next) => {
    const {name, occupation, catchPhrase } = req.params;
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch(error => res.redirect('celebrities/new-celebrity'));
  });

  
  router.get("/celebrities/celebrities", (req, res) => {
          Celebrity
          .find()
          .then(celebrityFromApi => {
                  console.log(celebrityFromApi)
                res.render("../views/celebrities/celebrities.hbs", { celebrityFromApi });
              })
              .catch(error => console.log(error));
            });
            
          module.exports = router;