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

// app.use('/api', router)
