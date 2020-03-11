const db = require('./connect.js').connect();

db.serialize(() => {
  let create_table = `CREATE TABLE trips
  ( id INTEGER PRIMARY KEY AUTOINCREMENT    
  )`;
  db.run(create_table, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
});



db.close((err) => {
  if (err) {
    console.err(err.message);
  }
  console.log('Database connection closed');
});
