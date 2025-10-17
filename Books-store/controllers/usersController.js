const db = require('../utils/db');
const { add } = require('./authorController');

const all = () => {
    db.query('select * from users', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res.rows);
        }
    });
};


const add = (req,res) => {

};

const modify = (req,res) => {

};

const drop = (req,res) => {

};

module.exports = {
    all,
    add,
    modify,
    drop
}
