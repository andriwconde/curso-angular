import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  cantidad:Number = 0
    constructor(
      private fb:FormBuilder
    ) { 
      this.myForm = this.fb.group({
        name:["",[Validators.required]],
        email:["",[Validators.required]],
        password:["",[Validators.required, Validators.minLength(6)]]
      })
    }
    registrarse(){
      console.log(this.myForm.value)
    }
  ngOnInit(): void {
  }

}
