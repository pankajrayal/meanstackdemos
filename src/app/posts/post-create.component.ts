import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  newPost = 'NO CONTENT';
  @Output() postCreated = new EventEmitter<Post>();

  constructor(private postsService: PostsService) {}
  onAddPost(form: NgForm) {
    if (form.invalid) return;
    this.postsService.addPost(form.value.title, form.value.content);
    console.log('this');
    form.resetForm();
  }
}
