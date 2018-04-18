#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>
#include <FirebaseArduino.h>

#define ssid "Mi Phone." //ชื่อ WIFI
#define password "002007le" // Password ของ WIFI
SoftwareSerial NodeSerial(D2, D3); //RX | TX
#define FIREBASE_HOST "comproiot.firebaseio.com"
#define FIREBASE_AUTH "UktGd4fGZ6JSA3chsZdrFGKcq5ObLCaomdXXd7eB"


void setup()
{
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  NodeSerial.begin(4800);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  Firebase.setBool("test",true);
  while (NodeSerial.available() > 0 ) {
    int val = NodeSerial.parseInt();
    Serial.println(val);
    if(NodeSerial.read() == '\n'){
      if(val == 1){ // status 1 = True
        Firebase.setBool("A01/status",true);
      }
      else{
        Firebase.setBool("A01/status",false);
      }
    }
  }
}
