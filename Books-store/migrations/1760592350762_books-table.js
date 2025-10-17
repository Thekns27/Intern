
exports.up = (pgm) => {
 pgm.createTable('books', {
          id: 'id',
          title: { type: 'varchar(200)', notNull: true },
          description: { type: 'varchar(200)', notNull: true },
          authorId: {
               type: 'integer',
               notNull: true,
               references: '"authors"',
               onDelete: 'CASCADE',
          },
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
