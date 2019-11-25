import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionInversoGuard implements CanActivate{
  constructor(private login: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.login.isLogado().pipe(
      tap(estaLogado => {
        if (estaLogado) {
          this.router.navigate(['']);
        }
      })
    );
  }
}
