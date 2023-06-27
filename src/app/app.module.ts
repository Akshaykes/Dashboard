import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';
import { ProductsComponent } from './products/products.component';
import { ReviewComponent } from './review/review.component';
import { ReviewChartComponent } from './review-chart/review-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MaincontentComponent,
    CardComponent,
    AreaChartComponent,
    PieChartComponent,
    TableComponent,
    ProductsComponent,
    ReviewComponent,
    ReviewChartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatPaginatorModule,
    HighchartsChartModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
