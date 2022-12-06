import {Component} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faSearch = faSearch;
  faHouse = faHouse;
  faHeart = faHeart;

  /*OLD ngClass note being used any longer
  toggle = true;
  enableDisableColours() {
    this.toggle = !this.toggle;
    //this.status = this.toggle ? "Enable" : "Disable"
  }*/

}
