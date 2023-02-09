import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ICustomer} from "../../interfaces/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(protected httpClient: HttpClient) {
  }

  public get(cpf: string): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>('https://gist.githubusercontent.com/rodrigowaters/ed20fb68388c36c2cc7ee1413dc4fa01/raw/1d32305a5cdcdf1e00da1bee6b041a88d55348bf/amcon-ailos-customers.json?cpf='.concat(cpf));
  }
}
