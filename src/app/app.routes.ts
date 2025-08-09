import { Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { ShowResidenceComponent } from './show-residence/show-residence.component';

export const routes: Routes = [
    {path: "residences", component: ResidencesComponent},
    {path: "add-residence", component: AddResidenceComponent},
    {path: "updateResidence/:id", component: UpdateResidenceComponent},
    {path: "showResidence/:id", component: ShowResidenceComponent},
    {path: "", redirectTo: "residences", pathMatch: "full"}
];
