import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
    let token = this.authService.getAccessTokenFromLocalStorage();
    if (token == null) {
      this.router.navigate(['/login']);
      return false;
    }

    let decoded: any = jwt_decode(token)
    console.log(decoded)
    console.log(decoded.roles)
    if (decoded.roles.includes(route.data['role'][0])) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
  
}
