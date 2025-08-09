import { Routes } from '@angular/router';
import { ResidencesComponent } from './residences/index-residences/residences.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { UpdateResidenceComponent } from './residences/update-residence/update-residence.component';
import { ShowResidenceComponent } from './residences/show-residence/show-residence.component';

export const routes: Routes = [
    {path: "residences", component: ResidencesComponent},
    {path: "add-residence", component: AddResidenceComponent},
    {path: "updateResidence/:id", component: UpdateResidenceComponent},
    {path: "showResidence/:id", component: ShowResidenceComponent},
    {path: "", redirectTo: "residences", pathMatch: "full"}
];
