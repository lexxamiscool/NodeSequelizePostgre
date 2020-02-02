import Task from '../models/tasks';

export async function createTask(req, res){
    const{name, done, projectid} = req.body;
    const newTask = await  Task.create({
        name,
        done,
        projectid
    }, {
        fields:['name', 'done','projectid']
    });
    res.json({message: 'New task created', data: newTask});
}

export async function getTask(req, res){
    const tasks = await Task.findAll({
        attributes: ['id', 'name','done', 'projectid'],
        order: [
            ['id','DESC']
        ]
    });
    res.json({
        data: tasks
    })
}

export async function updateTask(req, res){
    const {id} = req.params;
    const{name, projectid,done} = req.body;

    const updateTask=await Task.findOne({
        attributes:['name', 'projectid', 'done'],
        where:{
            id
        }
    });

     await Task.update({
        name,
        done,
        projectid
    },{
        where:{id}
    }); 
    res.json({
        message: 'Updated task',
        updateTask
    })
}

export async function deleteTask(req, res){
    const {id} = req.params;
    const count = await Task.destroy({
        where:{
            id
        }
    });
    res.json({message: 'Task deleted'});
}

export async function getOneTask(req, res){
   const {id} = req.params; 
    const task = await Task.findOne({
        where:{
            id
        }
    });
    res.json(task); 
}

export async function getTaskByProject(req, res){
    const {projectid} = req.params; 
    const task =  await Task.findAll({
        attributes:['id','name','done', 'projectid'],
        where:{
            projectid
        }
    });

    res.json(task);
}