import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWish('Bearer')) 
    {
        console.log('token found');
    }

    if(!token) {
        res.status(401)
    }
    next()
}

export { protect }