import { Injectable } from '@angular/core';

declare let toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(message: string, title?: string) {
    toastr.success(message, title);
  }
}
