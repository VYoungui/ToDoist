import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InputFieldModel} from "../models/input-field.model";
import {environment} from "../environment/environment";
import {TasksModel} from "../models/tasks.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl = environment.apiUrl + `/task`
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  createTask(data: TasksModel): Observable<any> {
    return this.http.post(this.apiUrl, data)
  }

  fetchTasks(): Observable<TasksModel[]> {
    return this.http.get<TasksModel[]>(this.apiUrl)
  }



  taskProperties : InputFieldModel =
    {
      label: "Task",
      type: "text",
      placeholder: "Task",
      value: ''
    }
}
