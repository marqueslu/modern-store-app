import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
// import 'rxjs/add/operator/map';

import { map, filter, scan } from 'rxjs/operators';





@Injectable()
export class DataService{

    constructor(private http: Http){

    }
    createUser(data: any){
        console.log(data);
    }

    getCourses(){
        return this.http.
            get('https://abt-api.azurewebsites.net/api/courses')
            .pipe(map((res: Response) => res.json()));
            
    }
}