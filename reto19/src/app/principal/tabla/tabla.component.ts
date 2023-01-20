import { Component } from '@angular/core';
import { TablaServicesService } from '../../services/tabla-services.service';
import { Tabla } from '../../models/tabla';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor(private service: TablaServicesService) { }

  lista: Tabla[] = []

  ngOnInit() {
    this.service.getData().subscribe({
      next: (data: Tabla[]) => {
        this.lista = data
      }
    })
  }
}
