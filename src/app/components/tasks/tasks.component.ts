import { Component } from '@angular/core';
import {Task} from '../../task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
Tasks : Task[] = [];

constructor (private taskservice: TaskService)
{
    this.taskservice.getTask().subscribe((tasks) => {
      this.Tasks = tasks;
    });
}


deleteTask(task: Task)
{
  this.taskservice.deleteTask(task).subscribe(() => {
    this.Tasks = this.Tasks.filter(t => t.id !== task.id)
  });
}

toggleTask(task: Task)
{
   task.reminder = !task.reminder;
   this.taskservice.toggleTaskReminder(task).subscribe();
}

addNewTask(task: Task)
{
  this.taskservice.addTask(task).subscribe((newT1) => {
    this.Tasks.push(newT1);
  })
}

}
