#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "comproiot.firebaseio.com"
#define FIREBASE_AUTH "UktGd4fGZ6JSA3chsZdrFGKcq5ObLCaomdXXd7eB"
#define WIFI_SSID "SSID"
#define WIFI_PASS "PASS"

void setup(){
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  WiFi.begin(WIFI_SSID,WIFI_PASS);
}

void loop() {

}
