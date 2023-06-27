import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
 
  Highcharts = Highcharts;
  chartOptions = {}
  constructor() {
    this.chartOptions={

        chart: {
            type: 'column'
        },
        title: {
            text: 'Company Products with highest rating per 2023'
        },
      
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Users Rating'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Rating in 2023: <b>{point.y:.1f} </b>'
        },
        series: [{
            name: 'Rating',
            colors: [
                '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                '#03c69b',  '#00f194'
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: [
                ['Apple', 4.8],
                ['Samsung', 4.6],
                ['Sony', 4.5],
                ['Lenovo', 4.4],
                ['xiaomi', 4.3],
                ['vivo', 4.3],
                ['Realme', 4.3],
                ['MSI', 4.5],
                ['Canon', 4.2],
                ['LG', 4.1],
                ['ASUS', 4.0],
                ['Oppo', 4.2],
                ['Poco', 4.3],
                ['Dell', 4.1],
                // ['Kolkata', 14.974],
                // ['Kinshasa', 14.970],
                // ['Lagos', 14.86],
                // ['Manila', 14.16],
                // ['Tianjin', 13.79],
                // ['Guangzhou', 13.64]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    
    }
  }
}
