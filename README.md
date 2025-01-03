# Mine Automation bot 2.0

Bem-vindo ao **Mine Automation Bot**, um projeto automatizado para gerenciar bots em servidores Minecraft. Este projeto permite que você:

- Envie múltiplos bots para um servidor Minecraft.
- Deixe os bots em modo AFK (ausente).
- Teste a capacidade do servidor, incluindo cenários de stress test que podem levar o servidor a sobrecarregar ou crashar.

⚠️ **Atenção:** O uso deste projeto para crashar servidores de forma intencional pode ser considerado antiético ou até mesmo ilegal, dependendo das circunstâncias. Use-o com responsabilidade e apenas para fins educacionais ou de teste em servidores autorizados.

## Funcionalidades

- **Gerenciamento de Bots:** Envie múltiplos bots para um servidor específico.
- **Modo AFK:** Bots podem permanecer no servidor sem ações adicionais.
- **Stress Test:** Simule situações de alta carga para avaliar a estabilidade do servidor.

## Problemas Conhecidos

Este projeto utiliza a biblioteca [Mineflayer](https://github.com/PrismarineJS/mineflayer). No entanto, alguns problemas podem surgir relacionados aos arquivos do Mineflayer:

- **Erros de dependências ou configurações:** Se ocorrerem problemas com os arquivos do Mineflayer, é recomendado **deletar o arquivo problemático**.

## Instalação

1. Abaixe o repositorio:
   ```bash
   clique no code/download.zip & extraia
   cd Mine_Automation_bot
   ```
   
   ou
   
1.1 Clone o repositorio:
   ```bash
   git clone https://github.com/GabrielNat1/Mine_Automation_bot.git
   cd  Mine_Automation_bot
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as opções no arquivo `config.json`:
   ```json
   {
     "server": "ip_do_servidor",
     "port": "porta_do_servidor",
     // -- adicionar a quantidade de bots que deseja -- //
   }
   ```

5. Inicie o script:
   ```bash
   node index.js
   ```

## Requisitos

- Node.js (versão 16 ou superior)
- NPM

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar o projeto.

## Aviso Legal

Este projeto foi desenvolvido apenas para fins educacionais e de teste. O autor **não se responsabiliza pelo uso indevido deste software**. Certifique-se de ter autorização do proprietário do servidor antes de realizar qualquer teste..
