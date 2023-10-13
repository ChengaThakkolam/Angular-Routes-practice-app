import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { promises } from "dns";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{

    constructor(private authService:AuthService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{
        let isLoggedIn=this.authService.isAuthenticated();

        if(isLoggedIn){
            return true;
        }
        else{
            this.router.navigate(['/page-not-found']);
            return false;
        }
        
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let isLoggedIn=this.authService.isAuthenticated();

        if(isLoggedIn){
            return true;
        }
        else{
            this.router.navigate(['/page-not-found']);
            return false;
        }
    }



}