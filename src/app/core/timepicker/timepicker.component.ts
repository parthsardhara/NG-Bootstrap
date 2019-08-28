import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.sass']
})
export class TimepickerComponent implements OnInit {

  time = { hour: 13, minute: 30 };
  meridian = true;

  constructor() { }

  ngOnInit(): void { }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  selectedTimePicker() {
    console.log("selectedTimePicker", this.time);
  }
}