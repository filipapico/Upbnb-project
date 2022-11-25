import {Component, Input, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() featured_photo! : string
  @Input() city! : string
  @Input() country! : string
  @Input() rating! : number

  constructor(private upbnb: UpbnbService) {
  }

  ngOnInit(): void {

  }

}
