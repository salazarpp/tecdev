import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeccarService } from '../teccar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cars = new BehaviorSubject<any>([]);

  constructor(
    private teccarService: TeccarService
  ) { }

  ngOnInit(): void {
    this.teccarService.getCars().subscribe(cars => {
      this.cars.next(cars);
    });
  }

}
