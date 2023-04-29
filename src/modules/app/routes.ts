import { Route } from "@angular/router";

export const routes:Route[] = [
    {
        path: 'detector',
        loadChildren: () => import('./../detector/detector.module').then(m => m.DetectorModule)
    },
    {
        path: '',
        redirectTo: 'detector',
        pathMatch: 'full'
    }
];