import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private locationStrategy: LocationStrategy,
        ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }

    preventBackButton() {
        history.pushState(null, null, location.href);
        this.locationStrategy.onPopState(() => {
            history.pushState(null, null, location.href);
        })
    }
}
