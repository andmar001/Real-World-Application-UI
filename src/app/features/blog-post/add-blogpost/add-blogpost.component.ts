import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  model:AddBlogPost;

  constructor( private _blogPostService:BlogPostService,
               private _router:Router
  ){
    this.model ={
      title: '',
      shortDescription: '',
      urlHandler: '',
      content: '',
      FeaturedImageUrl: '',
      author: '',
      publishedDate: new Date(),
      isVisible: true
    }
  }

  onFormSubmit(){
    this._blogPostService.createBlogPost(this.model)
      .subscribe({
        next:( response )=>{
          this._router.navigate(['/admin/blogposts']);
        },
        error:(err)=>{
          alert('Error Occured');
        }
      })
  }

}
