var { Pool } = require('pg');

const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres@localhost:5432/lukaweb';
const SSL = process.env.NODE_ENV === 'production';

class Database {
    constructor() {

    }

    query() {

    }
    end () {

    }
}

module.exports = new Database();
