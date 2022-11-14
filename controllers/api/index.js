const router = require('express').Router();

const blogPostRoutes = require('./blog-post-routes');
const userRoutes = require('./user-routes')

router.use('/blogpost', blogPostRoutes)
router.use('/user', userRoutes)

module.exports = router;