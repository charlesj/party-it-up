import * as Magick from "wasm-imagemagick";

export const processImage = async (file, opts, update) => {

    const inputBuffer = new Uint8Array(await file.arrayBuffer())
    console.log(inputBuffer)
    const inputFiles = [{ name: "input.png", content: inputBuffer }]
    const command = ["convert", "srcFile.png", "-charcoal", "2", "out.png"]
    console.log('starting')
    const processedFiles = await Magick.Call(inputFiles, command)
    // response can be multiple files (example split) here we know we just have one
    console.log('done', processedFiles)
    const firstOutputImage = processedFiles[0];
    console.log('done', firstOutputImage)
    update(URL.createObjectURL(firstOutputImage["blob"]))
}   