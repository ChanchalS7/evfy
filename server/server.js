import express from "express"
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'

//Configure env
dotenv.config();
//Database config
connectDB();
//REST OBJ
const app = express();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.use('/api/v1/auth', authRoutes)
//rest api
app.get('/', (req, res) => {
	res.send("<h1>Welcome to Login-Signup API</h1>")
})

//Listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`.bgCyan.white);

})

