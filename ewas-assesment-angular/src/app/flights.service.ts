import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightsService {

    constructor(private http: HttpClient) {
    }

    public getAllFlights() {
        return this.http.post('localhost:3000/allFlights/', null).toPromise();
    }

    public createComment() {
        return this.http.post('localhost:3000/createComment/', null).toPromise();
    }

    public retrieveCommentsByFlightId(flight_id: number) {
        return this.http.post('localhost:3000/commentsByFlightId/', flight_id).toPromise();
    }
}