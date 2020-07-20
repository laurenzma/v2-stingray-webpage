import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.scss']
})
export class ProductcardsComponent implements OnInit {

  constructor() { }

  openAppProduct(): void {
  }

  ngOnInit(): void {

    $("#productImage1").attr("src", "assets/images/Logo_beige_still.png");

    $("#imgContainer1").mouseenter(
      function() {
          $("#productImage1").attr("src", "assets/images/Logo_beige.gif");
      });


        $("#productImage2").attr("src", "assets/images/Logo_violet_still.png");

        $("#imgContainer2").mouseenter(
          function() {
              $("#productImage2").attr("src", "assets/images/Logo_violet.gif");
          });


            $("#productImage3").attr("src", "assets/images/Logo_green_still.png");

        $("#imgContainer3").mouseenter(
          function() {
              $("#productImage3").attr("src", "assets/images/Logo_green.gif");
          });


          var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
          if (ismobile) {
        $('.top-left').attr('style', "font-size: 2vw;");
        }


  }

}
