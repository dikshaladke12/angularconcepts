import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList : any[] = [];
  constructor(private http: HttpClient){

  }
  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any)=>{
      this.userList = result
    })
  }
}
