import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramSuscription?: Subscription;
  category?:Category;

  constructor( private _route:ActivatedRoute, private _categoryService:CategoryService ) { }

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
    console.log(this.category);
  }

  ngOnDestroy(): void {
    this.paramSuscription?.unsubscribe();
  }

}
