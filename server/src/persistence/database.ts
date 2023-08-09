import pg from 'pg';

const testConnection = async () => {
    const db = new pg.Client({
        user: 'node_chat',
        password: 'dev',
        database: 'node_chat',
    });

    try {
        await db.connect();
        await db.query('SELECT $1::text as message', ['Test Query']);
    } catch (err) {
        throw err;
    } finally {
        db.end();
    }
}

export default { testConnection };

