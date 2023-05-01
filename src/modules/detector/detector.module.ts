import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectorComponent } from './components/detector/detector.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TuiBadgeModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    DetectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TuiButtonModule,
    TuiBadgeModule,
    TuiTextAreaModule
  ]
})
export class DetectorModule { }
