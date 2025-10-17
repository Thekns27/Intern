const db = require('../utils/db');

const all = () => {
    db.query('select * from books', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res.rows);
        }
    });
};

const add = () => {};

const modify = () => {};

const drop = () => {};

module.exports = {
    all,
    add,
    modify,
    drop

}