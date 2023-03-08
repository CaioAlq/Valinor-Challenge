import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    HeroDetailsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeModule,
  ]
})

export class HeroDetailsModule { }
