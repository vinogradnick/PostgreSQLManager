import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerOptions={
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  authUser(user){
   return this.http.post('localhost:3000',{user:user},headerOptions).subscribe(data=>console.log(data));
  }
}
