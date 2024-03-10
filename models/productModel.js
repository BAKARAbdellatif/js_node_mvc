// productModel.js
const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'empsi'
});

const productModel = {
    create: (product, callback) => {
        const { title, price } = product;
        const sql = 'INSERT INTO products (title, price) VALUES (?, ?)';
        connection.query(sql, [title, price], (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            // Renvoyer l'ID du nouvel enregistrement créé
            callback(null, results.insertId);
        });
    },
    getAll: (callback) => {
        const sql = "SELECT * FROM products ORDER BY id ASC";
        connection.query(sql, (error, rows) => {
            if (error) {
                callback(error, null);
                return;
            }
            // Renvoyer l'ID du nouvel enregistrement créé
            callback(null, rows);
        });
    },
    getById: (id, callback) => {
        const sql = "SELECT * FROM products WHERE id=?";
        connection.query(sql, id, (error, row) => {
            if (error) {
                console.error(error);
                return;
            }
            callback(null, row[0]);
        });
    },
    update: (id, title, price, callback) => {
        const sql = "UPDATE products SET title=?, price=? WHERE id=?";
        connection.query(sql, [title, price, id], (error) => {
            if (error) {
                console.error(error);
                return
            }
            callback(null);
        });
    },
    delete: (id, callback) => {
        const sql = "DELETE FROM products WHERE id=?";
        connection.query(sql, id, (error) => {
            if (error) {
                console.error(error);
                return;
            }
            callback(null);
        });
    }
}

module.exports = productModel;
