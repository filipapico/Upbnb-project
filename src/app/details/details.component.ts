import {Component} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {ActivatedRoute} from "@angular/router";
import {House, Host, Photos, Reviews} from "../interfaces";

import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faSmoking,
  faTv,
  faWifi,
  faDog,
  faTShirt, faArchway, faFan, faUtensils
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faDog = faDog;
  faWifi = faWifi;
  faTv = faTv;
  faSmoking = faSmoking;
  faArchway = faArchway;
  faTShirt = faTShirt;
  faFan = faFan;

  details?: House;
  id: number;
  host!: Host;
  photos!: string[];
  reviews!: Reviews;
  features!: string[];

  allfeatures?: any = {
    petsAllowed: faDog,
    wifi: faWifi,
    tv: faTv,
    smokingAllowed: faSmoking,
    fireplace: faArchway,
    washingMachine: faTShirt,
    airConditioner: faFan,
    microwave: faUtensils,
  }

  constructor(public route: ActivatedRoute, public upbnbService: UpbnbService) {
    this.id = route.snapshot.params['id_casa']
  }

  ngOnInit(): void {

    this.upbnbService.getDetails(this.id).subscribe((details: House) => {
      this.details = <House>details;
      //console.log("details", this.details)
    })

    this.upbnbService.getFeatures(this.id).subscribe((features) => {
      this.features = features.features
      console.log("features", this.features)
      console.log("all features", this.allfeatures)
    })

    this.upbnbService.getHost(this.id).subscribe((host) => {
      this.host = <Host>host;
    })

    this.upbnbService.getPhotos(this.id-1).subscribe((photos: Photos) => {
      this.photos = photos.photos;
    })

    this.upbnbService.getReviews(this.id).subscribe((reviews: Reviews) => {
      //console.log("reviews", reviews)
      this.reviews = reviews;
    })

  }
}
