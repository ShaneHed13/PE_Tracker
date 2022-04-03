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