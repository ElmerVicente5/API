import {db} from '../database/conexion.database.js';

const crearUsuario=async(nombres,appellidos,email,password,pais,genero,terminos)=>{
    const query={
        text:`
            INSERT INTO FORMULARIO(NOMBRES,APELLIDOS,EMAIL,PASSWORD,PAIS,GENERO,TERMINOS)
            VALUES($1,$2,$3,$4,$5,$6,$7)
            RETURNING *
        `,
        values:[nombres,appellidos,email,password,pais,genero,terminos]
    }
    const {rows}=await db.query(query);
    return rows;

}


const buscarUsuarioPorEmail=async(email)=>{
    const query={
        text:`
            SELECT * FROM FORMULARIO WHERE EMAIL=$1
        `,
        values:[email]
    }
    const {rows}=await db.query(query);
    return rows;
}

const ObtenerUsuarios=async()=>{
    const query={
        text:`
            SELECT * FROM FORMULARIO
        `
    }
    const {rows}=await db.query(query);
    return rows;
}

export const UsuarioModel={
    crearUsuario,
    buscarUsuarioPorEmail,
    ObtenerUsuarios
}