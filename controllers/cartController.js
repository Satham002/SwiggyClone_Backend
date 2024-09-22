import userModel from '../models/user_model.js'


const removeCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId })
        let cartData = await userData.cartData;
    } catch (error) {

    }
}

const addToCart = async (req, res) => {

}

const getCart = async (req, res) => {

}

export { removeCart, addToCart, getCart }