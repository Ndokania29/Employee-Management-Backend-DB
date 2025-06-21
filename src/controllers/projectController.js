import db from '../db.js';
import { v4 as uuidv4 } from 'uuid';

//create project
export const createProject = async(req, res)=> {
    const{ name, department_id } = req.body; // Destructure the request body to get project details taken by user
    const id = uuidv4(); // Generate a new UUID for the project ID it will be automatically generated 
    try{
        await db.execute(
            'INSERT INTO projects (id, name,department_id) VALUES(?,?,?)',
            [id,name,department_id]
        );
        res.status(201).json({id,name,department_id});
    }catch (err){
        console.error('Error creating projects:', err); 
        res.status(500).json({error:'Failed to create a project'});
    }
};
//Get all the projects
export const getProjects =async(req,res) =>{
    try{
        const[rows] =await db.execute(`SELECT projects.*,departments.name AS department_name
            FROM projects
            LEFT JOIN departments ON projects.department_id=departments.id`
        );
        res.json(rows);
    }catch(err){
         console.error('Error fetching projects:', err); 
        res.status(500).json({error:'failed to fetch the projects data'});
    }
};