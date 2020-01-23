import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  public manufacturer: Array<string> = ['Honda', 'Husqvarna', 'Kawasaki', 'KTM', 'Suzuki', 'Yamaha'];

  public honda: Array<string> = ['CRF/R', 'CRF/X'];
  public husqvarna: Array<string> = ['FE', 'TE'];
  public kawasaki: Array<string> = ['KXF', 'KLX'];
  public ktm: Array<string> = ['XC', 'SX'];
  public suzuki: Array<string> = ['RMZ', 'RMX'];
  public yamaha: Array<string> = ['YZ', 'WR'];

  constructor() { }

  ngOnInit() {
  }

}
