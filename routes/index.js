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
.get(function(req, res){
  User.find(function(err, users){
    if (err)
      res.send(err)
      res.json({users})
  })
})



// app.use('/api', router)
