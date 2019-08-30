import { Component, OnInit } from '@angular/core';
import {DatasourceService} from '../datasource.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public datas=[];
  constructor(private _dataservice:DatasourceService) { }

  ngOnInit() {
    this._dataservice.getdata()
        .subscribe(data => {this.datas = data
        console.log(data);
        });
        
  }

}
