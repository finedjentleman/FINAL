import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { ChartDaysComponent } from './chart-days/chart-days.component';
import { ChartToolsComponent } from './chart-tools/chart-tools.component';
import { ChartAssigneesComponent } from './chart-assignees/chart-assignees.component';
import { TableDetailsComponent } from './table-details/table-details.component';

//reading JSON
import { JsonReaderComponent } from './json-reader/json-reader.component';

//charts and tables
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

//materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

//card components
import { CardToolsComponent } from './card-tools/card-tools.component';
import { CardDaysComponent } from './card-days/card-days.component';
import { CardAssigneesComponent } from './card-assignees/card-assignees.component';
import { CardTableComponent } from './card-table/card-table.component';

//primeng
import { TabViewModule } from 'primeng/tabview';
import { TabviewToolsComponent } from './tabview-tools/tabview-tools.component';

@NgModule({
  imports:      [
    BrowserModule, FormsModule,
    ChartsModule,
    Ng2SmartTableModule,
    /* angular/material */
    BrowserAnimationsModule,
    MatCardModule,
    /* primeng */
    TabViewModule
    ],
  declarations: [ AppComponent,
    JsonReaderComponent,
    ChartDaysComponent,
    ChartToolsComponent,
    ChartAssigneesComponent,
    TableDetailsComponent,
    /* angular/material */
    CardToolsComponent,
    CardDaysComponent,
    CardAssigneesComponent,
    CardTableComponent,
    /* primeng */
    TabviewToolsComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
