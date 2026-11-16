// Sumber: BPS, Statistik E-Commerce 2024 (Volume 7, 2025), Survei E-Commerce 2025. Katalog 8101004.
export const meta = { judul: 'Statistik E-Commerce 2024', penerbit: 'Badan Pusat Statistik', terbit: 'November 2025', katalog: '8101004', publikasi: '06300.25015', halaman: 112 };
export const survei = { provinsi: 38, kabkota: 365, sampel: 40335, blokSensus: 6484, moe: '15%', rse: '< 33%' };

export const tren = [
  { tahun: 2020, juta: 2.36 }, { tahun: 2021, juta: 2.87 }, { tahun: 2022, juta: 3.0 },
  { tahun: 2023, juta: 3.82 }, { tahun: 2024, juta: 4.4 },
];
export const adopsi = { online: 42.02, offline: 57.98, naikPoin: 0.52 };
export const alasanOffline = [
  { label: 'Tidak tertarik / nyaman offline', value: 72.67 }, { label: 'Kurang pengetahuan', value: 25.63 },
  { label: 'Sifat produk yang dijual', value: 15.21 }, { label: 'Persoalan teknis', value: 9.46 },
  { label: 'Perangkat / infrastruktur', value: 9.06 }, { label: 'Keamanan (data pribadi, dll.)', value: 8.29 },
  { label: 'Baru berjualan 2025', value: 5.71 }, { label: 'Perizinan', value: 0.66 },
];
export const skala = [
  { label: 'Mikro', ket: 'omzet ≤ Rp2 miliar', value: 97.38 }, { label: 'Kecil', ket: 'Rp2–15 miliar', value: 2.08 },
  { label: 'Menengah', ket: 'Rp15–50 miliar', value: 0.27 }, { label: 'Besar', ket: '> Rp50 miliar', value: 0.26 },
];
export const sektor = [
  { label: 'Perdagangan besar dan eceran', value: 31.88 }, { label: 'Akomodasi, makanan dan minuman', value: 23.97 },
  { label: 'Industri pengolahan', value: 20.66 },
];
export const entitas = [
  { label: 'Produsen barang/jasa', value: 67.49 }, { label: 'Dropshipper', value: 0.27 }, { label: 'Affiliator', value: 0.21 },
];
export const umur = [
  { label: 'Gen Z (15–29)', value: 9.95 }, { label: 'Milenial (30–44)', value: 42.23 },
  { label: 'Gen X (45–59)', value: 38.19 }, { label: 'Baby Boomer (≥60)', value: 9.62 },
];
export const gender = { laki2023: 57.22, laki2024: 55.53, perempuan2024: 44.47 };
export const pendidikan = [
  { label: 'SD', value: 12.58 }, { label: 'SMP', value: 15.56 }, { label: 'SMA', value: 50.72 },
  { label: 'Diploma I–III', value: 3.93 }, { label: 'D-IV / S1', value: 15.66 }, { label: 'S2 / S3', value: 1.56 },
];
export const media = [
  { label: 'Pesan instan (WhatsApp, Line, Telegram)', value: 94.76 }, { label: 'Media sosial', value: 29.66 },
  { label: 'Marketplace / platform digital', value: 17.23 }, { label: 'E-mail', value: 2.78 }, { label: 'Website', value: 1.36 },
];
export const barang = [
  { label: 'Perdagangan besar dan eceran', value: 36.64 }, { label: 'Akomodasi, makan dan minum', value: 24.84 },
  { label: 'Produk pertanian olahan', value: 14.64 }, { label: 'Jasa lainnya', value: 10.11 },
  { label: 'Pertanian, kehutanan, peternakan, perikanan', value: 9.04 },
];
export const pelanggan = [
  { label: 'Konsumen akhir (B2C)', value: 88.49 }, { label: 'Agen / usaha lain', value: 10.6 }, { label: 'Pemerintah', value: 0.91 },
];
export const pengiriman = [
  { label: 'Diantar langsung oleh penjual', value: 48.03 }, { label: 'Diambil pembeli', value: 43.68 },
  { label: 'Jasa pengiriman', value: 7.96 }, { label: 'Diunduh (produk digital)', value: 0.33 },
];
export const wilayah = [
  { label: 'Jawa', value: 66.87 }, { label: 'Sumatera', value: 19.17 }, { label: 'Kalimantan', value: 6.87 },
  { label: 'Bali dan Nusa Tenggara', value: 6.08 }, { label: 'Sulawesi', value: 5.67 }, { label: 'Maluku dan Papua', value: 1.55 },
];
export const ekspor = { domestik: 99.07, ekspor: 0.93 };
export const internetUse = [
  { label: 'Pemesanan / pembelian bahan baku', value: 48.1 }, { label: 'Komunikasi internal usaha', value: 47.53 },
  { label: 'Pemasaran', value: 45.38 }, { label: 'Manajemen pelanggan', value: 34.82 }, { label: 'Pembayaran elektronik', value: 27.57 },
];
export const komputer = 13.54;
export const pelatihan = { pernah: 3.56, swasta: 58.42, pemerintah: 44.03, dasar: 75.64, terampil: 28.36, ahli: 8.84 };
export const bayar = [
  { label: 'Tunai / COD', value: 74.79 }, { label: 'Transfer bank', value: 16.61 }, { label: 'E-wallet', value: 5.92 },
  { label: 'QRIS', value: 2.1 }, { label: 'Kartu', value: 0.58 },
];
export const transaksi = { t2023: 1100.87, t2024: 1288.93, naik: 17.08, marketplace: 15.79, marketplaceTriliun: 203.58, pendapatanTotal: 2854, internet2023: 69.21, internet2024: 72.78, pdb: 5.04 };
export const pendapatan = [
  { label: 'Naik', value: 19.0 }, { label: 'Tetap', value: 55.49 }, { label: 'Turun', value: 25.5 },
];
export const kendala = [
  { label: 'Permodalan', value: 36.41 }, { label: 'Pemasaran produk', value: 20.52 }, { label: 'Tenaga kerja terampil digital', value: 16.03 },
  { label: 'Jasa pengiriman', value: 5.3 }, { label: 'Kecurangan jual beli', value: 3.62 }, { label: 'Akses internet', value: 3.11 }, { label: 'Lainnya', value: 15.01 },
];
// [provinsi, jumlah usaha e-commerce, RSE %, % usaha yang berjualan online]
export const provinsi: [string, number, number, number][] = [
  ['Aceh', 77754, 4.98, 37.65], ['Sumatera Utara', 150183, 5.2, 35.38], ['Sumatera Barat', 76445, 4.47, 28.75], ['Riau', 62718, 4.72, 36.93],
  ['Jambi', 51727, 5.88, 33.9], ['Sumatera Selatan', 60385, 7.21, 37.84], ['Bengkulu', 71699, 8.44, 39.86], ['Lampung', 117382, 8.63, 52.17],
  ['Kep. Bangka Belitung', 42575, 5.47, 42.93], ['Kepulauan Riau', 53829, 7.27, 44.22], ['DKI Jakarta', 462782, 4.32, 63.54],
  ['Jawa Barat', 709851, 3.75, 43.38], ['Jawa Tengah', 625695, 4.94, 45.18], ['DI Yogyakarta', 269398, 5.21, 56.72], ['Jawa Timur', 690542, 4.19, 37.54],
  ['Banten', 158639, 4.34, 40.1], ['Bali', 134990, 6.9, 51.37], ['Nusa Tenggara Barat', 49256, 5.59, 29.83], ['Nusa Tenggara Timur', 23239, 3.65, 14.19],
  ['Kalimantan Barat', 40379, 5.73, 40.02], ['Kalimantan Tengah', 30937, 5.99, 35.01], ['Kalimantan Selatan', 67637, 7.34, 43.43],
  ['Kalimantan Timur', 89411, 4.76, 50.61], ['Kalimantan Utara', 18265, 4.36, 39.03], ['Sulawesi Utara', 32448, 7.77, 34.38],
  ['Sulawesi Tengah', 25340, 5.3, 30.12], ['Sulawesi Selatan', 108675, 5.54, 38.66], ['Sulawesi Tenggara', 19911, 4.77, 27.63],
  ['Gorontalo', 11013, 3.81, 21.37], ['Sulawesi Barat', 28184, 4.93, 28.26], ['Maluku', 15769, 5.62, 31.3], ['Maluku Utara', 3201, 4.22, 21.93],
  ['Papua Barat', 1791, 8.77, 16.09], ['Papua Barat Daya', 4389, 13.49, 24.68], ['Papua', 4826, 5.34, 23.29], ['Papua Selatan', 3040, 4.15, 28.98],
  ['Papua Tengah', 6284, 27.1, 28.78], ['Papua Pegunungan', 384, 32.77, 2.7],
];
