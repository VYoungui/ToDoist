import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getItem(key: string) {
    try {
      return JSON.parse(sessionStorage.getItem(key) || '{}');

    } catch (error: any) {
      console.log(error);
    }
  }

  setItem(key: string, value: string | any) {
    try {
      console.log(key, value);
      return sessionStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  }

  removeItem(key: string) {
    try {
      return sessionStorage.removeItem(key);
    } catch (error) {
      console.log(error);

    }
  }

  clearEntireSession() {
    sessionStorage.clear();
  }


}
