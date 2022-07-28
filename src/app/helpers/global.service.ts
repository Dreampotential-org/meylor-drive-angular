import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  createButtonSubject = new Subject();

  constructor(private httpClient: HttpClient) { }

  fetchIpAdress(): Promise<string> {
    return new Promise((resolve) => {
      this.httpClient.get<{ip:string}>('https://jsonip.com')
      .subscribe((data: {ip:string}) => {
        resolve(data.ip);
      },
      err => {
        resolve('-');
      });
    });
  }
}
