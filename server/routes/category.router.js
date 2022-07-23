const express = require('express');
const pool = require('../modules/pool');
const router = express.Router(); 

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM category`;
  pool.query (queryString).then((results)=>{
    res.send (results.rows);
  }).catch ((err)=>{
    console.log (err);
    res.sendStatus(500);
  });
});

// router.put('/', (req,res)=> {
//   const queryString = `UPDATE category SET item WHERE id=$2;`; 
//   const values = [req.query.category_name, req.query.id]; 
//   pool.query( queryString, values).then((results)=>{
//     res.sendStatus(200); 
//   }).catch((err)=>{
//     console.log (err);
//     res.sendStatus(500);
//   });
// });

module.exports = router;