import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories?:Category[];

  constructor( private _categoryService:CategoryService ) { }

  ngOnInit(): void {
    this._categoryService.getAllCategories()
      .subscribe({
        next: ( response ) => {
          this.categories = response;
        }
      })
  }

}
