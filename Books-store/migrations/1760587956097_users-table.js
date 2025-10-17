
exports.up = (pgm) => {
     pgm.createTable('users', {
          id: 'id',
          name: { type: 'varchar(150)', notNull: true },
          email: { type: 'varchar(150)', notNull: true },
          password: { type: 'varchar(150)' , notNull: true },
          gender: { type: "varchar(100)" , notNull: true },
          createdAt: {
               type: 'timestamp',
               notNull: true,
               default: pgm.func('current_timestamp'),
          },
          updatedAt: {
               type: 'timestamp',
               notNull: true,
               default: pgm.func('current_timestamp'),
          },
     });
};
exports.down = (pgm) => { };
