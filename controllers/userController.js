import userModel from "../models/user_model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


// login user
const login_user = async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ result: false, message: "kindly register your account" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ result: false, message: "Password mismatch Please given Correct password" })
        }

        const token = createToken(user._id)
        res.json({ result: true, token: token })

    } catch (error) {
        console.log(error)
        res.json({result:false, message: "authentication error"})
    }

}

// Singin user
const registeruser = async (req, res) => {

    const { name, email, password } = req.body
    try {
        const exist = await userModel.findOne({ email })

        if (exist) {
            return res.json({ result: false, message: "user already exist" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ result: false, message: "kindly given valid Email" })
        }

        if (password.length < 8) {
            return res.json({ result: false, message: "kindly given Strong Password" })
        }

        //Password Hasing
        const salt = await bcrypt.genSalt(10)
        const hashedPasword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPasword
        })
        const user = await newUser.save()
        const Token = createToken(user._id)
        res.json({ result: true, token: Token })

    } catch (error) {
        console.log(error)
        res.json({ result: false, message: "user Creation process failed" })
    }
}

export { login_user, registeruser }