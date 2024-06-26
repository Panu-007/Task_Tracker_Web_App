import { Component, Output , EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { UiServiceService } from '../../services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  text:string = '';
  day:string = '';
  reminder: boolean = false;
  showAddTask : boolean = false;
  subscription : Subscription;


  constructor( private uiService:UiServiceService)
  { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  onSubmit()
  {
     if(!this.text)
     {
       alert("Please enter your task!");
       return;
     }

     const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
     }

     this.onAddTask.emit(newTask);

     this.text ='';
     this.day ='';
     this.reminder = false;
  }

}
