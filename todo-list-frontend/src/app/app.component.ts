import {Component} from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable} from "rxjs";
import { Pipe, PipeTransform } from '@angular/core';
import { FilterpipePipe } from './pipes/filterpipe.pipe';

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
      <input id="search" type="text" ng-model="searchText"/>
      <app-progress-bar></app-progress-bar>
      <app-todo-item *ngFor="let todo of todos$ | async | filterpipe:searchText" [item]="todo">{{todo.task}}</app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  searchText: any;
  readonly todos$: Observable<Todo[]>;

  constructor(todoService: TodoService) {
    this.todos$ = todoService.getAll();
  }
  
}
