import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  // Test
  regions = [
    { id: 1, name: 'Region 1', buildings: [], residents: [] },
    { id: 2, name: 'Region 2', buildings: [], residents: [] },
    { id: 3, name: 'Region 3', buildings: [], residents: [] },
    { id: 4, name: 'Region 4', buildings: [], residents: [] }
  ];

  /**
   * getAll
   */
  public getAll() {
    return this.regions
  }


}
