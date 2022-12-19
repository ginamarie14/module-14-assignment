const { User } = require('../models');

const userData = [
    {
        "name": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345"
    },
    {
        "name": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
    },
    {
        "name": "Riko",
        "email": "riko2k20@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Johnny",
        "email": "johnny123@aol.com",
        "password": "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;