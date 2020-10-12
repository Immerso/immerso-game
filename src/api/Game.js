import {w3cwebsocket as W3CWebSocket} from "websocket";
import axios from "axios";

export class GameAPI {

  constructor() {
    this.base_url = "http://localhost:8000";
    this.base_ws_url = "ws://localhost:8000";
  }

  async createRandomUser(username){
    return await axios.post(this.base_url + "/api/user/register/", {
      username,
      first_name: username,
      password: "qwerty12345"
    });
  }

  async openPack(code){
    return await axios.put(this.base_url + "/api/user/open/", {
      code
    });
  }

  gameCommunicationConnect(on_open, on_message, on_error, user_id) {
    this.userId = user_id;
    this.fullUrl = `${this.base_ws_url}/ws/${this.userId}/`;
    try {
      this.client = new W3CWebSocket(this.fullUrl);
      this.interval = setInterval(() => {
        if (parseInt(this.client.readyState) === 1) {
          this.gameCommunicationSend(
            {search: true, type: "action"}
          );
        } else {
          clearInterval(this.interval);
        }
      }, 5000);
    } catch (e) {
      console.error(e)
    }
    this.client.onopen = on_open;
    this.client.onmessage = on_message;
    this.client.onerror = on_error;
  }

  async gameCommunicationSend(message) {
    await this.client.send(JSON.stringify(message));
  }

  closeGameCommunication() {
    this.client.close();
  }

  reconnect() {
    this.closeGameCommunication();
    // this.gameCommunicationConnect(
    //   this.client.onopen, this.client.onmessage, this.client.onerror, this.userId
    // );
  }
}
