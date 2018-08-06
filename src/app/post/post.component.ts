import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = [];

  constructor(private _postService: PostService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe((params) => {
      let id = params['id'];
      
      this._postService.getPostByID(id)
        .subscribe(data => this.post = data);
    })

  }

}
