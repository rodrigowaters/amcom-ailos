interface checkingAccounts {
  id: number
  number: string
}

interface investmentAccounts {
  id: number
  number: string
}

export interface ICustomer {
  id: number
  name: string
  cpf: string
  status: number,
  checkingAccounts: checkingAccounts[]
  investmentAccounts: investmentAccounts[]
}
