import express from 'express';
import userRoutes from './routes/user.route';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
