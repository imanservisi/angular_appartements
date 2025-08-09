import { Component, OnInit } from '@angular/core';
import { Residence } from '../model/residence.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residences',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './residences.component.html',
  styleUrl: './residences.component.css'
})
export class ResidencesComponent implements OnInit {

  residences: Residence[] = [];

  message: string = '';

  constructor(private residenceService: ResidenceService) {
    const nav = window.history.state;
    if (nav && nav.message) {
      this.message = nav.message;
    }
  }

  ngOnInit(): void {
      this.chargerResidences();
  }

  chargerResidences() {
    this.residenceService.listeResidences().subscribe(
        (res) => {
          this.residences = res;
        }
      );
  }

  supprimerResidence(res: Residence)
  {
    let conf = confirm('Etes-vous sûr de vouloir supprimer cette résidence ?');
    if (conf) {
      this.residenceService.supprimerResidence(res.id).subscribe(
        () => {
          this.chargerResidences();
        }
      );
    }
  }
}
