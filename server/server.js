import express from "express"
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"
import paginate from 'express-paginate';
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
	res.send("<h1>Welcome </h1>")
})
//pagination
router.get('/', paginate.middleware(5, 50), async (req, res) => {
	try {
		const [results, itemCount] = await Promise.all([
			MyModel.find({})
				.sort({ created_at: -1 })
				.limit(req.query.limit)
				.skip(req.skip)
				.lean()
				.exec(),
			MyModel.countDocuments({})
		]);

		const pageCount = Math.ceil(itemCount / req.query.limit);
		res.render('index', {
			results,
			pageCount,
			itemCount,
			pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});
//Listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`.bgCyan.white);

})

