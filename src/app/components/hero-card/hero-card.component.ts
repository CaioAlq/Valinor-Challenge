import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/shared/model/heroes.model';
import { HeroesLore } from 'src/app/shared/model/heroesLore.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'da-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  providers: [HeroesService]
})

export class HeroCardComponent implements OnInit{
  
  heroes: any = [];
  heroes_lore: any;
  filteredHeroes: any = [];

  constructor(private heroService: HeroesService) {}

 ngOnInit(): void {
  this.getHeroes(); 
 }

 getHeroes(): void {
  this.heroService.getHeroesData('/heroes').subscribe((data) => {
    this.heroes = data;
    this.filteredHeroes = this.heroes;
  })

  this.heroService.getHeroesData('/hero_lore').subscribe((data) => {
    this.heroes_lore = data;
  })
 }

 onPageChange($event: { pageIndex: number; pageSize: number; }) {
  this.filteredHeroes =  this.heroes.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
 }
}