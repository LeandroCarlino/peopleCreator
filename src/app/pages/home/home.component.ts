import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/person.interface';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  persona!: Persona;

  constructor(private resources: ResourcesService) {}

  ngOnInit(): void {}

  obtenerMujer() {
    this.persona = this.resources.obtenerMujer();
  }

  obtenerHombre() {
    this.persona = this.resources.obtenerHombre();
  }
}
