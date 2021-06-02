import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: '',
      email: '',
      senha: ''
    })
  }

  onSubmit(){
    
  }

}
