import {Component} from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable} from "rxjs";
import { LoadingHandler } from './progress-bar/loading-handler';

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
      <app-progress-bar *ngIf="loadingHandler.isLoading$ | async"></app-progress-bar>
      <app-todo-item *ngFor="let todo of todos$ | async" [item]="todo"></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  loadingHandler= new LoadingHandler();

  readonly todos$: Observable<Todo[]>;

  constructor(todoService: TodoService) {
    this.loadingHandler.start();
    this.todos$ = todoService.getAll();
    this.loadingHandler.finish();
  }
}
