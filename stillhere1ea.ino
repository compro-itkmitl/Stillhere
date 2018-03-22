const int pingPin = 13; //middle infla
int inPin = 12; //middle infla


void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT); //buzzer
  digitalWrite(2, LOW);
  pinMode(pingPin, OUTPUT);
}

void loop() {
  long duration, cm;


  digitalWrite(pingPin, LOW);
  delayMicroseconds(2);
  digitalWrite(pingPin, HIGH);
  delayMicroseconds(5);
  digitalWrite(pingPin, LOW);
  pinMode(inPin, INPUT);
  duration = pulseIn(inPin, HIGH);

  cm = microsecondsToCentimeters(duration);

  if (cm < 7  ) {
    digitalWrite(2, LOW);
  }
  else {
    digitalWrite(2, HIGH);
  }

  Serial.print(cm);
  Serial.print("cm");
  Serial.println();
  delay(100);
}

long microsecondsToCentimeters(long microseconds) {
  return microseconds / 29 / 2;

}

