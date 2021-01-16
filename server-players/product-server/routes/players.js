var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db; 


MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, database) => {
  if (err) return console.log(err)
  db = database.db('players')

  /* GET ALL PLAYERS */
  router.get('/', (req, res) => {
    db.collection('details').find().toArray((err, result) => {
      if (err) return
      res.render('list.ejs', { players: result })
    })
  })

  /* SHOW ADD PLAYER FORM */ 
  router.get('/add', (req, res) => {
    res.render('add.ejs', {})
  })

  /* ADD PLAYER TO DB */
  router.post('/add', (req, res) => {
    db.collection('details').insertOne(req.body, (err, result) => {
      if (err) return
      res.redirect('/players')
    })
  })

  /* SEARCH FORM */
  router.get('/search', (req, res) => {
    res.render('search.ejs', {})
  })

  /* FIND A PLAYER */
  router.post('/search', (req, res) => {
  var query = { name: req.body.name }
  db.collection('details').findOne(query, (err, result) => {
    if (err) return
    if (result == '')
        res.render('search_not_found.ejs', {})
    else
        res.render('search_result.ejs', { players: result })
  });
  })

  /* DELETE A PLAYER */

  router.delete('/delete/:name', (req, res) => {
    db.collection('details').findOneAndDelete({ name: req.params.name })
  })
})

module.exports = router;
