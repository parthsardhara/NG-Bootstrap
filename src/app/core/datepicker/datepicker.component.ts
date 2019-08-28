import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
  }

  ngOnInit() {

  }
  selectToday() {
    this.model = this.calendar.getToday();
    console.log("Datepicker:::", this.model);
  }

  selectedDate() {
    console.log("Selected date:::", this.model);
  }
}
