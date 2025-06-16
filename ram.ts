// Импорт изображений оперативной памяти
import corsair_vengeance_ddr5 from "./assets/ram/corsair_vengeance_ddr5.webp";
import gskill_tridentz_rgb from "./assets/ram/gskill_tridentz_rgb.webp";
import kingston_fury_beast_ddr4 from "./assets/ram/kingston_fury_beast_ddr4.webp";
import crucial_pro_ddr5 from "./assets/ram/crucial_pro_ddr5.webp";

const ram = [
  {
    brand: "Corsair",
    name: "Vengeance DDR5",
    type: "DDR5",
    size_gb: 32,
    speed_MHz: { min: 5200, max: 6000 },
    image: corsair_vengeance_ddr5,
  },
  {
    brand: "G.Skill",
    name: "Trident Z RGB",
    type: "DDR4",
    size_gb: 16,
    speed_MHz: { min: 3200, max: 4266 },
    image: gskill_tridentz_rgb,
  },
  {
    brand: "Kingston",
    name: "Fury Beast",
    type: "DDR4",
    size_gb: 32,
    speed_MHz: { min: 2666, max: 3733 },
    image: kingston_fury_beast_ddr4,
  },
  {
    brand: "Crucial",
    name: "Pro DDR5",
    type: "DDR5",
    size_gb: 16,
    speed_MHz: { min: 4800, max: 6000 },
    image: crucial_pro_ddr5,
  },
];

export default ram;
