const express = require('express')
const router = express.Router()
const Generic = require('../models/generic')


router.get('/', async(req,res) => {
    try{
           const generic = await Generic.find()
           res.json(generic)
    }catch(err){
        res.send('Error ')
    }
})

router.get('/:id', async(req,res) => {
    try{
           const generic = await Generic.findById(req.params.id)
           res.json(generic)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const generic = new Generic({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await generic.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const generic = await Generic.findById(req.params.id) 
        generic.sub = req.body.sub
        const a1 = await generic.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router