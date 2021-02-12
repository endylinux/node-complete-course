const path = require('path');
const Product = require('../models/product_old');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/shop',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true,
        });
    });
};



