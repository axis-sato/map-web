import { Router } from 'express'

import users from './users'
import markers from './markers'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(markers)

export default router
