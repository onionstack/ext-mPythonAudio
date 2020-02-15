
enum CONTROL {
    //% block="PAUSE"
    PAUSE,
    //% block="GO ON"
    RESUME,
    //% block="STOP"
    STOP
}


//% color="#AA278D" iconWidth=50 iconHeight=40
namespace mPythonAudio {
    //% block="initialize Audio" blockType="command"
    export function AudioPlayerInit(parameter: any, block: any) {
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode('audio.playerInit();');
    }

    //% block="deinit Audio" blockType="command"
    export function AudioPlayerDeinit(parameter: any, block: any) {
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode('audio.playerDeinit();');
    }

    //% block="set Audio volume as [VOLUME]" blockType="command"
    //% VOLUME.shadow="number" VOLUME.defl=100
    export function AudioSetVolume(parameter: any, block: any) {
        let volume = parameter.VOLUME.code;
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode(`audio.setVolume(${volume});`);
    }

    //% block="Audio [CONTROL]" blockType="command"
    //% CONTROL.shadow="dropdown" CONTROL.options="CONTROL" CONTROL.defl="CONTROL.PAUSE"
    export function AudioControl(parameter: any, block: any) {
        let control = parameter.CONTROL.code;
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode(`audio.control(audio.${control});`);
    }
    
    //% block="Audio play [PATH]" blockType="command"
    //% PATH.shadow="string" PATH.defl=http://wiki.labplus.cn/images/4/4e/Music_test.mp3
    export function AudioPlay(parameter: any, block: any) {
        let path = parameter.PATH.code;
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode(`audio.play(${path});`);
    }
    
    //% block="initialize Recording" blockType="command"
    export function AudioRecorderInit(parameter: any, block: any) {
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode('audio.recorderInit();');
    }

    //% block="record audio with storage path [PATH] and duration [TIME] second(s)" blockType="command"
    //% PATH.shadow="string" PATH.defl=1.wav
    //% TIME.shadow="number" TIME.defl=2
    export function AudioRecord(parameter: any, block: any) {
        let path = parameter.PATH.code;
        let time = parameter.TIME.code;
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode(`audio.record(${path}, ${time});`);
    }

    //% block="trelease cache of recording" blockType="command"
    export function AudioRecorderDeinit(parameter: any, block: any) {
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode('audio.recorderDeinit();');
    }

    //% block="get voice command within [TIME] seconds" blockType="reporter"
    //% TIME.shadow="number" TIME.defl=2
    export function AudioGetAsrResult(parameter: any, block: any) {
        let time = parameter.TIME.code;
        Generator.addInclude('MPython_Audio', '#include <MPython_Audio.h>');
        Generator.addObject(`audio`, `MPython_Audio`, `audio;`);
        Generator.addCode([`audio.getAsrResult(${time})`, Generator.ORDER_ATOMIC]);
    }
}
