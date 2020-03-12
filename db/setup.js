const db = require('./connect.js').connect();

const seed_data = [
  { name: 'California', start_date: '03-11-2020', return_date: '07-20-2020', transport_mode: 'air' },
  { name: 'Wuhan', start_date: '03-11-2020', return_date: '07-20-2020', transport_mode: 'air' },
  { name: 'Italy', start_date: '03-11-2020', return_date: '07-20-2020', transport_mode: 'air' },
  { name: 'Toronto', start_date: '03-11-2020', return_date: '07-20-2020', transport_mode: 'air' },
  { name: 'Philadelphia', start_date: '03-11-2020', return_date: '07-20-2020', transport_mode: 'air' },
  { name: 'Bora Bora', start_date: '03-11-2020', return_date: '07-20-2020', transport_mode: 'air' },
];

db.serialize(() => {
  let drop_table = `DROP TABLE IF EXISTS trips`;
  db.run(drop_table, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
  let create_table = `CREATE TABLE trips
  ( id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    start_date TEXT,
    return_date TEXT,
    transport_mode VARCHAR(50)
  )`;
  db.run(create_table, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  let statement = db.prepare(`INSERT INTO trips(name,start_date,return_date,transport_mode) VALUES (?,?,?,?)`);

  for (let d of seed_data) {
    console.log("Values:",d.name,d.start_date,d.return_date,d.transport_mode);
    statement.run(d.name,d.start_date,d.return_date,d.transport_mode);
  }

  statement.finalize();

});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database connection closed');
});
