import { Pipe, PipeTransform } from '@angular/core';
/*
 * Display the server's status based on the color it returns
 * Usage:
 *   value | status
 * Example:
 *   {{ true |  enabled}}
 *   formats to ENABLED
*/
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(value: String) {
    let status: String;
    switch (value) {
    case 'green':
        status = "UP";
        break;
    case 'yellow':
        status = "SLOW";
        break;
    case 'red':
        status = "DOWN";
        break;
    default: 
      status = 'NONE';
    }
    return status; 
  }
}