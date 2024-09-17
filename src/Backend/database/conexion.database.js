import 'dotenv/config';
import pg from 'pg';

const { Pool} = pg;

const connectionString = process.env.DATABASE_URL;
export const db= new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL,
});

try{
    await db.query('SELECT NOW()');
    console.log('Conexión exitosa a la base de datos');

}catch(error){
console.log('Error al conectar a la base de datos', error);
}