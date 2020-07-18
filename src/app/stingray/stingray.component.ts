import { Component, OnInit, HostListener, Inject } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from "@angular/animations";
import { DOCUMENT } from "@angular/common";
declare var particlesJS;
@Component({
  selector: "app-stingray",
  templateUrl: "./stingray.component.html",
  styleUrls: ["./stingray.component.scss"],
})
export class StingrayComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}



  ngOnInit(): void {
    var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (ismobile) {
    /*   document.getElementById("desktop").style.display = "none";
      document.getElementById("mobile").style.display = "initial";
   */
  document.getElementById("mainCard").setAttribute('style', "transform: scale(0.8);");
  document.getElementById("aboutCard").setAttribute('style', "transform: scale(0.8);");


  }
    else{
    //  style="margin-top: 10%; margin-bottom: 20%;"
    document.getElementById("mainCard").setAttribute('style', 'transform: scale(1.0);')
    document.getElementById("mainCard").setAttribute('style', "margin-top: 10%; margin-bottom: 10%;");

    document.getElementById("aboutCard").setAttribute('style', 'transform: scale(1.0);');

    }
  }

  fadeInImage() {
    $('#parallaxImage').fadeIn(1000);
  }

  openMessage() {
    setTimeout(
      () => (document.getElementById("mesagePopup").style.display = "block"),
      3000
    );
  }

  closeMessage() {
    document.getElementById("mesagePopup").style.display = "none";
  }
}
