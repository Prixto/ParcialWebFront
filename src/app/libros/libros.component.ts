import { Component } from '@angular/core';
import {LibrosService} from "./libros.service";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  datos:any

  constructor(private libroService:LibrosService) {
  }

  ngOnInit(){
    this.libroService.getLibros().subscribe((data) => {

    })

  }

}
