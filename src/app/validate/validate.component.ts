import { Component, OnInit } from '@angular/core';
import csc from 'country-state-city';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  countries: any;
  cities: any;
  states: any;
  isValidateTrue: boolean;

  constructor() { }

  ngOnInit() {
    this.countries = csc.getAllCountries();
    this.isValidateTrue = false;
  }

  onChangeCountry(selectedCountry) {
    // console.log(selectedCountry);
    this.states = csc.getStatesOfCountry(selectedCountry);
  }
  onChangeStates(selectedState) {
    // console.log(selectedCountry);
    this.cities = csc.getCitiesOfState(selectedState);
  }
  onChangeCities(selectedCity) {
    console.log(selectedCity);
    // this.states = csc.getStatesOfCountry(selectedCity);
  }

}
