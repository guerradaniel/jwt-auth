import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup


  constructor(
    private account: AccountService,
    private router: Router,
    private form: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.formulario = this.form.group({
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required]
    })
  }

  async onSubmit(){
    try{
      const login = this.formulario.value
      const result = await this.account.login(login)
      console.log(`Login efetuado: ${result}`)
      this.router.navigate([''])

    } catch(error){
        console.log(`erro: ${error}`)
    }
  }

}
