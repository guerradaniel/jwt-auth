import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user: FormGroup){
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true)
    })
  }

  createAccount(account: any){
    return new Promise((resolve) => {
      resolve(true)
    })
  }

}
