import Router from 'koa-router'
import { b } from '../api/b'

const router = new Router()

router.get('/b', b)

module.exports = router