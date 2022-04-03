const express = require('express');
const path = requre('path');
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABSE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', async(req, res) => {
    
        try {
            const client - await pool.connect();
    
            client.release();
        }
        catch (err) {
            sonsole.error(err);
            res.sent("Error " + err);
            
        }
})

.listen(PORT, () => console.log('Listening on ${ PORT }'));

