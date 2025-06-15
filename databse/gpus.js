
import rtx5090 from './rtx5090.webp'
import rtx5080Ti from './rtx5080ti.webp'
import rtx4080 from './rtx4080.webp'
import rtx4070Ti from './rtx4070ti.webp'
import rtx3080Ti from './rtx3080ti.webp'
import rtx3070Super from './rtx3070super.webp'
import rtx2070Super from './rtx2070super.webp'
import rtx2060Super from './rtx2060super.webp'
import radeonRX7900XTX from './rx7900xtx.webp'
import radeonRX6800XT from './rx6800xt.webp'
import radeonRX6700XT from './rx6700xt.webp'
import radeonRX5700XT from './rx5700xt.webp'
import radeonRX6600XT from './rx6600xt.webp'
import radeonRX5600XT from './rx5600xt.webp'

const gpus = [
  { brand:"NVIDIA", name:"RTX 5090", memory_gb:24, tdp_w:450, image:rtx5090 },
  { brand:"NVIDIA", name:"RTX 5080 Ti", memory_gb:20, tdp_w:370, image:rtx5080Ti },
  { brand:"NVIDIA", name:"RTX 4080", memory_gb:16, tdp_w:320, image:rtx4080 },
  { brand:"NVIDIA", name:"RTX 4070 Ti", memory_gb:12, tdp_w:285, image:rtx4070Ti },
  { brand:"NVIDIA", name:"RTX 3080 Ti", memory_gb:12, tdp_w:350, image:rtx3080Ti },
  { brand:"NVIDIA", name:"RTX 3070 Super", memory_gb:8, tdp_w:220, image:rtx3070Super },
  { brand:"NVIDIA", name:"RTX 2070 Super", memory_gb:8, tdp_w:215, image:rtx2070Super },
  { brand:"NVIDIA", name:"RTX 2060 Super", memory_gb:8, tdp_w:175, image:rtx2060Super },
  { brand:"AMD", name:"Radeon RX 7900 XTX", memory_gb:24, tdp_w:355, image:radeonRX7900XTX },
  { brand:"AMD", name:"Radeon RX 6800 XT", memory_gb:16, tdp_w:300, image:radeonRX6800XT },
  { brand:"AMD", name:"Radeon RX 6700 XT", memory_gb:12, tdp_w:230, image:radeonRX6700XT },
  { brand:"AMD", name:"Radeon RX 5700 XT", memory_gb:8, tdp_w:225, image:radeonRX5700XT },
  { brand:"AMD", name:"Radeon RX 6600 XT", memory_gb:8, tdp_w:160, image:radeonRX6600XT },
  { brand:"AMD", name:"Radeon RX 5600 XT", memory_gb:6, tdp_w:150, image:radeonRX5600XT }
];

export default gpus;
