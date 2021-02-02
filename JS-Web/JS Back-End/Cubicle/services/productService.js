const Cube = require('../Models/Cube')
const Accessory = require('../Models/Accessory')

function createItem(data) {
    let cube = new Cube(data)
    return cube.save()
}

async function getAll(query) {
    let products = await Cube.find({}).lean()

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search))
    }
    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from)
    }
    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to)
    }

    return products
}

function getOne(id) {
    return Cube.findById(id).lean()
}

function getOneWithAccessories(id) {
    return Cube.findById(id)
        .populate('accessories')
        .lean()
}

async function attachAccessory(productId, accessoryId) {
    let product = await Cube.findById(productId)
    let accessory = await Accessory.findById(accessoryId)

    product.accessories.push(accessory)
    return product.save()
}

module.exports = {
    createItem,
    getAll,
    getOne,
    getOneWithAccessories,
    attachAccessory,
}