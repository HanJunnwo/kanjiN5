export type VocabWord = {
  word: string;
  reading: string;
  meaning: string;
};

export type VocabCategory = {
  title: string;
  items: VocabWord[];
};

export const vocabularyData: VocabCategory[] = [
  {
    title: "Kata Kerja (Doushi)",
    items: [
      { word: "食べる", reading: "たべる", meaning: "makan" },
      { word: "飲む", reading: "のむ", meaning: "minum" },
      { word: "行く", reading: "いく", meaning: "pergi" },
      { word: "見る", reading: "みる", meaning: "melihat" },
      { word: "来る", reading: "くる", meaning: "datang" },
      { word: "話す", reading: "はなす", meaning: "berbicara" },
      { word: "聞く", reading: "きく", meaning: "mendengar" },
      { word: "読む", reading: "よむ", meaning: "membaca" },
      { word: "書く", reading: "かく", meaning: "menulis" },
      { word: "買う", reading: "かう", meaning: "membeli" },
      { word: "会う", reading: "あう", meaning: "bertemu" },
      { word: "立つ", reading: "たつ", meaning: "berdiri" },
      { word: "休む", reading: "やすむ", meaning: "beristirahat" },
      { word: "入る", reading: "はいる", meaning: "masuk" },
      { word: "出る", reading: "でる", meaning: "keluar" }
    ]
  },
  {
    title: "Kata Sifat (Keiyoushi)",
    items: [
      { word: "大きい", reading: "おおきい", meaning: "besar" },
      { word: "小さい", reading: "ちいさい", meaning: "kecil" },
      { word: "新しい", reading: "あたらしい", meaning: "baru" },
      { word: "古い", reading: "ふるい", meaning: "lama / tua" },
      { word: "高い", reading: "たかい", meaning: "tinggi / mahal" },
      { word: "安い", reading: "やすい", meaning: "murah" },
      { word: "長い", reading: "ながい", meaning: "panjang" },
      { word: "白い", reading: "しろい", meaning: "putih" },
      { word: "黒い", reading: "くろい", meaning: "hitam" },
      { word: "赤い", reading: "あかい", meaning: "merah" },
      { word: "青い", reading: "あおい", meaning: "biru" },
      { word: "多い", reading: "おおい", meaning: "banyak" },
      { word: "少ない", reading: "すくない", meaning: "sedikit" },
      { word: "早い", reading: "はやい", meaning: "cepat / awal" }
    ]
  },
  {
    title: "Kata Benda (Meishi)",
    items: [
      { word: "先生", reading: "せんせい", meaning: "guru" },
      { word: "学生", reading: "がくせい", meaning: "siswa" },
      { word: "学校", reading: "がっこう", meaning: "sekolah" },
      { word: "水", reading: "みず", meaning: "air" },
      { word: "車", reading: "くるま", meaning: "mobil" },
      { word: "本", reading: "ほん", meaning: "buku" },
      { word: "お金", reading: "おかね", meaning: "uang" },
      { word: "時間", reading: "じかん", meaning: "waktu" },
      { word: "今日", reading: "きょう", meaning: "hari ini" },
      { word: "明日", reading: "あした", meaning: "besok" },
      { word: "電車", reading: "でんしゃ", meaning: "kereta listrik" },
      { word: "電話", reading: "でんわ", meaning: "telepon" },
      { word: "男", reading: "おとこ", meaning: "laki-laki" },
      { word: "女", reading: "おんな", meaning: "perempuan" },
      { word: "名前", reading: "なまえ", meaning: "nama" }
    ]
  }
];
