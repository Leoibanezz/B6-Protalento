const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Veterinaria',
    port: '5432'

});


const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM tables');
    res.status(200).json(response.rows);

};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'user added succesfully',
        body: {
            user: { name, email }
        }

    })

};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE user SET name= $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('User Updated sucessfully');

};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted succesfully`);

};





module.exports = {

    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}