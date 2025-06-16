import i9_14900ks from './14900ks.webp'
import i9_14900k from './14900k.webp'
import i9_14900kf from './14900kf.webp'
import i7_14700k from './14700k.webp'
import i7_14700kf from './14700kf.webp'
import i5_14500 from './14500.webp'
import i3_14100 from './14100.webp'

import i9_13900k from './13900k.webp'
import i9_13900kf from './13900kf.webp'
import i7_13700k from './13700k.webp'
import i7_13700kf from './13700kf.webp'
import i5_13500 from './13500.webp'
import i3_13100 from './13100.webp'

import i9_12900k from './12900k.webp'
import i9_12900kf from './12900kf.webp'
import i7_12700k from './12700k.webp'
import i7_12700kf from './12700kf.webp'
import i5_12500 from './12500.webp'
import i5_12400 from './12400.webp'
import i5_12400f from './12400f.webp'
import i3_12100 from './12100.webp'
import i3_12100f from './12100f.webp'

import i9_11900k from './11900k.webp'
import i9_11900kf from './11900kf.webp'
import i7_11700k from './11700k.webp'
import i7_11700kf from './11700kf.webp'
import i5_11500 from './11500.webp'
import i5_11400 from './11400.webp'
import i5_11400f from './11400f.webp'
import i3_11100 from './11100.webp'
import i3_11100f from './11100f.webp'

import i9_10900k from './10900k.webp'
import i9_10900kf from './10900kf.webp'
import i7_10700k from './10700k.webp'
import i7_10700kf from './10700kf.webp'
import i5_10500 from './10500.webp'
import i5_10400 from './10400.webp'
import i5_10400f from './10400f.webp'
import i3_10100 from './10100.webp'
import i3_10100f from './10100f.webp'

const cpus = [
  { brand: "Intel", generation: 14, model: "i9-14900KS", socket: "LGA1700", tdp_w: 150, image: i9_14900ks },
  { brand: "Intel", generation: 14, model: "i9-14900K", socket: "LGA1700", tdp_w: 125, image: i9_14900k },
  { brand: "Intel", generation: 14, model: "i9-14900KF", socket: "LGA1700", tdp_w: 125, image: i9_14900kf },
  { brand: "Intel", generation: 14, model: "i7-14700K", socket: "LGA1700", tdp_w: 125, image: i7_14700k },
  { brand: "Intel", generation: 14, model: "i7-14700KF", socket: "LGA1700", tdp_w: 125, image: i7_14700kf },
  { brand: "Intel", generation: 14, model: "i5-14500", socket: "LGA1700", tdp_w: 65, image: i5_14500 },
  { brand: "Intel", generation: 14, model: "i3-14100", socket: "LGA1700", tdp_w: 60, image: i3_14100 },

  { brand: "Intel", generation: 13, model: "i9-13900K", socket: "LGA1700", tdp_w: 125, image: i9_13900k },
  { brand: "Intel", generation: 13, model: "i9-13900KF", socket: "LGA1700", tdp_w: 125, image: i9_13900kf },
  { brand: "Intel", generation: 13, model: "i7-13700K", socket: "LGA1700", tdp_w: 125, image: i7_13700k },
  { brand: "Intel", generation: 13, model: "i7-13700KF", socket: "LGA1700", tdp_w: 125, image: i7_13700kf },
  { brand: "Intel", generation: 13, model: "i5-13500", socket: "LGA1700", tdp_w: 65, image: i5_13500 },
  { brand: "Intel", generation: 13, model: "i3-13100", socket: "LGA1700", tdp_w: 60, image: i3_13100 },

  { brand: "Intel", generation: 12, model: "i9-12900K", socket: "LGA1700", tdp_w: 125, image: i9_12900k },
  { brand: "Intel", generation: 12, model: "i9-12900KF", socket: "LGA1700", tdp_w: 125, image: i9_12900kf },
  { brand: "Intel", generation: 12, model: "i7-12700K", socket: "LGA1700", tdp_w: 125, image: i7_12700k },
  { brand: "Intel", generation: 12, model: "i7-12700KF", socket: "LGA1700", tdp_w: 125, image: i7_12700kf },
  { brand: "Intel", generation: 12, model: "i5-12500", socket: "LGA1700", tdp_w: 65, image: i5_12500 },
  { brand: "Intel", generation: 12, model: "i5-12400", socket: "LGA1700", tdp_w: 65, image: i5_12400 },
  { brand: "Intel", generation: 12, model: "i5-12400F", socket: "LGA1700", tdp_w: 65, image: i5_12400f },
  { brand: "Intel", generation: 12, model: "i3-12100", socket: "LGA1700", tdp_w: 60, image: i3_12100 },
  { brand: "Intel", generation: 12, model: "i3-12100F", socket: "LGA1700", tdp_w: 60, image: i3_12100f },

  { brand: "Intel", generation: 11, model: "i9-11900K", socket: "LGA1200", tdp_w: 125, image: i9_11900k },
  { brand: "Intel", generation: 11, model: "i9-11900KF", socket: "LGA1200", tdp_w: 125, image: i9_11900kf },
  { brand: "Intel", generation: 11, model: "i7-11700K", socket: "LGA1200", tdp_w: 125, image: i7_11700k },
  { brand: "Intel", generation: 11, model: "i7-11700KF", socket: "LGA1200", tdp_w: 125, image: i7_11700kf },
  { brand: "Intel", generation: 11, model: "i5-11500", socket: "LGA1200", tdp_w: 65, image: i5_11500 },
  { brand: "Intel", generation: 11, model: "i5-11400", socket: "LGA1200", tdp_w: 65, image: i5_11400 },
  { brand: "Intel", generation: 11, model: "i5-11400F", socket: "LGA1200", tdp_w: 65, image: i5_11400f },
  { brand: "Intel", generation: 11, model: "i3-11100", socket: "LGA1200", tdp_w: 65, image: i3_11100 },
  { brand: "Intel", generation: 11, model: "i3-11100F", socket: "LGA1200", tdp_w: 65, image: i3_11100f },

  { brand: "Intel", generation: 10, model: "i9-10900K", socket: "LGA1200", tdp_w: 125, image: i9_10900k },
  { brand: "Intel", generation: 10, model: "i9-10900KF", socket: "LGA1200", tdp_w: 125, image: i9_10900kf },
  { brand: "Intel", generation: 10, model: "i7-10700K", socket: "LGA1200", tdp_w: 125, image: i7_10700k },
  { brand: "Intel", generation: 10, model: "i7-10700KF", socket: "LGA1200", tdp_w: 125, image: i7_10700kf },
  { brand: "Intel", generation: 10, model: "i5-10500", socket: "LGA1200", tdp_w: 65, image: i5_10500 },
  { brand: "Intel", generation: 10, model: "i5-10400", socket: "LGA1200", tdp_w: 65, image: i5_10400 },
  { brand: "Intel", generation: 10, model: "i5-10400F", socket: "LGA1200", tdp_w: 65, image: i10400f },
  { brand: "Intel", generation: 10, model: "i3-10100", socket: "LGA1200", tdp_w: 65, image: i10100 },
  { brand: "Intel", generation: 10, model: "i3-10100F", socket: "LGA1200", tdp_w: 65, image: i10100f },

];

export default cpus;
