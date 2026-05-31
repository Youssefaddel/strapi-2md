const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

const newPassword = 'Strapi123!';

async function resetPassword() {
    try {
        const hash = await bcrypt.hash(newPassword, 10);
        const result = db.prepare('UPDATE admin_users SET password = ? WHERE email = ?').run(hash, 'youssefaddel.h@gmail.com');
        
        if (result.changes > 0) {
            console.log('Password reset successfully for youssefaddel.h@gmail.com');
            console.log('New password is:', newPassword);
        } else {
            console.log('User not found.');
        }
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        db.close();
    }
}

resetPassword();
