import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HERO_DESCRIPTIONS } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'da-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  heroes: any[] = [];
  error: any;
  
  constructor(private apollo: Apollo) {}
  
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: HERO_DESCRIPTIONS
      })
      .valueChanges.subscribe((result: any) => {
          this.heroes = result?.data?.heroes;
          this.error = result.error
      })
  }
}
