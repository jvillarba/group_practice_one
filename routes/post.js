///////////  posts routes ///////////

var router = express.Router()

router.use(function(req, res, next){
  console.log('Route is happening.')
})

router.get('/', function(req, res){
  res.json({message: 'Yay, welcome to our API!'})
})

router.route('/users')

.post(function(req, res){
  var user = new User()
  user.name = req.body.name

  user.save(function(err){
    if (err)
      res.send(err)
      res.json({message: 'User created!'})
  })
})
router.route('/users')

.get(function(req, res){
  User.find(function(err, users){
    if (err)
      res.send(err)
      res.json({users})
  })
})
router.route('/users/:user_id')

.get(function(req, res){
  User.findById(req.params.user_id, function(err, user){
    if (err)
      res.send(err)
    res.json(user)
  })
})

router.route('/users/user_id')

.put(function(req, res){
  User.findById(req.params.user_id, function(err, user){
    if (err)
      res.send(err)

    user.name = req.body.name

    user.save(function(err){
      if (err)
        res.send(err)
      res.json({message: 'User updated!'})
    })
  })
})

router.route('/users/:user_id')

.delete(function(req, res){
  User.remove({_id: req.params.user_id}, function(err, user){
    if (err)
      res.send(err)
    res.json({message: 'Successfully deleted'})
    })
  })

module.exports = router
