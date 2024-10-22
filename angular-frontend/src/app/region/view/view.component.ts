import { Component, inject } from '@angular/core';
import { RegionService } from '../region.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Region } from '../../models/region';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  regionService = inject(RegionService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')
  // region: Region | null = null;
  // region$: Observable<Region> = this.regionService.getById(this.id);
  region$: Observable<Region | null> = this.regionService.getById(this.id);
  // region$: Region = this.regionService.getById(this.id);


  // region: Observable<Region>;
  // constructor(private readonly regionService: RegionService) {
  //   this.region = this.regionService.getById(this.id);
  // }

}
