import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyHomeComponent } from './vacancy-home.component';

describe('VacancyHomeComponent', () => {
  let component: VacancyHomeComponent;
  let fixture: ComponentFixture<VacancyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
