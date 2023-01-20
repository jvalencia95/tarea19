import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


  listado: Card[] = []

  ngOnInit(): void {

    this.service.getComments().subscribe({
      next: (res: Card[]) => this.listado = res
    })

  }

  constructor(private service: CardsService) { }
}
