import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookedSeats } from '../../models/booked-seats';
import { FilmShow } from '../../models/film-show';

@Injectable({
  providedIn: 'root'
})
export class BookedSeatsService {
  
  private filmShowUrl = 'http://localhost:8080/admin/film-show';
  constructor(private http : HttpClient) { }
  
  bookASeat(bookedSeat : BookedSeats) :Observable<FilmShow>{
    return this.http.put<FilmShow>(`${this.filmShowUrl}/book-seat`,bookedSeat);
  }
  
  getBookedSeatsByShow(id: number) :Observable<BookedSeats[]> {
    return this.http.get<BookedSeats[]>(`${this.filmShowUrl}/book-seats-by-show/${id}`);
  }
}
