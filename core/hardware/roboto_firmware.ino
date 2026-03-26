#include <Servo.h>

// =========================
// Konfiguration
// =========================

// Servos
Servo servo1;
Servo servo2;

// Stepper (einfacher Step/Dir Treiber)
#define STEP_PIN_1 2
#define DIR_PIN_1 3
#define ENABLE_PIN_1 4

// Sensoren (Beispiele)
#define CURRENT_SENSOR_PIN A0
#define Q1_PIN A1
#define Q2_PIN A2
#define Q3_PIN A3
#define Q4_PIN A4

// =========================
// Globale Variablen
// =========================
long stepper_position = 0;
bool stepper_busy = false;

// =========================
// Hilfsfunktionen
// =========================
void stepper_move_to(long target, int speed, int accel) {
  stepper_busy = true;

  long delta = target - stepper_position;
  int direction = delta > 0 ? HIGH : LOW;
  digitalWrite(DIR_PIN_1, direction);

  long steps = abs(delta);

  for (long i = 0; i < steps; i++) {
    digitalWrite(STEP_PIN_1, HIGH);
    delayMicroseconds(speed);
    digitalWrite(STEP_PIN_1, LOW);
    delayMicroseconds(speed);
  }

  stepper_position = target;
  stepper_busy = false;
}

void stepper_move_by(long delta, int speed, int accel) {
  stepper_move_to(stepper_position + delta, speed, accel);
}

// =========================
// Sensorfunktionen
// =========================
int read_current_sensor() {
  return analogRead(CURRENT_SENSOR_PIN);
}

int read_q1() { return analogRead(Q1_PIN); }
int read_q2() { return analogRead(Q2_PIN); }
int read_q3() { return analogRead(Q3_PIN); }
int read_q4() { return analogRead(Q4_PIN); }

// =========================
// Setup
// =========================
void setup() {
  Serial.begin(115200);

  // Servo Setup
  servo1.attach(9);
  servo2.attach(10);

  // Stepper Setup
  pinMode(STEP_PIN_1, OUTPUT);
  pinMode(DIR_PIN_1, OUTPUT);
  pinMode(ENABLE_PIN_1, OUTPUT);
  digitalWrite(ENABLE_PIN_1, LOW);

  // Sensor Pins
  pinMode(CURRENT_SENSOR_PIN, INPUT);
  pinMode(Q1_PIN, INPUT);
  pinMode(Q2_PIN, INPUT);
  pinMode(Q3_PIN, INPUT);
  pinMode(Q4_PIN, INPUT);

  Serial.println("READY");
}

// =========================
// Hauptloop
// =========================
void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');

    // =========================
    // Servo Befehle
    // =========================
    if (cmd.startsWith("SERVO_MOVE")) {
      int id = cmd.substring(11, 12).toInt();
      int angle = cmd.substring(13).toInt();

      if (id == 1) servo1.write(angle);
      if (id == 2) servo2.write(angle);

      Serial.println("OK");
    }

    if (cmd.startsWith("SERVO_SMOOTH")) {
      int id = cmd.substring(12, 13).toInt();
      int space1 = cmd.indexOf(' ', 13);
      int angle = cmd.substring(13, space1).toInt();
      int duration = cmd.substring(space1 + 1).toInt();

      Servo* s = (id == 1) ? &servo1 : &servo2;

      int start = s->read();
      int steps = 50;

      for (int i = 0; i < steps; i++) {
        float t = float(i) / (steps - 1);
        t = t * t * (3 - 2 * t); // S-Kurve
        int pos = start + (angle - start) * t;
        s->write(pos);
        delay(duration / steps);
      }

      Serial.println("OK");
    }

    if (cmd.startsWith("SERVO_GET_POS")) {
      int id = cmd.substring(14).toInt();
      int pos = (id == 1) ? servo1.read() : servo2.read();
      Serial.print("POS ");
      Serial.print(id);
      Serial.print(" ");
      Serial.println(pos);
    }

    // =========================
    // Stepper Befehle
    // =========================
    if (cmd.startsWith("STEPPER_MOVE_TO")) {
      int id = cmd.substring(15, 16).toInt();
      int space1 = cmd.indexOf(' ', 16);
      long pos = cmd.substring(16, space1).toInt();

      int space2 = cmd.indexOf(' ', space1 + 1);
      int speed = cmd.substring(space1 + 1, space2).toInt();

      int accel = cmd.substring(space2 + 1).toInt();

      stepper_move_to(pos, speed, accel);
      Serial.println("OK");
    }

    if (cmd.startsWith("STEPPER_MOVE_BY")) {
      int id = cmd.substring(15, 16).toInt();
      int space1 = cmd.indexOf(' ', 16);
      long delta = cmd.substring(16, space1).toInt();

      int space2 = cmd.indexOf(' ', space1 + 1);
      int speed = cmd.substring(space1 + 1, space2).toInt();

      int accel = cmd.substring(space2 + 1).toInt();

      stepper_move_by(delta, speed, accel);
      Serial.println("OK");
    }

    if (cmd.startsWith("STEPPER_GET_POS")) {
      Serial.print("POS 1 ");
      Serial.println(stepper_position);
    }

    if (cmd.startsWith("STEPPER_BUSY")) {
      Serial.print("BUSY 1 ");
      Serial.println(stepper_busy ? 1 : 0);
    }

    // =========================
    // Sensor Befehle
    // =========================
    if (cmd.startsWith("CURRENT_READ")) {
      Serial.println(read_current_sensor());
    }

    if (cmd.startsWith("QD_READ")) {
      Serial.print(read_q1()); Serial.print(" ");
      Serial.print(read_q2()); Serial.print(" ");
      Serial.print(read_q3()); Serial.print(" ");
      Serial.println(read_q4());
    }
  }
}
