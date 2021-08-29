import { storage } from "../storage.js";
import { batatas } from "../menu/batatas.js";
import { bebidas } from "../menu/bebidas.js";
import { combos } from "../menu/combos.js";
import { lanchesDaCasa } from "../menu/lanchesDaCasa.js";
import { lanchesDaVila } from "../menu/lanchesDaVila.js";
import { lanchesTradicionais } from "../menu/lanchesTradicionais.js";
import { molhos } from "../menu/molhos.js";
import { porcoes } from "../menu/porcoes.js";
import { promocoes } from "../menu/promocoes.js";

export const stageTwo = {
  exec({ from, message }) {
    // Promocoes
    if (message === "1") {
      let msg = "🚨 *PROMOÇÕES* 🚨\n\n";

      Object.keys(promocoes).map((value) => {
        const element = promocoes[value];
        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        }
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```CANCELAR PEDIDO``` ";
        
      storage[from].stage = 3;

      return msg;
    }

    // Combos
    else if (message === "2") {
      let msg = "🚨 *COMBOS* 🚨\n\n";

      Object.keys(combos).map((value) => {
        const element = combos[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "6") {
          msg += `\n6️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "7") {
          msg += `\n7️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        }
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Lanches da Casa
    else if (message === "3") {
      let msg = "🚨 *LANCHES DA CASA* 🚨\n\n";

      Object.keys(lanchesDaCasa).map((value) => {
        const element = lanchesDaCasa[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Lanches da Vila
    else if (message === "4") {
      let msg = "🚨 *LANCHES DA VILA* 🚨\n\n";

      Object.keys(lanchesDaVila).map((value) => {
        const element = lanchesDaVila[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "6") {
          msg += `\n6️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "7") {
          msg += `\n7️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        }
         
        else if (value === "8") {
          msg += `\n8️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        }
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Lanches Tradicionais
    else if (message === "5") {
      let msg = "🚨 *LANCHES TRADICIONAIS* 🚨\n\n";

      Object.keys(lanchesTradicionais).map((value) => {
        const element = lanchesTradicionais[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Porções
    else if (message === "6") {
      let msg = "🚨 *PORÇÕES* 🚨\n\n";

      Object.keys(porcoes).map((value) => {
        const element = porcoes[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Batatas
    else if (message === "7") {
      let msg = "🚨 *BATATAS* 🚨\n\n";

      Object.keys(batatas).map((value) => {
        const element = batatas[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "6") {
          msg += `\n6️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Molhos
    else if (message === "8") {
      let msg = "🚨 *MOLHOS* 🚨\n\n";

      Object.keys(molhos).map((value) => {
        const element = molhos[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 3;

      return msg;
    }

    // Bebidas
    else if (message === "9") {
      let msg = "🚨 *BEBIDAS* 🚨\n\n";

      Object.keys(bebidas).map((value) => {
        const element = bebidas[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "2") {
          msg += `\n2️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "3") {
          msg += `\n3️⃣ - ${element.title} 
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "4") {
          msg += `\n4️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "5") {
          msg += `\n5️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
        
        else if (value === "6") {
          msg += `\n6️⃣ - ${element.title}
          \nDescrição: ${element.description} \
          \nValor: R$${element.price}\n`;
        } 
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```"

      storage[from].stage = 2;

      return msg;
    }

    // Voltar ao Menu Anterior
    else if (message === "0") {
      storage[from].stage = 0;
      storage[from].itens = [];

      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    }

    return "❌ *Digite uma opção válida, por favor.*";
  },
};
