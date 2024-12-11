const mineflayer = require('mineflayer');
const config = require('./config.json'); 

async function createBot(botConfig) {
  try {
    
    const bot = mineflayer.createBot({
      host: config.ip,
      port: config.port,
      username: botConfig.name,
      plugins: {
        
      }
    });

    bot.on('spawn', () => {
      console.log(`Bot ${botConfig.name} spawned in the world`);
    });

    bot.on('error', (err) => {
      console.error(`Bot ${botConfig.name} erro: ${err.message}`);
     
    });

    bot.on('end', () => {
      console.log(`Bot ${botConfig.name} desconectado. Ignorando e passando para o próximo bot.`);
    });

    bot.on('login', () => {
      console.log(`Bot ${botConfig.name} logged in`);
    });

  } catch (error) {
    console.error(`Erro ao criar o bot ${botConfig.name}:`, error);
  }
}

async function createBots() {
  for (let botConfig of config.bots) {
    console.log(`Criando bot: ${botConfig.name}`);
    
    await new Promise(resolve => {
      const bot = mineflayer.createBot({
        host: config.ip,
        port: config.port,
        username: botConfig.name,
        plugins: {
          
        }
      });

      bot.once('login', () => {
        console.log(`Bot ${botConfig.name} logged in`);
        setTimeout(resolve, 5000); 
      });

      bot.once('error', (err) => {
        console.error(`Bot ${botConfig.name} erro: ${err.message}`);
        setTimeout(resolve, 5000); 
      });

      bot.once('end', () => {
        console.log(`Bot ${botConfig.name} desconectado. Ignorando e passando para o próximo bot.`);
        setTimeout(resolve, 5000); 
      });
    });
  }
}

createBots();
