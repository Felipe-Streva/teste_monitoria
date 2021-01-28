const sqlite = require('sqlite3');

const db = new sqlite.Database('./src/database/database.db')

process.on('SIGINT', () =>
	db.close(() => {
		console.log('DB finished');
		process.exit(0);
	})
);

module.exports = db