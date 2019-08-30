import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-temp-list',
  templateUrl: './temp-list.component.html',
  styleUrls: ['./temp-list.component.css']
})
export class TempListComponent implements OnInit {
  public datas=[];
  constructor(private _dataservice:DatasourceService) { }

  ngOnInit() {
    this._dataservice.getdata()
        .subscribe(data => {this.datas = data
        console.log(data);
        });
        
  }

}
