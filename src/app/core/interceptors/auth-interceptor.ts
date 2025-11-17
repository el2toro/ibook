import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, switchMap, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string | null>(null);

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;

    const token = this.auth.token;
    if (token) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(authReq).pipe(
      catchError(err => {
        if (err.status === 401 && !this.isRefreshing) {
          this.isRefreshing = true;

          return this.auth.refreshToken().pipe(
            switchMap(newToken => {
              this.isRefreshing = false;

              return next.handle(
                req.clone({
                  headers: req.headers.set('Authorization', `Bearer ${this.auth.token}`)
                })
              );
            })
          );
        }

        return throwError(() => err);
      })
    );
  }
}
