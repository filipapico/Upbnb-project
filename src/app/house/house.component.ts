import {Component, Input} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;

  @Input() id!: number
  @Input() featured_photo!: string
  @Input() city!: string
  @Input() country!: string
  @Input() rating!: number
  @Input() price!: number
  @Input() host_type?: string //? because it may "exist" or not, depending on the component House will be used in...
  @Input() time?: string //? idem

  // Object created to "convert" a variable to a string
  host_types: any = {
    professional: "Anfitrião profissional",
    individual: "Anfitrião individual"
  }

  constructor(public upbnbService: UpbnbService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id_casa'];
  }
}
