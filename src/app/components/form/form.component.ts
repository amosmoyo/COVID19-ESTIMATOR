import { Component, OnInit, Input } from '@angular/core';
import { EstimatorService } from 'src/app/estimator.service';
import { ToastrService } from 'src/app/toastr.service';
import { IInput } from 'src/app/input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  new;
  impactObject: IInput;
  state = false;
  message = 'Hello! a report has been generated for you';

  constructor(
    private service: EstimatorService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onsubmit(formvalue) {
    if (formvalue.invalid) {
      return;
    }

    if ( !!formvalue.value ) {
      this.state = true;
      this.impactObject = formvalue.value;
      this.toastr.success(this.message);
    }
    formvalue.resetForm();
  }
}
