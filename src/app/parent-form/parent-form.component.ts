import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule, JsonPipe } from "@angular/common";
import { FormSocialsComponent } from "../form-socials/form-socials.component";
import {
  BasicInfoForm,
  FormBasicInfoComponent,
} from "../form-basic-info/form-basic-info.component";
import {
  AddressForm,
  FormAddressComponent,
} from "../form-address/form-address.component";

export interface ParentForm {
  basicInfo?: BasicInfoForm;
  address?: AddressForm;
}

@Component({
  selector: "app-parent-form",
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
    FormBasicInfoComponent,
    FormSocialsComponent,
    FormAddressComponent,
  ],
  templateUrl: "./parent-form.component.html",
  styleUrl: "./parent-form.component.css",
})
export class ParentFormComponent implements AfterViewInit {
  fb = inject(FormBuilder);
  form = this.fb.group<ParentForm>({});
  cdr = inject(ChangeDetectorRef);

  onSubmit() {
    console.log("Submitted", this.form.value);
  }

  ngAfterViewInit(): void {
    console.log("Detect changes");
    this.cdr.detectChanges();
  }
}
