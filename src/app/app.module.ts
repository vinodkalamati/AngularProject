import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TempListComponent } from './temp-list/temp-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MysearchPipe } from './mysearch.pipe';
import { DatasourceService } from './datasource.service';

@NgModule({
  declarations: [
    AppComponent,
    TempListComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    MoviedetailComponent,
    MysearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatasourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
