const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is get request for client');
});
router.post('/',(req,res)=>{
    res.send('This is post request for client');
});
router.put('/',(req,res)=>{
    res.send(`This is put request for client`);
});

router.delete('/',(req,res)=>{
    res.send(`This is delete request for client`);
});

module.exports = router;