var router = express.Router();

/* 
Passing the request for the site default starting page (root or '/' ) 
over to the new main controller 
*/
const ctrlMain = require('../controllers/meals');

/* GET home page. */
router.get('/', ctrlMain.meals);

module.exports = router;
