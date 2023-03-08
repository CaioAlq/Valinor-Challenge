import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { HeroesListComponent } from 'src/app/components/heroes-list/heroes-list.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroDetailsModule } from '../hero-details/hero-details.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeroesListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ]
})

export class HomeModule { }
