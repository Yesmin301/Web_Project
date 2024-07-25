const express = require('express');
const router = express.Router();
//const Contact = require('./models/contact')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/adidas-site', (req, res) => {
    res.render('adidas-siteM')
})

router.get('/adidas-siteW', (req, res) => {
    res.render('adidas-siteW')
})

router.get('/Catalog', (req, res) => {
    res.render('Catalog')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})
router.get('/handm-siteM', (req, res) => {
    res.render('handm-siteM')
})
router.get('/handm-siteW', (req, res) => {
    res.render('handm-siteW')
})
router.get('/handm-siteM', (req, res) => {
    res.render('handm-siteM')
})
router.get('/handm-siteM', (req, res) => {
    res.render('handm-siteM')
})
router.get('/handm-siteM', (req, res) => {
    res.render('handm-siteM')
})



module.exports = router;



//UKPbHMCbi4mBUVIs