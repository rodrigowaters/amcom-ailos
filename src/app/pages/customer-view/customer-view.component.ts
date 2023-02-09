import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../shared-modules/interfaces/customer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomersService} from "../../shared-modules/services/customers/customers.service";
import {LoadingService} from "../../shared-modules/services/loading/loading.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CPFValidatorForm} from "../../shared-modules/validators/cpf-validator-form";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  public form: FormGroup;
  public customer$: ICustomer;

  constructor(
    private formBuilder: FormBuilder, private loadingService: LoadingService,
    private customersService: CustomersService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    // Criar formulario
    this.createForm();
    this.customer$ = null;
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      customerCPF: ['', CPFValidatorForm.validarCPF()],
    });
  }

  submit(): void {
    // Verificar se o formulário é válido
    if (this.form.valid) {
      // Iniciar loading da requisição
      this.loadingService.show();
      // Resgatar informações para payload
      const customerCPF = this.form.value.customerCPF;
      // Iniciar requisição
      this.customersService.get(customerCPF.trim()).subscribe((response) => {
        // TODO: Por se tratar de um teste técnico, não foi implementado a busca de forma correta, apenas para demonstrar o funcionamento do loading e leitura dos dados
        // Verificar se o cliente existe na base
        // 01138498009
        // 08238366062
        const customerFiltered = response.filter((customer) => customer.cpf === customerCPF);

        // Verificar se o cliente foi encontrado
        if (customerFiltered.length === 0) {
          // Cliente não encontrado, avisar usuario
          this.snackBar.open('Cliente não encontrado', '', {
            duration: 2000,
          });
        } else {
          this.customer$ = customerFiltered[0];
        }

        // Fechar loading da requisição
        this.loadingService.hide();
      });
    }
  }

  clearCustomerData(): void {
    this.customer$ = null;
  }

  getDescriptionByStatusCode(status: number): string {
    return status === 1 ? 'Regular' : 'Irregular';
  }

}
