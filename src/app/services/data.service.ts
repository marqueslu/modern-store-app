import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {
  private serviceUrl = `${environment.API}/v1/customers`;
  private userUrl = `${environment.API}/v1/authenticate`;
  constructor(private http: HttpClient) {}

  createUser(data: any) {
    return this.http.post(this.serviceUrl, data).pipe(take(1));
  }

  authenticate(data: any) {
    const dt = 'grant_type=password&username=' + data.username + '&password=' + data.password;
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<any>(this.userUrl , dt, options).pipe(take(1));
  }
}
