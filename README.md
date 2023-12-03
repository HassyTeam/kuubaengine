# Kuuba Engine
Kuuba Engine X - not unreal, veri rial


## What is "Kuuba Engine"?
#### The history of Kuuba Engine
With the name literally coming from the word "cube", the Kuuba Engine was originally a small little website with a spinning 3D cube developed using TWGL.js examples, by Hassunaama and Bansku Dansku in January to February 2023.

In the following months after February, Hassunaama, Xilliam, Earlgray and Bansku Dansku started a coding- / demogroup called Hassy Team™, and started developing a demo for the Assembly Summer 2023 demoparty. The demo made for the Assembly Summer 2023 demoparty used the name "Kuuba Engine v2" internally in the JavaScript code, since it was based on the original Kuuba Engine website.

Kuuba Engine X (Kuuba Engine v3) is a reimagined web engine capable of 3D and 2D rendering, running LLVM supported (C, C++, etc.) (WIP), and more!

## Features

(wip)

### Subproject tree

- KuuVM - The main Kuuba Engine X runtime environment. Uses "BufferCode" bytecode to run Kuuba Engine X apps.
- JSKuubaX - The KuubaScript[1](hassyteam.github.io/kuubaengine/docs/kuubascript) to BufferCode[2](hassyteam.github.io/kuubaengine/docs/internal/bufferspec) interpeter.
- Kuuenderer - The renderer of Kuuba Engine X. It renders all 2D and 3D stuff, using TWGL.js. Based on TurboWarp Scratch renderer and Kuuba Engine 1 & 2.
- KuuTools - All other stuff that do not fit into Kuuenderer, such as audio, input, or stuff that KuuVM doesn't have to handle such as Emscripten compatibility issues with SDL2 and others.

## Used Projects 

- [TurboWarp/scratch-vm](https://github.com/TurboWarp/scratch-vm) - The base for KuuVM (Kuuba Engine X Runtime Environmen)
- [emscripten-core/emscripten](https://github.com/emscripten-core/emscripten) - LLVM WASM Backend
