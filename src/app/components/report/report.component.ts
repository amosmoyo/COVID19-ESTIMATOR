import { Component, OnInit, Input } from '@angular/core';
import { EstimatorService } from 'src/app/estimator.service';
import { IInput, IInput2 } from 'src/app/input';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  panelOpenState = false;
  inputInf: IInput;
  impactObj: IInput2;
  severeObj: IInput2;

  constructor(private objImpact: EstimatorService) { }

  ngOnInit() {
    this.inputInf = this.objImpact.output();
    if (this.inputInf) {
      this.impactObj = this.objImpact.impactEstimator(this.inputInf);
      this.severeObj = this.objImpact.severeImpactEstimator(this.inputInf);
    }

  }

}
