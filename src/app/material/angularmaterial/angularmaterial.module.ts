import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

import {A11yModule} from '@angular/cdk/a11y';  
import {DragDropModule} from '@angular/cdk/drag-drop';  
import {PortalModule} from '@angular/cdk/portal';  
import {ScrollingModule} from '@angular/cdk/scrolling';  
import {CdkStepperModule} from '@angular/cdk/stepper';  
import {CdkTableModule} from '@angular/cdk/table';  
import {CdkTreeModule} from '@angular/cdk/tree'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports:[
    A11yModule,  
    CdkStepperModule,  
    CdkTableModule,  
    CdkTreeModule,  
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    PortalModule,
    ScrollingModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})
export class AngularmaterialModule { }
