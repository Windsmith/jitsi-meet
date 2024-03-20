import { IStore } from '../app/types';
import { ITrack } from '../base/tracks/types';
import Meyda from 'meyda'
import {notify} from '../conference/components/web/ToastIndicator';
import { ToastContainer, toast } from 'react-toastify';
import '../../../react-toastify/ReactToastify.css';

export function checkAudioDeepfake(audioTrack?: ITrack, username?: string) {
    console.log(audioTrack?.jitsiTrack.stream)

    const recorder = new MediaRecorder(audioTrack?.jitsiTrack.stream, {mimeType: "audio/mpeg"});

    let count_1 = 0;
    
    let data;
    recorder.addEventListener('dataavailable', async (e) => {
        //let file = new File([e.data as BlobPart], 'test.ogg', {type: "audio/ogg"})
        
        /*
        let a = document.createElement("a");
        a.href = URL.createObjectURL(e.data);
        a.download = "data.ogg";
        a.hidden = true;
        document.body.appendChild(a);
        a.innerHTML = "someinnerhtml";
        a.click();
        */

        /*
        console.log("Hi")
        e.data.arrayBuffer().then((value) => {
            console.log("LOOK HERE BITCHASS")
            console.log(value as Float32Array)
            //console.log(Meyda.extract('zcr', value as Float32Array))
        })
        */

        const audioContext = new AudioContext();
        const audioBuffer = await audioContext.decodeAudioData(await e.data.arrayBuffer())
        const signal = audioBuffer.getChannelData(0).slice(0, 4096)
        //const chroma = Meyda.extract('spectralCentroid', audioBuffer.getChannelData(0).slice(0, 4096))

        Meyda.numberOfMFCCCoefficients = 20

        const average = array => array.reduce((a, b) => a + b) / array.length;

        let chroma = average(Meyda.extract("chroma", signal));

        let rms = Meyda.extract("rms", signal);

        let spectral_centroid = Meyda.extract("spectralCentroid", signal);

        let spectral_spread = Meyda.extract("spectralSpread", signal);

        let spectral_rolloff = Meyda.extract("spectralRolloff", signal);

        let zcr = Meyda.extract("zcr", signal);

        let mfccs = Meyda.extract("mfcc", signal);

        data = [chroma, rms, spectral_centroid, spectral_spread, spectral_rolloff, zcr, mfccs[0], mfccs[1], mfccs[2], mfccs[3], mfccs[4], mfccs[5], mfccs[6], mfccs[7], mfccs[8], mfccs[9], mfccs[10], mfccs[11], mfccs[12], mfccs[13], mfccs[14], mfccs[15], mfccs[16], mfccs[17], mfccs[18], mfccs[19]]

        console.log(data)

        const response = await fetch('http://127.0.0.1:8000', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: "follow", // manual, *follow, error
            //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let jsonData = await response.json();

        console.log(jsonData)



        if (jsonData == '1') {count_1++;}

        /*
        const source = audioContext.createMediaStreamSource(audioTrack?.jitsiTrack.stream)

        source.connect(audioContext.destination)

        const analyzer = Meyda.createMeydaAnalyzer({
            audioContext: audioContext,
            source: source,
            bufferSize: 512,
            featureExtractors: ["rms"],
            callback: (features) => {
              console.log(features);
            },
        })
        */

        //analyzer.start()

        return jsonData

    })
    let recorder_count = 0;

    function recorder_loop() {
        recorder.start(766)
        setTimeout(() => { 
            recorder_count++
            recorder.stop()
            console.log("recorder count: " + recorder_count);
            if (recorder_count >= 10) {
                console.log("Deepfake count: " + count_1)
                if (count_1 >= 5) {notify(username)}
                return
            }
            recorder_loop()
        }, 1000)
    }

    recorder_loop()

}