#include <Ultrasonic.h>
#include <SoftwareSerial.h>

Ultrasonic ultrasonic1(2, 3); //back 2 is trigle and 3 is echo
Ultrasonic ultrasonic2(4, 5); //top 4 is trigle and 5 is echo
double distance1, distance2; //distance1 form ultrasonic1  && distance2 form ultrasonic2
double beepCount;

SoftwareSerial ArduinoSerial(9, 8); //RX || TX


void setup() {
  Serial.begin(9600);
  pinMode(6, OUTPUT); // output buzzer
  ArduinoSerial.begin(4800);
}

void loop() {
  While (ArduinoSerial.available() > 0){
    float val = ArduinoSerial.parseFloat();
    if (ArduinoSerial.read()) == '\n'){
      Serial.println(var);
    }
  }
  delay(100)
  /*distance1 = ultrasonic1.distanceRead(); //distanceRead is return cm
  distance2 = ultrasonic2.distanceRead(); //distanceRead is return cm
  if (distance1 > 7 && distance2 > 7 ) {
    Serial.print("Yes");
    Serial.println();
  if (distance1 > 7 && distance2 > 7 ){
    Serial.println("Yes");
  }
  else {
    Serial.println("No");
  }
  Serial.println(distance1);
  if (distance1 < 5 ){
    beep(distance1);
  }
  
  else{
  digitalWrite(6, HIGH);
  }*/
}
/*
void beep(int distance) {
 
  beepCount += 5; //delay sound
  if (beepCount / (distance * 100) > 1) { //distance * n if n lower sound will many beep
    digitalWrite(6, LOW);
    beepCount = 0;
  }else if(beepCount > 100){
    digitalWrite(6, HIGH);
  }
}*/
