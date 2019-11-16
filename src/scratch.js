import { execute } from "wasm-imagemagick"




export const processImage = async (file, opts, update) => {

    const inputBuffer = new Uint8Array(await file.arrayBuffer())
    console.log(inputBuffer)
    const inputFiles = [{ name: "input.png", content: inputBuffer }]
    console.log('starting')
    const result = await execute({
        inputFiles,
        commands: [
            'convert input.png -modulate 100,100,1 frame1.gif',
            'convert input.png -modulate 100,100,21 frame2.gif',
            'convert input.png -modulate 100,100,31 frame3.gif',
            'convert input.png -modulate 100,100,41 frame4.gif',
            'convert input.png -modulate 100,100,51 frame5.gif',
            'convert input.png -modulate 100,100,61 frame6.gif',
            'convert input.png -modulate 100,100,71 frame7.gif',
            'convert input.png -modulate 100,100,81 frame8.gif',
            'convert input.png -modulate 100,100,91 frame9.gif',
            'convert input.png -modulate 100,100,101 frame10.gif',
            'convert input.png -modulate 100,100,111 frame11.gif',
            'convert input.png -modulate 100,100,121 frame12.gif',
            'convert input.png -modulate 100,100,141 frame14.gif',
            'convert input.png -modulate 100,100,151 frame15.gif',
            'convert input.png -modulate 100,100,161 frame16.gif',
            'convert input.png -modulate 100,100,171 frame17.gif',
            'convert input.png -modulate 100,100,181 frame18.gif',
            'convert input.png -modulate 100,100,191 frame19.gif',
            'convert input.png -modulate 100,100,200 frame20.gif',

            // combine to gif
            'convert -delay 4 -loop 0   frame*.gif "partied-up.gif"',
        ],
    })
    // const frames = []
    // for (let i = 1; i < 20; i++) {
    //     const command = ["convert", "input.png", "-modulate", `100,100,${i * 10}`, `frame-${i}.png`]
    //     const processedFiles = await Magick.Call(inputFiles, command)
    //     frames.push(processedFiles[0])
    // }

    // response can be multiple files (example split) here we know we just have one
    console.log('result', result)
    const firstOutputImage = result.outputFiles[0];
    console.log('done', firstOutputImage)
    update(URL.createObjectURL(new Blob([firstOutputImage.buffer])))
}   