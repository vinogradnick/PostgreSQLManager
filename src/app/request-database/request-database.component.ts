import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { RequestLoggerService } from '../request-logger.service';
@Component({
  selector: 'request-database',
  templateUrl: './request-database.component.html',
  styleUrls: ['./request-database.component.css']
})
export class RequestDatabaseComponent implements OnInit {

  constructor(private requestLogger:RequestLoggerService,private databaseService:DatabaseService) { }
  @Output() queryResult= new EventEmitter<string[]>();

  ngOnInit() {
  }
  executeSQL(form:NgForm){
    console.log(form.value);
    this.databaseService.sendRequest(form.value);
  }
  clear(element){
    element.value="";
  }

}
