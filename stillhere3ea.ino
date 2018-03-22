const int pingPinMiddle = 11; //middle infla
int inPinMiddle = 10; //middle infla
const int pingPinLeft = 9; //Left infla
int inPinLeft = 8; //Left infla
const int pingPinRight = 13; //Right infla
int inPinRight = 12; //Right infla

void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT); //buzzer
  digitalWrite(2, LOW);
  pinMode(pingPinMiddle, OUTPUT);
  pinMode(pingPinRight, OUTPUT);
  pinMode(pingPinLeft, OUTPUT);
}

void loop() {
  long durationMiddle, durationLeft, durationRight, cmMid, cmLeft, cmRight;

  digitalWrite(pingPinMiddle, LOW);
  delayMicroseconds(2);
  digitalWrite(pingPinMiddle, HIGH);
  delayMicroseconds(5);
  digitalWrite(pingPinMiddle, LOW);
  pinMode(inPinMiddle, INPUT);
  durationMiddle = pulseIn(inPinMiddle, HIGH);

  cmMid = microsecondsToCentimeters(durationMiddle);

  digitalWrite(pingPinLeft, LOW);
  delayMicroseconds(2);
  digitalWrite(pingPinLeft, HIGH);
  delayMicroseconds(5);
  digitalWrite(pingPinLeft, LOW);
  pinMode(inPinLeft, INPUT);
  durationMiddle = pulseIn(inPinLeft, HIGH);

  cmLeft = microsecondsToCentimeters(durationLeft);

  digitalWrite(pingPinRight, LOW);
  delayMicroseconds(2);
  digitalWrite(pingPinRight, HIGH);
  delayMicroseconds(5);
  digitalWrite(pingPinRight, LOW);
  pinMode(inPinRight, INPUT);
  durationMiddle = pulseIn(inPinRight, HIGH);

  cmRight = microsecondsToCentimeters(durationRight);

  if (cmMid < 7  ) {
    digitalWrite(2, LOW);
  }
  else {
    digitalWrite(2, HIGH);
  }

  Serial.print(cmMid);
  Serial.print("cm");
  Serial.println();
  delay(100);
}

long microsecondsToCentimeters(long microseconds) //Change Microsec to Centimeters
{
return microseconds / 29 / 2;
}

