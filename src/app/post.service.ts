import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'; //transform api data to json

@Injectable({
  providedIn: 'root'
})
export class PostService {

  response: any;

  constructor(private _http: Http) { }

  getPosts(){
    return this._http.get("/api/posts")
      .pipe(map(response => this.response = response.json()));
  }
}
