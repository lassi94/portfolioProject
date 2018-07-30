import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        data => {
          this.posts = data['posts'];
    }
  );
  }

}
/*
this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
      */
