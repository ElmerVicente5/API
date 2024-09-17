import{Router} from 'express';
import {UsuarioController} from '../controllers/usuario.controller.js';

const rourter=Router();


rourter.post('/registrar',UsuarioController.registrar);
rourter.get('/listar',UsuarioController.listar);



export default rourter;