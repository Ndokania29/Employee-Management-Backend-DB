// This file is used to create a connection to the database using mysql2 package
import mysql from "mysql2/promise";
const db=await mysql.createConnection({// create a connection to the database , await is used to wait for the connection to be established
    host:"localhost",
    user:"root",
    password:"Nivesh29@08",
    database:"emp_db" // specify the database name
});
export default db; // export the db connection so that it can be used in other files