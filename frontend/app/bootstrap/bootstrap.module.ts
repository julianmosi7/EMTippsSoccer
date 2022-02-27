import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsButtonComponent } from './bs-button/bs-button.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';


@NgModule({
  declarations: [BsButtonComponent, BsNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [BsButtonComponent, BsNavbarComponent]
})
export class BootstrapModule { }
