import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      
	  { id: 1, name: 'Test-1' },
	  { id: 2, name: 'Test-2' },
      { id: 3, name: 'Test-3' },
	  { id: 4, name: 'Test-4' },
	  { id: 5, name: 'Test-5' },
	  { id: 6, name: 'Test-6' },
	  { id: 7, name: 'Test-7' },
	  { id: 8, name: 'Test-8' },
	  { id: 9, name: 'Test-9' },
	  { id: 10, name: 'Test-10' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
