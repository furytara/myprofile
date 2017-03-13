module.exports = function(express, app) {
    var router = express.Router();
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Welcome to my profile' });
    })

    app.use('/', router);
}