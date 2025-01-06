const express = require('express')

const router = express.Router();

router
    .route('/:id')
      .get((req,res) => {
        res.send("retrive the id : "+req.params.id);
      })



      router.route('/male/id/:data/jobstatus')
      .get((req,res) => {
          res.send("job status : "+req.params.data);
      })

      
module .exports = router;