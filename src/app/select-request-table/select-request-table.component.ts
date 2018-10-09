import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'select-request-table',
  templateUrl: './select-request-table.component.html',
  styleUrls: ['./select-request-table.component.css']
})
export class SelectRequestTableComponent implements OnInit {

  selectRequest:string[]=[];
  displayedColumns: string[] = ['item', 'cost'];
  transactions: String[] = [
   
  ];
  constructor() { }

  ngOnInit() {
  }
  getData($event){
    this.displayedColumns=$event;
  }
  

}
