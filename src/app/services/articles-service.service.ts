import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  constructor(private http: HttpClient) { }

  public getGetArticles(): Observable<any> {
    return this.http.get<any>('https://api.spaceflightnewsapi.net/v4/articles/');
  }
}
