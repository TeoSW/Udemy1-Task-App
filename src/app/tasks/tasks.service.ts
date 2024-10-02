import { Injectable } from '@angular/core';
import { NewTaskData, Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  tasks: Task[] = [];

  
  constructor(){
    const tasks = localStorage.getItem('tasks');
    //? store a task with the word 'tasks' in the browser storage

    if (tasks) {
      this.tasks = JSON.parse(tasks);
      //? converts string to array
    }
  }
  getUserTasks(userId: string){
    return this.tasks.filter( (task) =>  task.userId === userId );
    //? filter() e de la JS si filtreaza pt task-urile care apartin userului, DUPA O FUNTIE
    //? arrow function-ul verifica daca userId e egal cu Id-ul de la @Input
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    //? push the new task in the dummyTasks array
      this.saveTasks();
    }

    removeTask(id: string){
      this.tasks = this.tasks.filter( (task) => task.id !== id);
      this.saveTasks();
    }

    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}
