import { Client } from 'paho-mqtt';
const BROKER="6e19efb1a1d6413fa4d16cf7b5a445c8.s2.eu.hivemq.cloud"
const BROKER_PORT=8884
const USERNAME_BROKER="plantaholic"
const PASSWORD_BROKER="Plantaholic123"
import store from "../store"
import { updateTemperature,updateHumidity,updateLight,updateMoisture,updateLed } from '../reducers/dataMQTT';


export default class MQTT{
    constructor(username,idGarden){
      this.username=username
      this.idGarden=idGarden
      this.onMessageArrived = this.onMessageArrived.bind(this)
      this.onConnectionLost = this.onConnectionLost.bind(this)
      const client = new Client(BROKER,Number(BROKER_PORT), username+String(Math.random()));
      client.onMessageArrived = this.onMessageArrived;
      client.onConnectionLost = this.onConnectionLost;
      client.connect({ 
        onSuccess: this.onConnect,
        useSSL: true,
        userName:USERNAME_BROKER,
        password:PASSWORD_BROKER,
        reconnect:true,
        cleanSession:true,
        onFailure: (e) => {console.log("here is the error" , e); }
      });
      this.client=client
    }
  
    onMessageArrived(entry) {
      switch (entry.topic){
        case `${this.username}/${this.idGarden}/Data/Temperature`:
          var action=updateTemperature(Number(entry.payloadString))
          store.dispatch(action);
          break;
        case `${this.username}/${this.idGarden}/Data/Humidity`:
           var action=updateHumidity(Number(entry.payloadString))
          store.dispatch(action);
          break;
        case `${this.username}/${this.idGarden}/Data/Light`:
            var action=updateLight(Number(entry.payloadString))
            store.dispatch(action);
          break;
        case `${this.username}/${this.idGarden}/Data/Moisture`:
            var action=updateMoisture(Number(entry.payloadString))
            store.dispatch(action);
          break;
        case `${this.username}/${this.idGarden}/Broadcast/Led`:
            var action=updateLed(Number(entry.payloadString))
            store.dispatch(action);
      }
    }
  
  
    onConnect = () => {
      console.log("Connected MQTT BROKER!!!!");
      this.client.subscribe(`${this.username}/${this.idGarden}/Data/Moisture`)
      this.client.subscribe(`${this.username}/${this.idGarden}/Data/Temperature`);
      this.client.subscribe(`${this.username}/${this.idGarden}/Data/Humidity`);
      this.client.subscribe(`${this.username}/${this.idGarden}/Data/Light`);
      this.client.subscribe(`${this.username}/${this.idGarden}/Broadcast/Led`)
    };
  
    onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
      }
    }
    controlLED(status)
    {
      try {
        this.data.led=!this.data.led
        this.setData(this.data)
        this.client.publish(`${this.username}/${this.idGarden}/Control/Led`, payload=String(Number(this.data.led)), qos=1)
      }
      catch
      {
        console.log("Đã xảy ra lỗi khi public message")
      }
    }
    disconect(){
      console.log("Disconect MQTT Broker!!!")
      this.client.disconnect()
    }
  }