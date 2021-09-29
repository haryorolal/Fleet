import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaineVacancyComponent } from './containe-vacancy.component';

describe('ContaineVacancyComponent', () => {
  let component: ContaineVacancyComponent;
  let fixture: ComponentFixture<ContaineVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaineVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaineVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
