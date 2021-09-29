import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyRecepComponent } from './apply-recep.component';

describe('ApplyRecepComponent', () => {
  let component: ApplyRecepComponent;
  let fixture: ComponentFixture<ApplyRecepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyRecepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyRecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
