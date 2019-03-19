import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IBlog} from './blog';
import {Observable} from 'rxjs';

@Injectable()
export class BlogService {

  private _url: string = '/assets/data/blogdata.json';

  constructor(private http: HttpClient) {}

    getBlogData(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(this._url);
    }
}
