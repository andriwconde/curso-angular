import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

productos1=[
"mercedes",
"bmw",
"audi",
"renault"
]

productos=[
  {
    id:1,
    name:"bmw",
    price:5000,
  },
  {
    id:2,
    name:"audi",
    price:7000,
  },
  {
    id:3,
    name:"renault",
    price:3000,
  }
]

  title="bindeo one way binding"
modificado=false
  constructor() {

   }

   filtrar(){
     this.productos1=["mercedes"]
   }
   changeTitle(){
    this.title="hola andres"
    this.modificado=true
   }
   cantidad = 0
   divClasscss = ""
   sumar(){
    this.cantidad++
    if(this.cantidad>0){
      this.divClasscss = "positivo"
    }else if(this.cantidad === 0){
      this.divClasscss = "cero"
    }else{
      this.divClasscss = "negativo"
    }
   }
   restar(){
    this.cantidad--
    if(this.cantidad>0){
      this.divClasscss = "positivo"
    }else if(this.cantidad === 0){
      this.divClasscss = "cero"
    }else{
      this.divClasscss = "negativo"
    }
   }
  ngOnInit(): void {
  }

}
