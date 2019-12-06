/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * 
 * http://www.rootbrother.com
 */


let Address = 92

/**
 * BH1750 Digital Ambient Light Sensor Package
 */
//% weight=100 color=#ffc107 icon="\uf185" block="teenkit光照传感器"
namespace BH1750 {


    /**
     * 开启光照强度传感器
     */
    //% blockId="BH1750_ON" block="开启光照传感器"
    //% weight=90 blockGap=8
    export function on(): void {
        pins.i2cWriteNumber(Address, 0x10, NumberFormat.UInt8BE)
    }

    /**
     * 关闭光照强度传感器
     */
    //% blockId="BH1750_OFF" block="关闭光照传感器"
    //% weight=90 blockGap=8
    export function off(): void {
        pins.i2cWriteNumber(Address, 0, NumberFormat.UInt8BE)
    }

    /**
     * 读取环境光数值，单位：勒克斯（lx）
     */
    //% blockId="BH1750_GET_INTENSITY" block="光线强度"
    //% weight=80 blockGap=8
    export function getIntensity(): number {
        return Math.idiv(pins.i2cReadNumber(Address, NumberFormat.UInt16BE) * 5, 6)
    }


}   
