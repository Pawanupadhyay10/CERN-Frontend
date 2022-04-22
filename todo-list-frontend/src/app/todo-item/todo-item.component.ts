import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import {Todo} from "../todo.service";

@Component({
  selector: 'app-todo-item',
  template: `
      <div class="task-indicator">
        {{ item.task }}
      </div>
      <div class="priority-indicator" [style.background-color]="color">
        {{ item.priority }}
      </div>
      <div><button (click)="remove(item.id)">Remove</button>
      </div>
  `,
  styleUrls: ['todo-item.component.scss']
})
export class TodoItemComponent {

  list:any=[];
  @Input() item!: Todo;

  get color() {
    switch (this.item.priority) {
      case 1:
        return 'green';
      case 2:
        return 'yellow';
      case 3:
        return 'red';
    }
  }
  remove(id:number){
    this.list=this.list.filter(todo=>todo.id!==id);
  }
}
