
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace ESP32BluetoothSerial {
    //% block="ESP32 Bluetooth Serial Init  name is [NAME]" blockType="command"
    //% NAME.shadow="string" NAME.defl="ESP32BTSerial"
    export function BTInit(parameter: any){
        let name=parameter.NAME.code;
        Generator.addInclude("BTInclude","#include <BluetoothSerial.h>");
        Generator.addObject("BTObject","BluetoothSerial","esp32BTSerial;");
        Generator.addSetup("BTInit",`esp32BTSerial.begin(${name});`);
        
    }

    //% block="ESP32 Bluetooth Serial available?" blockType="boolean"
    export function BTAvailable(parameter: any){
        Generator.addCode("esp32BTSerial.available()");
        
    }

    //% block="ESP32 Bluetooth Serial read" blockType="reporter"
    export function BTRead(parameter: any){
       
        Generator.addCode([`esp32BTSerial.read()`,Generator.ORDER_UNARY_POSTFIX]);
        
    }

     //% block="ESP32 Bluetooth Serial write[DAT]" blockType="command"
     //% DAT.shadow="string" DAT.defl="hello"
     export function BTWrite(parameter: any){
       let dat=parameter.DAT.code;
        Generator.addCode(`esp32BTSerial.write(${dat});`);
        
    }

   
}
