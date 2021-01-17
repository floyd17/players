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
      res.json(result)
    })
  })

  /* SHOW ADD PLAYER FORM */ 
  router.get('/add', (req, res) => {
    res.json(result)
  })

  /* ADD PLAYER TO DB */
  router.post('/add', (req, res) => {
    db.collection('details').insertOne(req.body, (err, result) => {
   
    })
  })



  /* FIND A PLAYER */
  router.post('/search', (req, res) => {
  var query = { name: req.body.name }
  db.collection('details').findOne(query, (err, result) => {
    if (err) return
    res.json(result)
  });
  })

  /* DELETE A PLAYER */

  router.delete('/delete/:name', (req, res) => {
    db.collection('details').findOneAndDelete({ name: req.params.name })
  })

  /* EDIT A PRODUCT */
router.post('/edit', (req, res) => {
  db.collection('details').replaceOne({ name: req.body.name }, req.body)
})
})

module.exports = router;
