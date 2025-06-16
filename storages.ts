// Импорт изображений для хранилищ
import samsung_980_pro from './assets/storages/samsung_980_pro.webp';
import wd_blue_hdd from './assets/storages/wd_blue_hdd.webp';
import kingston_nv2 from './assets/storages/kingston_nv2.webp';
import seagate_firecuda from './assets/storages/seagate_firecuda.webp';

const storages = [
  {
    type: 'SSD',
    brand: 'Samsung',
    name: '980 PRO',
    size_gb: 1024,
    speed_mb: { read: 7000, record: 5000 },
    image: samsung_980_pro,
  },
  {
    type: 'HDD',
    brand: 'Western Digital',
    name: 'WD Blue 1TB',
    size_gb: 1024,
    speed_mb: { read: 160, record: 150 },
    image: wd_blue_hdd,
  },
  {
    type: 'SSD M.2',
    brand: 'Kingston',
    name: 'NV2 M.2',
    size_gb: 1024,
    speed_mb: { read: 3500, record: 2100 },
    image: kingston_nv2,
  },
  {
    type: 'SSHD',
    brand: 'Seagate',
    name: 'FireCuda 1TB',
    size_gb: 1024,
    speed_mb: { read: 140, record: 130 },
    image: seagate_firecuda,
  },
];

export default storages;
