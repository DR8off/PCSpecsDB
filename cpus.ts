// 14th Gen (Raptor Lake Refresh)
import i9_14900ks from "./assets/cpu/14900k.webp";
import i9_14900k from "./assets/cpu/14900k.webp";
import i9_14900kf from "./assets/cpu/14900k.webp";
import i7_14700k from "./assets/cpu/14700k.webp";
import i7_14700kf from "./assets/cpu/14700kf.webp";
import i5_14600k from "./assets/cpu/14600k.webp";
import i5_14500 from "./assets/cpu/14500.webp";
import i3_14100 from "./assets/cpu/14100.webp";

// 13th Gen (Raptor Lake)
import i9_13900k from "./assets/cpu/13900k.webp";
import i9_13900kf from "./assets/cpu/13900kf.webp";
import i7_13700k from "./assets/cpu/13700k.webp";
import i7_13700kf from "./assets/cpu/13700kf.webp";
import i5_13600k from "./assets/cpu/13500.webp";
import i5_13500 from "./assets/cpu/13500.webp";
import i3_13100 from "./assets/cpu/13100.webp";
import i3_13100f from "./assets/cpu/13100f.webp";

// 12th Gen (Alder Lake)
import i9_12900k from "./assets/cpu/12900k.webp";
import i9_12900kf from "./assets/cpu/12900kf.webp";
import i7_12700k from "./assets/cpu/12700k.webp";
import i7_12700kf from "./assets/cpu/12700kf.webp";
import i5_12600k from "./assets/cpu/12500.webp";
import i5_12500 from "./assets/cpu/12500.webp";
import i5_12400 from "./assets/cpu/12400.webp";
import i5_12400f from "./assets/cpu/12400f.webp";
import i3_12100 from "./assets/cpu/12100.webp";
import i3_12100f from "./assets/cpu/12100f.webp";

// 11th Gen (Rocket Lake)
import i9_11900k from "./assets/cpu/11900k.webp";
import i9_11900kf from "./assets/cpu/11900k.webp";
import i7_11700k from "./assets/cpu/11700k.webp";
import i7_11700kf from "./assets/cpu/11700kf.webp";
import i5_11600k from "./assets/cpu/11500.webp";
import i5_11500 from "./assets/cpu/11500.webp";
import i5_11400 from "./assets/cpu/11400.webp";
import i5_11400f from "./assets/cpu/11400f.webp";

// 10th Gen (Comet Lake)
import i9_10900k from "./assets/cpu/10900k.webp";
import i9_10900kf from "./assets/cpu/10900kf.webp";
import i7_10700k from "./assets/cpu/10700k.webp";
import i7_10700kf from "./assets/cpu/10700kf.webp";
import i5_10600k from "./assets/cpu/10500.webp";
import i5_10500 from "./assets/cpu/10500.webp";
import i5_10400 from "./assets/cpu/10400.webp";
import i5_10400f from "./assets/cpu/10400f.webp";
import i3_10100 from "./assets/cpu/10100.webp";
import i3_10100f from "./assets/cpu/10100f.webp";

const cpus = [
  {
    brand: "Intel",
    generation: 14,
    name: "i9-14900KS",
    socket: "LGA1700",
    tdp_w: 150,
    image: i9_14900ks,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i9-14900K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i9_14900k,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i9-14900KF",
    socket: "LGA1700",
    tdp_w: 125,
    image: i9_14900kf,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i7-14700K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i7_14700k,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i7-14700KF",
    socket: "LGA1700",
    tdp_w: 125,
    image: i7_14700kf,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i5-14500",
    socket: "LGA1700",
    tdp_w: 65,
    image: i5_14500,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i3-14100",
    socket: "LGA1700",
    tdp_w: 60,
    image: i3_14100,
  },

  {
    brand: "Intel",
    generation: 13,
    name: "i9-13900K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i9_13900k,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i9-13900KF",
    socket: "LGA1700",
    tdp_w: 125,
    image: i9_13900kf,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i7-13700K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i7_13700k,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i7-13700KF",
    socket: "LGA1700",
    tdp_w: 125,
    image: i7_13700kf,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i5-13500",
    socket: "LGA1700",
    tdp_w: 65,
    image: i5_13500,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i3-13100",
    socket: "LGA1700",
    tdp_w: 60,
    image: i3_13100,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i3-13100f",
    socket: "LGA1700",
    tdp_w: 60,
    image: i3_13100f,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i9-12900K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i9_12900k,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i9-12900KF",
    socket: "LGA1700",
    tdp_w: 125,
    image: i9_12900kf,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i7-12700K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i7_12700k,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i7-12700KF",
    socket: "LGA1700",
    tdp_w: 125,
    image: i7_12700kf,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i5-12500",
    socket: "LGA1700",
    tdp_w: 65,
    image: i5_12500,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i5-12400",
    socket: "LGA1700",
    tdp_w: 65,
    image: i5_12400,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i5-12400F",
    socket: "LGA1700",
    tdp_w: 65,
    image: i5_12400f,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i3-12100",
    socket: "LGA1700",
    tdp_w: 60,
    image: i3_12100,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i3-12100F",
    socket: "LGA1700",
    tdp_w: 60,
    image: i3_12100f,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i9-11900K",
    socket: "LGA1200",
    tdp_w: 125,
    image: i9_11900k,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i9-11900KF",
    socket: "LGA1200",
    tdp_w: 125,
    image: i9_11900kf,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i7-11700K",
    socket: "LGA1200",
    tdp_w: 125,
    image: i7_11700k,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i7-11700KF",
    socket: "LGA1200",
    tdp_w: 125,
    image: i7_11700kf,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i5-11500",
    socket: "LGA1200",
    tdp_w: 65,
    image: i5_11500,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i5-11400",
    socket: "LGA1200",
    tdp_w: 65,
    image: i5_11400,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i5-11400F",
    socket: "LGA1200",
    tdp_w: 65,
    image: i5_11400f,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i9-10900K",
    socket: "LGA1200",
    tdp_w: 125,
    image: i9_10900k,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i9-10900KF",
    socket: "LGA1200",
    tdp_w: 125,
    image: i9_10900kf,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i7-10700K",
    socket: "LGA1200",
    tdp_w: 125,
    image: i7_10700k,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i7-10700KF",
    socket: "LGA1200",
    tdp_w: 125,
    image: i7_10700kf,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i5-10500",
    socket: "LGA1200",
    tdp_w: 65,
    image: i5_10500,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i5-10400",
    socket: "LGA1200",
    tdp_w: 65,
    image: i5_10400,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i5-10400F",
    socket: "LGA1200",
    tdp_w: 65,
    image: i5_10400f,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i3-10100",
    socket: "LGA1200",
    tdp_w: 65,
    image: i3_10100,
  },
  {
    brand: "Intel",
    generation: 10,
    name: "i3-10100F",
    socket: "LGA1200",
    tdp_w: 65,
    image: i3_10100f,
  },
  {
    brand: "Intel",
    generation: 14,
    name: "i5-14600K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i5_14600k,
  },
  {
    brand: "Intel",
    generation: 13,
    name: "i5-13600K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i5_13600k,
  },
  {
    brand: "Intel",
    generation: 12,
    name: "i5-12600K",
    socket: "LGA1700",
    tdp_w: 125,
    image: i5_12600k,
  },
  {
    brand: "Intel",
    generation: 11,
    name: "i5-11600K",
    socket: "LGA1200",
    tdp_w: 125,
    image: i5_11600k,
  },
];

export default cpus;
