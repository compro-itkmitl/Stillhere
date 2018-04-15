#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>
#include <FirebaseArduino.h>
#define ssid "POK Have A Sixpack" //ชื่อ WIFI
#define password "0870614656" // Password ของ WIFI
SoftwareSerial NodeSerial(D2, D3); //RX | TX
#define FIREBASE_HOST "comproiot.firebaseio.com"
#define FIREBASE_AUTH "UktGd4fGZ6JSA3chsZdrFGKcq5ObLCaomdXXd7eB"


void setup()
{
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  NodeSerial.begin(4800);
}

void loop() {
  int i;
  NodeSerial.print(10);
  NodeSerial.print("\n");
  delay(100);
  // Firebase.setBool("A01/status",true); คำสั่ง Set Boolean ให้ Firebase
  /*for(i=0;i<10;i++){
      delay(1000);
      Serial.println(i);
    } ใช้ Delay ช่วยในการนับเวลา */ 
}
