import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysearch'
})
export class MysearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!args)
    {
      return value;
    }
    else{
      args=args;
    }
    return value.filter(MyData=>{
      return MyData.title.includes(args)==true
    })
  }

}
