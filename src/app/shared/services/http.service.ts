import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IHttpOptions} from './interfaces/IHttpOptions.interface';;

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public get(url:string, options?: any): Observable<any>{
    return this.httpClient.get(url, options);
  }
}
