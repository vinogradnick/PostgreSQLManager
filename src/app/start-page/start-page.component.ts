import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private router:Router) { }
  authUser(form:NgForm){
    this.router.navigate(['database'])
  }

  ngOnInit() {
  }

}
