import asus_z590e from "./assets/motherboards/asus_z590e.webp";
import msi_b460m from "./assets/motherboards/msi_b460m.webp";
import gigabyte_z790_aorus from "./assets/motherboards/gigabyte_z790_aorus.webp";
import asrock_z690m_itx from "./assets/motherboards/asrock_z690m_itx.webp";

const motherboards = [
  {
    size: 'ATX',
    name: "Strix Z590-E Gaming WiFi",
    brand: "Asus",
    modules: { isWifi: true, isBluetooth: true },
    ram_slots: 4,
    ram_type: 'DDR4',
    socket: "LGA1200",
    m2_slots: 4,
    image: asus_z590e,
  },
  {
    size: 'Micro-ATX',
    name: "B460M PRO-VDH",
    brand: "Msi",
    modules: { isWifi: false, isBluetooth: false },
    ram_slots: 4,
    ram_type: 'DDR4',
    socket: "LGA1200",
    m2_slots: 1,
    image: msi_b460m,
  },
  {
    size: 'ATX',
    name: "Z790 AORUS Elite AX",
    brand: "Gigabyte",
    modules: { isWifi: true, isBluetooth: true },
    ram_slots: 4,
    ram_type: 'DDR5',
    socket: "LGA1700",
    m2_slots: 3,
    image: gigabyte_z790_aorus,
  },
  {
    size: 'Mini-ITX',
    name: "Z690M-ITX/ax",
    brand: "Asrock",
    modules: { isWifi: true, isBluetooth: true },
    ram_slots: 2,
    ram_type: 'DDR5',
    socket: "LGA1700",
    m2_slots: 2,
    image: asrock_z690m_itx,
  }
];

export default motherboards;
