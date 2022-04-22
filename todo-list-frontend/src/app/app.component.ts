import {Component} from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>
        A list of TODOs
      </h1>
    </div>
    <div class="list">
      <label for="search">Search...</label>
      <input id="search" type="text">
      <app-progress-bar></app-progress-bar>
      <app-todo-item *ngFor="let todo of data | async" [item]="todo"></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
data:any;

  constructor(private todoService: TodoService){}
  ngOnInit(){
    this.todoService.getAll().subscribe((res)=>{
         console.log("result",res);
         this.data=res;
    })
  }
}
