import express from 'express'
import { deleteUser, fetch, searchUser } from '../controller/userController.js'
import { createUser } from '../controller/userController.js';
import { updateUser } from '../controller/userController.js';

const route = express.Router();

route.get('/fetch',fetch);
route.post('/createuser',createUser);
route.put('/updateuser/:id',updateUser);
route.get('/searchuser/:id',searchUser);
route.delete('/deleteuser/:id',deleteUser);

export default route;