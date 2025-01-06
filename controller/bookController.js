import Books from '../model/bookModel.js'

export const insertBook = async (req,res) => {
    try{
        let bookData = new Books(req.body);
        const {title} =req.body;
        const existBook = await Books.findOne({title});
        if(existBook){
            return res.status(400).json({message:"Book Already exist"});
        }
        const createBook = await bookData.save();
        res.status(200).json({createBook});
    }
    catch(error){
        res.status(500).json({message:"Unable to insert"});
    }
}

export const  updateBook = async (req,res) => {
    try{
        const id = req.params.id;
        const Bookexits = await Books.find({_id:id});
        if(!Bookexits){
            return res.status(400).json({message:"Book Does not exist to Update"});
        }
        const updateBook = await Books.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateBook});
    }
    catch(error){
        res.status(500).json({message:"Unable to Update the Record"});
    }
}

export const deleteBooks = async (req,res) => {
    try{
        const id = req.params.id;
        const idExists = await Books.findOne({_id:id});
        if(!idExists){
            return res.status(400).json({message:"User Id Does Not exists"});
        }
        const delBook = await Books.findByIdAndDelete(id);
        if(!delBook){
            return res.status(400).json({message:"Book not Deleted"});
        }
        res.status(200).json({message:"Book Deleted Sucessfully"});
    }   
    catch(error){
        res.status(500).json({message:"Unable to Delete the record"});
    }
}

export const searchBooks = async(req,res) => {
    try{
        const id = req.params.id;
        const isExist = await Books.findOne({_id:id});
        if(!isExist){
            return res.status(400).json({message:"Book not Found"});
        }
        res.status(200).json({isExist})

    }
    catch(error){
        res.status(500).json({message:"Unable to search"});
    }
}

export const fetchBooks = async (req,res) => {
    try{
        const getBook = await Books.find();
        if(getBook.length===0){
            return res.status(400).json({message:"No Books are Exit"});
        }
        // const title = await getBook.map(({title}) => ({title}))
        let obj = getBook.map((val) =>{
            let title = val.title;
            let author = val.author;
            return {title,author}
        })
        res.status(200).json(obj);
        // let users = await students.find()
        // let obj = users.map((val)=>{
        //     let name = val.name;
        //     let age = val.age;
        //     return {name,age}
        // })
        // res.status(200).json({obj})
        

        
    }
    catch(error){
        res.status(500).json({message:"Unable to Fetch the Book"})
    }
}