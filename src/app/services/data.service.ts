import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {
  private serviceUrl = `${environment.API}/v1/customers`;

  constructor(private http: HttpClient) {}

  createUser(data: any) {
    return this.http.post(this.serviceUrl, data).pipe(take(1));
  }
}
