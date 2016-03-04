var router = express.Router()

router.use(function(req, res, next){
  console.log('Route is happening.')
})

router.get('/', function(req, res){
  res.json({message: 'Yay, welcome to our API!'})
})
