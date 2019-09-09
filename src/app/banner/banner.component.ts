import { Component, OnInit } from '@angular/core';
import {DatasourceService} from '../datasource.service'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public datas=[];
  constructor(private _dataservice:DatasourceService) { }

  ngOnInit() {
    this._dataservice.getdata()
        .subscribe(data => {this.datas = data
        console.log(data);
        });
        
  }


}
