const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log ("in inventory get");
  const queryString = `SELECT * FROM INVENTORY JOIN category ON category.id = category_id JOIN location ON location.id = location_id JOIN status ON status.id = status_id JOIN packaging ON packaging.id = packaging_id;`;
  pool.query(queryString).then((results)=>{
    res.send (results.rows);
  }).catch ((err)=>{
    console.log (err);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */ // POST route code here
router.post('/', (req, res) => {
  console.log("in inventory post");
 const queryString =`INSERT INTO "inventory"(item, category_id, location_id, status_id, packaging_id, notes,user_id ) VALUES ($1, $2, $3, $4, $5, $6, $7 )`;
 values = [req.body.item, req.body.category_id, req.body.location_id, req.body.status_id, req.body.packaging_id, req.body.notes, req.body.user_id ];
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

router.delete ('/:id', (req,res)=>{
  const queryString = 'DELETE FROM inventory WHERE id=$1';
  values = [req.params.id];
  pool.query(queryString.value).then(( results)=>{
    res.sendStatus(200);
  }).catch ((err)=>{
    console.log(err);
   res.sendStatus(500);
  });
});


module.exports = router;
