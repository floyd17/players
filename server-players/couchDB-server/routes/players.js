var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const DB_URL = "http://127.0.0.1:5984/players/";
const DB_VIEWS = "_design/view/_view/";

// GET ALL PRODUCTS
router.get('/', (req, res) => {
  axios.get(DB_URL + DB_VIEWS + 'allPlayers')
    .then(function (response) {
      //console.log(response.data.rows);
      res.render('list.ejs', { players: response.data.rows });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
})

// SHOW ADD PRODUCT FORM
router.get('/add', (req, res) => {
  res.render('add.ejs', {});
})

// ADD PRODUCT TO DB
router.post('/add', (req, res) => {
  axios.post(DB_URL, req.body)
  .then(response => res.redirect('/players'))
  .catch(error => console.log(error));
})

// SEARCH FORM
router.get('/search', (req, res) => {
  res.render('search.ejs', {});
})

// FIND A PRODUCT
router.post('/search', (req, res) => {
  //console.log(DB_URL + DB_VIEWS + 'allProducts' + '?key="' + req.body.name + '"');
  axios.get(DB_URL + DB_VIEWS + 'allPlayers' + '?key="' + req.body.name + '"')
    .then(function (response) {
      //console.log(response.data.rows[0]);
      if(response.data.rows[0])
        res.render('search_result.ejs', { players: response.data.rows[0].value });
      else
        res.render('search_not_found.ejs', {})
    })
    .catch(function (error) {
      console.log(error);
    })
})

// DELETE A PRODUCT 
router.post('/delete', (req, res) => {
  //console.log(DB_URL + DB_VIEWS + 'allProducts' + '?key="' + req.body.name + '"');
  axios.get(DB_URL + DB_VIEWS + 'allPlayers' + '?key="' + req.body.name + '"')
  .then(function (response) {
    //console.log(response.data);
    if(response.data.rows[0]) {
      var id = response.data.rows[0].value._id
      var rev = response.data.rows[0].value._rev
      axios.delete(DB_URL + id + '?rev=' + rev).then(response => res.redirect('/') ).catch(error => console.log(error) )
    }
  })
  .catch(function (error) {
    console.log(error);
  })
})

// DELETE A PRODUCT WITHOUT VIEW LOOKUP
/*router.post('/delete', (req, res) => {
  var id = req.body.id
  axios.get(DB_URL + id)
  .then(function (response) {
    axios.delete(DB_URL + id + '?rev=' + response.data._rev).then(response => res.redirect('/')).catch(error => console.log(error))
  })
  .catch(function (error) {
    console.log(error);
  })
})*/

module.exports = router;