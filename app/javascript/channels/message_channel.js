import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
  },

  disconnected() {
  },

// WebSocketを通じてデータの更新がある際に実行される関数
  received(data) {
    // メッセージを表示する要素のHTMLを取得する
    const messagesList = document.getElementById('messages')
    // 表示するP要素を作成する
    const elementP = document.createElement('p')
    // 表示する値を取得する
    const textNode = document.createTextNode(data.text.content);

    // 取得した値をPタグに挿入する
    elementP.appendChild(textNode)
    // 実際にブラウザに表示する
    messagesList.appendChild(elementP)
  }
});
