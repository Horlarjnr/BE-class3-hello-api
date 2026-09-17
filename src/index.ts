import express from 'express';
import userRoutes from './routes/user.route';
import cors from 'cors';
import { corsOptions } from './config/cors.config';
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
