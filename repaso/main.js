const pg = require('pg');

const pool =new pg.Pool({

host :'localhost',
port:5432,
database: 'dvdrentals',
user:'postgres',
password:'root',
});

pool.query("SELECT * from actor Where first_name = 'Penelope'",(error, results) => {
    if(error) {
        console.error('ocurrioun error');
        console.log(error);
        return;
    } console.log(results.rows);
});