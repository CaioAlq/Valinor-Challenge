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

      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.hero = this.heroes.find((hero) => hero.id === id);

      console.log(this.hero);
    })
    
  }
}
