const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {OrderModel, UserModel, LoginModel, RegisterDataModel} = require('./models/foodorderdata')


const app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp')
mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp');

app.get('/', (req, res) => {
    console.log('mydata',req.body)
    OrderModel.find({})
    // UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createOrder", (req, res) => {
    console.log('mydata',req.body)
    OrderModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// app.get('/getUser/:id', (req, res) => {
//         const id = req.params.id;
//         UserModel.findById({_id:id})
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })


// app.put('/updateUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndUpdate({_id:id}, {
//         name: req.body.name, 
//         email: req.body.email,
//         age: req.body.age})
//   .then(users => res.json(users))
//   .catch(err => res.json(err))
// })


// app.delete('/deleteUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndDelete({_id: id})
//   .then(res => res.json(res))
//   .catch(err => res.json(err))
// })



app.post("/createUser", (req, res) => {
    console.log('mydata',req.body)
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.post("/createLogin", (req, res) => {
    console.log('mydata',req.body)
    LoginModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// cg
app.get('/registerData', (req, res) => {
    RegisterDataModel.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: err.message }));
});
// app.post("/createRegisterData", (req, res) => {
//     console.log('mydata',req.body)
//     RegisterDataModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })
app.post("/createRegisterData", async (req, res) => {
    try {
        const existingUser = await RegisterDataModel.findOne({ email: req.body.email });
        if (existingUser) {
            // Email already exists, return an error response
            return res.status(409).json({ message: "Email already exists" });
        } else {
            // Email doesn't exist, create a new registration entry
            const newUser = await RegisterDataModel.create(req.body);
            return res.status(201).json(newUser);
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Login Endpoint
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await RegisterDataModel.findOne({ email, password });
//         if (user) {
//             // User is authenticated, return success response
//             return res.status(200).json({ isAuthenticated: true });
//         } else {
//             // Unauthorized user, return error response
//             return res.status(401).json({ isAuthenticated: false, message: "Unauthorized user" });
//         }
//     } catch (error) {
//         // Handle any errors
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await RegisterDataModel.findOne({ email, password });
        if (user) {
            // User is authenticated, return success response
            return res.status(200).json({ isAuthenticated: true });
        } else {
            // Unauthorized user, return specific error response
            return res.status(401).json({ isAuthenticated: false, message: "Invalid email or password" });
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});



// UN & PASSWORD verification
// app.post('/https://jsonplaceholder.typicode.com/login', (req, res) => {
//     const { email, password } = req.body;

//     if (email === 'admin' && password === 'secret') {
//         const token = 
//         jwt.sign({email} , secretKey, {expiresIn: '1h'});

//         res.cookie('jwt', token, {httpOnly: true, maxAge: 3600000});
//         res.json({isAuthenticated: true , message: 'Login successful'});
//     }
//     else{
//         res.status(401)
//         .json({isAuthenticated: false, error: 'Invalid credentials'});
//     }
// });




// app.put("/updateStatus/:id", (req, res) => {
//     console.log('mydata',req.body)
//     const id = req.params.id;
//     OrderModel.findByIdAndUpdate({_id:id}, {
//         status: req.body.orderStatus})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

app.put('/updateStatus/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body.status)
    OrderModel.findByIdAndUpdate({_id:id}, {
        status: req.body.status})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.listen(3000, () => {
    console.log("server is running")
})