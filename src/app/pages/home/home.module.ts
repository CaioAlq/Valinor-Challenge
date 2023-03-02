import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { HeroCardComponent } from 'src/app/components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
