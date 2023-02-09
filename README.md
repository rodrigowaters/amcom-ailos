# Projeto
Este projeto tem como objetivo solucionar o teste técnico de forma prática e eficiente.

## Instalação
Faça o clone do repositório: `git clone https://github.com/rodrigowaters/amcom-ailos.git`  

Entre na pasta do projeto: `cd amcom-ailos`  

Instale as dependências: `npm install` ou `yarn install`  

Inicie a aplicação: `npm start` ou `yarn start`  

## Uso
Utilizar o CPF `01138498009` para testar a aplicação

Acesse a aplicação pelo seu navegador: `http://localhost:4200`  

Será direcionado para `/customer`, aonde você poderá validar o CPF.

Após validar o CPF, será direcionado para `/customer/view`, onde você poderá realizar novamente a consulta e visualizar os dados do cliente e os suas respectivas informações bancárias.

## Aplicação
A aplicação foi desenvolvida utilizando Angular 7, com o framework Material.   

Também foi utilizada a base shared-module, para que os componentes e serviços sejam compartilhados entre os módulos da aplicação.    

E para finalizar a aplicação está utilizando o padrão de projeto Service, para que a instância da classe CustomerService seja única, e assim, não seja necessário criar uma nova instância toda vez que for necessário utilizar o serviço.    

É possível visualizar a aplicação em funcionamento no link: `https://rodrigowaters.github.io/amcom-ailos/`

## Licença
Este projeto está licenciado sob a licença MIT.
