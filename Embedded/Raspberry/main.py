import serial
import threading
import paho.mqtt.client as paho
from paho import mqtt
import time
import random
import json


BROKER="6e19efb1a1d6413fa4d16cf7b5a445c8.s2.eu.hivemq.cloud"
BROKER_PORT=8883
BROKER_USERNAME="plantaholic"
BROKER_PASSWORD="Plantaholic123"
USERNAME_CLIENT="Baongan"
ID_GRADEN="20231212001548435561"
statusThread=True
statusLed=0
# Khởi tạo đối tượng Serial
ser = serial.Serial('/dev/ttyACM0', 9600)  # Hãy thay đổi '/dev/ttyUSB0' thành cổng Serial tương ứng trên Raspberry Pi


# setting callbacks for different events to see if it works, print the message etc.
def on_connect(client, userdata, flags, rc, properties=None):
    print("CONNACK received with code %s." % rc)

# with this callback you can see if your publish was successful
def on_publish(client, userdata, mid, properties=None):
    print("mid: " + str(mid))

# print which topic was subscribed to
def on_subscribe(client, userdata, mid, granted_qos, properties=None):
    print(str(granted_qos))
def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.qos) + " " + str(msg.payload))
    ser.write(msg.payload)
    statusLed=msg.payload
    print(statusLed)
    client.publish(f"{USERNAME_CLIENT}/{ID_GRADEN}/Broadcast/Led",statusLed,qos=0)


# client_id is the given name of the client
client = paho.Client(client_id=ID_GRADEN, userdata=None)
client.on_connect = on_connect

# set username and password
client.username_pw_set(BROKER_USERNAME,BROKER_PASSWORD)
client.tls_set(tls_version=mqtt.client.ssl.PROTOCOL_TLS)

client.connect(BROKER,BROKER_PORT)

# setting callbacks, use separate functions like above for better visibility
client.on_subscribe = on_subscribe
client.on_message = on_message
client.on_publish = on_publish

def sender():
    while statusThread:
    
        received_data =ser.readline()
        data=received_data.decode()
        data=json.loads(data)
        hum=data["Humidity"]
        tem=data["Temprature"]
        light=data["Light"]
        soil=data["Moisture"]
        print(data)
        client.publish(f"{USERNAME_CLIENT}/{ID_GRADEN}/Data/Temperature",tem,qos=0)
        client.publish(f"{USERNAME_CLIENT}/{ID_GRADEN}/Data/Humidity",hum,qos=0)
        client.publish(f"{USERNAME_CLIENT}/{ID_GRADEN}/Data/Light",light,qos=0)
        client.publish(f"{USERNAME_CLIENT}/{ID_GRADEN}/Data/Moisture",soil,qos=0)
        time.sleep(60)
      




client.subscribe(f"{USERNAME_CLIENT}/{ID_GRADEN}/Control/Led",qos=1)

send_thread = threading.Thread(target=sender)
send_thread.start()
try:
    client.loop_forever()
except KeyboardInterrupt:
    statusThread=False






