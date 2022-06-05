import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Countries } from '../../assets/constant';
import { Country } from '../../assets/model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  readonly GoogleStoreLink: string = 'https://play.google.com/store/apps/details?id=wellthy.care'; // google play store link
  readonly AppleStoreLink: string = 'https://apps.apple.com/us/app/wellthy-care/id1382566710'; // apple play store link
  readonly countryList: Country[] = Countries; // County with code and flag;
  public phoneNumber: string;
  public countryCode: string;
  public processing: boolean;
  public linkSent: boolean;

  constructor(title: Title) {
    title.setTitle('assignment | Wellthy'); // for setting title of tab
    this.phoneNumber = "";
    this.processing = false;
    this.linkSent = false;
    this.countryCode = "";
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.countryCode = this.countryList.find(x => x.isoCode == "IN")?.dialCode as string; //default picking india dial code.
  }

  setLinkSentValue(value: boolean): void {
    this.linkSent = value;
  }


  goToStore(url: string): void {
    if (url) {
      window.open(url, "_blank"); // open store url in new tab
    }
  }

  submitForm(isValid: any): void {
    if (!isValid || this.processing) { return } // if form is invalid or request is already processing then returning; 
    this.processing = true;

    setTimeout(() => { // faking a api call time;
      this.processing = false;
      this.setLinkSentValue(true);
      this.phoneNumber = "";

    }, 1000);
  }
}
