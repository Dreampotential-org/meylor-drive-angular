import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCall(url: string) {
    return this.httpClient.get(environment.baseUrl + url);
  }

  postCall(url: string, params = {}) {
    return this.httpClient.post(environment.baseUrl + url, params);
  }
  
  putCall(url: string, params = {}) {
    return this.httpClient.put(environment.baseUrl + url, params);
  }
  
  deleteCall(url: string) {
    return this.httpClient.delete(environment.baseUrl + url);
  }
}
