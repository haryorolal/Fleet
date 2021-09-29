import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyVacantComponent } from './apply-vacant.component';

describe('ApplyVacantComponent', () => {
  let component: ApplyVacantComponent;
  let fixture: ComponentFixture<ApplyVacantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyVacantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyVacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
