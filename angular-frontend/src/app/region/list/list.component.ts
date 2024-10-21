import { Component, inject } from '@angular/core';
import { RegionService } from '../../region.service';
import { Region } from '../../models/region';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  regionService = inject(RegionService)

  regions: Region[] = this.regionService.getAll()

  // items = [
  //   { id: 1, name: 'Region 1' },
  //   { id: 2, name: 'Region 2' },
  //   { id: 3, name: 'Region 3' },
  //   { id: 4, name: 'Region 4' }
  // ];
}
