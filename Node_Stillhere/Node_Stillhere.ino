#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>
#include <FirebaseArduino.h>
const char* ssid = "leelapvw"; //ชื่อ WIFI
const char* password = "jh4331kp"; // Password ของ WIFI
SoftwareSerial NodeSerial(D2, D3); //RX | TX
#define FIREBASE_HOST "comproiot.firebaseio.com"
#define FIREBASE_AUTH "UktGd4fGZ6JSA3chsZdrFGKcq5ObLCaomdXXd7eB"


void setup()
{
  Serial.begin(115200);
  Serial.print("Connecting to "); 
  Serial.println(ssid); //แสดงข้อความ ชื่อ WIFI
 
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print("*");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  NodeSerial.begin(4800);

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  while (NodeSerial.available() > 0 {
    float val = NodeSerial.parseFloat();
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