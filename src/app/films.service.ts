import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelMovie } from './models/models';
import { SingleModel } from './models/modelsSingle';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http:HttpClient) { }

  findFilms(film:string): Observable<any>{
    return this.http.get<any[]>("https://api.tvmaze.com/search/shows?q="+film)
}

singleCall(id:number):Observable<SingleModel>{
  return this.http.get<SingleModel>("https://api.tvmaze.com/shows/"+id)
}
}
