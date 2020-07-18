import { Component, OnInit, HostListener, Inject } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (ismobile) {
  document.getElementById("logo").setAttribute('style', "max-width: 30%; max-height: 30%;");
  }


  }


  }

