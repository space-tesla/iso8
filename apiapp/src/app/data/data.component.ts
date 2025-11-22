import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  users$: Observable<any>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
