exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string("username", 12).notNullable().unique().index();
        tbl.string("password", 24).notNullable()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('users')
  };