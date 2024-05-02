const mongoose = require ('mongoose');


// const OrderSchema = new mongoose.Schema({
//         id: Number,
//         numberOfElders: Number,
//         submittedElderValues: Number,
//         // pizzaCount: Number,
//         // burgerCount: Number,
//         // chatCount: Number,
//         // coffeCount: Number,
//         // teaCount: Number,
//         // coolDrinkCount: Number,
//         numberOfChild: Number,
//         submittedChildrenValues: Number,
//         // pizzaCount1: Number,
//         // burgerCount1: Number,
//         // chatCount1: Number,
//         // coffeCount1: Number,
//         // teaCount1: Number,
//         // coolDrinkCount1: Number,
//         status: String,
//         orderDateTime :  { type : Date, default: Date.now }

// });


//29/4
// const ElderSchema = new mongoose.Schema({
//   dropdownValue: String,
//   incrementValue: Number
// });

// // Define a schema for child values
// const ChildSchema = new mongoose.Schema({
//   dropdownValue: String,
//   incrementValue: Number
// });

// // Define the main order schema
// const OrderSchema = new mongoose.Schema({
//   id: Number,
//   selectedElderCount: Number,
//   selectedChildrenCount: Number,
//   elders: [ElderSchema], // Array of elder values
//   children: [ChildSchema], // Array of child values
//   status: String,
//   orderDateTime :  { type : Date, default: Date.now },
// });

const OrderSchema = new mongoose.Schema({
  elder: {
     selectedElder: Number,
    tableData: [{ option: String, count: Number }]
  },
  children: {
    selectedChildren: Number,
    childrenTableData: [{ option: String, count: Number }]
  },
  status: String,
  orderDateTime :  { type : Date, default: Date.now },
  
});

const UserSchema = new mongoose.Schema({
       username: String,
       password: String,

});

const LoginSchema = new mongoose.Schema({
       email: String,
       password: String,

});
const RegisterDataSchema= new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        confirmpassword: String,
});



const OrderModel = mongoose.model("fod", OrderSchema);
// const CombinedDataModel = mongoose.model("CombinedData", CombinedDataSchema);
const UserModel = mongoose.model("user", UserSchema);
const LoginModel = mongoose.model("login", LoginSchema);
const RegisterDataModel = mongoose.model("registerdata", RegisterDataSchema);
module.exports = {OrderModel, UserModel, LoginModel, RegisterDataModel };



