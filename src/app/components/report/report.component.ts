import { Component, OnInit, Input } from '@angular/core';
import { EstimatorService } from 'src/app/estimator.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  panelOpenState = false;
  @Input() inputInf: object;
  impactObj: object;
  severeObj: object;

  constructor(private objImpact: EstimatorService) { }

  ngOnInit() {
    if (this.inputInf) {
      this.impactObj = this.objImpact.impactEstimator(this.inputInf);
      console.log(this.impactObj);
      this.severeObj = this.objImpact.severeImpactEstimator(this.inputInf);
      console.log(this.severeObj);
    }

  }

}
