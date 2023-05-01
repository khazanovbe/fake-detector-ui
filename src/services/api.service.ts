import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  detect(news:string):Observable<any>{
    return this.http.post('/api/detect',{news:news})
  }
  constructor(private http:HttpClient) { }
}
