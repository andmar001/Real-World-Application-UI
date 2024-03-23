import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request-model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramSuscription?: Subscription;
  editCategorySuscription?: Subscription;
  category?:Category;

  constructor( private _route:ActivatedRoute, private _categoryService:CategoryService, private _router:Router ) { }

  ngOnInit(): void {
    this.paramSuscription = this._route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id){
          //get the data from the server
          this._categoryService.getCategoryById(this.id)
            .subscribe({
              next: (response) => {
                this.category = response;
              },
              error: (error) => {
                console.log(error);
            }
          })
        }
      }
    });
  }

  onFormSubmit(){
    const updateCategoryRequest:UpdateCategoryRequest = {
      name: this.category?.name ?? '',
      urlHandler: this.category?.urlHandler ?? ''
    };
    //pass the object to the service
    if (this.id){
      this.editCategorySuscription = this._categoryService.updatedCategory(this.id, updateCategoryRequest)
        .subscribe({
          next: (response) => {
            this._router.navigate(['/admin/categories']);
          },
          error: (error) => {
            console.log(error);
          }
        })
    }
  }

  onDelete():void{
    if (this.id) {
      this._categoryService.deleteCategory(this.id)
        .subscribe({
          next: (response) =>{
            this._router.navigate(['/admin/categories']);
          }
        })
    }
  }

  ngOnDestroy(): void {
    this.paramSuscription?.unsubscribe();
    this.editCategorySuscription?.unsubscribe();
  }
}
