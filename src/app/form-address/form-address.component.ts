import { Component, inject, input, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

export interface AddressForm {
  street: FormControl<string | null>;
  number: FormControl<string | null>;
}

@Component({
  selector: "app-form-address",
  imports: [ReactiveFormsModule],
  templateUrl: "./form-address.component.html",
  styleUrl: "./form-address.component.css",
})
export class FormAddressComponent implements OnInit, OnDestroy {
  formGroupName = input.required<string>();

  rootFormGroup = inject(FormGroupDirective);
  fb = inject(FormBuilder);

  address = this.fb.group<AddressForm>({
    street: this.fb.control("", Validators.required),
    number: this.fb.control("", Validators.required),
  });

  ngOnInit(): void {
    this.rootFormGroup.control.setControl(this.formGroupName(), this.address);
  }

  ngOnDestroy(): void {
    this.rootFormGroup.control.removeControl(this.formGroupName());
  }
}
