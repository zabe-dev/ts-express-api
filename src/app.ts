import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, { message: string }>('/', (req, res) => {
	res.json({
		message: 'There is nothing to see here.',
	});
});

export default app;
