import { menu } from "../menu/menu.js";
import { storage } from "../storage.js";
import { neighborhoods } from "./neighborhoods.js";

export const stageOne = {
  exec({ from, message, client }) {
    // Cardápio
    if (message === "1") {
      let msg = "🚨 *CARDÁPIO* 🚨\n\n";

      Object.keys(menu).map((value) => {
        const element = menu[value];
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
        } else if (value === "8") {
          msg += `\n8️⃣ - ${element.description}`;
        } else if (value === "9") {
          msg += `\n9️⃣ - ${element.description}`;
        }
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```CANCELAR PEDIDO``` \
        \n\nPara visualizar o cardápio online, *acesse*: https://bigdim.com.br/wapp/madrugasburguer/store/#/delivery/loja/madrugasburguer \
        \n\n*Digite o número da categoria que você deseja pedir:*";

      storage[from].stage = 2;

      return msg;
    }

    // Taxa de entrega
    else if (message === "2") {
      return (
        "\n----------------------------------- \
        \n1️⃣ - FAZER PEDIDO \
        \n0️⃣ - FALAR COM ATENDENTE \
        \n\n" +
        neighborhoods +
        "\n----------------------------------- \
        \n1️⃣ - FAZER PEDIDO \
        \n0️⃣ - FALAR COM ATENDENTE"
      );
    }

    // Falar com atendente
    else if (message === "0") {
      client.markUnseenMessage(from);

      storage[from].stage = 6;

      return "🔃 Encaminhando você para um atendente. \
        \n⏳ *Aguarde um instante*.";
    }

    return "❌ *Digite uma opção válida, por favor.*";
  },
};
