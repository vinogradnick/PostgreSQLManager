import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'database-tools',
  templateUrl: './database-tools.component.html',
  styleUrls: ['./database-tools.component.css'],
  providers:[DatabaseService]
})
export class DatabaseToolsComponent implements OnInit {

  constructor(private database:DatabaseService) { }

  ngOnInit() {
  }

}
