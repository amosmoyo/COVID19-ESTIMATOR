import { Component, OnInit } from '@angular/core';
import { EstimatorService } from 'src/app/estimator.service';
import { ToastrService } from 'src/app/toastr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  new;
  impactObject: object;
  state = false;
  message = 'Hello! a report has been generated for you';
  constructor(
    private service: EstimatorService,
    private toastr: ToastrService
  ) { }

  onsubmit(formvalue) {
    if (formvalue.invalid) {
      return;
    }
    console.log(formvalue.value);
    if ( !!formvalue.value ) {
      this.state = true;
      this.impactObject = formvalue.value;
      this.toastr.success(this.message);
      this.service.covid19ImpactEstimator(this.impactObject);
    }

    formvalue.resetForm();
  }


  ngOnInit() {
  }

  amos() {
    return this.impactObject;
  }
}
