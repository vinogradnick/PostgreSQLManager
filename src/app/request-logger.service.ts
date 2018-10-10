import { Injectable } from '@angular/core';
import { DatabaseService, IRequest } from './database.service';

class Table{
  columns:string[];
  transactions:string[];
  constructor( columns:string[], transactions:string[]){
    this.columns=columns;
    this.transactions=transactions;
  }
}
/**
 * @class Базы данных
 */
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

  constructor(private databaseService:DatabaseService) { }
  /**
   * Пользовательский запрос на сервер
   * @param userRequest UserStatus Request
   */
  requestServer(userRequest){
    this.databaseService.sendRequest(userRequest);
  }
  getLoggerToClient():IRequest{
    return this.databaseService.getLogger();
  }
}
