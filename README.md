# Sistema análise de eficiência de máquinas

## Sumário

1. [Visão Geral](#visão-geral)
2. [Ferramentas Utilizadas](#ferramentas-utilizadas)
3. [Arquitetura do Sistema](#arquitetura-do-sistema)
5. [Documentação com Swagger](#documentação-com-swagger)
6. [Experiência com Ferramentas](#experiência-com-ferramentas)

## Visão Geral

Este projeto é um teste back-end para a empresa Grupo Setta e consiste no desenvolvimento de um sistema análise de eficiência de máquinas. A aplicação foi desenvolvida utilizando TypeScript, Nest.js, TypeORM, Swagger, Redis e PostgreSQL.

## Ferramentas Utilizadas

- **TypeScript**: Linguagem de programação utilizada para desenvolvimento do projeto.
- **Nest.js**: Framework para construção de aplicações Node.js eficientes, confiáveis e escaláveis.
- **TypeORM**: ORM utilizado para interagir com o banco de dados PostgreSQL.
- **Swagger**: Ferramenta para documentação e teste dos endpoints da API.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados.

## Arquitetura do Sistema

A arquitetura do sistema é composta por uma aplicação back-end que provê uma API RESTful em JSON. Os principais componentes são:

- **machine**: Contém os controladores e serviços responsáveis pelas manipulação máquinas . Aqui fica a lógica para lidar com a criação, atualização, leitura e exlusão de máquinas.

- **machineEfficiency**: Aqui reside a lógica para manipulação dos dados de eficiência de uma máquina. Implementei as operações CRUD (Create, Read, Update, Delete) seguindo os padrões do NestJS. Isso significa que tem controladores para manipular as solicitações HTTP relacionadas a machineEffiencyu e serviços para realizar as operações de banco de dados.

- **history**: Essa entidade lida com gravar um historico de dados relacionados a Máquina e a Eficiência de uma Máquina.

## Módulos


### Máquinas (Machine)

- **machine.module.ts**: Gerencia tudo relacionado as máquinas.
- **machine.controller.ts**: Controla as solicitações de máquinas, como adicionar, obter listagem, atualizar e excluir.
- **machine.service.ts**: Aqui está a lógica real das máqquinas, como adicionar ou buscar máquinas no banco de dados.
- **machine.entity.ts**: Define a estrutura dos dados de uma máquina.
- **movie.repository.ts**: Interage com o banco de dados para buscar, adicionar ou excluir máquinas.
- 
- ### Eficiência de uma Máquina (MachineEfficiency)

- **machine.module.ts**: Gerencia tudo relacionado as MachineEfficiency.
- **machine.controller.ts**: Controla as solicitações de MachineEfficiency, como adicionar, obter listagem, atualizar e excluir.
- **machine.service.ts**: Aqui está a lógica real das MachineEfficiency, como adicionar ou buscar máquinas no banco de dados.
- **machine.entity.ts**: Define a estrutura dos dados de uma MachineEfficiency.
- **movie.repository.ts**: Interage com o banco de dados para buscar, adicionar ou excluir MachineEfficiency.
- 
- ### History (Historico)

- **machine.module.ts**: Gerencia tudo relacionado as History.
- **machine.controller.ts**: Controla as solicitações de History, como adicionar, obter listagem, atualizar e excluir.
- **machine.service.ts**: Aqui está a lógica real das History, como adicionar ou buscar History no banco de dados.
- **machine.entity.ts**: Define a estrutura dos dados de uma History.
- **movie.repository.ts**: Interage com o banco de dados para buscar, adicionar ou excluir History.


## Documentação-com-Swagger

<p>Swagger é uma ferramenta popular para documentar APIs. Ele permite que os desenvolvedores descrevam, documentem e testem APIs de forma eficiente. Com o Swagger, você pode criar uma documentação interativa para sua API, facilitando para outros desenvolvedores entenderem como usar seus endpoints.</p>
<p>Link do Swagger: <a>http://localhost:3001</a></p>


## Experiência com Ferramentas

- TypeScript - 3 anos
- Nest.JS - 2 anos
- TypeORM - 2 anos
- Postgres - 3 anos
- Swagger - 2 anos

