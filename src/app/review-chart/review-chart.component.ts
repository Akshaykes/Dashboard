import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-review-chart',
  templateUrl: './review-chart.component.html',
  styleUrls: ['./review-chart.component.css']
})
export class ReviewChartComponent {

  Highcharts = Highcharts;
  chartOptions = {}
  constructor() {
    this.chartOptions={

  chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Most Users Visited by country',
      align: 'center'
  },
  // subtitle: {
  //     text: '3D donut in Highcharts',
  //     align: 'center'
  // },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45
      }
  },
  series: [{
      name: 'Users',
      data: [
          ['USA', 7019],
          ['Germany', 2389],
          ['UK', 3950],
          ['India', 6004],
          ['China', 5621],
          ['ROC', 4105],
          ['France', 2367],
          ['Canada', 1893],
          ['Japan', 1279]

      ]
  }]

    }
  }
}
