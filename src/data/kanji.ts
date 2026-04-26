export type KanjiCategory =
  | "Angka"
  | "Waktu & Tanggal"
  | "Arah & Posisi"
  | "Orang & Keluarga"
  | "Tubuh"
  | "Aksi & Kata Kerja"
  | "Kata Sifat"
  | "Pendidikan & Sosial"
  | "Alam"
  | "Lainnya";

export interface Kanji {
  id: number;
  character: string;
  onyomi: string;
  kunyomi?: string;
  meaning: string;
  category: KanjiCategory;
}

export const kanjiData: Kanji[] = [
  // Angka
  { id: 1, character: "一", onyomi: "Ichi", kunyomi: "Hitotsu", meaning: "Satu", category: "Angka" },
  { id: 2, character: "二", onyomi: "Ni", kunyomi: "Futatsu", meaning: "Dua", category: "Angka" },
  { id: 3, character: "三", onyomi: "San", kunyomi: "Mittsu", meaning: "Tiga", category: "Angka" },
  { id: 4, character: "四", onyomi: "Shi / Yon", kunyomi: "Yottsu", meaning: "Empat", category: "Angka" },
  { id: 5, character: "五", onyomi: "Go", kunyomi: "Itsutsu", meaning: "Lima", category: "Angka" },
  { id: 6, character: "六", onyomi: "Roku", kunyomi: "Muttsu", meaning: "Enam", category: "Angka" },
  { id: 7, character: "七", onyomi: "Shichi / Nana", kunyomi: "Nanatsu", meaning: "Tujuh", category: "Angka" },
  { id: 8, character: "八", onyomi: "Hachi", kunyomi: "Yattsu", meaning: "Delapan", category: "Angka" },
  { id: 9, character: "九", onyomi: "Kyuu / Ku", kunyomi: "Kokonotsu", meaning: "Sembilan", category: "Angka" },
  { id: 10, character: "十", onyomi: "Juu", kunyomi: "Too", meaning: "Sepuluh", category: "Angka" },
  { id: 11, character: "百", onyomi: "Hyaku", kunyomi: "-", meaning: "Seratus", category: "Angka" },
  { id: 12, character: "千", onyomi: "Sen", kunyomi: "-", meaning: "Seribu", category: "Angka" },
  { id: 13, character: "万", onyomi: "Man", kunyomi: "-", meaning: "Sepuluh Ribu", category: "Angka" },

  // Waktu & Tanggal
  { id: 14, character: "円", onyomi: "En", kunyomi: "-", meaning: "Yen / Lingkaran", category: "Waktu & Tanggal" },
  { id: 15, character: "日", onyomi: "Nichi", kunyomi: "Hi", meaning: "Hari / Matahari", category: "Waktu & Tanggal" },
  { id: 16, character: "月", onyomi: "Getsu", kunyomi: "Tsuki", meaning: "Bulan", category: "Waktu & Tanggal" },
  { id: 17, character: "火", onyomi: "Ka", kunyomi: "Hi", meaning: "Api (Selasa)", category: "Waktu & Tanggal" },
  { id: 18, character: "水", onyomi: "Sui", kunyomi: "Mizu", meaning: "Air (Rabu)", category: "Waktu & Tanggal" },
  { id: 19, character: "木", onyomi: "Moku", kunyomi: "Ki", meaning: "Pohon (Kamis)", category: "Waktu & Tanggal" },
  { id: 20, character: "金", onyomi: "Kin", kunyomi: "Kane", meaning: "Emas / Uang (Jumat)", category: "Waktu & Tanggal" },
  { id: 21, character: "土", onyomi: "Do", kunyomi: "Tsuchi", meaning: "Tanah (Sabtu)", category: "Waktu & Tanggal" },
  { id: 22, character: "年", onyomi: "Nen", kunyomi: "Toshi", meaning: "Tahun", category: "Waktu & Tanggal" },
  { id: 23, character: "今", onyomi: "Kon", kunyomi: "Ima", meaning: "Sekarang", category: "Waktu & Tanggal" },
  { id: 24, character: "時", onyomi: "Ji", kunyomi: "Toki", meaning: "Jam / Waktu", category: "Waktu & Tanggal" },
  { id: 25, character: "分", onyomi: "Fun / Pun", kunyomi: "Wakaru", meaning: "Menit / Mengerti", category: "Waktu & Tanggal" },
  { id: 26, character: "半", onyomi: "Han", kunyomi: "-", meaning: "Setengah", category: "Waktu & Tanggal" },
  { id: 27, character: "午", onyomi: "Go", kunyomi: "-", meaning: "Siang (AM/PM)", category: "Waktu & Tanggal" },

  // Arah & Posisi
  { id: 28, character: "前", onyomi: "Zen", kunyomi: "Mae", meaning: "Depan / Sebelum", category: "Arah & Posisi" },
  { id: 29, character: "後", onyomi: "Go", kunyomi: "Ato / Ushiro", meaning: "Belakang / Sesudah", category: "Arah & Posisi" },
  { id: 30, character: "何", onyomi: "Nan", kunyomi: "Nani", meaning: "Apa", category: "Arah & Posisi" },
  { id: 31, character: "上", onyomi: "Jou", kunyomi: "Ue", meaning: "Atas", category: "Arah & Posisi" },
  { id: 32, character: "下", onyomi: "Ka", kunyomi: "Shita", meaning: "Bawah", category: "Arah & Posisi" },
  { id: 33, character: "左", onyomi: "Sa", kunyomi: "Hidari", meaning: "Kiri", category: "Arah & Posisi" },
  { id: 34, character: "右", onyomi: "U", kunyomi: "Migi", meaning: "Kanan", category: "Arah & Posisi" },
  { id: 35, character: "中", onyomi: "Chuu", kunyomi: "Naka", meaning: "Tengah / Dalam", category: "Arah & Posisi" },
  { id: 36, character: "外", onyomi: "Gai", kunyomi: "Soto", meaning: "Luar", category: "Arah & Posisi" },
  { id: 37, character: "北", onyomi: "Hoku", kunyomi: "Kita", meaning: "Utara", category: "Arah & Posisi" },
  { id: 38, character: "南", onyomi: "Nan", kunyomi: "Minami", meaning: "Selatan", category: "Arah & Posisi" },
  { id: 39, character: "東", onyomi: "Tou", kunyomi: "Higashi", meaning: "Timur", category: "Arah & Posisi" },
  { id: 40, character: "西", onyomi: "Sei", kunyomi: "Nishi", meaning: "Barat", category: "Arah & Posisi" },

  // Orang & Keluarga
  { id: 41, character: "人", onyomi: "Jin / Nin", kunyomi: "Hito", meaning: "Orang", category: "Orang & Keluarga" },
  { id: 42, character: "子", onyomi: "Shi", kunyomi: "Ko", meaning: "Anak", category: "Orang & Keluarga" },
  { id: 43, character: "女", onyomi: "Jo", kunyomi: "Onna", meaning: "Wanita", category: "Orang & Keluarga" },
  { id: 44, character: "男", onyomi: "Dan", kunyomi: "Otoko", meaning: "Pria", category: "Orang & Keluarga" },
  { id: 45, character: "父", onyomi: "Fu", kunyomi: "Chichi", meaning: "Ayah", category: "Orang & Keluarga" },
  { id: 46, character: "母", onyomi: "Bo", kunyomi: "Haha", meaning: "Ibu", category: "Orang & Keluarga" },

  // Tubuh
  { id: 47, character: "目", onyomi: "Moku", kunyomi: "Me", meaning: "Mata", category: "Tubuh" },
  { id: 48, character: "耳", onyomi: "Ji", kunyomi: "Mimi", meaning: "Telinga", category: "Tubuh" },
  { id: 49, character: "口", onyomi: "Kou", kunyomi: "Kuchi", meaning: "Mulut", category: "Tubuh" },
  { id: 50, character: "手", onyomi: "Shu", kunyomi: "Te", meaning: "Tangan", category: "Tubuh" },
  { id: 51, character: "足", onyomi: "Soku", kunyomi: "Ashi", meaning: "Kaki", category: "Tubuh" },

  // Aksi & Kata Kerja
  { id: 52, character: "見", onyomi: "Ken", kunyomi: "Mi-ru", meaning: "Melihat", category: "Aksi & Kata Kerja" },
  { id: 53, character: "聞", onyomi: "Bun", kunyomi: "Ki-ku", meaning: "Mendengar", category: "Aksi & Kata Kerja" },
  { id: 54, character: "言", onyomi: "Gen", kunyomi: "I-u", meaning: "Berkata", category: "Aksi & Kata Kerja" },
  { id: 55, character: "話", onyomi: "Wa", kunyomi: "Hana-su", meaning: "Berbicara", category: "Aksi & Kata Kerja" },
  { id: 56, character: "読", onyomi: "Doku", kunyomi: "Yo-mu", meaning: "Membaca", category: "Aksi & Kata Kerja" },
  { id: 57, character: "書", onyomi: "Sho", kunyomi: "Ka-ku", meaning: "Menulis", category: "Aksi & Kata Kerja" },
  { id: 58, character: "食", onyomi: "Shoku", kunyomi: "Ta-beru", meaning: "Makan", category: "Aksi & Kata Kerja" },
  { id: 59, character: "飲", onyomi: "In", kunyomi: "No-mu", meaning: "Minum", category: "Aksi & Kata Kerja" },
  { id: 60, character: "買", onyomi: "Bai", kunyomi: "Ka-u", meaning: "Membeli", category: "Aksi & Kata Kerja" },
  { id: 61, character: "行", onyomi: "Kou", kunyomi: "I-ku", meaning: "Pergi", category: "Aksi & Kata Kerja" },
  { id: 62, character: "来", onyomi: "Rai", kunyomi: "Ku-ru", meaning: "Datang", category: "Aksi & Kata Kerja" },
  { id: 63, character: "出", onyomi: "Shutsu", kunyomi: "De-ru", meaning: "Keluar", category: "Aksi & Kata Kerja" },
  { id: 64, character: "入", onyomi: "Nyuu", kunyomi: "Hai-ru", meaning: "Masuk", category: "Aksi & Kata Kerja" },
  { id: 65, character: "休", onyomi: "Kyuu", kunyomi: "Yasu-mu", meaning: "Istirahat", category: "Aksi & Kata Kerja" },
  { id: 66, character: "立", onyomi: "Ritsu", kunyomi: "Ta-tsu", meaning: "Berdiri", category: "Aksi & Kata Kerja" },
  { id: 67, character: "会", onyomi: "Kai", kunyomi: "A-u", meaning: "Bertemu", category: "Aksi & Kata Kerja" },

  // Kata Sifat
  { id: 68, character: "大", onyomi: "Dai", kunyomi: "Oo-kii", meaning: "Besar", category: "Kata Sifat" },
  { id: 69, character: "小", onyomi: "Shou", kunyomi: "Chii-sai", meaning: "Kecil", category: "Kata Sifat" },
  { id: 70, character: "高", onyomi: "Kou", kunyomi: "Taka-i", meaning: "Tinggi / Mahal", category: "Kata Sifat" },
  { id: 71, character: "安", onyomi: "An", kunyomi: "Yasu-i", meaning: "Murah / Aman", category: "Kata Sifat" },
  { id: 72, character: "新", onyomi: "Shin", kunyomi: "Atara-shii", meaning: "Baru", category: "Kata Sifat" },
  { id: 73, character: "古", onyomi: "Ko", kunyomi: "Furu-i", meaning: "Lama / Tua", category: "Kata Sifat" },
  { id: 74, character: "長", onyomi: "Chou", kunyomi: "Naga-i", meaning: "Panjang / Pemimpin", category: "Kata Sifat" },
  { id: 75, character: "多", onyomi: "Ta", kunyomi: "Oo-i", meaning: "Banyak", category: "Kata Sifat" },
  { id: 76, character: "少", onyomi: "Shou", kunyomi: "Suku-nai", meaning: "Sedikit", category: "Kata Sifat" },
  { id: 77, character: "白", onyomi: "Haku", kunyomi: "Shiro", meaning: "Putih", category: "Kata Sifat" },

  // Pendidikan & Sosial
  { id: 78, character: "学", onyomi: "Gaku", kunyomi: "Mana-bu", meaning: "Belajar", category: "Pendidikan & Sosial" },
  { id: 79, character: "校", onyomi: "Kou", kunyomi: "-", meaning: "Sekolah", category: "Pendidikan & Sosial" },
  { id: 80, character: "先", onyomi: "Sen", kunyomi: "Saki", meaning: "Sebelumnya / Guru", category: "Pendidikan & Sosial" },
  { id: 81, character: "生", onyomi: "Sei", kunyomi: "I-kiru / Uma-reru", meaning: "Hidup / Lahir", category: "Pendidikan & Sosial" },
  { id: 82, character: "名", onyomi: "Mei", kunyomi: "Na", meaning: "Nama", category: "Pendidikan & Sosial" },
  { id: 83, character: "本", onyomi: "Hon", kunyomi: "Moto", meaning: "Buku / Asal", category: "Pendidikan & Sosial" },
  { id: 84, character: "友", onyomi: "Yuu", kunyomi: "Tomo", meaning: "Teman", category: "Pendidikan & Sosial" },
  { id: 85, character: "国", onyomi: "Koku", kunyomi: "Kuni", meaning: "Negara", category: "Pendidikan & Sosial" },
  { id: 86, character: "社", onyomi: "Sha", kunyomi: "Ya-shiro", meaning: "Perusahaan / Kuil", category: "Pendidikan & Sosial" },
  { id: 87, character: "電", onyomi: "Den", kunyomi: "-", meaning: "Listrik", category: "Pendidikan & Sosial" },
  { id: 88, character: "車", onyomi: "Sha", kunyomi: "Kuruma", meaning: "Mobil", category: "Pendidikan & Sosial" },
  { id: 89, character: "駅", onyomi: "Eki", kunyomi: "-", meaning: "Stasiun", category: "Pendidikan & Sosial" },
  { id: 90, character: "道", onyomi: "Dou", kunyomi: "Michi", meaning: "Jalan", category: "Pendidikan & Sosial" },

  // Alam
  { id: 91, character: "花", onyomi: "Ka", kunyomi: "Hana", meaning: "Bunga", category: "Alam" },
  { id: 92, character: "雨", onyomi: "U", kunyomi: "Ame", meaning: "Hujan", category: "Alam" },
  { id: 93, character: "天", onyomi: "Ten", kunyomi: "Ama", meaning: "Langit", category: "Alam" },
  { id: 94, character: "気", onyomi: "Ki", kunyomi: "-", meaning: "Energi / Perasaan", category: "Alam" },
  { id: 95, character: "山", onyomi: "San", kunyomi: "Yama", meaning: "Gunung", category: "Alam" },
  { id: 96, character: "川", onyomi: "Sen", kunyomi: "Kawa", meaning: "Sungai", category: "Alam" },
  { id: 97, character: "魚", onyomi: "Gyo", kunyomi: "Sakana", meaning: "Ikan", category: "Alam" },

  // Lainnya
  { id: 98, character: "店", onyomi: "Ten", kunyomi: "Mise", meaning: "Toko", category: "Lainnya" },
  { id: 99, character: "語", onyomi: "Go", kunyomi: "Kata-ru", meaning: "Bahasa", category: "Lainnya" },
  { id: 100, character: "週", onyomi: "Shuu", kunyomi: "-", meaning: "Minggu", category: "Lainnya" },
  { id: 101, character: "物", onyomi: "Butsu", kunyomi: "Mono", meaning: "Benda", category: "Lainnya" },
  { id: 102, character: "茶", onyomi: "Cha / Sa", kunyomi: "-", meaning: "Teh", category: "Lainnya" },
  { id: 103, character: "万", onyomi: "Man", kunyomi: "-", meaning: "Sepuluh Ribu", category: "Lainnya" },
];

export const categories: KanjiCategory[] = [
  "Angka",
  "Waktu & Tanggal",
  "Arah & Posisi",
  "Orang & Keluarga",
  "Tubuh",
  "Aksi & Kata Kerja",
  "Kata Sifat",
  "Pendidikan & Sosial",
  "Alam",
  "Lainnya",
];

export const categoryEmoji: Record<KanjiCategory, string> = {
  "Angka": "🔢",
  "Waktu & Tanggal": "📅",
  "Arah & Posisi": "🧭",
  "Orang & Keluarga": "👨‍👩‍👧",
  "Tubuh": "🫀",
  "Aksi & Kata Kerja": "⚡",
  "Kata Sifat": "🎨",
  "Pendidikan & Sosial": "🏫",
  "Alam": "🌿",
  "Lainnya": "✨",
};

export function getRandomKanji(exclude?: number[]): Kanji {
  const available = kanjiData.filter((k) => !exclude?.includes(k.id));
  return available[Math.floor(Math.random() * available.length)];
}

export function getWrongOptions(correct: Kanji, field: "meaning" | "onyomi" | "character"): Kanji[] {
  const others = kanjiData.filter((k) => k.id !== correct.id);
  const shuffled = others.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}
