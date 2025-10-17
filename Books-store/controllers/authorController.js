// app.get('/authors', async (req, res) => {
//      const client = await database.connectDatabase();
//      const authors = await client.query('select * from authors');
//      res.json({con:true,msg:"All authors", data:authors.rows});
// });
const authors = [];
//const db = require('../utils/db');

const all = ()=> {
    db.query('select * from authors', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res.rows);
        }
    });
};
const add = ()=> {};
const modify = ()=> {};
const drop = ()=> {};


module.exports = {
    all,
    add,
    modify,
    drop
}