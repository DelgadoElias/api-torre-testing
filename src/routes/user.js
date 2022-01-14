const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const { Experience } = require('../db.js');
const getApiInfo = require('../utils/functions/getApiInfo.js');
const getApiSkills = require('../utils/functions/getApiSkills.js');
const getMyData = require('../utils/functions/getMyData.js');
const router = Router();

// -------------------------------------------------------------
router.get('/', async(req, res, next) => {

    const { id } = req.query

    try {
        const instancias = await getApiInfo(id)
        console.log('Im here');
        res.send(instancias);
    } catch (e) {
        next(e);
    }

})

router.get('/skills', async(req, res, next) => {

    const { id } = req.query

    try {
        const instancias = await getApiSkills(id)
        console.log('Im here');
        res.send(instancias);
    } catch (e) {
        next(e);
    }

})

router.post('/userEx', async(req, res, next) => {

    const { id } = req.query
    const { category, 
        name, 
        organization, 
        fMonth, 
        fYear, 
        tMonth, 
        tYear, 
        addInfo, 
        responsabilities } = req.body

    try {
        const instancias = await getApiInfo(id)

        const creating = await Experience.create({
            id : uuidv4(),
            publicId : instancias.publicId,
            category,
            name,
            organization,
            fMonth,
            fYear,
            tMonth,
            tYear,
            addInfo,
            responsabilities
            

        })

        res.send(creating);
    } catch (e) {
        next(e);
    }

})

router.get('/userEx', async(req,res,next) => {
    const { id } = req.query
    
    try {

        if(!id){
            const instance = await getMyData()
            res.send(instance)
        }else{
            const instance = await getMyData(id)
            res.send(instance)
            
        }

    } catch (e) {
        next(e)
    }
})
// -------------------------------------------------------------
module.exports = router