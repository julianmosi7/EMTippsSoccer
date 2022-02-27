import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
   @Output() clickedAdmin = new EventEmitter<string>();

   strength = 'light';
   sub = 'brand';

   clickedAdminComponent(): void{
     this.clickedAdmin.emit("");
   }

}
