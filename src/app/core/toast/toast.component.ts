import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass']
})
export class ToastComponent implements OnInit {
  
  // show = true;

  constructor() { }

  ngOnInit() {
  }

  // close() {
  //   this.show = false;
  //   setTimeout(() => this.show = true, 5000);
  // }


}
