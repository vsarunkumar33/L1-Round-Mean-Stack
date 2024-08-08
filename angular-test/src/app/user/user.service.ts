import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/create-user'

  constructor(private httpClient: HttpClient) { }

  createUser(data: any) {
    return this.httpClient.post(this.apiUrl, data)
  }
}
