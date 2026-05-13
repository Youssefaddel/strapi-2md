const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'postgres'
});

async function createDb() {
  try {
    await client.connect();
    await client.query('CREATE DATABASE strapi2md;');
    console.log('Database strapi2md created successfully');
  } catch (err) {
    if (err.code === '42P04') {
      console.log('Database already exists');
    } else {
      console.error('Error creating database:', err);
    }
  } finally {
    await client.end();
  }
}

createDb();
