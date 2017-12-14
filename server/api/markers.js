import { Router } from 'express'

const router = Router()

// Mock Users
const markers = [
  { label: '渋谷駅', position: { lat: 35.658034, lng: 139.701636 } },
  { label: '代官山駅', position: { lat: 35.648092, lng: 139.703148 } }
]

/* GET markers listing. */
router.get('/markers', function (req, res, next) {
  res.json(markers)
})

/* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < users.length) {
//     res.json(users[id])
//   } else {
//     res.sendStatus(404)
//   }
// })

export default router
