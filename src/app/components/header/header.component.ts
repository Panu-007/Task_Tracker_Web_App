import { Component } from '@angular/core';
import { UiServiceService } from '../../services/ui-service.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
   title: String = 'Task-Tracker-App';
   showAddTask : boolean = false;
   subscription : Subscription;

  constructor( private uiService:UiServiceService, private router:Router)
  { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }
  
  toggleAddTask(){
      this.uiService.toggleAddTask();  
  }

  hasRoute(route: string)
  {
    return this.router.url === route;
  }
}
