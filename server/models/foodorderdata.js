const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
        id: Number,
        numberOfElders: Number,
        pizzaCount: Number,
        burgerCount: Number,
        chatCount: Number,
        coffeCount: Number,
        teaCount: Number,
        coolDrinkCount: Number,
        numberOfChild: Number,
        pizzaCount1: Number,
        burgerCount1: Number,
        chatCount1: Number,
        coffeCount1: Number,
        teaCount1: Number,
        coolDrinkCount1: Number,
        status: String,
        orderDateTime :  { type : Date, default: Date.now }

});

const UserSchema = new mongoose.Schema({
       username: String,
       password: String,

});

const LoginSchema = new mongoose.Schema({
       email: String,
       password: String,

});
const RegisterDataSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        confirmpassword: String,
});



const OrderModel = mongoose.model("fod", OrderSchema);
const UserModel = mongoose.model("user", UserSchema);
const LoginModel = mongoose.model("login", LoginSchema);
const RegisterDataModel = mongoose.model("registerdata", RegisterDataSchema);
module.exports = {OrderModel, UserModel, LoginModel, RegisterDataModel };



