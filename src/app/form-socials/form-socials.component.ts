import { CommonModule } from "@angular/common";
import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

export interface SocialsForm {
  twitch: FormControl<string>;
  instagram: FormControl<string | null>;
}

@Component({
  selector: "app-form-socials",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./form-socials.component.html",
  styleUrl: "./form-socials.component.css",
})
export class FormSocialsComponent implements OnInit, OnDestroy {
  formGroupName = input.required<string>();

  rootFormGroup = inject(FormGroupDirective);
  fb = inject(FormBuilder);

  public socials = this.fb.group<SocialsForm>({
    twitch: this.fb.nonNullable.control<string>("", Validators.required),
    instagram: this.fb.control<string | null>(null),
  });

  ngOnInit(): void {
    this.rootFormGroup.control.setControl(this.formGroupName(), this.socials);
  }

  ngOnDestroy(): void {
    this.rootFormGroup.control.removeControl(this.formGroupName());
  }
}
