import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgForm } from '@angular/forms';
import { RequestLoggerService } from '../request-logger.service';
import { IRequest, DatabaseService } from '../database.service';
@Component({
  selector: 'request-database',
  templateUrl: './request-database.component.html',
  styleUrls: ['./request-database.component.css']
})
export class RequestDatabaseComponent implements OnInit {
  tableStore:object;
  public logger:IRequest;
  constructor(private databaseService:DatabaseService) {
    
   }
  /**
   * query 
   */

  ngOnInit() {
  }
  /**
   * Execute database request server
   * @param form Execute Server
   */
  executeSQL(form:NgForm){
    console.log("executed");
    this.logger=this.databaseService.sendRequest(form.value);
    
  }
  clear(element){
    element.value="";
  }
  
}
