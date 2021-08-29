import { promocoes } from "../menu/promocoes.js";
import { storage } from "../storage.js";

export const stageThree = {
  exec({ from, message }) {
    const order =
      "\n\n-----------------------------------      \
      \n#️⃣ - ```FINALIZAR pedido``` \
      \n*️⃣ - ```CANCELAR pedido```";

    // Voltar ao Menu Anterior
    if (message === "0") {
      storage[from].stage = 0;
      storage[from].itens = [];

      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    } else if (message === "*") {
      storage[from].stage = 0;
      storage[from].itens = [];

      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    } else if (message === "#") {
      storage[from].stage = 4;

      return "🗺️ Agora, informe o *ENDEREÇO*. \
        \n ( ```Rua, Número, Bairro``` ) \
        \n\n\n-----------------------------------\
        \n*️⃣ - ```CANCELAR pedido```";
    } else {
      if (!promocoes[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
    }

    storage[from].itens.push(promocoes[message]);

    return `✅ ${promocoes[message].title} adicionado com sucesso!` + order;
  },
};
