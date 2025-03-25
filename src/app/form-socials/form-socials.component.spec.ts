import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSocialsComponent } from './form-socials.component';

describe('FormSocialsComponent', () => {
  let component: FormSocialsComponent;
  let fixture: ComponentFixture<FormSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSocialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
