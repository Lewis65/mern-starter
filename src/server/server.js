import express from 'express';
import path from 'path';

import userRouter from './routes/userRouter';

const app = express();
const PORT = 3000;
const publicPath = path.resolve(__dirname, '..', '..', 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})