var express = require('express');
var router = express.Router();


var saveMention = function(val){
  const { MongoClient } = require('mongodb');
  const uri = "mongodb+srv://test:test@cluster0.d2fdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("shopData").collection("mentions");

    var mention = {_id : val.changes[0].value.comment_id, data: {media_id : val.changes[0].value.media_id, time: val.time, sent:{}}};
    collection.insertOne(mention)
    .then(result => {
      console.log(result);
      client.close();
    },result => {
      console.log(result);
      client.close();
    })
    .catch(error => console.error(error));
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joel Loyalty' });
});

router.get('/webhooks', function(req, res, next){
  var a = req.query;
  res.json(parseInt(a["hub.challenge"],10));
})

router.post('/webhooks', function(req, res, next){
  if(req.body.entry[0].changes[0].field === 'mentions'){
    saveMention(req.body.entry[0]);
  }else if(req.body.entry[0].changes[0].field === 'messages'){

  }
})

router.post('/facebook-identification',function(req,res,next){
  
})

module.exports = router;//test