import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectorComponent } from './components/detector/detector.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TuiActionModule, TuiBadgeModule, TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { NewsComponent } from './components/news/news/news.component';



@NgModule({
  declarations: [
    DetectorComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TuiButtonModule,
    TuiBadgeModule,
    TuiTextAreaModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    FormsModule,
    ReactiveFormsModule,
    TuiActionModule
  ]
})
export class DetectorModule { }
