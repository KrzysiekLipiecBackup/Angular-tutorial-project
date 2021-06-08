import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string) {
    if (!value) return null;

    let parts = value.split(' ');
    parts.forEach((part, index) => {
      if (this.isPreposition(part) && index != 0)
        parts[index] = part.toLowerCase();
      else
        parts[index] = part.substr(0,1).toUpperCase() + part.substr(1).toLowerCase();
    });
    return parts.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositons: string[] = [
      'the',
      'of'
    ];

    return prepositons.includes(word.toLowerCase());
  }
}
