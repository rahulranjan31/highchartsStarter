import { Component } from '@angular/core';
import { AppService } from './services/app.service';

const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: Object;
  serieName: string;
  point: string;


  constructor(private appserice: AppService) {
    $(document).ready(function () {
      console.log('App Started');
    })
    this.appserice.getdata().subscribe((data) =>
      this.options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'simple chart'
        },
        plotOptions: {
          series: {
          allowPointSelect: true
            
          }
        },
        series: data
      }
    );
  }

  onSeriesMouseOver(e) {
    this.serieName = e.context.name;
  }

  downloadFile() {
    // this.appserice.downloadFile();
  }

  onPointSelect(e) {
    console.log(e);
    this.point = e.context.y;
  }
}
