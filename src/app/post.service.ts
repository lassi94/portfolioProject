import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; //transform api data to json
import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class PostService {

  res: any;

  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get<Post[]>("/api/posts", httpOptions)
    .pipe(map(res => this.res = res));
  }

  getPostByID(id){
    return this._http.get<Post[]>("/api/post/" + id, httpOptions)
    .pipe(map(res => this.res = res));
  }
}
