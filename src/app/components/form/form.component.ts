import { Component, OnInit, Input } from '@angular/core';
import { EstimatorService } from 'src/app/estimator.service';
import { ToastrService } from 'src/app/toastr.service';
import { IInput } from 'src/app/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  new;
  message = 'Thank you!. A report has been generated for you';
  inputObject: IInput;

  constructor(
    private service: EstimatorService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  onsubmit(formvalue) {
    if (formvalue.invalid) {
      return;
    }

    if ( !!formvalue.value ) {
      this.inputObject = formvalue.value;
      this.service.covid19Estimator(this.inputObject);
      this.toastr.success(this.message);
    }
    formvalue.resetForm();

    setTimeout(() => {
      this.route.navigate(['/report']);
    }, 1000);
  }
}
