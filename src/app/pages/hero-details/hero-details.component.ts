import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/shared/model/hero.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
  providers: [HeroesService]
})
export class HeroDetailsComponent implements OnInit {

  id: number = 1;
  heroes: Hero[] = [];
  hero: Hero | undefined;
  heroAbilities: any
  abilities: any;

  constructor(private heroService: HeroesService, private route: ActivatedRoute, private router : Router) {}


  ngOnInit(): void {
        this.getHeroes();
        this.getHeroAbilities(); 
        this.getAbilities();
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

      this.heroes.forEach((item, i) => {
        item.new_Id = i + 1;
      });

       this.id = Number(this.route.snapshot.paramMap.get('id'));

      this.hero = this.heroes.find((hero) => hero.new_Id === this.id);
    })
    
  }

  getHeroAbilities(): void {
    this.heroService.getHeroesAbilityData().subscribe((data) => {
      this.heroAbilities = [...data];
      
      this.heroAbilities.forEach((item: { new_Id: any; }, i: number) => {
        item.new_Id = i + 1;
      })
    })
  }


  getAbilities(): void {
    this.heroService.getAbilityData().subscribe((data) => {
      this.abilities = [...data];

      console.log(this.abilities);
      
    })
  } 

  next(): void {
    if(this.id >= this.heroes.length) return;
    this.id += 1;
    this.router.navigate(['/heroes',this.id]);
    this.hero = this.heroes.find((hero) => hero.new_Id === this.id);
  } 

  previous(): void {
    if(this.id <= 1) return;
    this.id -= 1;
    this.router.navigate(['/heroes',this.id]);
    this.hero = this.heroes.find((hero) => hero.new_Id === this.id);
  }
}
