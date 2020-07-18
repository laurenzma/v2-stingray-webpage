import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent implements OnInit {


  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
  }

  showContactForm() {
    document.getElementById("informationCard").style.display = "none";
    document.getElementById("contactCard").style.display = "block";
  }

  hideContactForm() {
    document.getElementById("contactCard").style.display = "none";
    document.getElementById("informationCard").style.display = "block";
  }
  sendContactForm() {

  }


  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
    }


  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  ngOnInit(): void {




  }

}
