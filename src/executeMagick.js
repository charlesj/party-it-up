import { call } from "wasm-imagemagick"

function copy(src) {
    var dst = new ArrayBuffer(src.byteLength);
    new Uint8Array(dst).set(new Uint8Array(src));
    return dst;
}

export const executeMagick = async (inputFiles, commands) => {
    const allFiles = inputFiles
    const formattedCommands = commands.map(c => c.split(' '))
    for (const command of formattedCommands) {
        console.log('command', command, allFiles)
        const callResult = await call(allFiles.map(f => ({ name: f.name, content: copy(f.content) })), command)
        const newFiles = callResult.outputFiles.map(f => ({ name: f.name, content: f.buffer }))
        console.log('newFiles', newFiles)
        newFiles.forEach(nf => allFiles.push(nf))
    }

    return allFiles
}