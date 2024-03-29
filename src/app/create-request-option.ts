import { HttpParams } from '@angular/common/http';

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
      if (req[key]) {
        if (Array.isArray(req[key])) {
          options = options.set(key, JSON.stringify(req[key]));
        } else {
          options = options.set(key, req[key]);
        }
      }
    });
  }
  return options;
};
