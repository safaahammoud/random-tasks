import { IHttpOptions } from './../../interface/IHttpOptions.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string, options?: IHttpOptions): Observable<any>{
    return this.httpClient.get(url, options);
  }
}
