import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; //transform api data to json
import { Observable } from '../../node_modules/rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post>{
    return this._http.get<Post>("/api/posts", {responseType: 'json'});
  }
}
