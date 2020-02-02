import {Router} from 'express';

const router = Router();

import {createTask, getTask, deleteTask, updateTask, getOneTask, getTaskByProject} from '../controllers/task.controller';

//Routers
router.post('/', createTask);
router.get('/', getTask);

// /api/taks/:id
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/:id', getOneTask);
router.get('/project/:projectid', getTaskByProject);
export default router;