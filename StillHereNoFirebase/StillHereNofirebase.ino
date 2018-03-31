#include <Ultrasonic.h>
#include <FirebaseArduino.h>


Ultrasonic ultrasonic1(2, 3); //back 2 is trigle and 3 is echo
Ultrasonic ultrasonic2(4, 5); //top 4 is trigle and 5 is echo
double distance1, distance2; //distance1 form ultrasonic1  && distance2 form ultrasonic2
#define FIREBASE_HOST "comproiot.firebaseio.com"
#define FIREBASE_AUTH "UktGd4fGZ6JSA3chsZdrFGKcq5ObLCaomdXXd7eB"

void setup() {
  Serial.begin(9600);
  pinMode(6, OUTPUT); // output buzzer
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  distance1 = ultrasonic1.distanceRead(); //distanceRead is return cm
  distance2 = ultrasonic2.distanceRead(); //distanceRead is return cm
  if (distance1 > 7 && distance2 > 7 ){
    Serial.print("Yes");
    Serial.println();
  }
  else{
    Serial.println("No");
  }
  digitalWrite(6, HIGH); 
}
