const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  //console.log ('in inventory get req.query.:', req.query );
  //console.log ('in inventory get req.body.:', req.body );
  //console.log ('in inventory get req.params.:', req.query );
  const queryString = `SELECT * FROM INVENTORY JOIN category ON category_id = category.id JOIN location ON location_id = location.id JOIN status ON status_id = status.id JOIN packaging ON packaging_id = packaging.id;`;
  pool.query ( queryString ).then((results)=>{
    res.send (results.rows);
  }).catch ((err)=>{
    console.log (err);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */ // POST route code here
router.post('/add', (req, res) => {
  console.log("in inventory post", req.body);
 const queryString =`INSERT INTO "inventory"(item, category_id, location_id, status_id, packaging_id, notes,user_id ) VALUES ($1, $2, $3, $4, $5, $6, $7 )`;
 const values = [req.body.item, req.body.category_id, req.body.location_id, req.body.status_id, req.body.packaging_id, req.body.notes, req.body.user_id ];
pool.query (queryString, values).then ((results)=>{
  res.sendStatus (200);
}).catch((err)=>{
  console.log (err);
  res.sendStatus(500);
});
});

router.put('/update', (req,res)=> {
  console.log ("in inventory put", req.body );
  const queryString = `UPDATE "inventory" SET item = $1, category_id =$2, location_id = $3, status_id = $4, packaging_id = $5, notes = $6, user_id = $7 WHERE id = $8`;
  const values = [req.body.item, req.body.category_id, req.body.location_id, req.body.status_id, req.body.packaging_id, req.body.notes, req.body.user_id, req.body.id];
  pool.query(queryString, values).then((results)=>{
    res.sendStatus(200);
  }).catch((err)=>{
    console.log (err);
    res.sendStatus(500);
  });
});
//req.body.id

router.delete ('/delete', (req,res)=>{
  console.log ('in inventory delete', req.query)
  const queryString = `DELETE FROM inventory WHERE id =$1;`;
  const values = [req.query.id];
  pool.query(queryString, values).then((results)=>{
    res.sendStatus(200); 
  }).catch ((err)=>{
    console.log(err);
   res.sendStatus(500);
  });
});


module.exports = router;
