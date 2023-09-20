import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  radarChartOptions: ChartOptions = {
    responsive: true,
  };
  radarChartLabels: any[] = [
    'Tháng 01',
    'Tháng 02',
    'Tháng 03',
    'Tháng 04',
    'Tháng 05',
    'Tháng 06',
  ];

  radarChartData: ChartDataset[] = [
    { data: [62, 59, 80, 81, 56, 77], label: 'Khách hàng' },
    { data: [30, 48, 50, 29, 80, 99], label: 'Đơn hàng' },
  ];
  radarChartType: ChartType = 'radar';


  lineChartData: ChartDataset[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor() {}

  ngOnInit(): void {

  }
}
