import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  authUser(form:NgForm){
    this.authService.authUser(form.value);
    this.router.navigate(['database'])
  }

  ngOnInit() {
  }

}
