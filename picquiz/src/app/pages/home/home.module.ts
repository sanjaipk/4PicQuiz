import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { QboardComponent } from './qboard/qboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TamilkboardComponent } from './tamilkboard/tamilkboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    QboardComponent,
    TamilkboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
