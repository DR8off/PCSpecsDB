import rtx5090 from "./assets/gpu/5090.webp";
import rtx5080 from "./assets/gpu/5080.webp";
import rtx5070 from "./assets/gpu/5070.webp";
import rtx5060 from "./assets/gpu/5060.webp";
import rtx4090 from "./assets/gpu/4090.webp";
import rtx4080super from "./assets/gpu/4080 super.webp";
import rtx4080 from "./assets/gpu/4080 super.webp";
import rtx4070tisuper from "./assets/gpu/4070 ti super.webp";
import rtx4070ti from "./assets/gpu/4070 ti.webp";
import rtx4070super from "./assets/gpu/4070.webp";
import rtx4070 from "./assets/gpu/4070.webp";
import rtx4060ti from "./assets/gpu/4060 ti.webp";
import rtx4060 from "./assets/gpu/4060.webp";
import rtx3090ti from "./assets/gpu/3090 ti.webp";
import rtx3090 from "./assets/gpu/3090.webp";
import rtx3080ti from "./assets/gpu/3080 ti.webp";
import rtx3080 from "./assets/gpu/3080.webp";
import rtx3070ti from "./assets/gpu/3070 ti.webp";
import rtx3070 from "./assets/gpu/3070.webp";
import rtx3060ti from "./assets/gpu/3060 ti.webp";
import rtx3060 from "./assets/gpu/3060.webp";
import rtx3050 from "./assets/gpu/3050.webp";

import rx7900xtx from "./assets/gpu/rx7900xtx.webp";
import rx7900xt from "./assets/gpu/rx7900xt.webp";
import rx7800xt from "./assets/gpu/rx7800xt.webp";
import rx7700xt from "./assets/gpu/rx7700xt.webp";
import rx7600xt from "./assets/gpu/rx7600xt.webp";
import rx7600 from "./assets/gpu/rx7600.webp";

const gpus = [
  {
    brand: "Invidia",
    name: "RTX 5090",
    memory_gb: 32,
    tdp_w: 575,
    image: rtx5090,
  },
  {
    brand: "NVIDIA",
    name: "RTX 5080",
    memory_gb: 24,
    tdp_w: 450,
    image: rtx5080,
  },
  {
    brand: "NVIDIA",
    name: "RTX 5070",
    memory_gb: 16,
    tdp_w: 300,
    image: rtx5070,
  },
  {
    brand: "NVIDIA",
    name: "RTX 5060",
    memory_gb: 12,
    tdp_w: 200,
    image: rtx5060,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4090",
    memory_gb: 24,
    tdp_w: 450,
    image: rtx4090,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4080 Super",
    memory_gb: 16,
    tdp_w: 320,
    image: rtx4080super,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4080",
    memory_gb: 16,
    tdp_w: 320,
    image: rtx4080,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4070 Ti Super",
    memory_gb: 16,
    tdp_w: 285,
    image: rtx4070tisuper,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4070 Ti",
    memory_gb: 12,
    tdp_w: 285,
    image: rtx4070ti,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4070 Super",
    memory_gb: 12,
    tdp_w: 220,
    image: rtx4070super,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4070",
    memory_gb: 12,
    tdp_w: 200,
    image: rtx4070,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4060 Ti",
    memory_gb: 8,
    tdp_w: 160,
    image: rtx4060ti,
  },
  {
    brand: "NVIDIA",
    name: "RTX 4060",
    memory_gb: 8,
    tdp_w: 115,
    image: rtx4060,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3090 Ti",
    memory_gb: 24,
    tdp_w: 450,
    image: rtx3090ti,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3090",
    memory_gb: 24,
    tdp_w: 350,
    image: rtx3090,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3080 Ti",
    memory_gb: 12,
    tdp_w: 350,
    image: rtx3080ti,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3080",
    memory_gb: 10,
    tdp_w: 320,
    image: rtx3080,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3070 Ti",
    memory_gb: 8,
    tdp_w: 290,
    image: rtx3070ti,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3070",
    memory_gb: 8,
    tdp_w: 220,
    image: rtx3070,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3060 Ti",
    memory_gb: 8,
    tdp_w: 200,
    image: rtx3060ti,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3060",
    memory_gb: 12,
    tdp_w: 170,
    image: rtx3060,
  },
  {
    brand: "NVIDIA",
    name: "RTX 3050",
    memory_gb: 8,
    tdp_w: 130,
    image: rtx3050,
  },

  {
    brand: "AMD",
    name: "Radeon RX 7900 XTX",
    memory_gb: 24,
    tdp_w: 355,
    image: rx7900xtx,
  },
  {
    brand: "AMD",
    name: "Radeon RX 7900 XT",
    memory_gb: 20,
    tdp_w: 300,
    image: rx7900xt,
  },
  {
    brand: "AMD",
    name: "Radeon RX 7800 XT",
    memory_gb: 16,
    tdp_w: 263,
    image: rx7800xt,
  },
  {
    brand: "AMD",
    name: "Radeon RX 7700 XT",
    memory_gb: 12,
    tdp_w: 245,
    image: rx7700xt,
  },
  {
    brand: "AMD",
    name: "Radeon RX 7600 XT",
    memory_gb: 16,
    tdp_w: 190,
    image: rx7600xt,
  },
  {
    brand: "AMD",
    name: "Radeon RX 7600",
    memory_gb: 8,
    tdp_w: 165,
    image: rx7600,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6950 XT",
    memory_gb: 16,
    tdp_w: 335,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6900 XT",
    memory_gb: 16,
    tdp_w: 300,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6800 XT",
    memory_gb: 16,
    tdp_w: 300,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6750 XT",
    memory_gb: 12,
    tdp_w: 250,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6700 XT",
    memory_gb: 12,
    tdp_w: 230,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6650 XT",
    memory_gb: 8,
    tdp_w: 180,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6600 XT",
    memory_gb: 8,
    tdp_w: 160,
    image: null,
  },
  {
    brand: "AMD",
    name: "Radeon RX 6500 XT",
    memory_gb: 4,
    tdp_w: 107,
    image: null,
  },
];

export default gpus;
