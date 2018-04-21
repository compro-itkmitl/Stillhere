#include <Ultrasonic.h>
#include <SoftwareSerial.h>

Ultrasonic ultrasonic1(2, 3); //Back Sensor 2 is trigger and 3 is echo
Ultrasonic ultrasonic2(4, 5); //Top 4 is trigger and 5 is echo
double distance1, distance2; //Distance1 from ultrasonic1  && distance2 from ultrasonic2
int park = 0; //For define state

SoftwareSerial ArduinoSerial(9, 8); //RX || TX

void setup() {
  Serial.begin(115200);
  pinMode(6, OUTPUT); //Output Buzzer
  ArduinoSerial.begin(4800);
  digitalWrite(6, HIGH);
}

void loop() {
  distance1 = ultrasonic1.distanceRead(); //Use Function For Return Distance in cm.
  distance2 = ultrasonic2.distanceRead(); //Use Function For Return Distance in cm.
  if (distance1 < 7 && distance2 < 15 ){
      if(distance1 == 3 && park == 0){
        park = 1;
        digitalWrite(6, LOW);
        delay(1000);
        digitalWrite(6, HIGH);
        }
      delay(1000);
      ArduinoSerial.print(1); // status 1 = True
      ArduinoSerial.print("\n");
      }
  else{
      park = 0;
      delay(1000);
      ArduinoSerial.print(2); // status 2 = False
      ArduinoSerial.print("\n");
    }
}

