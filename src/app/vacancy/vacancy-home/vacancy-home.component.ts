import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vacancy-home',
  templateUrl: './vacancy-home.component.html',
  styleUrls: ['./vacancy-home.component.css']
})
export class VacancyHomeComponent implements OnInit {
  @Input() truck

  constructor() { }

  ngOnInit(): void {
  }

}
