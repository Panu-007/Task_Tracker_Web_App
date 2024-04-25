import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Task} from '../task';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }


  getTask():  Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task : Task) : Observable<Task[]>
  {
     const url = `${this.apiURL}/${task.id}`;
     return this.http.delete<Task[]>(url);
  }

  toggleTaskReminder(task : Task) : Observable<Task[]>
  {
     const url = `${this.apiURL}/${task.id}`;
     return this.http.put<Task[]>(url, task, httpOptions);
  }

  addTask(task : Task) : Observable<Task>
  {
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}

