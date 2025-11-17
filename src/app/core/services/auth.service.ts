import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string | null = null;

  constructor(private http: HttpClient) {}

  /** Called after user logs in */
  login(credentials: { email: string; password: string }) {
    return this.http.post<{ accessToken: string }>(
      '/api/auth/login',
      credentials,
      { withCredentials: true }
    ).pipe(
      tap(res => {
        this.accessToken = res.accessToken;
      })
    );
  }

  /** Expose token only inside Angular app */
  get token(): string | null {
    return this.accessToken;
  }

  /** Check if logged in */
  isLoggedIn(): boolean {
    return false // !!this.accessToken;
  }

  /** Refresh token using HttpOnly cookie */
  refreshToken() {
    return this.http.post<{ accessToken: string }>(
      '/api/auth/refresh',
      {},
      { withCredentials: true }
    ).pipe(
      tap(res => {
        this.accessToken = res.accessToken;
      })
    );
  }

  /** Logout */
  logout() {
    return this.http.post('/api/auth/logout', {}, { withCredentials: true })
      .pipe(tap(() => this.accessToken = null));
  }
}
