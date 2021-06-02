import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');

    if (token) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }
}

/**
 * Este guard analisa se o localStorage possui token. Se sim ele retorna true para acessar
 * a rota. Senão, o mesmo não é direcionado e volta para a tela de login. 
 * 
 */

