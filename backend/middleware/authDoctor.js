import jwt from 'jsonwebtoken'

// backend/middleware/authDoctor.js
const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        
        // Ensure req.body is initialized to prevent "Cannot set properties of undefined"
        req.body = req.body || {} 
        req.body.docId = token_decode.id 
        
        next()
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor