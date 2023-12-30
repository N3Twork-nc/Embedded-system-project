#include <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT22
#include <Wire.h>
#include <BH1750.h>

BH1750 lightMeter;

DHT dht(DHTPIN, DHTTYPE);

int ledPin = 13;
int Soil = A1;

void setup() {
  dht.begin();

  pinMode(Soil, INPUT);
  pinMode(ledPin, OUTPUT);

  Wire.begin();
  lightMeter.begin();
  
  Serial.begin(9600);
}

void loop() {
  //int valueLight = 0;
  int valueSoil = 0;
  for (int i = 0; i < 10; i++)
  {
    valueSoil += analogRead(Soil);
    delay(50);
  }

  valueSoil = valueSoil / 10;
  valueSoil = map(valueSoil, 1023, 0, 0, 100);     //Ít nước:0%  ==> Nhiều nước 100%
  
  int valueLight = lightMeter.readLightLevel();
  valueLight = map(valueLight, 0, 4000, 0, 100);

  float humDHT = dht.readHumidity();
  float tempDHT = dht.readTemperature();

  // IN thông tin ra màn hình
  Serial.println("{\"Humidity\":" + String(humDHT) + ",\"Temprature\":" + String(tempDHT) + ",\"Light\": " + String(valueLight) + ",\"Moisture\": " + String(valueSoil) +" }");

  delay(1000);

  if (Serial.available() > 0) {
    char command = Serial.read();
    if (command == '1') {
      digitalWrite(ledPin, HIGH); // Bật đèn khi nhận '1' từ Serial
    } else if (command == '0') {
      digitalWrite(ledPin, LOW); // Tắt đèn khi nhận '0' từ Serial
    }
  }
}
