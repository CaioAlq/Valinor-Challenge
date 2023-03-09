import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/shared/model/hero.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
  providers: [HeroesService]
})
export class HeroDetailsComponent implements OnInit {

  heroes: Hero[] = [];
  hero: Hero | undefined;

  constructor(private heroService: HeroesService, private route: ActivatedRoute) {}


  ngOnInit(): void {
        this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesData().subscribe((data) => {
      this.heroes = [...data];
  
      this.heroes.map ((hero) => {
        if(hero.primary_attr === 'agi') {
          hero.primary_attr = 'agility'
        };
        if(hero.primary_attr === 'int') {
          hero.primary_attr = 'intelligence'
        };
        if(hero.primary_attr === 'str') {
          hero.primary_attr = 'strength'
        }

        hero.name = hero.name.replace("npc_dota_hero_", "");

        hero.attack_type = hero.attack_type.toLowerCase();        
      })
    
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.hero = this.heroes.find((hero) => hero.id === id);
    })
    
  }
}
