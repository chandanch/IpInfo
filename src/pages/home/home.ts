import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from './../services/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService]
})

export class HomePage {

  constructor(public navCtrl: NavController, private httpService : HttpService) {
    this.httpService.httpgetRequest("https://ipinfo.io/23.45.55.34?token=54b033f9998111")
    .subscribe(
      response => {
        console.log("Success",response)
      },
      error => {
        console.log(error);
      }
    )
  }

}
