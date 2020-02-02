import express, {json} from 'express';

import morgan from "morgan";

//Importing routes

import projectRoutes from './routers/projects';
import taskRoutes from './routers/task';

const app = express(); 

//Middelware
app.use(morgan('dev'));

app.use(json());

//Routes

app.use('/api/projects',projectRoutes);

app.use('/api/tasks',taskRoutes);

export default app;