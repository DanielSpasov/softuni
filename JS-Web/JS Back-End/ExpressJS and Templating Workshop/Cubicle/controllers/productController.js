const { Router } = require('express')
const router = Router()

const productService = require('../services/productService')
const accessoryService = require('../services/accessoryService')


router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then(products => {
            res.render('home', { title: 'Home', products })
        })
        .catch(() => res.status(500).end())
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})

router.post('/create', (req, res) => {
    productService.createItem(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())

})

router.get('/details/:productId', async (req, res) => {
    let product = await productService.getOneWithAccessories(req.params.productId)
    res.render('details', { title: 'Details', product })
})

router.get('/:productId/attach', async (req, res) => {
    let product = await productService.getOne(req.params.productId)
    let accessories = await accessoryService.getAllUnattached(product.accessories)
    res.render('attachAccessory', { title: 'Attach accessory', product, accessories })
})

router.post('/:productId/attach', (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
})


module.exports = router