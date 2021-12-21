// JS code for control DC motor
var mraa = require('mraa');
console.log('MRAA Version : '+ mraa.getVersion());
//input
var P_read= new mraa.Aio(0);  //analog input pin
var motor_output= new mraa.Pwm(3); // output pin 
motor_output.enable(true);
motor_output.period_us(2000);
var motor_speed=0;


while (true) {
    motor_speed= P_read.read(); // 0-1023 
    motor_output.write(motor_speed/1024);  // 
}   
//------------------------------------------
/*
TODO:
   the code for the second motor
*/ 