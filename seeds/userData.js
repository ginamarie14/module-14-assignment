const { User } = require('../models');

const userData = [
    {
        "username": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345"
    },
    {
        "username": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345"
    },
    {
        "username": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
    },
    {
        "username": "Riko",
        "email": "riko2k20@hotmail.com",
        "password": "password12345"
    },
    {
        "username": "Johnny",
        "email": "johnny123@aol.com",
        "password": "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;