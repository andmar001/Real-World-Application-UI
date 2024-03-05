import { Component, OnDestroy } from '@angular/core';

import { AddCategoryRequest } from '../models/add-category-request.models';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySuscription?: Subscription;

  constructor( private _categoryService: CategoryService,
               private _router: Router
  ) {
    this.model = {
      name: '',
      urlHandler: ''
    }
  }

  onFormSubmit(){
    this.addCategorySuscription = this._categoryService.addCategory(this.model)
      .subscribe({
        next: ( response ) => {
          this._router.navigate(['/admin/categories']);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  // This is a good practice to avoid memory leaks
  ngOnDestroy(){
    this.addCategorySuscription?.unsubscribe();
  }

}
