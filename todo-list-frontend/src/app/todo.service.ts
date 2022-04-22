import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";
import {HttpClient} from '@angular/common/http'

export interface Todo {
  id: number;
  task: string;
  priority: 1 | 2 | 3;
}

let mockData: Todo[] = [
  { id: 0, task: 'Implement loading - frontend only', priority: 1 },
  { id: 1, task: 'Implement search - frontend only', priority: 2 },
  { id: 2, task: 'Implement delete on click - frontend only', priority: 1 },
  { id: 3, task: 'Replace mock service by integrating backend', priority: 3 },
];

function removeFromMockData(id: number) {
  mockData = mockData.filter(todo => todo.id !== id);
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url="http://localhost:8099/api"
   
  constructor(private http:HttpClient){}

  getAll() {
    return this.http.get(this.url);
  }

  remove(id: number): Observable<void> {
    return new Observable<void>(observer => {
      setTimeout(() => {
        if (Math.random() < .8) {
          removeFromMockData(id);
          observer.next();
        } else {
          observer.error('Failed');
        }
        observer.complete();
      }, 2_000)
    })
  }
}
