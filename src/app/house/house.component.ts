import {Component, Input, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;

  @Input() featured_photo!: string
  @Input() city!: string
  @Input() country!: string
  @Input() rating!: number
  @Input() price!: number
  @Input() host_type?: string //? because this may exist or not, depending on the component House will be used in...
  @Input() id!: number
  @Input() data? : number //? idem

  host_types : any = {
    professional: "Anfitrião profissional",
    individual: "Anfitrião individual"
  }
  // This object allows to "convert" a variable to a string

  constructor(private upbnb: UpbnbService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id_casa'];
  }

  ngOnInit(): void {

  }

}
