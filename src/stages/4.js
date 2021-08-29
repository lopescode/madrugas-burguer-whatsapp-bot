import { storage } from "../storage.js";

export const stageFour = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 5;

    console.log(message);
    
    if (message === "*") {
      storage[from].stage = 0;
      storage[from].itens = [];

      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    }
  }
  /*
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 5;

    if (message === "*") {
      storage[from].stage = 0;
      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    }

    let request = "";

    const itens = storage[from].itens;
    console.log(itens)
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        request += item.title + ".";
      } else {
        request += item.title + ", ";
      }
    });
    const total = storage[from].itens.length;

    await client.sendText(
      message.from,
      `🗒️ *RESUMO DO PEDIDO*: \
      \n\n🧁 Pedidos: *${request}* \
      \n🚚 Taxa de entrega: *a confirmar*. \
      \n📍 Endereço: *${message}* \
      \n💰 Valor do pedido: *${total * 6},00 reais*. 
      \n⏳ Tempo de entrega: *50 minutos*. \n\n` +
        "🔊 ```Agora, informe a forma de pagamento e se vai precisar de troco, por gentileza.```"
    );

    return "✅ *Prontinho, pedido feito!* \
    \n\nAgora, se você ainda não sabe o valor da taxa de entrega para sua região,  \
    vou te passar para um atendente para que ele verique o valor da *taxa de entrega*. \
    \n\n⏳ *Aguarde um instante*.";
  },
  */
};
