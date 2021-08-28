import { storage } from "../storage.js";
import { batatas } from "../menu/batatas.js";
import { bebidas } from "../menu/bebidas.js";
import { combos } from "../menu/combos.js";
import { lanches } from "../menu/lanches.js";
import { molhos } from "../menu/molhos.js";
import { porcoes } from "../menu/porcoes.js";
import { promocoes } from "../menu/promocoes.js";

export const stageTwo = {
  exec({ from, message, client }) {
    if (message === "1") {
      let msg = "🚨 CARDÁPIO - Promoções 🚨\n\n";

      Object.keys(promocoes).map((value) => {
        const element = promocoes[value];
        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        }
      });
      msg +=
      "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
      \n\n*Digite o número da categoria que você deseja pedir:*";
    storage[from].stage = 3;

    return msg;
    } else if (message === "2") {
      let msg = "🚨 CARDÁPIO - Combos 🚨\n\n";

      Object.keys(combos).map((value) => {
        const element = combos[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        } else if (value === "2") {
          msg += `\n2️⃣ - ${element.description} `;
        } else if (value === "3") {
          msg += `\n3️⃣ - ${element.description}`;
        } else if (value === "4") {
          msg += `\n4️⃣ - ${element.description}`;
        } else if (value === "5") {
          msg += `\n5️⃣ - ${element.description}`;
        } else if (value === "6") {
          msg += `\n6️⃣ - ${element.description}`;
        } else if (value === "7") {
          msg += `\n7️⃣ - ${element.description}`;
        }
      });

      msg +=
        "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
        \n\n*Digite o número da categoria que você deseja pedir:*";
      storage[from].stage = 3;

      return msg;
    } else if (message === "3") {
      let msg = "🚨 CARDÁPIO - Lanches 🚨\n\n";

      Object.keys(lanches).map((value) => {
        const element = lanches[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        }
      });
      msg +=
      "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
      \n\n*Digite o número da categoria que você deseja pedir:*";
    storage[from].stage = 3;

    return msg;
    } else if (message === "4") {
      let msg = "🚨 CARDÁPIO - Porções 🚨\n\n";

      Object.keys(porcoes).map((value) => {
        const element = porcoes[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        }
      });
      msg +=
      "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
      \n\n*Digite o número da categoria que você deseja pedir:*";
    storage[from].stage = 3;

    return msg;
    } else if (message === "5") {
      let msg = "🚨 CARDÁPIO - Batatas 🚨\n\n";

      Object.keys(batatas).map((value) => {
        const element = batatas[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        }
      });
      msg +=
      "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
      \n\n*Digite o número da categoria que você deseja pedir:*";
    storage[from].stage = 3;

    return msg;
    } else if (message === "6") {
      let msg = "🚨 CARDÁPIO - Molhos 🚨\n\n";

      Object.keys(molhos).map((value) => {
        const element = molhos[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        }
      });
      msg +=
      "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
      \n\n*Digite o número da categoria que você deseja pedir:*";
    storage[from].stage = 3;

    return msg;
    } else if (message === "7") {
      let msg = "🚨 CARDÁPIO - Bebidas 🚨\n\n";

      Object.keys(bebidas).map((value) => {
        const element = bebidas[value];

        if (value === "1") {
          msg += `1️⃣ - ${element.description}`;
        }
      });
      msg +=
      "\n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
      \n\n*Digite o número da categoria que você deseja pedir:*";
    storage[from].stage = 3;

    return msg;
    }

    return "❌ *Digite uma opção válida, por favor.*";
  },
};
