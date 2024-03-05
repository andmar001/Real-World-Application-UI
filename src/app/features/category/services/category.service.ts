import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private _htpp:HttpClient ) { }

  addCategory( model:AddCategoryRequest ):Observable<void>{
    return this._htpp.post<void>('https://localhost:44367/api/categories', model);
  }
}
