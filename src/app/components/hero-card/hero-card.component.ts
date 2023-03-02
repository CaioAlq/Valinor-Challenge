import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'da-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  providers: [HeroesService]
})
export class HeroCardComponent implements OnInit{

  heroes: any;
  heroes_lore: any;

  constructor(private heroService: HeroesService) {}

 ngOnInit(): void {
  this.getHeroes(); 
 }

 getHeroes(): void {
  this.heroService.getHeroesData('/heroes').subscribe((data) => {
    this.heroes = data;

    console.log(this.heroes);
  })

  this.heroService.getHeroesData('/hero_lore').subscribe((data) => {
    this.heroes_lore = data;
  })
 }
}