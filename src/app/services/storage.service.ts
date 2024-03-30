import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorageKey = 'token';

  constructor(
    private router: Router
  ) { }

  loginUser(token: string): void {
    localStorage.setItem(this.localStorageKey, token);
  }

  logoutUser(): void {
    localStorage.removeItem(this.localStorageKey);
    this.router.navigate(["vendeur/connexion"])
  }

  getCurrentUserId(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUserId();
  }
}
