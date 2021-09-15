import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Hao Kiet',
        email: 'admin1@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Admin2',
        email: 'admin2@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users