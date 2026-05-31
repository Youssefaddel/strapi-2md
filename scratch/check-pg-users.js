const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'strapi2md'
});

async function checkUsers() {
  try {
    await client.connect();
    const res = await client.query('SELECT id, email, firstname, lastname FROM admin_users');
    console.log(JSON.stringify(res.rows, null, 2));
  } catch (err) {
    console.error('Error connecting to PostgreSQL:', err.message);
  } finally {
    await client.end();
  }
}

checkUsers();
