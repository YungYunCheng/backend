import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

// routers
import uomPartRouter from './router/master/uomPartRouter.js';
import errorRouter from './router/error.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/master/uom', uomPartRouter);
app.use(errorRouter);

app.listen(8080, () => {
  console.log('Listening on http://localhost:8080 ');
});
