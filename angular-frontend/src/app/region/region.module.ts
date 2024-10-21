import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewComponent,
    ListComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ListComponent
  ]
})
export class RegionModule { }
