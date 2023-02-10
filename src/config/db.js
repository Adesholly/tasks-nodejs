import mongoose from "mongoose"
import mysql from "mysql"
import  * as dotenv from "dotenv"



dotenv.config()


// Mongoose Connection
const connectMongoDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(
            `MongoDB Connected: ${conn.connection.host}`
        )
    }
    catch(error) {
        console.log(
            `Error: ${error.message}`
        )
    }
}


//MySQL Connection
const connectMySQL = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})

connectMySQL.getConnection((error, connection) => {
    if(error) throw(error)
    console.log("DB connected successful: " + connection.threadId);
})


export { connectMongoDB, connectMySQL }