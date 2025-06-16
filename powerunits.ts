// Импорт изображений блоков питания
import corsair_rm1000x from "./assets/powerunits/corsair_rm1000x.webp";
import bequiet_purepower11 from "./assets/powerunits/bequiet_purepower11.webp";
import seasonic_focus850 from "./assets/powerunits/seasonic_tx850.webp";
import deepcool_pk650d from "./assets/powerunits/deepcool_pk650d.webp";

const powerunits = [
  {
    name: "Corsair RM1000x (2021)",
    brand: "Corsair",
    power_w: 1000,
    image: corsair_rm1000x,
  },
  {
    name: "be quiet! Pure Power 11 FM 750W",
    brand: "be quiet!",
    power_w: 750,
    image: bequiet_purepower11,
  },
  {
    name: "Seasonic PRIME TX-850",
    brand: "Seasonic",
    power_w: 850,
    image: seasonic_focus850,
  },
  {
    name: "DeepCool PK650D",
    brand: "DeepCool",
    power_w: 650,
    image: deepcool_pk650d,
  },
];

export default powerunits;
