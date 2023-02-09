import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomersService} from "../../shared-modules/services/customers/customers.service";
import {LoadingService} from "../../shared-modules/services/loading/loading.service";
import {CPFValidatorForm} from '../../shared-modules/validators/cpf-validator-form';
import {MatSnackBar} from "@angular/material/snack-bar";
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService,
    private loadingService: LoadingService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Criar formulario
    this.createForm();
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
          // Cliente encontrado, visualizar página do cliente
          const navExtras: NavigationExtras = {
            state: {customer: customerFiltered[0]}
          };
          this.router.navigate(['customer/view'], navExtras);
        }

        // Fechar loading da requisição
        this.loadingService.hide();
      });
    }
  }

}
