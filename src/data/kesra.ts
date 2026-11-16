// Sumber: BPS, Statistik Kesejahteraan Rakyat 2025 (Vol. 40), Susenas Maret 2025.
export const tren: [string, number, number, number][] = [
  ['Punya jaminan kesehatan', 68.36, 75.48, 78.04], ['Anak 0–17 th punya akta kelahiran', 88.42, 92.75, 93.95],
  ['Anak 0–4 th punya akta kelahiran', 77.04, 85.07, 86.76], ['Penduduk 15+ tanpa ijazah', 13.87, 11.44, 11.37],
  ['Rumah tangga punya jamban sendiri', 85.51, 89.42, 90.36], ['Dinding rumah tembok', 77.91, 81.16, 82.46],
  ['Rumah tangga punya komputer/laptop/tablet', 18.24, 18.52, 19.94], ['Rumah tangga punya telepon rumah', 1.36, 0.99, 0.61],
  ['Keluhan kesehatan sebulan terakhir', 27.23, 27.34, 28.31], ['Perempuan menikah pertama ≤16 th', 14.91, 14.21, 13.21],
  ['Rumah tangga penerima PKH', 12.87, 15.57, 13.97], ['Rumah tangga penerima bantuan pangan', 18.4, 20.44, 18.07],
];
export const pendidikan = [
  { label: 'Prasekolah belum pernah (0–6 th)', value: 65.85 }, { label: 'Usia 5+ tidak sedang sekolah lagi', value: 71.58 },
  { label: 'Usia 15+ lulus SD atau kurang', value: 35.27 }, { label: 'Usia 15+ tanpa ijazah', value: 11.37 }, { label: 'Usia 15+ berpendidikan tinggi', value: 11.0 },
];
export const berobat = [
  { label: 'Klinik / praktik dokter-bidan', value: 52.07 }, { label: 'Puskesmas', value: 30.05 }, { label: 'RS swasta', value: 9.67 },
  { label: 'RS pemerintah', value: 9.59 }, { label: 'Pengobatan tradisional/lainnya', value: 3.84 },
];
export const perumahan = [
  { label: 'Listrik sebagai penerangan utama', value: 99.55 }, { label: 'Jamban kloset leher angsa', value: 97.33 },
  { label: 'Memasak dengan LPG/gas', value: 89.71 }, { label: 'Jamban sendiri', value: 90.36 }, { label: 'Tinja ke tangki septik', value: 82.94 },
  { label: 'Tinja ke lubang tanah', value: 10.17 }, { label: 'Tinja ke kolam/sawah/sungai', value: 5.67 }, { label: 'Tidak memilah sampah', value: 83.75 },
];
export const tik = [
  { label: 'Pakai HP (3 bulan terakhir)', value: 83.98 }, { label: 'Pengguna internet (5+ th)', value: 77.63 }, { label: 'Memiliki HP', value: 70.75 },
  { label: 'Pengguna komputer', value: 12.99 },
];
export const tujuan = [
  { label: 'Hiburan', value: 87.53 }, { label: 'Mendapat informasi', value: 80.85 }, { label: 'Media sosial', value: 79.65 },
  { label: 'Membeli barang/jasa', value: 26.73 }, { label: 'Fasilitas finansial', value: 15.11 }, { label: 'Membuat konten digital', value: 13.66 },
  { label: 'Pembelajaran online', value: 11.76 }, { label: 'Menjual barang/jasa', value: 4.78 },
];
export const keuangan = [
  { label: 'Rumah tangga punya uang elektronik', value: 33.04 }, { label: 'Dompet digital (berbasis server)', value: 29.35 },
  { label: 'Berbasis kartu/chip', value: 14.93 }, { label: 'Menerima kredit', value: 23.9 }, { label: 'Kredit KUR', value: 7.82 }, { label: 'Pinjaman online', value: 0.43 },
];
// indikator, kota, desa
export const desaKota: [string, number, number][] = [
  ['Pengguna internet', 82.72, 70.14], ['Memiliki HP', 75.74, 63.41], ['Pengguna komputer', 16.92, 7.21], ['Usia 15+ tanpa ijazah', 7.92, 16.52],
  ['Usia 15+ berpendidikan tinggi', 14.33, 6.03], ['Punya uang elektronik', 41.92, 20.16], ['Penerima PKH', 11.08, 18.18],
  ['Penerima bantuan pangan', 14.89, 22.69], ['Menikah pertama ≤16 th (perempuan)', 10.55, 16.9], ['Rumah milik sendiri', 79.63, 92.97],
];
// indikator, laki-laki, perempuan
export const gender: [string, number, number][] = [
  ['Keluhan kesehatan', 26.46, 30.17], ['Pernah rawat inap', 3.82, 5.73], ['Memiliki HP', 74.61, 66.88], ['Pengguna internet', 80.18, 75.08],
  ['Usia 15+ tanpa ijazah', 9.55, 13.18], ['Usia 15+ berpendidikan tinggi', 10.02, 11.98], ['Usia 7–23 th masih sekolah', 74.47, 76.41],
  ['Melek huruf Latin (15+)', 97.99, 95.61], ['Korban kejahatan', 0.9, 0.55],
];
// indikator, nasional, tertinggi, terendah
export const provinsi: [string, string, string, string][] = [
  ['Pengguna internet', '77,63', 'Kepulauan Riau 91,32 · DKI Jakarta 90,27', 'Papua Pegunungan 15,40 · Papua Tengah 32,64'],
  ['Usia 5+ tidak pernah sekolah', '5,17', 'Papua Pegunungan 43,02 · Papua Tengah 30,27', 'Sulawesi Utara 2,75 · Gorontalo 3,42'],
  ['Usia 15+ tanpa ijazah', '11,37', 'Papua Pegunungan 52,06 · Papua Tengah 39,54', 'DKI Jakarta 2,72 · Aceh 4,87'],
  ['Punya BPJS', '73,98', 'Aceh 97,79 · DKI Jakarta 91,64', 'Papua Tengah 40,12 · Maluku Utara 57,69'],
  ['Tanpa jaminan kesehatan', '21,96', 'Jambi 36,53 · Maluku 33,18', 'Aceh 1,26 · DKI Jakarta 3,37'],
  ['Imunisasi balita', '92,09', 'Bali 98,97 · DI Yogyakarta 98,86', 'Aceh 60,61 · Papua Tengah 64,51'],
  ['Keluhan kesehatan', '28,31', 'Nusa Tenggara Barat 42,00 · Jawa Tengah 33,34', 'Papua Tengah 8,57 · Papua Pegunungan 12,94'],
  ['Merokok setiap hari (15+)', '26,40', 'Lampung 32,61 · Bengkulu 30,42', 'Papua 15,57 · Papua Pegunungan 15,88'],
  ['Jamban sendiri', '90,36', 'Riau 96,90 · Kalimantan Timur 95,38', 'Papua Pegunungan 49,95 · Papua Tengah 61,70'],
  ['Punya uang elektronik', '33,04', 'DKI Jakarta 71,68 · Banten 49,25', 'Papua Pegunungan 0,46 · Papua Tengah 4,43'],
  ['Menikah pertama ≤16 th', '13,21', 'Kalimantan Selatan 20,16 · Jawa Timur 18,24', 'Nusa Tenggara Timur 3,94 · Kepulauan Riau 4,08'],
  ['Penerima PKH', '13,97', 'Nusa Tenggara Timur 29,24 · Gorontalo 25,92', 'Papua Tengah 3,07 · DKI Jakarta 4,02'],
];
