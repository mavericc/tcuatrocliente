import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    return this.verificarAuth();


    //retorna un true o un false
    
  }

  public verificarAuth(): boolean {

    const token = localStorage.getItem('token');

    if(token) {
      return true;
    } else {
      return false;
    }

  }

  constructor() { }
}
