import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHandler, HttpHeaders }    from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IDatabases {
  datname:string
}
export interface IRequest{
  command:string;
  fields:object[];
  rows:object[];

}
const headerOptions={
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
}

export class Database{
  name:string;
  localization:string;
  constructor(name,localization){
    this.name=name;
    this.localization=localization;
  }
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  logger:IRequest;
  constructor(private http:HttpClient) {  }

  sendRequest(sql){
     this.http.post("http://localhost:3000/database/request",{sql:sql.sqlCode},headerOptions).subscribe((data:IRequest)=>this.logger=data);
    return this.logger;
    }
  getLogger():IRequest{
    return this.logger;
  }

  createDatabase(database){
    return this.http.post('http://localhost:3000/database/create',database,headerOptions).subscribe(data=>console.log(data));
  }

  deleteDatabase(database:Database){
      return this.http.post('http://localhost:3000/database/delete',database.name);
  }
  
  createFunction(database:Database,_function){
    return this.http.post("http://localhost:3000/database/function",{database:database.name,func:_function});
  }
  getDatabases():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:3000/database/all');
  }
  getTablesInDatabase(database){
     return this.sendRequest("SELECT table_name from "+database.name+".tables");
  }

  
}
