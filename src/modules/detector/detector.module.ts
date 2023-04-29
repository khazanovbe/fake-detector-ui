import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectorComponent } from './components/detector/detector.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    ReactiveFormsModule
  ],
})
export class DetectorModule { }
