# Primeiro Trabalho S206 - L1

## Integrantes: 
- Eduardo Karpfenstein - GES - 77
- Inajaha Costa - GES - 318

## Para Execução
1. Necessário a instalação do cypress. Abra o terminal e digite:

```
npm install cypress
```

2. Abrir cypress pela linha de comando:

```
./node_modules/.bin/cypress open
```

## Para Gerar o Relatório
1. Necessário adiconar a dependência para gerar o relatório de testes:

```
npm i --save-dev cypress-mochawesome-reporter
```

2. Rodar specs pela linha de comando:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

3. O arquivo contendo o relatório estará em: 
"..\testes\cypress\reports\html\index.html"