import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
    
  // --------------------------------------------------------------------------------
  // Constructor
  constructor() { }


  // --------------------------------------------------------------------------------
  // Methods

  // ------------------------- signOut --------------------------
  /**
   * function signOut :
   */
  signOut(): void {
    window.sessionStorage.clear();
  }

  // ------------------------- saveToken --------------------------
  /**
   * function saveToken :
   * @param token 
   */
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // ------------------------- getToken --------------------------
  /**
   * function getToken :
   * @returns window.sessionStorage.getItem(TOKEN_KEY);
   */
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  // ------------------------- saveUser --------------------------
  /**
   * function saveUser :
   * @param user 
   */
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // ------------------------- getUser --------------------------
  /**
   * function getUser :
   * @returns JSON.parse(user);
   */
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}