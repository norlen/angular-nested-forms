import { CommonModule } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  FormSocialsComponent,
  SocialsForm,
} from '../form-socials/form-socials.component';

export interface BasicInfoForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  socials?: SocialsForm;
}

@Component({
  selector: 'app-form-basic-info',
  imports: [CommonModule, ReactiveFormsModule, FormSocialsComponent],
  templateUrl: './form-basic-info.component.html',
  styleUrl: './form-basic-info.component.css',
})
export class FormBasicInfoComponent implements OnInit, OnDestroy {
  formGroupName = input.required<string>();

  rootFormGroup = inject(FormGroupDirective);
  fb = inject(FormBuilder);

  basicInfo = this.fb.group<BasicInfoForm>({
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.required),
  });

  ngOnInit(): void {
    this.rootFormGroup.control.setControl(this.formGroupName(), this.basicInfo);
  }

  ngOnDestroy(): void {
    this.rootFormGroup.control.removeControl(this.formGroupName());
  }
}
