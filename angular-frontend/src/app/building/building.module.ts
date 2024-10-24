import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuildingModule { }
