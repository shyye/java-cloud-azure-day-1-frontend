import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './region/list/list.component';
import { ViewComponent } from './region/view/view.component';
import { AddComponent as AddComponent_character } from './character/add/add.component';
import { ViewComponent as ViewComponent_character} from './character/view/view.component';
import { AddComponent as AddComponent_building} from './building/add/add.component';
import { ViewComponent as ViewComponent_building} from './building/view/view.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "regions",
    component: ListComponent
  },
  {
    path: "regions/:id",
    component: ViewComponent
  },
  {
    path: "regions/:id/characters/add",
    component: AddComponent_character
  },
  {
    path: "regions/:id/characters/:characterId",
    component: ViewComponent_character
  },
  {
    path: "regions/:id/building/add",
    component: AddComponent_building
  },
  {
    path: "regions/:id/buildings/:buildingId",
    component: ViewComponent_building
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
