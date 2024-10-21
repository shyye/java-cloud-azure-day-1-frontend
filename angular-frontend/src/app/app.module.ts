import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './region/list/list.component';
import { RegionModule } from './region/region.module';
import { BuildingModule } from './building/building.module';
import { CharacterModule } from './character/character.module';
// import { ListComponent_character } from './region/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegionModule,
    BuildingModule,
    CharacterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
