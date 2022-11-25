import {Component, Input, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";

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

  constructor(private upbnb: UpbnbService) {
  }

  ngOnInit(): void {

  }

}
