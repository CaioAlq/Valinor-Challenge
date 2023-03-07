import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/model/hero.model';
import { HeroLore } from 'src/app/shared/model/hero-lore.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';


@Component({
  selector: 'da-hero-card',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesService]
})

export class HeroesComponent implements OnInit{
  
  heroes: Hero[] = []
  heroes_lore: HeroLore[] = [];
  filteredHero: Hero[] = []
  pageHeroes: Hero[] = [];

  private _searchHero = ''
  
  get searchHero(): string {
    return this._searchHero;
  }

  set searchHero(value: string) {
    this._searchHero = value;
    this.filteredHero = this.performFilter(value);
  }

  performFilter(filterBy: string): Hero[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.heroes.filter((hero: Hero) =>
      hero.localized_name.toLocaleLowerCase().includes(filterBy));
  }

  constructor(private heroService: HeroesService) {}

 ngOnInit(): void {
  this.getHeroes(); 
 }

 getHeroes(): void {
  this.heroService.getHeroesData().subscribe((data) => {
    this.heroes = data;

    this.heroes.map ((attr) => {
      if(attr.primary_attr === 'agi') {
        attr.primary_attr = 'agility'
      };
      if(attr.primary_attr === 'int') {
        attr.primary_attr = 'intelligence'
      };
      if(attr.primary_attr === 'str') {
        attr.primary_attr = 'strength'
      }
    })

    this.pageHeroes = this.heroes;
  })
 }

 onPageChange($event: { pageIndex: number; pageSize: number; }) {
  this.pageHeroes =  this.heroes.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
 }
}