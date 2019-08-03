import { Component, OnInit } from '@angular/core';
import csc from 'country-state-city';
import { Client } from 'src/app/model/client';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  countries: any;
  cities: any;
  states: any;
  isValidateTrue = true;
  client1: Client;
  client2: Client;
  isAgreeChecked = false;
  commodityValue = 'sdddd';

  constructor() { }

  ngOnInit() {
    this.countries = csc.getAllCountries();
    this.states = csc.getStatesOfCountry('101');
    this.cities = csc.getCitiesOfState('35');
    this.client1 = new Client(1, 'shan', 'shanchennai@gmail.com' , 101, 35, 3659, 'new street', 'good');
    this.client2 = new Client(1, '', '' , 101, 35, 3659, '', '');
  }

  onChangeCountry(selectedCountry) {
    console.log(selectedCountry);
    this.states = csc.getStatesOfCountry(selectedCountry);
  }
  onChangeStates(selectedState) {
    console.log(selectedState);
    this.cities = csc.getCitiesOfState(selectedState);
  }
  onChangeCities(selectedCity) {
    console.log(selectedCity);
    // this.states = csc.getStatesOfCountry(selectedCity);
  }
  formSubmit(client1: Client, client2: Client, commadity) {
    console.log(client1, client2, commadity);
  }

}
