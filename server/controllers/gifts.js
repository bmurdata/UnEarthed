// Perform CRUD operations

import { pool } from "../config/database.js";

const getGifts=async(req,res)=>{
    try{
        const queryGifts=`SELECT * FROM gifts;`
        const dbResults =await pool.query(queryGifts)
        console.log(`Number of items returned: ${dbResults.rows.length}`)

        res.status(200).json(dbResults.rows)


    }
    catch(err){
        console.error('Error with CRUD ops for pulling data',err)
        res.status(409).json({error:err.message})
    }
}
const getGiftsById=async(req,res)=>{
    try{
        console.log('Getting gift: '+req.params.giftId)
        const giftId=req.params.giftId
        const selectQuery=`
        SELECT name,pricePoint,audience,image,description,submittedBy,submittedOn 
        FROM gifts 
        WHERE id=${giftId}`
        
        // Get the first result
        const results= await pool.query(selectQuery)
        console.log(results.rows[0])
        res.status(200).json(results.rows[0])


    }
    catch(error){
        console.log(error)
        res.status(409).json( { error: error.message} )

    }
}
export default {
    getGifts, getGiftsById
}