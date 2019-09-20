import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from './services/shared.service';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(values: any[], searchText: string): any[] {
    if (!values) return [];
    if (!searchText) return values;
    return values.filter((it) => it.phone.includes(searchText)|| it.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
