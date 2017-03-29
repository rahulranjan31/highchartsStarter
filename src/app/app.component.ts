import { Component } from '@angular/core';
import { AppService } from './services/app.service';

const Highcharts = require('highcharts');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: Object;
  constructor(private appserice: AppService) {
    this.appserice.getdata().subscribe((data) =>
      this.options = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'simple chart'
        },
        series: data
      }
    );
  }
}
