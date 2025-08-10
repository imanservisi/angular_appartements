import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lot } from '../../model/lot.model';
import { LotService } from '../../service/lot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lot',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-lot.component.html',
  styleUrl: './add-lot.component.css'
})
export class AddLotComponent implements OnInit {

  newLot = new Lot();
  constructor(
    private readonly lotService: LotService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
      // vide pour le moment
  }

  addLot() {
    // TODO : ajouter le lien avec résidence
    this.lotService.ajouterLot(this.newLot).subscribe((l) => {
      const message = "Lot " + this.newLot.nomLot + " ajouté avec succès";
      this.router.navigate(['residences'], {state: {message}});
    })
  }
}
