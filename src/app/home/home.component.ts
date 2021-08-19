import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any=[]
  productosPromise:any=[]
  productosPipe:any

  constructor(private productosService:ProductosService) {
    //pipe
    this.productosPipe = this.productosService.getAll()
    //observable
    this.productos = this.productosService.getAll()
    .subscribe(data=>{
      console.log("data",data)
      this.productos = data
    })
    //promise
    this.getProductos()
   }

   async getProductos(){
     this.productosPromise = await this.productosService.getAllPromise()
    }
  ngOnInit(): void {
  }

}
