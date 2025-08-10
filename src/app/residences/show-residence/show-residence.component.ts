import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Residence } from '../../model/residence.model';
import { ResidenceService } from '../../service/residence.service';
import { Lot } from '../../model/lot.model';
import { LotService } from '../../service/lot.service';

@Component({
  selector: 'app-show-residence',
  imports: [CommonModule, RouterLink],
  templateUrl: './show-residence.component.html',
  styleUrl: './show-residence.component.css'
})
export class ShowResidenceComponent implements OnInit {
  residence= new Residence();
  lots: Lot[] = [];
  
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly residenceService: ResidenceService,
    private readonly lotService: LotService
  ) {}

  ngOnInit(): void {
      const residenceId = this.activatedRoute.snapshot.params['id'];
      this.chargerResidence(residenceId);
      this.chargerLots(residenceId);
  }

  chargerResidence(residenceId: number) {
    this.residenceService.consulterResidence(residenceId).subscribe((res) => {
        console.log(res);
        this.residence = res;
    });
  }

  chargerLots(residenceId: number) {
    this.residenceService.consulterLotsByResidenceId(residenceId).subscribe((l) => {
        console.log(l);
        this.lots = l;
      });
  }

  supprimerLot(lot: Lot) {
    let conf = confirm('Etes vous sûr de vouloir supprimer ce lot ?');
    if (conf) {
      this.lotService.supprimerLot(lot.id).subscribe(() => {
        this.chargerResidence(lot.residence.id);
        this.chargerLots(lot.residence.id);
      });
      console.log('delete');
    }
  }
}
