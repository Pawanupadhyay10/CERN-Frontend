import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any ,filterstring:string) {
    if(value.length===0 || filterstring==='')return value;
    const lists=[];
    for(const list of value){
      if(list['task']===filterstring){
        lists.push(list);
      }
    }
    return lists;
  }

}
