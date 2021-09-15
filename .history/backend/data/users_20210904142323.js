import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Hao Kiet',
        email: 'haokiet25@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kiet Le',
        email: 'kietle@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users