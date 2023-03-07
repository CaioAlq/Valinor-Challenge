import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeroesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent,
  ]
})

export class HomeModule { }
