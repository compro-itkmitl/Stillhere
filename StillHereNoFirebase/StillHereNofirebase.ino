#include <Ultrasonic.h>
#include <SoftwareSerial.h>

Ultrasonic ultrasonic1(2, 3); //back 2 is trigle and 3 is echo
Ultrasonic ultrasonic2(4, 5); //top 4 is trigle and 5 is echo
double distance1, distance2; //distance1 form ultrasonic1  && distance2 form ultrasonic2
double beepCount;

SoftwareSerial ArduinoSerial(9, 8); //RX || TX

void setup() {
  Serial.begin(115200);
  pinMode(6, OUTPUT); // output buzzer
  ArduinoSerial.begin(4800);
  digitalWrite(6, HIGH);
}

void loop() {
 
  distance1 = ultrasonic1.distanceRead(); //distanceRead is return cm
  distance2 = ultrasonic2.distanceRead(); //distanceRead is return cm
  if (distance1 < 7 && distance2 < 15 ){
    if(distance1 <= 5){
        beep(distance1);
        }
       else{
        digitalWrite(6, HIGH);
        }
      delay(1000);
      ArduinoSerial.print(1); // status 1 = True
      ArduinoSerial.print("\n");
      Serial.println(1);
    }
  else{
      digitalWrite(6, HIGH);
      delay(1000);
      ArduinoSerial.print(2); // status 2 = False
      ArduinoSerial.print("\n");
      Serial.println(2);
    }
  }

void beep(int distance) {
 
  beepCount += 5; //delay sound
  if (beepCount / (distance * 100) > 1) { //distance * n if n lower sound will many beep
    digitalWrite(6, LOW);
    beepCount = 0;
  }else if(beepCount > 100){
    digitalWrite(6, HIGH);
  }
}

