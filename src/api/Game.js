import {w3cwebsocket as W3CWebSocket} from "websocket";

export class GameAPI {

  constructor() {
    this.base_url = "https://dry-temple-99567.herokuapp.com";
    this.base_ws_url = "wss://dry-temple-99567.herokuapp.com";
  }

  gameCommunicationConnect(on_open, on_message, on_error, user_id) {
    this.userId = user_id;
    this.fullUrl = `${this.base_ws_url}/ws/${this.userId}/`;
    try {
      this.client = new W3CWebSocket(this.fullUrl);
      this.interval = setInterval(() => {
        this.gameCommunicationSend(
          {search: true, type: "action"}
        );
      }, 1000);
    } catch (e) {

    }
    this.client.onopen = on_open;
    this.client.onmessage = on_message;
    this.client.onerror = on_error;
  }

  async gameCommunicationSend(message) {
    if (parseInt(this.client.readyState) === 1) {
      await this.client.send(JSON.stringify(message));
    } else {
      this.reconnect();
    }
  }

  closeGameCommunication() {
    this.client.close();
  }

  reconnect() {
    this.closeGameCommunication();
    this.gameCommunicationConnect(
      this.client.onopen, this.client.onmessage, this.client.onerror, this.userId
    );
  }
}
