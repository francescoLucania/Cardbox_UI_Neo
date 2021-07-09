import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: any[], searchCode: string): any[] {
    if (!searchCode) {
      return value
    }
    return value.filter((color)=>{
      return `${color.colorCode} ${color.colorTitle} ${color.colorValue}`.toLowerCase().includes(searchCode.toLowerCase())
    })
  }

}
