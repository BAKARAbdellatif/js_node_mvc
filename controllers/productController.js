const productModel = require("../models/productModel");

const productController = {
    add: (req, res) => {
        res.render('product/add');
    },
    create: (req, res) => {
        const { title, price } = req.body;

        const newProduct = productModel.create({ title, price }, (error, result) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log(result);
        });
        console.log(newProduct);
        res.redirect('/products/list');
    },
    list: (req, res) => {
        productModel.getAll((error, products) => {
            if (error) {
                console.error(error);
                return;
            }
            res.render("product/list", { products: products });
        });
    },
    edit: (req, res) => {
        const id = req.params.id;
        productModel.getById(id, (error, product) => {
            if (error) {
                console.error(error);
                return;
            }
            res.render("product/edit", { product: product });
        });
    },
    update: (req, res) => {
        const { id, title, price } = req.body;

        productModel.update(id, title, price, (error) => {
            if (error) {
                console.error(error);
                return;
            }
        });
        res.redirect('/products/list');
    },
    delete: (req, res) => {
        const id = req.params.id;

        productModel.delete(id, (error) => {
            if (error) {
                console.error(error);
                return;
            }
            res.send({ status: "OK" });
        });
    }
}

module.exports = productController;