import {Component} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {ActivatedRoute} from "@angular/router";
import {Host, House, Photos} from "../interfaces";

import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;

  details?: House
  id: number
  host?: Host
  photos?: string[]

  constructor(public route: ActivatedRoute, public upbnbService: UpbnbService) {
    this.id = route.snapshot.params['id_casa']
  }

  ngOnInit(): void {
    this.upbnbService.getDetails(this.id).subscribe((details: House) => {
      this.details = <House>details;
      console.log("details", this.details)
    })

    this.upbnbService.getHost(this.id).subscribe((host) => {
      this.host = <Host>host;
      console.log("host", this.host)
    })

    this.upbnbService.getPhotos(this.id).subscribe((photos: Photos) => {
      this.photos = photos.photos;
      console.log("photos 0",this.photos)
    })

  }
}
