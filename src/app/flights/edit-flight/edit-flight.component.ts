import {Component, OnInit, ViewChild} from '@angular/core';
import {FlightsService} from "../../core/services/flights.service";
import {ActivatedRoute} from "@angular/router";
import {FlightFormComponent} from "../flight-form/flight-form.component";
import {tap} from "rxjs/operators";
import {Flight} from "../../models/flight.model";

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent | undefined;
  flight: Flight | undefined;

  constructor(
    private flightsService: FlightsService,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit() {
    this.loadFlight();
  }


  private  loadFlight() {
    const key =this.route.snapshot.params['key'];
    this.flightsService.getFlight(key).pipe(tap(flight => this.flightForm?.setFlight(flight)))
        .subscribe(flight => this.flight = flight);
  }

}
