#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>
#include <FirebaseArduino.h>

#define WIFI_SSID "pok" //ชื่อ WIFI
#define WIFI_PASS "12345678" // Password ของ WIFI
SoftwareSerial NodeSerial(D2, D3); //RX | TX
#define FIREBASE_HOST "comproiot.firebaseio.com"
#define FIREBASE_AUTH "UktGd4fGZ6JSA3chsZdrFGKcq5ObLCaomdXXd7eB"
int count = 0;
int hour = 0;

void setup()
{
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  NodeSerial.begin(4800);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  while (NodeSerial.available() > 0 ) {
    float val = NodeSerial.parseFloat();
    if(NodeSerial.read() == '\n'){
      if(val == 2){
        Firebase.setBool("A01/status",false);
        count = 0;
      }
      if(val == 1){ // status 1 = True
        Firebase.setBool("A01/status",true);
        count += 1;
        Serial.println(count);
        if(count%10 == 0){
          count = 0;
          hour += 1;
          Firebase.setInt("A01/duration",hour);
        }
      }
    }
  }
}
