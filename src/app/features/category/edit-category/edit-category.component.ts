import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramSuscription?: Subscription;

  constructor( private _route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.paramSuscription = this._route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
  }

  ngOnDestroy(): void {
    this.paramSuscription?.unsubscribe();
  }

}
