import { Component, OnInit } from '@angular/core';
import { Quote } from '../../interfaces/quote.interface';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((data) => {
      this.quotes = data;
    });
  }
}
