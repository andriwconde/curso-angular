import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title="bindeo one way binding"
modificado=false
  constructor() {

   }
   changeTitle(){
    this.title="hola andres"
    this.modificado=true
   }

  ngOnInit(): void {
  }

}
