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
  | "Lainnya"
  | "Angka & Satuan"
  | "Pendidikan & Sekolah"
  | "Kata Kerja Lanjutan"
  | "Alam & Cuaca"
  | "Benda & Kehidupan";

export interface Kanji {
  id: number;
  character: string;
  onyomi: string;
  kunyomi?: string;
  meaning: string;
  category: KanjiCategory;
  examples: { word: string; reading: string; meaning: string }[];
}

export const kanjiData: Kanji[] = [
  // Angka
  { id: 1, character: "一", onyomi: "Ichi", kunyomi: "Hitotsu", meaning: "Satu", category: "Angka", examples: [{ word: "一人", reading: "hitori", meaning: "Satu orang" }, { word: "一分", reading: "ippun", meaning: "Satu menit" }, { word: "一日", reading: "tsuitachi", meaning: "Tanggal satu" }, { word: "第一", reading: "daiichi", meaning: "Yang pertama" }] },
  { id: 2, character: "二", onyomi: "Ni", kunyomi: "Futatsu", meaning: "Dua", category: "Angka", examples: [{ word: "二日", reading: "futsuka", meaning: "Tanggal dua" }, { word: "二人", reading: "futari", meaning: "Dua orang" }, { word: "二番目", reading: "nibanme", meaning: "Yang kedua" }, { word: "二階", reading: "nikai", meaning: "Lantai dua" }] },
  { id: 3, character: "三", onyomi: "San", kunyomi: "Mittsu", meaning: "Tiga", category: "Angka", examples: [{ word: "三日", reading: "mikka", meaning: "Tanggal tiga" }, { word: "三月", reading: "sangatsu", meaning: "Maret" }, { word: "三回", reading: "sankai", meaning: "Tiga kali" }, { word: "三番目", reading: "sanbanme", meaning: "Yang ketiga" }] },
  { id: 4, character: "四", onyomi: "Shi / Yon", kunyomi: "Yottsu", meaning: "Empat", category: "Angka", examples: [{ word: "四日", reading: "yokka", meaning: "Tanggal empat" }, { word: "四月", reading: "shigatsu", meaning: "April" }, { word: "四人", reading: "yonin", meaning: "Empat orang" }, { word: "四角", reading: "shikaku", meaning: "Persegi" }] },
  { id: 5, character: "五", onyomi: "Go", kunyomi: "Itsutsu", meaning: "Lima", category: "Angka", examples: [{ word: "五日", reading: "itsuka", meaning: "Tanggal lima" }, { word: "五月", reading: "gogatsu", meaning: "Mei" }, { word: "五時", reading: "goji", meaning: "Jam lima" }, { word: "五人", reading: "gonin", meaning: "Lima orang" }] },
  { id: 6, character: "六", onyomi: "Roku", kunyomi: "Muttsu", meaning: "Enam", category: "Angka", examples: [{ word: "六日", reading: "muika", meaning: "Tanggal enam" }, { word: "六月", reading: "rokugatsu", meaning: "Juni" }, { word: "六時", reading: "rokuj", meaning: "Jam enam" }, { word: "六人", reading: "rokunin", meaning: "Enam orang" }] },
  { id: 7, character: "七", onyomi: "Shichi / Nana", kunyomi: "Nanatsu", meaning: "Tujuh", category: "Angka", examples: [{ word: "七日", reading: "nanoka", meaning: "Tanggal tujuh" }, { word: "七月", reading: "shichigatsu", meaning: "Juli" }, { word: "七時", reading: "shichiji", meaning: "Jam tujuh" }, { word: "七人", reading: "shichinin", meaning: "Tujuh orang" }] },
  { id: 8, character: "八", onyomi: "Hachi", kunyomi: "Yattsu", meaning: "Delapan", category: "Angka", examples: [{ word: "八日", reading: "youka", meaning: "Tanggal delapan" }, { word: "八月", reading: "hachigatsu", meaning: "Agustus" }, { word: "八時", reading: "hachiji", meaning: "Jam delapan" }, { word: "八人", reading: "hachnin", meaning: "Delapan orang" }] },
  { id: 9, character: "九", onyomi: "Kyuu / Ku", kunyomi: "Kokonotsu", meaning: "Sembilan", category: "Angka", examples: [{ word: "九日", reading: "kokonoka", meaning: "Tanggal sembilan" }, { word: "九月", reading: "kugatsu", meaning: "September" }, { word: "九時", reading: "kuji", meaning: "Jam sembilan" }, { word: "九人", reading: "kyunin", meaning: "Sembilan orang" }] },
  { id: 10, character: "十", onyomi: "Juu", kunyomi: "Too", meaning: "Sepuluh", category: "Angka", examples: [{ word: "十日", reading: "tooka", meaning: "Tanggal sepuluh" }, { word: "十月", reading: "juugatsu", meaning: "Oktober" }, { word: "十時", reading: "juuji", meaning: "Jam sepuluh" }, { word: "十人", reading: "junin", meaning: "Sepuluh orang" }] },
  { id: 11, character: "百", onyomi: "Hyaku", kunyomi: "-", meaning: "Seratus", category: "Angka", examples: [{ word: "三千", reading: "sanbyaku", meaning: "Tiga ratus" }, { word: "六百", reading: "roppyaku", meaning: "Enam ratus" }] },
  { id: 12, character: "千", onyomi: "Sen", kunyomi: "-", meaning: "Seribu", category: "Angka", examples: [{ word: "三千", reading: "sanzen", meaning: "Tiga ribu" }, { word: "八千", reading: "hasshen", meaning: "Delapan ribu" }] },
  { id: 13, character: "万", onyomi: "Man", kunyomi: "-", meaning: "Sepuluh Ribu", category: "Angka", examples: [{ word: "一万", reading: "ichiman", meaning: "Sepuluh ribu" }, { word: "百万", reading: "hyakuman", meaning: "Satu juta" }] },

  // Waktu & Tanggal
  { id: 14, character: "円", onyomi: "En", kunyomi: "-", meaning: "Yen / Lingkaran", category: "Waktu & Tanggal", examples: [{ word: "百円", reading: "hyakuen", meaning: "Seratus yen" }, { word: "円い", reading: "marui", meaning: "Bulat" }, { word: "千円", reading: "sennen", meaning: "Seribu yen" }] },
  { id: 15, character: "日", onyomi: "Nichi", kunyomi: "Hi", meaning: "Hari / Matahari", category: "Waktu & Tanggal", examples: [{ word: "今日", reading: "kyou", meaning: "Hari ini" }, { word: "日曜日", reading: "nichiyoubi", meaning: "Hari Minggu" }, { word: "毎日", reading: "mainichi", meaning: "Setiap hari" }, { word: "日本", reading: "nihon", meaning: "Jepang" }] },
  { id: 16, character: "月", onyomi: "Getsu", kunyomi: "Tsuki", meaning: "Bulan", category: "Waktu & Tanggal", examples: [{ word: "一月", reading: "ichigatsu", meaning: "Januari" }, { word: "月曜日", reading: "getsuyoubi", meaning: "Hari Senin" }, { word: "今月", reading: "kongetsu", meaning: "Bulan ini" }, { word: "来月", reading: "raigetsu", meaning: "Bulan depan" }] },
  { id: 17, character: "火", onyomi: "Ka", kunyomi: "Hi", meaning: "Api (Selasa)", category: "Waktu & Tanggal", examples: [{ word: "火曜日", reading: "kayoubi", meaning: "Hari Selasa" }, { word: "火山", reading: "kazan", meaning: "Gunung Berapi" }, { word: "火事", reading: "kaji", meaning: "Kebakaran" }] },
  { id: 18, character: "水", onyomi: "Sui", kunyomi: "Mizu", meaning: "Air (Rabu)", category: "Waktu & Tanggal", examples: [{ word: "水曜日", reading: "suiyoubi", meaning: "Hari Rabu" }, { word: "水泳", reading: "suiei", meaning: "Berenang" }, { word: "水道", reading: "suidou", meaning: "Saluran air" }, { word: "水族館", reading: "suizokukan", meaning: "Akuarium" }] },
  { id: 19, character: "木", onyomi: "Moku", kunyomi: "Ki", meaning: "Pohon (Kamis)", category: "Waktu & Tanggal", examples: [{ word: "木曜日", reading: "mokuyoubi", meaning: "Hari Kamis" }, { word: "大木", reading: "taiboku", meaning: "Pohon Besar" }, { word: "森林", reading: "shinrin", meaning: "Hutan" }] },
  { id: 20, character: "金", onyomi: "Kin", kunyomi: "Kane", meaning: "Emas / Uang (Jumat)", category: "Waktu & Tanggal", examples: [{ word: "金曜日", reading: "kinyoubi", meaning: "Hari Jumat" }, { word: "お金", reading: "okane", meaning: "Uang" }, { word: "金色", reading: "kiniro", meaning: "Warna emas" }, { word: "金融", reading: "kinyu", meaning: "Keuangan" }] },
  { id: 21, character: "土", onyomi: "Do", kunyomi: "Tsuchi", meaning: "Tanah (Sabtu)", category: "Waktu & Tanggal", examples: [{ word: "土曜日", reading: "doyoubi", meaning: "Hari Sabtu" }, { word: "土地", reading: "tochi", meaning: "Tanah" }, { word: "土器", reading: "doki", meaning: "Tembikar" }] },
  { id: 22, character: "年", onyomi: "Nen", kunyomi: "Toshi", meaning: "Tahun", category: "Waktu & Tanggal", examples: [{ word: "今年", reading: "kotoshi", meaning: "Tahun ini" }, { word: "来年", reading: "rainen", meaning: "Tahun depan" }, { word: "去年", reading: "kyonen", meaning: "Tahun lalu" }, { word: "年齢", reading: "nenrei", meaning: "Usia" }] },
  { id: 23, character: "今", onyomi: "Kon", kunyomi: "Ima", meaning: "Sekarang", category: "Waktu & Tanggal", examples: [{ word: "今月", reading: "kongetsu", meaning: "Bulan ini" }, { word: "今週", reading: "konshuu", meaning: "Minggu ini" }, { word: "今夜", reading: "konyoru", meaning: "Malam ini" }] },
  { id: 24, character: "時", onyomi: "Ji", kunyomi: "Toki", meaning: "Jam / Waktu", category: "Waktu & Tanggal", examples: [{ word: "一時", reading: "ichiji", meaning: "Jam satu" }, { word: "時間", reading: "jikan", meaning: "Waktu" }, { word: "時計", reading: "tokei", meaning: "Jam tangan" }, { word: "定時", reading: "teiji", meaning: "Tepat waktu" }] },
  { id: 25, character: "分", onyomi: "Fun / Pun", kunyomi: "Wakaru", meaning: "Menit / Mengerti", category: "Waktu & Tanggal", examples: [{ word: "十分", reading: "juuppun", meaning: "Sepuluh menit" }, { word: "自分", reading: "jibun", meaning: "Diri sendiri" }, { word: "分かる", reading: "wakaru", meaning: "Mengerti" }] },
  { id: 26, character: "半", onyomi: "Han", kunyomi: "-", meaning: "Setengah", category: "Waktu & Tanggal", examples: [{ word: "三時半", reading: "sanjihan", meaning: "Jam setengah empat" }, { word: "半分", reading: "hanbun", meaning: "Setengah" }, { word: "半年", reading: "hantoshi", meaning: "Setengah tahun" }] },
  { id: 27, character: "午", onyomi: "Go", kunyomi: "-", meaning: "Siang (AM/PM)", category: "Waktu & Tanggal", examples: [{ word: "午前", reading: "gozen", meaning: "Pagi (AM)" }, { word: "午後", reading: "gogo", meaning: "Siang (PM)" }, { word: "昼12時午", reading: "shougo", meaning: "Tengah hari" }] },

  // Arah & Posisi
  { id: 28, character: "前", onyomi: "Zen", kunyomi: "Mae", meaning: "Depan / Sebelum", category: "Arah & Posisi", examples: [{ word: "名前", reading: "namae", meaning: "Nama" }, { word: "午前", reading: "gozen", meaning: "Pagi (AM)" }] },
  { id: 29, character: "後", onyomi: "Go", kunyomi: "Ato / Ushiro", meaning: "Belakang / Sesudah", category: "Arah & Posisi", examples: [{ word: "午後", reading: "gogo", meaning: "Siang (PM)" }, { word: "後ろ", reading: "ushiro", meaning: "Belakang" }] },
  { id: 30, character: "何", onyomi: "Nan", kunyomi: "Nani", meaning: "Apa", category: "Arah & Posisi", examples: [{ word: "何か", reading: "nanika", meaning: "Sesuatu" }, { word: "何時", reading: "nanji", meaning: "Jam berapa" }] },
  { id: 31, character: "上", onyomi: "Jou", kunyomi: "Ue", meaning: "Atas", category: "Arah & Posisi", examples: [{ word: "上手", reading: "jouzu", meaning: "Pandai" }, { word: "屋上", reading: "okujou", meaning: "Atap" }] },
  { id: 32, character: "下", onyomi: "Ka", kunyomi: "Shita", meaning: "Bawah", category: "Arah & Posisi", examples: [{ word: "地下鉄", reading: "chikatetsu", meaning: "Kereta bawah tanah" }, { word: "下手", reading: "heta", meaning: "Tidak pandai" }] },
  { id: 33, character: "左", onyomi: "Sa", kunyomi: "Hidari", meaning: "Kiri", category: "Arah & Posisi", examples: [{ word: "左側", reading: "hidarigawa", meaning: "Sisi kiri" }, { word: "左手", reading: "hidarite", meaning: "Tangan kiri" }] },
  { id: 34, character: "右", onyomi: "U", kunyomi: "Migi", meaning: "Kanan", category: "Arah & Posisi", examples: [{ word: "右側", reading: "migigawa", meaning: "Sisi kanan" }, { word: "右手", reading: "migite", meaning: "Tangan kanan" }] },
  { id: 35, character: "中", onyomi: "Chuu", kunyomi: "Naka", meaning: "Tengah / Dalam", category: "Arah & Posisi", examples: [{ word: "中心", reading: "chuushin", meaning: "Pusat" }, { word: "一日中", reading: "ichinichijuu", meaning: "Sepanjang hari" }] },
  { id: 36, character: "外", onyomi: "Gai", kunyomi: "Soto", meaning: "Luar", category: "Arah & Posisi", examples: [{ word: "外国", reading: "gaikoku", meaning: "Luar negeri" }, { word: "外出", reading: "gaishutsu", meaning: "Pergi keluar" }] },
  { id: 37, character: "北", onyomi: "Hoku", kunyomi: "Kita", meaning: "Utara", category: "Arah & Posisi", examples: [{ word: "北極", reading: "hokkyoku", meaning: "Kutub utara" }, { word: "北海道", reading: "hokkaido", meaning: "Hokkaido" }] },
  { id: 38, character: "南", onyomi: "Nan", kunyomi: "Minami", meaning: "Selatan", category: "Arah & Posisi", examples: [{ word: "南極", reading: "nankyoku", meaning: "Kutub selatan" }, { word: "南口", reading: "minamiguchi", meaning: "Pintu selatan" }] },
  { id: 39, character: "東", onyomi: "Tou", kunyomi: "Higashi", meaning: "Timur", category: "Arah & Posisi", examples: [{ word: "東京", reading: "toukyou", meaning: "Tokyo" }, { word: "東口", reading: "higashiguchi", meaning: "Pintu timur" }] },
  { id: 40, character: "西", onyomi: "Sei", kunyomi: "Nishi", meaning: "Barat", category: "Arah & Posisi", examples: [{ word: "西洋", reading: "seiyou", meaning: "Barat (Occident)" }, { word: "西口", reading: "nishiguchi", meaning: "Pintu barat" }] },

  // Orang & Keluarga
  { id: 41, character: "人", onyomi: "Jin / Nin", kunyomi: "Hito", meaning: "Orang", category: "Orang & Keluarga", examples: [{ word: "日本人", reading: "nihonjin", meaning: "Orang Jepang" }, { word: "大人", reading: "otona", meaning: "Dewasa" }] },
  { id: 42, character: "子", onyomi: "Shi", kunyomi: "Ko", meaning: "Anak", category: "Orang & Keluarga", examples: [{ word: "子供", reading: "kodomo", meaning: "Anak-anak" }, { word: "椅子", reading: "isu", meaning: "Kursi" }] },
  { id: 43, character: "女", onyomi: "Jo", kunyomi: "Onna", meaning: "Wanita", category: "Orang & Keluarga", examples: [{ word: "女の子", reading: "onnanoko", meaning: "Anak perempuan" }, { word: "女性", reading: "josei", meaning: "Wanita" }] },
  { id: 44, character: "男", onyomi: "Dan", kunyomi: "Otoko", meaning: "Pria", category: "Orang & Keluarga", examples: [{ word: "男の子", reading: "otokonoko", meaning: "Anak laki-laki" }, { word: "男性", reading: "dansei", meaning: "Pria" }] },
  { id: 45, character: "父", onyomi: "Fu", kunyomi: "Chichi", meaning: "Ayah", category: "Orang & Keluarga", examples: [{ word: "お父さん", reading: "otousan", meaning: "Ayah (orang lain)" }, { word: "父母", reading: "fubo", meaning: "Ayah dan Ibu" }] },
  { id: 46, character: "母", onyomi: "Bo", kunyomi: "Haha", meaning: "Ibu", category: "Orang & Keluarga", examples: [{ word: "お母さん", reading: "okaasan", meaning: "Ibu (orang lain)" }, { word: "母親", reading: "hahaoya", meaning: "Ibu kandung" }] },

  // Tubuh
  { id: 47, character: "目", onyomi: "Moku", kunyomi: "Me", meaning: "Mata", category: "Tubuh", examples: [{ word: "目薬", reading: "megusuri", meaning: "Obat mata" }, { word: "目的", reading: "mokuteki", meaning: "Tujuan" }] },
  { id: 48, character: "耳", onyomi: "Ji", kunyomi: "Mimi", meaning: "Telinga", category: "Tubuh", examples: [{ word: "耳鼻科", reading: "jibika", meaning: "THT" }, { word: "耳飾り", reading: "mimikazari", meaning: "Anting" }] },
  { id: 49, character: "口", onyomi: "Kou", kunyomi: "Kuchi", meaning: "Mulut", category: "Tubuh", examples: [{ word: "入り口", reading: "iriguchi", meaning: "Pintu masuk" }, { word: "出口", reading: "deguchi", meaning: "Pintu keluar" }] },
  { id: 50, character: "手", onyomi: "Shu", kunyomi: "Te", meaning: "Tangan", category: "Tubuh", examples: [{ word: "手紙", reading: "tegami", meaning: "Surat" }, { word: "手伝う", reading: "tetsudau", meaning: "Membantu" }] },
  { id: 51, character: "足", onyomi: "Soku", kunyomi: "Ashi", meaning: "Kaki", category: "Tubuh", examples: [{ word: "足りる", reading: "tariru", meaning: "Cukup" }, { word: "遠足", reading: "ensoku", meaning: "Piknik" }] },

  // Aksi & Kata Kerja
  { id: 52, character: "見", onyomi: "Ken", kunyomi: "Mi-ru", meaning: "Melihat", category: "Aksi & Kata Kerja", examples: [{ word: "見学", reading: "kengaku", meaning: "Observasi" }, { word: "花見", reading: "hanami", meaning: "Melihat bunga" }] },
  { id: 53, character: "聞", onyomi: "Bun", kunyomi: "Ki-ku", meaning: "Mendengar", category: "Aksi & Kata Kerja", examples: [{ word: "新聞", reading: "shinbun", meaning: "Koran" }, { word: "聞こえる", reading: "kikoeru", meaning: "Terdengar" }] },
  { id: 54, character: "言", onyomi: "Gen", kunyomi: "I-u", meaning: "Berkata", category: "Aksi & Kata Kerja", examples: [{ word: "言葉", reading: "kotoba", meaning: "Kata" }, { word: "方言", reading: "hougen", meaning: "Dialek" }] },
  { id: 55, character: "話", onyomi: "Wa", kunyomi: "Hana-su", meaning: "Berbicara", category: "Aksi & Kata Kerja", examples: [{ word: "会話", reading: "kaiwa", meaning: "Percakapan" }, { word: "電話", reading: "denwa", meaning: "Telepon" }] },
  { id: 56, character: "読", onyomi: "Doku", kunyomi: "Yo-mu", meaning: "Membaca", category: "Aksi & Kata Kerja", examples: [{ word: "読書", reading: "dokusho", meaning: "Membaca buku" }, { word: "読み物", reading: "yomimono", meaning: "Bahan bacaan" }] },
  { id: 57, character: "書", onyomi: "Sho", kunyomi: "Ka-ku", meaning: "Menulis", category: "Aksi & Kata Kerja", examples: [{ word: "辞書", reading: "jisho", meaning: "Kamus" }, { word: "図書館", reading: "toshokan", meaning: "Perpustakaan" }] },
  { id: 58, character: "食", onyomi: "Shoku", kunyomi: "Ta-beru", meaning: "Makan", category: "Aksi & Kata Kerja", examples: [{ word: "食事", reading: "shokuji", meaning: "Makan (noun)" }, { word: "食べ物", reading: "tabemono", meaning: "Makanan" }] },
  { id: 59, character: "飲", onyomi: "In", kunyomi: "No-mu", meaning: "Minum", category: "Aksi & Kata Kerja", examples: [{ word: "飲み物", reading: "nomimono", meaning: "Minuman" }, { word: "飲食店", reading: "inshokuten", meaning: "Restoran" }] },
  { id: 60, character: "買", onyomi: "Bai", kunyomi: "Ka-u", meaning: "Membeli", category: "Aksi & Kata Kerja", examples: [{ word: "買い物", reading: "kaimono", meaning: "Belanja" }, { word: "売買", reading: "baibai", meaning: "Jual beli" }] },
  { id: 61, character: "行", onyomi: "Kou", kunyomi: "I-ku", meaning: "Pergi", category: "Aksi & Kata Kerja", examples: [{ word: "銀行", reading: "ginkou", meaning: "Bank" }, { word: "旅行", reading: "ryokou", meaning: "Piknik" }] },
  { id: 62, character: "来", onyomi: "Rai", kunyomi: "Ku-ru", meaning: "Datang", category: "Aksi & Kata Kerja", examples: [{ word: "来年", reading: "rainen", meaning: "Tahun depan" }, { word: "来週", reading: "raishuu", meaning: "Minggu depan" }] },
  { id: 63, character: "出", onyomi: "Shutsu", kunyomi: "De-ru", meaning: "Keluar", category: "Aksi & Kata Kerja", examples: [{ word: "外出", reading: "gaishutsu", meaning: "Keluar rumah" }, { word: "出口", reading: "deguchi", meaning: "Pintu keluar" }] },
  { id: 64, character: "入", onyomi: "Nyuu", kunyomi: "Hai-ru", meaning: "Masuk", category: "Aksi & Kata Kerja", examples: [{ word: "入り口", reading: "iriguchi", meaning: "Pintu masuk" }, { word: "入学", reading: "nyuugaku", meaning: "Masuk sekolah" }] },
  { id: 65, character: "休", onyomi: "Kyuu", kunyomi: "Yasu-mu", meaning: "Istirahat", category: "Aksi & Kata Kerja", examples: [{ word: "休日", reading: "kyuujitsu", meaning: "Hari libur" }, { word: "休み", reading: "yasumi", meaning: "Istirahat / Libur" }] },
  { id: 66, character: "立", onyomi: "Ritsu", kunyomi: "Ta-tsu", meaning: "Berdiri", category: "Aksi & Kata Kerja", examples: [{ word: "国立", reading: "kokuritsu", meaning: "Nasional" }, { word: "目立つ", reading: "medatsu", meaning: "Mencolok" }] },
  { id: 67, character: "会", onyomi: "Kai", kunyomi: "A-u", meaning: "Bertemu", category: "Aksi & Kata Kerja", examples: [{ word: "会社", reading: "kaisha", meaning: "Perusahaan" }, { word: "社会", reading: "shakai", meaning: "Masyarakat" }] },

  // Kata Sifat
  { id: 68, character: "大", onyomi: "Dai", kunyomi: "Oo-kii", meaning: "Besar", category: "Kata Sifat", examples: [{ word: "大きい", reading: "ookii", meaning: "Besar" }, { word: "大学", reading: "daigaku", meaning: "Universitas" }] },
  { id: 69, character: "小", onyomi: "Shou", kunyomi: "Chii-sai", meaning: "Kecil", category: "Kata Sifat", examples: [{ word: "小さい", reading: "chiisai", meaning: "Kecil" }, { word: "小学校", reading: "shougakkou", meaning: "SD" }] },
  { id: 70, character: "高", onyomi: "Kou", kunyomi: "Taka-i", meaning: "Tinggi / Mahal", category: "Kata Sifat", examples: [{ word: "高い", reading: "takai", meaning: "Tinggi / Mahal" }, { word: "高校", reading: "koukou", meaning: "SMA" }] },
  { id: 71, character: "安", onyomi: "An", kunyomi: "Yasu-i", meaning: "Murah / Aman", category: "Kata Sifat", examples: [{ word: "安い", reading: "yasui", meaning: "Murah" }, { word: "安心", reading: "anshin", meaning: "Lega" }] },
  { id: 72, character: "新", onyomi: "Shin", kunyomi: "Atara-shii", meaning: "Baru", category: "Kata Sifat", examples: [{ word: "新しい", reading: "atarashii", meaning: "Baru" }, { word: "新聞", reading: "shinbun", meaning: "Koran" }] },
  { id: 73, character: "古", onyomi: "Ko", kunyomi: "Furu-i", meaning: "Lama / Tua", category: "Kata Sifat", examples: [{ word: "古い", reading: "furui", meaning: "Lama" }, { word: "中古", reading: "chuuko", meaning: "Bekas" }] },
  { id: 74, character: "長", onyomi: "Chou", kunyomi: "Naga-i", meaning: "Panjang / Pemimpin", category: "Kata Sifat", examples: [{ word: "長い", reading: "nagai", meaning: "Panjang" }, { word: "社長", reading: "shachou", meaning: "Direktur" }] },
  { id: 75, character: "多", onyomi: "Ta", kunyomi: "Oo-i", meaning: "Banyak", category: "Kata Sifat", examples: [{ word: "多い", reading: "ooi", meaning: "Banyak" }, { word: "多分", reading: "tabun", meaning: "Mungkin" }] },
  { id: 76, character: "少", onyomi: "Shou", kunyomi: "Suku-nai", meaning: "Sedikit", category: "Kata Sifat", examples: [{ word: "少ない", reading: "sukunai", meaning: "Sedikit" }, { word: "少し", reading: "sukoshi", meaning: "Sedikit" }] },
  { id: 77, character: "白", onyomi: "Haku", kunyomi: "Shiro", meaning: "Putih", category: "Kata Sifat", examples: [{ word: "白い", reading: "shiroi", meaning: "Putih" }, { word: "白鳥", reading: "hakuchou", meaning: "Angsa" }] },

  // Pendidikan & Sosial
  { id: 78, character: "学", onyomi: "Gaku", kunyomi: "Mana-bu", meaning: "Belajar", category: "Pendidikan & Sosial", examples: [{ word: "学校", reading: "gakkou", meaning: "Sekolah" }, { word: "学生", reading: "gakusei", meaning: "Siswa" }] },
  { id: 79, character: "校", onyomi: "Kou", kunyomi: "-", meaning: "Sekolah", category: "Pendidikan & Sosial", examples: [{ word: "校長", reading: "kouchou", meaning: "Kepala sekolah" }, { word: "中学校", reading: "chuugakkou", meaning: "SMP" }] },
  { id: 80, character: "先", onyomi: "Sen", kunyomi: "Saki", meaning: "Sebelumnya / Guru", category: "Pendidikan & Sosial", examples: [{ word: "先生", reading: "sensei", meaning: "Guru" }, { word: "先月", reading: "sengetsu", meaning: "Bulan lalu" }] },
  { id: 81, character: "生", onyomi: "Sei", kunyomi: "I-kiru / Uma-reru", meaning: "Hidup / Lahir", category: "Pendidikan & Sosial", examples: [{ word: "生活", reading: "seikatsu", meaning: "Kehidupan" }, { word: "誕生日", reading: "tanjoubi", meaning: "Ulang tahun" }] },
  { id: 82, character: "名", onyomi: "Mei", kunyomi: "Na", meaning: "Nama", category: "Pendidikan & Sosial", examples: [{ word: "名前", reading: "namae", meaning: "Nama" }, { word: "有名", reading: "yuumei", meaning: "Terkenal" }] },
  { id: 83, character: "本", onyomi: "Hon", kunyomi: "Moto", meaning: "Buku / Asal", category: "Pendidikan & Sosial", examples: [{ word: "日本", reading: "nihon", meaning: "Jepang" }, { word: "本当", reading: "hontou", meaning: "Benar" }] },
  { id: 84, character: "友", onyomi: "Yuu", kunyomi: "Tomo", meaning: "Teman", category: "Pendidikan & Sosial", examples: [{ word: "友達", reading: "tomodachi", meaning: "Teman" }, { word: "親友", reading: "shinyuu", meaning: "Sahabat" }] },
  { id: 85, character: "国", onyomi: "Koku", kunyomi: "Kuni", meaning: "Negara", category: "Pendidikan & Sosial", examples: [{ word: "外国", reading: "gaikoku", meaning: "Luar negeri" }, { word: "国会", reading: "kokkai", meaning: "Diet (Parlemen)" }] },
  { id: 86, character: "社", onyomi: "Sha", kunyomi: "Ya-shiro", meaning: "Perusahaan / Kuil", category: "Pendidikan & Sosial", examples: [{ word: "会社", reading: "kaisha", meaning: "Perusahaan" }, { word: "神社", reading: "jinja", meaning: "Kuil Shinto" }] },
  { id: 87, character: "電", onyomi: "Den", kunyomi: "-", meaning: "Listrik", category: "Pendidikan & Sosial", examples: [{ word: "電車", reading: "densha", meaning: "Kereta" }, { word: "電話", reading: "denwa", meaning: "Telepon" }] },
  { id: 88, character: "車", onyomi: "Sha", kunyomi: "Kuruma", meaning: "Mobil", category: "Pendidikan & Sosial", examples: [{ word: "自転車", reading: "jitensha", meaning: "Sepeda" }, { word: "救急車", reading: "kyuukyuusha", meaning: "Ambulans" }] },
  { id: 89, character: "駅", onyomi: "Eki", kunyomi: "-", meaning: "Stasiun", category: "Pendidikan & Sosial", examples: [{ word: "駅員", reading: "ekiin", meaning: "Petugas stasiun" }, { word: "東京駅", reading: "toukyoueki", meaning: "Stasiun Tokyo" }] },
  { id: 90, character: "道", onyomi: "Dou", kunyomi: "Michi", meaning: "Jalan", category: "Pendidikan & Sosial", examples: [{ word: "道具", reading: "dougu", meaning: "Alat" }, { word: "道路", reading: "douro", meaning: "Jalan raya" }] },

  // Alam
  { id: 91, character: "花", onyomi: "Ka", kunyomi: "Hana", meaning: "Bunga", category: "Alam", examples: [{ word: "花火", reading: "hanabi", meaning: "Kembang api" }, { word: "花瓶", reading: "kabin", meaning: "Vas bunga" }] },
  { id: 92, character: "雨", onyomi: "U", kunyomi: "Ame", meaning: "Hujan", category: "Alam", examples: [{ word: "大雨", reading: "ooame", meaning: "Hujan lebat" }, { word: "雨天", reading: "uten", meaning: "Cuaca hujan" }] },
  { id: 93, character: "天", onyomi: "Ten", kunyomi: "Ama", meaning: "Langit", category: "Alam", examples: [{ word: "天気", reading: "tenki", meaning: "Cuaca" }, { word: "天国", reading: "tengoku", meaning: "Surga" }] },
  { id: 94, character: "気", onyomi: "Ki", kunyomi: "-", meaning: "Energi / Perasaan", category: "Alam", examples: [{ word: "元気", reading: "genki", meaning: "Sehat" }, { word: "気分", reading: "kibun", meaning: "Perasaan" }] },
  { id: 95, character: "山", onyomi: "San", kunyomi: "Yama", meaning: "Gunung", category: "Alam", examples: [{ word: "富士山", reading: "fujisan", meaning: "Gunung Fuji" }, { word: "登山", reading: "tozan", meaning: "Mendaki gunung" }] },
  { id: 96, character: "川", onyomi: "Sen", kunyomi: "Kawa", meaning: "Sungai", category: "Alam", examples: [{ word: "小川", reading: "ogawa", meaning: "Sungai kecil" }, { word: "河川", reading: "kasen", meaning: "Sungai (formal)" }] },
  { id: 97, character: "魚", onyomi: "Gyo", kunyomi: "Sakana", meaning: "Ikan", category: "Alam", examples: [{ word: "金魚", reading: "kingyo", meaning: "Ikan mas" }, { word: "魚屋", reading: "sakanaya", meaning: "Toko ikan" }] },

  // Lainnya
  { id: 98, character: "店", onyomi: "Ten", kunyomi: "Mise", meaning: "Toko", category: "Lainnya", examples: [{ word: "喫茶店", reading: "kissaten", meaning: "Kafe" }, { word: "店員", reading: "tenin", meaning: "Pelayan toko" }] },
  { id: 99, character: "語", onyomi: "Go", kunyomi: "Kata-ru", meaning: "Bahasa", category: "Lainnya", examples: [{ word: "日本語", reading: "nihongo", meaning: "Bahasa Jepang" }, { word: "物語", reading: "monogatari", meaning: "Cerita" }] },
  { id: 100, character: "週", onyomi: "Shuu", kunyomi: "-", meaning: "Minggu", category: "Lainnya", examples: [{ word: "一週間", reading: "isshuukan", meaning: "Satu minggu" }, { word: "来週", reading: "raishuu", meaning: "Minggu depan" }] },
  { id: 101, character: "物", onyomi: "Butsu", kunyomi: "Mono", meaning: "Benda", category: "Lainnya", examples: [{ word: "動物", reading: "doubutsu", meaning: "Hewan" }, { word: "荷物", reading: "nimotsu", meaning: "Barang" }] },
  { id: 102, character: "茶", onyomi: "Cha / Sa", kunyomi: "-", meaning: "Teh", category: "Lainnya", examples: [{ word: "お茶", reading: "ocha", meaning: "Teh" }, { word: "茶色", reading: "chairo", meaning: "Coklat" }] },
  { id: 103, character: "万", onyomi: "Man", kunyomi: "-", meaning: "Sepuluh Ribu", category: "Lainnya", examples: [{ word: "一万", reading: "ichiman", meaning: "Sepuluh ribu" }, { word: "万歳", reading: "banzai", meaning: "Hore / Banzai" }] },

  // Angka & Satuan
  { id: 104, character: "一つ", onyomi: "Hitotsu", kunyomi: "Hitotsu", meaning: "Satu (benda umum)", category: "Angka & Satuan", examples: [{ word: "リンゴを一つ", reading: "ringo o hitotsu", meaning: "Satu apel" }, { word: "一つ目", reading: "hitotsume", meaning: "Yang pertama" }] },
  { id: 105, character: "二つ", onyomi: "Futatsu", kunyomi: "Futatsu", meaning: "Dua (benda umum)", category: "Angka & Satuan", examples: [{ word: "二つ返事", reading: "futatsuhenji", meaning: "Sangat setuju" }, { word: "二つ折り", reading: "futatsuori", meaning: "Lipat dua" }] },
  { id: 106, character: "三つ", onyomi: "Mittsu", kunyomi: "Mittsu", meaning: "Tiga (benda umum)", category: "Angka & Satuan", examples: [{ word: "三つ編み", reading: "mitsuami", meaning: "Kepang" }, { word: "三つ葉", reading: "mitsuba", meaning: "Daun mitsuba" }] },
  { id: 107, character: "一人", onyomi: "Hitori", kunyomi: "Hitori", meaning: "Satu orang", category: "Angka & Satuan", examples: [{ word: "一人っ子", reading: "hitorikko", meaning: "Anak tunggal" }, { word: "一人で", reading: "hitoride", meaning: "Sendirian" }] },
  { id: 108, character: "二人", onyomi: "Futari", kunyomi: "Futari", meaning: "Dua orang", category: "Angka & Satuan", examples: [{ word: "二人三脚", reading: "futarisankyaku", meaning: "Lari tiga kaki" }, { word: "二人とも", reading: "futaritomo", meaning: "Keduanya" }] },
  { id: 109, character: "五人", onyomi: "Gonin", kunyomi: "Gonin", meaning: "Lima orang", category: "Angka & Satuan", examples: [{ word: "五人家族", reading: "goninkazoku", meaning: "Keluarga berlima" }, { word: "五人前", reading: "goninmae", meaning: "Lima porsi" }] },
  { id: 110, character: "一分", onyomi: "Ippun", kunyomi: "Ippun", meaning: "Satu menit", category: "Angka & Satuan", examples: [{ word: "一分間", reading: "ippunkan", meaning: "Selama satu menit" }, { word: "十一分", reading: "juuippun", meaning: "Sebelas menit" }] },
  { id: 111, character: "半年", onyomi: "Hantoshi", kunyomi: "Hantoshi", meaning: "Setengah tahun", category: "Angka & Satuan", examples: [{ word: "半年後", reading: "hantoshigo", meaning: "Setengah tahun kemudian" }, { word: "半年間", reading: "hantoshikan", meaning: "Selama setengah tahun" }] },

  // Pendidikan & Sekolah
  { id: 112, character: "大学", onyomi: "Daigaku", kunyomi: "Daigaku", meaning: "Universitas", category: "Pendidikan & Sekolah", examples: [{ word: "大学生", reading: "daigakusei", meaning: "Mahasiswa" }, { word: "大学院", reading: "daigakuin", meaning: "Pascasarjana" }] },
  { id: 113, character: "教室", onyomi: "Kyoushitsu", kunyomi: "Kyoushitsu", meaning: "Ruang kelas", category: "Pendidikan & Sekolah", examples: [{ word: "教員", reading: "kyouin", meaning: "Staf pengajar" }, { word: "和室", reading: "washitsu", meaning: "Kamar gaya Jepang" }] },
  { id: 114, character: "先生", onyomi: "Sensei", kunyomi: "Sensei", meaning: "Guru / Pengajar", category: "Pendidikan & Sekolah", examples: [{ word: "先週", reading: "senshuu", meaning: "Minggu lalu" }, { word: "一生", reading: "isshou", meaning: "Seumur hidup" }] },
  { id: 115, character: "学生", onyomi: "Gakusei", kunyomi: "Gakusei", meaning: "Mahasiswa", category: "Pendidikan & Sekolah", examples: [{ word: "文学", reading: "bungaku", meaning: "Sastra" }, { word: "留学生", reading: "ryuugakusei", meaning: "Mahasiswa asing" }] },
  { id: 116, character: "留学生", onyomi: "Ryuugakusei", kunyomi: "Ryuugakusei", meaning: "Mahasiswa asing", category: "Pendidikan & Sekolah", examples: [{ word: "留学", reading: "ryuugaku", meaning: "Belajar di luar negeri" }, { word: "留守", reading: "rusu", meaning: "Tidak ada di rumah" }] },
  { id: 117, character: "辞書", onyomi: "Jisho", kunyomi: "Jisho", meaning: "Kamus", category: "Pendidikan & Sekolah", examples: [{ word: "電子辞書", reading: "denshijisho", meaning: "Kamus elektronik" }, { word: "図書館", reading: "toshokan", meaning: "Perpustakaan" }] },
  { id: 118, character: "作文", onyomi: "Sakubun", kunyomi: "Sakubun", meaning: "Karangan / Esai", category: "Pendidikan & Sekolah", examples: [{ word: "文学", reading: "bungaku", meaning: "Sastra" }, { word: "文法", reading: "bunpou", meaning: "Tata bahasa" }] },
  { id: 119, character: "宿題", onyomi: "Shukudai", kunyomi: "Shukudai", meaning: "Pekerjaan Rumah (PR)", category: "Pendidikan & Sekolah", examples: [{ word: "下宿", reading: "geshuku", meaning: "Asrama / Kos" }, { word: "問題", reading: "mondai", meaning: "Masalah / Soal" }] },
  { id: 120, character: "試験", onyomi: "Shiken", kunyomi: "Shiken", meaning: "Ujian", category: "Pendidikan & Sekolah", examples: [{ word: "入試", reading: "nyuushi", meaning: "Ujian masuk" }, { word: "経験", reading: "keiken", meaning: "Pengalaman" }] },

  // Kata Kerja Lanjutan
  { id: 121, character: "入る", onyomi: "Nyuu", kunyomi: "Hairu", meaning: "Masuk", category: "Kata Kerja Lanjutan", examples: [{ word: "入れる", reading: "ireru", meaning: "Memasukkan" }, { word: "入学", reading: "nyuugaku", meaning: "Masuk sekolah" }] },
  { id: 122, character: "出る", onyomi: "Shutsu", kunyomi: "Deru", meaning: "Keluar", category: "Kata Kerja Lanjutan", examples: [{ word: "出す", reading: "dasu", meaning: "Mengeluarkan" }, { word: "外出", reading: "gaishutsu", meaning: "Pergi keluar" }] },
  { id: 123, character: "座る", onyomi: "Za", kunyomi: "Suwaru", meaning: "Duduk", category: "Kata Kerja Lanjutan", examples: [{ word: "正座", reading: "seiza", meaning: "Seiza (duduk formal)" }, { word: "座席", reading: "zaseki", meaning: "Tempat duduk" }] },
  { id: 124, character: "立つ", onyomi: "Ritsu", kunyomi: "Tatsu", meaning: "Berdiri", category: "Kata Kerja Lanjutan", examples: [{ word: "国立", reading: "kokuritsu", meaning: "Nasional" }, { word: "役立つ", reading: "yakudatsu", meaning: "Berguna" }] },
  { id: 125, character: "会う", onyomi: "Kai", kunyomi: "Au", meaning: "Bertemu", category: "Kata Kerja Lanjutan", examples: [{ word: "会社", reading: "kaisha", meaning: "Perusahaan" }, { word: "会議", reading: "kaigi", meaning: "Rapat" }] },
  { id: 126, character: "遊ぶ", onyomi: "Yuu", kunyomi: "Asobu", meaning: "Bermain", category: "Kata Kerja Lanjutan", examples: [{ word: "遊び", reading: "asobi", meaning: "Permainan" }, { word: "遊園地", reading: "yuuenchi", meaning: "Taman hiburan" }] },
  { id: 127, character: "待つ", onyomi: "Tai", kunyomi: "Matsu", meaning: "Menunggu", category: "Kata Kerja Lanjutan", examples: [{ word: "待ち合わせ", reading: "machiawase", meaning: "Janji temu" }, { word: "招待", reading: "shoutai", meaning: "Undangan" }] },
  { id: 128, character: "呼ぶ", onyomi: "Ko", kunyomi: "Yobu", meaning: "Memanggil", category: "Kata Kerja Lanjutan", examples: [{ word: "呼び出し", reading: "yobidashi", meaning: "Panggilan" }, { word: "呼吸", reading: "kokyuu", meaning: "Napas" }] },
  { id: 129, character: "洗う", onyomi: "Sen", kunyomi: "Arau", meaning: "Mencuci", category: "Kata Kerja Lanjutan", examples: [{ word: "お手洗い", reading: "otearai", meaning: "Toilet" }, { word: "洗濯", reading: "sentaku", meaning: "Mencuci pakaian" }] },
  { id: 130, character: "作る", onyomi: "Saku", kunyomi: "Tsukuru", meaning: "Membuat", category: "Kata Kerja Lanjutan", examples: [{ word: "作り方", reading: "tsukurikata", meaning: "Cara membuat" }, { word: "作文", reading: "sakubun", meaning: "Karangan" }] },

  // Alam & Cuaca
  { id: 131, character: "空", onyomi: "Kuu", kunyomi: "Sora", meaning: "Langit", category: "Alam & Cuaca", examples: [{ word: "空気", reading: "kuuki", meaning: "Udara" }, { word: "空手", reading: "karate", meaning: "Karate" }] },
  { id: 132, character: "海", onyomi: "Kai", kunyomi: "Umi", meaning: "Laut", category: "Alam & Cuaca", examples: [{ word: "海外", reading: "kaigai", meaning: "Luar negeri" }, { word: "海水浴", reading: "kaisuiyoku", meaning: "Berenang di laut" }] },
  { id: 133, character: "山", onyomi: "San", kunyomi: "Yama", meaning: "Gunung", category: "Alam & Cuaca", examples: [{ word: "山道", reading: "yamamichi", meaning: "Jalan gunung" }, { word: "火山", reading: "kazan", meaning: "Gunung berapi" }] },
  { id: 134, character: "川", onyomi: "Sen", kunyomi: "Kawa", meaning: "Sungai", category: "Alam & Cuaca", examples: [{ word: "川岸", reading: "kawagishi", meaning: "Tepi sungai" }, { word: "河川", reading: "kasen", meaning: "Sungai" }] },
  { id: 135, character: "雨", onyomi: "U", kunyomi: "Ame", meaning: "Hujan", category: "Alam & Cuaca", examples: [{ word: "雨具", reading: "amagu", meaning: "Perlengkapan hujan" }, { word: "雨天", reading: "uten", meaning: "Cuaca hujan" }] },
  { id: 136, character: "雪", onyomi: "Setsu", kunyomi: "Yuki", meaning: "Salju", category: "Alam & Cuaca", examples: [{ word: "雪だるま", reading: "yukidaruma", meaning: "Manusia salju" }, { word: "新雪", reading: "shinsetsu", meaning: "Salju baru" }] },
  { id: 137, character: "風", onyomi: "Fuu", kunyomi: "Kaze", meaning: "Angin", category: "Alam & Cuaca", examples: [{ word: "台風", reading: "taifuun", meaning: "Topan" }, { word: "風邪", reading: "kaze", meaning: "Masuk angin" }] },
  { id: 138, character: "晴れ", onyomi: "Sei", kunyomi: "Hare", meaning: "Cerah", category: "Alam & Cuaca", examples: [{ word: "晴天", reading: "seiten", meaning: "Cuaca cerah" }, { word: "晴れる", reading: "hareru", meaning: "Menjadi cerah" }] },

  // Benda & Kehidupan Sehari-hari
  { id: 139, character: "家", onyomi: "Ka / Ke", kunyomi: "Ie", meaning: "Rumah", category: "Benda & Kehidupan", examples: [{ word: "家族", reading: "kazoku", meaning: "Keluarga" }, { word: "家庭", reading: "katei", meaning: "Rumah tangga" }] },
  { id: 140, character: "電気", onyomi: "Denki", kunyomi: "Denki", meaning: "Listrik / Lampu", category: "Benda & Kehidupan", examples: [{ word: "電子", reading: "denshi", meaning: "Elektron" }, { word: "電位", reading: "deni", meaning: "Potensi listrik" }] },
  { id: 141, character: "電話", onyomi: "Denwa", kunyomi: "Denwa", meaning: "Telepon", category: "Benda & Kehidupan", examples: [{ word: "話す", reading: "hanasu", meaning: "Berbicara" }, { word: "会和", reading: "kaiwa", meaning: "Percakapan" }] },
  { id: 142, character: "電車", onyomi: "Densha", kunyomi: "Densha", meaning: "Kereta listrik", category: "Benda & Kehidupan", examples: [{ word: "車", reading: "kuruma", meaning: "Mobil" }, { word: "駐車場", reading: "chuushajou", meaning: "Tempat parkir" }] },
  { id: 143, character: "自転車", onyomi: "Jitensha", kunyomi: "Jitensha", meaning: "Sepeda", category: "Benda & Kehidupan", examples: [{ word: "自分", reading: "jibun", meaning: "Diri sendiri" }, { word: "転ぶ", reading: "korobu", meaning: "Jatuh" }] },
  { id: 144, character: "荷物", onyomi: "Nimotsu", kunyomi: "Nimotsu", meaning: "Barang bawaan / Paket", category: "Benda & Kehidupan", examples: [{ word: "負荷", reading: "fuka", meaning: "Beban" }, { word: "本質", reading: "honshitsu", meaning: "Esensi" }] },
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
  "Angka & Satuan",
  "Pendidikan & Sekolah",
  "Kata Kerja Lanjutan",
  "Alam & Cuaca",
  "Benda & Kehidupan",
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
  "Angka & Satuan": "🔢",
  "Pendidikan & Sekolah": "🎓",
  "Kata Kerja Lanjutan": "🏃",
  "Alam & Cuaca": "🌤️",
  "Benda & Kehidupan": "🏠",
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
