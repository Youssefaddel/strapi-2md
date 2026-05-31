const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'template1'
});

async function listDbs() {
  try {
    await client.connect();
    const res = await client.query('SELECT datname FROM pg_database');
    console.log(JSON.stringify(res.rows, null, 2));
  } catch (err) {
    console.error('Error listing databases:', err.message);
  } finally {
    await client.end();
  }
}

listDbs();
