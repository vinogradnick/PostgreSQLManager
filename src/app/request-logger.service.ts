import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

class Table{
  columns:string[];
  transactions:string[];
  constructor( columns:string[], transactions:string[]){
    this.columns=columns;
    this.transactions=transactions;
  }
}

class Database{
  name:string;
  tables:Table[];
  constructor(name,tables:Table[]){
    this.name=name;
    this.tables=tables;
  }
  addTable(table:Table){
    this.tables.push(table);
  }
}


@Injectable({
  providedIn: 'root'
})
export class RequestLoggerService {
  databases:Database[];

  constructor(private databaseService:DatabaseService) { }
}
