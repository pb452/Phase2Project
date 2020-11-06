import { Injectable } from '@angular/core';
@Injectable()
export class HelperService {
  static toBool(val) {
    if (val === undefined || val === null || val === '' || val === 'false' || val === 'False') {
      return false;
    } else {
      return true;
    }
  }

  static shuffle(array) {
    let currentindex = array.length, temp, randomindex;

    while (0 !== currentindex) {
      randomindex = Math.floor(Math.random() * currentindex);
      currentindex -= 1;

      temp = array[currentindex];
      array[currentindex] = array[randomindex];
      array[randomindex] = temp;
    }
    return array;
  }
  static extend(out) {
    out = out || {};

    for (let i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (const key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }
    return out;
  }
}
