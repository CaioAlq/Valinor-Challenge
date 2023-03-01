import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { HeroesComponent } from '../../components/heroes/heroes.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CardComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
