#include <Ultrasonic.h>

Ultrasonic ultrasonic1(2, 3); //back 2 is trigle and 3 is echo
Ultrasonic ultrasonic2(4, 5); //top 4 is trigle and 5 is echo
double distance1, distance2; //distance1 form ultrasonic1  && distance2 form ultrasonic2
#define BUZZER 6

void setup() {
  Serial.begin(9600);
  pinMode(BUZZER, OUTPUT); // output buzzer
}

void loop() {
  distance1 = ultrasonic1.distanceRead(); //distanceRead is return cm
  distance2 = ultrasonic2.distanceRead(); //distanceRead is return cm
  if (distance1 > 7 && distance2 > 7 ){
    Serial.println("Yes");
  }
  else{
    Serial.println("No");
  }
  digitalWrite(6, HIGH); 
}
