import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.formulario = this.form.group({
      nome: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required]],
      senha: ['', Validators.required]
    })
  }

  onSubmit(){

  }

}
