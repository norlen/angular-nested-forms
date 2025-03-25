import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormSocialsComponent } from '../form-socials/form-socials.component';
import {
  BasicInfoForm,
  FormBasicInfoComponent,
} from '../form-basic-info/form-basic-info.component';
import {
  AddressForm,
  FormAddressComponent,
} from '../form-address/form-address.component';

export interface ParentForm {
  basicInfo?: BasicInfoForm;
  address?: AddressForm;
}

function requiredGroupsValidator(...requiredGroups: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    for (const groupName of requiredGroups) {
      if (!control.get(groupName)) {
        return { requiredGroupMissing: true };
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-parent-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
    FormBasicInfoComponent,
    FormSocialsComponent,
    FormAddressComponent,
  ],
  templateUrl: './parent-form.component.html',
  styleUrl: './parent-form.component.css',
})
export class ParentFormComponent implements AfterViewInit {
  fb = inject(FormBuilder);
  form = this.fb.group<ParentForm>(
    {},
    { validators: requiredGroupsValidator('basicInfo', 'address') }
  );
  cdr = inject(ChangeDetectorRef);

  onSubmit() {
    console.log('Submitted', this.form.value);
  }

  ngAfterViewInit(): void {
    console.log('Detect changes');
    this.cdr.detectChanges();
  }
}
