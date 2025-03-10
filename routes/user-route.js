const express = require('express')
const router = express.Router();

router.post('/review', (req,res,next)=>{

    console.log('Hi codecamp !!');
}
)

module.exports = router;