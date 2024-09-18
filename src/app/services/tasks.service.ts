import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersModel} from "../models/users.model";
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

  createTask(data: any): Observable<any> {
    return new Observable((observer) => {
      console.log("Task :", data)
      console.log(this.http.post(`${this.apiUrl}/task`, data))
      this.http.post(`${this.apiUrl}/task`, data).subscribe((result: any) => {
          console.log("Le résultat de la requête:", result, "et son status:", result.status);
          this.router.navigateByUrl('/home')
          observer.next(result)
          observer.complete()
        }, error => {
          observer.error(error)
          observer.complete()
        }
      )
    })
  }

  fetchTasks(): Observable<TasksModel[]> {
    return this.http.get<TasksModel[]>(this.apiUrl)
  }



  taskProperties : UsersModel =
    {
      label: "Task",
      type: "text",
      placeholder: "Task",
      value: ''
    }
}
