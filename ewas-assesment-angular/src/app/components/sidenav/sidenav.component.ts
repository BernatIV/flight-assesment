import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FlightsService } from 'src/app/flights.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [FlightsService]
})
export class SidenavComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  public flights;

  // items in side bar
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  navFillerFlights = [
    {id: "1", code: "DE4536"},
    {id: "2", code: "BJ6336"},
    {id: "3", code: "KF4521"},
    {id: "4", code: "ER7892"},
    {id: "5", code: "LS1234"},
    {id: "6", code: "PW4567"},
    {id: "7", code: "QR7543"}
  ]

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
				media: MediaMatcher,
				private service: FlightsService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public showTable(id) {
	console.log(id);
	this.service.getAllFlights()
	.then(result => {
		this.flights = result;
		console.log('hello ' + this.flights);
	})
	.catch(err => console.log(err));
  }

  ngOnInit(): void {
	this.service.getAllFlights()
	.then(result => {
		this.flights = result;
		console.log('hello ' + this.flights);
	})
	.catch(err => console.log(err));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  

}
