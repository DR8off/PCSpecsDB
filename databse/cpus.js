
// ===========================
// Импорты изображений Intel и AMD процессоров
// ===========================

// Intel 14 поколения
import i9_14900K from './i9-14900k.webp'
import i7_14700K from './i7-14700k.webp'
import i5_14600K from './i5-14600k.webp'
import i3_14100 from './i3-14100.webp'

// Intel 13 поколения
import i9_13900K from './i9-13900k.webp'
import i7_13700K from './i7-13700k.webp'
import i5_13600K from './i5-13600k.webp'
import i3_13100 from './i3-13100.webp'

// Intel 12,11,10 поколения (примеры)
import i9_12900K from './i9-12900k.webp'
import i7_12700K from './i7-12700k.webp'
import i5_12600K from './i5-12600k.webp'
import i3_10100 from './i3-10100.webp'

// AMD Ryzen 7000 серия
import ryz9_7950X from './ryzen9-7950x.webp'
import ryz9_7900X from './ryzen9-7900x.webp'
import ryz7_7700X from './ryzen7-7700x.webp'
import ryz5_7600X from './ryzen5-7600x.webp'
import ryz7_7800X3D from './ryzen7-7800x3d.webp'

// AMD Ryzen 5000 серия
import ryz9_5950X from './ryzen9-5950x.webp'
import ryz9_5900X from './ryzen9-5900x.webp'
import ryz7_5800X from './ryzen7-5800x.webp'
import ryz5_5600X from './ryzen5-5600x.webp'
import ryz7_5800X3D from './ryzen7-5800x3d.webp'

const cpus = [
  { brand:"Intel", series:"Core i9", model:"14900K", socket:"LGA1700", tdp_w:125, image:i9_14900K },
  { brand:"Intel", series:"Core i7", model:"14700K", socket:"LGA1700", tdp_w:125, image:i7_14700K },
  { brand:"Intel", series:"Core i5", model:"14600K", socket:"LGA1700", tdp_w:125, image:i5_14600K },
  { brand:"Intel", series:"Core i3", model:"14100", socket:"LGA1700", tdp_w:60, image:i3_14100 },
  { brand:"Intel", series:"Core i9", model:"13900K", socket:"LGA1700", tdp_w:125, image:i9_13900K },
  { brand:"Intel", series:"Core i7", model:"13700K", socket:"LGA1700", tdp_w:125, image:i7_13700K },
  { brand:"Intel", series:"Core i5", model:"13600K", socket:"LGA1700", tdp_w:125, image:i5_13600K },
  { brand:"Intel", series:"Core i3", model:"13100", socket:"LGA1700", tdp_w:60, image:i3_13100 },
  { brand:"Intel", series:"Core i9", model:"12900K", socket:"LGA1700", tdp_w:125, image:i9_12900K },
  { brand:"Intel", series:"Core i7", model:"12700K", socket:"LGA1700", tdp_w:125, image:i7_12700K },
  { brand:"Intel", series:"Core i5", model:"12600K", socket:"LGA1700", tdp_w:125, image:i5_12600K },
  { brand:"Intel", series:"Core i3", model:"10100", socket:"LGA1200", tdp_w:65, image:i3_10100 },
  { brand:"AMD", series:"Ryzen 9", model:"7950X", socket:"AM5", tdp_w:170, image:ryz9_7950X },
  { brand:"AMD", series:"Ryzen 9", model:"7900X", socket:"AM5", tdp_w:170, image:ryz9_7900X },
  { brand:"AMD", series:"Ryzen 7", model:"7700X", socket:"AM5", tdp_w:105, image:ryz7_7700X },
  { brand:"AMD", series:"Ryzen 5", model:"7600X", socket:"AM5", tdp_w:105, image:ryz5_7600X },
  { brand:"AMD", series:"Ryzen 7", model:"7800X3D", socket:"AM5", tdp_w:120, image:ryz7_7800X3D },
  { brand:"AMD", series:"Ryzen 9", model:"5950X", socket:"AM4", tdp_w:105, image:ryz9_5950X },
  { brand:"AMD", series:"Ryzen 9", model:"5900X", socket:"AM4", tdp_w:105, image:ryz9_5900X },
  { brand:"AMD", series:"Ryzen 7", model:"5800X", socket:"AM4", tdp_w:105, image:ryz7_5800X },
  { brand:"AMD", series:"Ryzen 5", model:"5600X", socket:"AM4", tdp_w:65, image:ryz5_5600X },
  { brand:"AMD", series:"Ryzen 7", model:"5800X3D", socket:"AM4", tdp_w:105, image:ryz7_5800X3D }
];

export default cpus;
