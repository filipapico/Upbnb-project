import {Component} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {ActivatedRoute} from "@angular/router";
import {House, Host, Photos, Reviews} from "../interfaces";

import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faFire, faHeart as faHeartSolid, faSmoking, faTv, faWifi, faDog} from "@fortawesome/free-solid-svg-icons";

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
  faFire = faFire;

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
    fireplace: faFire,
  }

  //washingMachine:
  //airConditioner:
  //microwave:
  //"petsAllowed","washingMachine","airConditioner","tv", "smokingAllowed","fireplace","wifi","microwave"


  constructor(public route: ActivatedRoute, public upbnbService: UpbnbService) {
    this.id = route.snapshot.params['id_casa']
  }

  ngOnInit(): void {
    this.upbnbService.getDetails(this.id).subscribe((details: House) => {
      this.details = <House>details;
      //console.log("details", this.details)
    })

    this.upbnbService.getHost(this.id).subscribe((host) => {
      this.host = <Host>host;
      //console.log("host", this.host)
    })

    this.upbnbService.getPhotos(this.id).subscribe((photos: Photos) => {
      this.photos = photos.photos;
      //console.log("photos 0", this.photos)
    })

    this.upbnbService.getReviews(this.id).subscribe((reviews: Reviews) => {
      console.log("reviews", reviews)
      this.reviews = reviews;
    })

    this.upbnbService.getFeatures(this.id).subscribe((features) => {
      this.features = features.features
      console.log("features", this.features)
      console.log("all features", this.allfeatures)
    })
  }
}
