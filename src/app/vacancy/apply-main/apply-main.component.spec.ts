import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyMainComponent } from './apply-main.component';

describe('ApplyMainComponent', () => {
  let component: ApplyMainComponent;
  let fixture: ComponentFixture<ApplyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
