const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
        id: Number,
        // numberOfElders: Number,
        // snacksElder: String,
        // drinksElder: String,
        // totalItemElder: Number,
        // numberOfChild: Number,
        // snacksChildren: String,
        // drinksChildren: String,
        // totalItemChildren: Number,
        // status: String,

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
        orderDateTime :  { type : Date, default: Date.now }

});

const UserSchema = new mongoose.Schema({
       username: String,
       password: String,

});



const OrderModel = mongoose.model("fod", OrderSchema);
const UserModel = mongoose.model("user", UserSchema);
module.exports = {OrderModel, UserModel};



