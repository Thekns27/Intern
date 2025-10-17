exports.up = (db) => {
     db.createTable('authors', {
          id: 'id',
          name: { type: 'varchar(200)', notNull: true },
          bio: { type: 'varchar(200)' , notNull: true },
          age: { type: 'integer', notNull: true , default: 18},
          createdAt: {
               type: 'timestamp',
               notNull: true,
               default: db.func('current_timestamp'),
          },
          updatedAt: {
               type: 'timestamp',
               notNull: true,
               default: db.func('current_timestamp'),
          },
     });
};
exports.down = (pgm) => { };