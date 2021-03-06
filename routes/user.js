var express = require('express');
var router = express.Router()
var User = require('../models/User.js');

router.use(function(req, res, next){
  console.log(req.url, "this users route")
  next()
})


router.route('/')

.post(function(req, res){
  var user = new User()
  user.name = req.body.name

  user.save(function(err){
    if (err) res.send(err)
      res.json({message: 'User created!'})
  })
})

.get(function(req, res){
  User.find({}, function(err, users){
    if (err) res.send(err)
    res.json(users)
  })
})

router.route('/:id')
  .get(function(req, res){
    User.findById(req.params.user_id, function(err, user){
      if (err) res.send(err)
      res.json(user)
    })
  })
  .put(function(req, res){
    User.findById(req.params.user_id, function(err, user){
      if (err) res.send(err)

      user.name = req.body.name

      user.save(function(err){
        if (err) res.send(err)
        res.json({message: 'User updated!'})
      })
    })
  })
  .delete(function(req, res){
    User.remove({_id: req.params.user_id}, function(err, user){
      if (err) res.send(err)
      res.json({message: 'Successfully deleted'})
    })
  })




module.exports = router

// app.use('/api', router)
