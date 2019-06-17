# Pragma Brewery - Controle de temperatura

## Pré-requisitos:
- Node 10;
- Chrome;

## Execução:
Para rodar a aplicação de front-end basta seguir os seguintes passos:
```
$ npm i
$ npm start
```

A aplicação estará disponível no endereço: http://localhost:3000

## Orientações sobre uso:
O endereço da API está fixo no código como http://localhost:8080, desta forma é possível que haja um problema de CORS. Para resolver isso basta fechar todas as instâncias do chrome e executar o seguinte comando:

### Mac e Linux
```
open -a Google\ Chrome --args --disable-web-security --user-data-dir
```

### Windows
```
chrome.exe --disable-web-security
```

Pronto, isso deve resolver o problema de CORS e deverá ser possível realizar requisições para a API.