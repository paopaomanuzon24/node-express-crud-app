const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

const loadTasks = () => {
    try{
        if(!fs.existsSync(filePath)){
            return[];
        }
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }catch(err){
        console.error("Error loading tasks.json", err.message);
        return[];
    }

};



const saveTasks = (tasks) => {
    try{
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } catch(err){
        console.error("Error saving tasks.json", err.message);
        throw err;
    }
    
};

module.exports = { loadTasks, saveTasks };