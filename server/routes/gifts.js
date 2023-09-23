import express from 'express'
import path from 'path'


import { fileURLToPath } from 'url'
// Import data from DB
import GiftsControler from '../controllers/gifts.js'
// Import data from local file
//import giftData from '../data/giftsData.js'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
// Setup routes for the gift endpoint

const giftRouter=express.Router()
giftRouter.get('/',GiftsControler.getGifts)
// Gifts for local file
// giftRouter.get('/',(req,res)=> {
//     res.status(200).json(giftData)
// })
giftRouter.get('/:giftId',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default giftRouter