import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DatabaseService, IDatabases } from '../database.service';
import { map, filter, scan } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'create-database',
  templateUrl: './create-database.component.html',
  styleUrls: ['./create-database.component.css']
})
export class CreateDatabaseComponent implements OnInit {

  displayedColumns: string[] = ['name', 'code'];
  data: string[] = ['pg_catalog', 'kolhoz'];
  selection=new SelectionModel<string[]>(true,[]);
  store: IDatabases[];
  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.database.createDatabase(form.value));
    setTimeout(()=>{
      this.update();
    },3000);
  }
  constructor(private database:DatabaseService) { }

  ngOnInit() {
   this.update();

  }
  update(){
    this.database.getDatabases().subscribe(databases=>this.data=databases);
  }

}
