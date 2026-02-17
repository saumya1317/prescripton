import jwt from 'jsonwebtoken'

// User authentication middleware
const authUser = async (req, res, next) => {
    try {

        const { token } = req.headers

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        // 👇 THIS IS THE FIX 👇
        // If it's a GET request, req.body might not exist. We create an empty object so we can attach the ID.
        if (!req.body) {
            req.body = {}
        }

        req.body.userId = token_decode.id

        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authUser