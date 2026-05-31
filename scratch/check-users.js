const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

try {
    const users = db.prepare('SELECT id, email, firstname, lastname FROM admin_users').all();
    console.log(JSON.stringify(users, null, 2));
} catch (err) {
    console.error('Error:', err.message);
} finally {
    db.close();
}
