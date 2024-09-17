import {UsuarioModel} from '../models/usuario.model.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

//api/usuario/registrar
const registrar=async(req,res)=>{

    //validar los datos recibidos
    await body('nombres').notEmpty().isString().run(req);
    await body('apellidos').notEmpty().isString().run(req);
    await body('email').notEmpty().isEmail().run(req);
    await body('password').notEmpty().isString().run(req);
    await body('pais').notEmpty().isString().run(req);
    await body('genero').notEmpty().isString().run(req);
    await body('terminos').notEmpty().isBoolean().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.body);
        const {nombres,apellidos,email,password,pais,genero,terminos}=req.body;


        //busca el correo en la BD
        const usuario=await UsuarioModel.buscarUsuarioPorEmail(email);
        //si el correo ya está registrado
        if(usuario.length>0){
            //alert("El correo ya está registrado, por favor ingrese otro correo");
            return res.status(400).json({message:"El correo ya está registrado"});
        }
        // Hashear la contraseña
        const saltRounds = 10; // Número de rondas para generar la sal
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const nuevoUsuario=await UsuarioModel.crearUsuario(nombres,apellidos,email,hashedPassword,pais,genero,terminos);
        
        //res.status(201).json(usuario);
        return res.status(201).json({message:"Usuario creado"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
}

const listar=async(req,res)=>{
    try {
        const usuarios=await UsuarioModel.ObtenerUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
}

export const UsuarioController={
    registrar,
    listar

}