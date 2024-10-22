import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Region } from '../models/region';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  // constructor() { }

  private httpClient = inject(HttpClient);

  regions: Observable<Region[]> = this.getAll();

  // Test
  // regionsList = [
  //   { id: 1, name: 'Region 1', buildings: [], residents: [] },
  //   { id: 2, name: 'Region 2', buildings: [], residents: [] },
  //   { id: 3, name: 'Region 3', buildings: [], residents: [] },
  //   { id: 4, name: 'Region 4', buildings: [], residents: [] },
  // ];

  /**
   * getAll
   */
  public getAll(): Observable<Region[]> {
    // return this.httpClient.get<Region[]>(environment.apiUrlRegions)

    // Bing Copilot search help below, look up pipe():
    return this.httpClient
      .get<{ status: string; data: Region[] }>(environment.apiUrlRegions)
      .pipe(map((response) => response.data));
  }

  /**
   * getById
   */
  // public getById(region: Region) {
  //   return this.httpClient
  //     .get<{ status: string; data: Region[] }>(
  //       environment.apiUrlRegions + `/${region.id}`
  //     )
  //     .pipe(map((response) => response.data));
  // }
  // public getById(id: any | null): Region | null {
  //   // const region = this.regions.find((region) => region.id === id);
  //   // if (!region) {
  //   //   return null
  //   // }
  //   // return region
  //   return this.regions.pipe(
  //     map((regions) => regions.find((region) => region.id === id) || null)
  //   );
  // }

  public getById(id: any): Observable<Region | null> {
    return this.regions.pipe(
      map((regions) => regions.find((region) => region.id === Number(id)) || null)
    );
  }
}
