import User from '../model/userModel.js'

export const createUser = async (req,res) => {
    try{
        let userData = new User(req.body);
        const {email} = userData;
        
        
        const userExist =  await User.findOne({email});

        if(userExist){
            return res.status(400).json({message:"User Already Exist"})
        }
        const savedUser = await userData.save();
        console.log(savedUser);
        res.status(200).json({savedUser});
    }
    catch(error){
        res.status(500).json({error:"user Creation Failed"})
    }
}

export const updateUser = async (req,res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"No User Exist"})
        }
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updatedUser});
    }
    catch(error){
        res.status(500).json({error:"Unable to Update the User"});
    }
}

export const searchUser = async (req,res) => {
    try{
        const id = req.params.id;
        const foundUser = await User.findOne({_id:id});
        if(!foundUser){
            return res.status(400).json({message:"User Does Not Exit"});
        }
        res.status(200).json({foundUser});
    }
    catch(error){
        res.status(500).json({message:"Unable to search the data"});
    }
}

export const deleteUser = async (req,res) => {
    try{
        const {id }= req.params;
        const foundUser2 = await User.find({_id:id});
        if(!foundUser2){
            return res.status(400).json({message:"User Not Exist"});
        }
        const deleted = await User.findByIdAndDelete(id);
        if(!deleted){
            return res.status(400).json({message:"Does not Deleted"});
        }
        res.status(200).json({message:"User Deleted Successfully"});
    }
    catch(error){
        res.status(500).json({message:"Unable to Delete"});
    }
}

export const fetch = async (req,res) => {
    try{
        const users = await User.find();                
        if(users.length===0){
            return res.status(404).json({message:"No User Found"})
        }
        //const userNamesAndEmails = users.map(({ name,  email, location }) => ({ name, email ,location}));
        res.status(200).json({users})
        
    }
    catch(error){
        res.status(500).json({error:"Internal Server Error"});
    }
}

// export default fetch;




















// const express = require('express')

// const router = express.Router();

// router.get('/', (req,res) => {
//     res.send("User Information")
// })

// router.get('/newuser', (req,res) => {
//     res.send("New User Added")
// })

// router.get('/updateuser', (req,res) => {
//     res.send("User Udated")
// })

// router.get('/deleteuser', (req,res) => {
//     res.send("User Deleted")
// })

// router
//     .route('/:id')
//       .get((req,res) => {
//         res.send("retrive the id : "+req.params.id);
//       })
//       .put((req,res) => {
//         res.send("update the id : "+req.params.id);
//       })
//       .delete((req,res) => {
//         res.send("retrive the id : "+req.params.id);
//       })

// let data;
// router.route('/male/id/:val/')
//   .get((req,res) => {
//     data=req.params.val;
//     res.send("gender : " +req.params.val);
//   })


// router.route('/male/id/:data/jobstatus')
//     .get((req,res) => {
//         res.send("job status : "+req.params.data);
//     })




// module .exports = router;