import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private _htpp:HttpClient ) { }

  addCategory( model:AddCategoryRequest ):Observable<void>{
    return this._htpp.post<void>(`${environment.apiBaseUrl}/categories`,model);
  }

  getAllCategories():Observable<Category[]>{
    return this._htpp.get<Category[]>(`${environment.apiBaseUrl}/categories`);
  }
}
