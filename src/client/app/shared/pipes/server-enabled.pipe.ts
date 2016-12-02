import { Pipe, PipeTransform } from '@angular/core';
/*
 * Display the server's enabled status based on true or false
 * Usage:
 *   value | enabled
 * Example:
 *   {{ true |  enabled}}
 *   formats to ENABLED
*/
@Pipe({name: 'enabled'})
export class EnabledPipe implements PipeTransform {
  transform(value: boolean) {
    if (value) {
      return 'Enabled';
    } else {
        return 'Disabled';
    }
  }
}