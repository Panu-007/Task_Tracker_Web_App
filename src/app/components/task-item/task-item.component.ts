import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../task'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task : Task = {
    text: '',
    day: '',
    reminder: false
  };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter<Task>();

  faTime = faTimes;

  constructor() {}

  onDelete(task: Task)
  {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task)
  {
    this.onToggleTask.emit(task);
  }

  
}
