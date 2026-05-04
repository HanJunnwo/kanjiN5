export interface ExamQuestion {
  id: number;
  type: "reading" | "kanji" | "grammar" | "vocabulary";
  question: string;
  context?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const examQuestions: ExamQuestion[] = [
  // --- SOAL 1-10: Membaca Kanji (読み方) ---
  {
    id: 1, type: "reading",
    question: "わたしは　まいにち　学校に　いきます。",
    context: "「学校」の　よみかたは　どれですか。",
    options: ["がくこう", "がっこう", "かくこう", "がこう"],
    correctAnswer: "がっこう",
    explanation: "学校（がっこう）= Sekolah. 「学」dibaca 'がく' dan 「校」dibaca 'こう', dengan perubahan bunyi menjadi 'がっこう'."
  },
  {
    id: 2, type: "reading",
    question: "きのう　友だちと　えいがを　みました。",
    context: "「友だち」の　よみかたは　どれですか。",
    options: ["ゆうだち", "ともだち", "ゆだち", "とだち"],
    correctAnswer: "ともだち",
    explanation: "友だち（ともだち）= Teman. 「友」memiliki kunyomi 'とも'."
  },
  {
    id: 3, type: "reading",
    question: "この　本は　とても　おもしろいです。",
    context: "「本」の　よみかたは　どれですか。",
    options: ["もと", "ほん", "ぼん", "ぽん"],
    correctAnswer: "ほん",
    explanation: "本（ほん）= Buku. Dalam konteks ini 「本」berarti buku dan dibaca 'ほん'."
  },
  {
    id: 4, type: "reading",
    question: "あしたの　天気は　はれです。",
    context: "「天気」の　よみかたは　どれですか。",
    options: ["てんき", "てんけ", "あまき", "あまけ"],
    correctAnswer: "てんき",
    explanation: "天気（てんき）= Cuaca. 「天」dibaca 'てん' dan 「気」dibaca 'き'."
  },
  {
    id: 5, type: "reading",
    question: "わたしの　父は　会社で　はたらいています。",
    context: "「会社」の　よみかたは　どれですか。",
    options: ["かいしゃ", "かいさ", "あいしゃ", "えしゃ"],
    correctAnswer: "かいしゃ",
    explanation: "会社（かいしゃ）= Perusahaan. 「会」dibaca 'かい' dan 「社」dibaca 'しゃ'."
  },
  {
    id: 6, type: "reading",
    question: "まいにち　六時に　おきます。",
    context: "「六時」の　よみかたは　どれですか。",
    options: ["ろくじ", "むじ", "むっじ", "ろくとき"],
    correctAnswer: "ろくじ",
    explanation: "六時（ろくじ）= Jam enam. 「六」dibaca 'ろく' dan 「時」dibaca 'じ'."
  },
  {
    id: 7, type: "reading",
    question: "あの　山は　とても　たかいです。",
    context: "「山」の　よみかたは　どれですか。",
    options: ["さん", "やま", "かわ", "もり"],
    correctAnswer: "やま",
    explanation: "山（やま）= Gunung. Dalam konteks ini menggunakan kunyomi 'やま'."
  },
  {
    id: 8, type: "reading",
    question: "先生に　手紙を　かきました。",
    context: "「先生」の　よみかたは　どれですか。",
    options: ["せんせい", "さきせい", "せんなま", "さきなま"],
    correctAnswer: "せんせい",
    explanation: "先生（せんせい）= Guru. 「先」dibaca 'せん' dan 「生」dibaca 'せい'."
  },
  {
    id: 9, type: "reading",
    question: "日本語の　じゅぎょうは　午前　九時からです。",
    context: "「午前」の　よみかたは　どれですか。",
    options: ["ごぜん", "ごまえ", "うまぜん", "うままえ"],
    correctAnswer: "ごぜん",
    explanation: "午前（ごぜん）= Pagi / AM. 「午」dibaca 'ご' dan 「前」dibaca 'ぜん'."
  },
  {
    id: 10, type: "reading",
    question: "えきの　東口で　まっています。",
    context: "「東口」の　よみかたは　どれですか。",
    options: ["ひがしぐち", "とうぐち", "ひがしくち", "あずまくち"],
    correctAnswer: "ひがしぐち",
    explanation: "東口（ひがしぐち）= Pintu timur. 「東」dibaca 'ひがし' dan 「口」berubah menjadi 'ぐち'."
  },

  // --- SOAL 11-20: Pilih Kanji yang Tepat ---
  {
    id: 11, type: "kanji",
    question: "わたしは　まいにち　みずを　たくさん　のみます。",
    context: "「みず」は　どの　かんじですか。",
    options: ["水", "氷", "永", "泉"],
    correctAnswer: "水",
    explanation: "水（みず）= Air. Kanji 水 terdiri dari 4 goresan."
  },
  {
    id: 12, type: "kanji",
    question: "きょうは　にちようびです。",
    context: "「にちようび」は　どう　かきますか。",
    options: ["日曜日", "月曜日", "火曜日", "土曜日"],
    correctAnswer: "日曜日",
    explanation: "日曜日（にちようび）= Hari Minggu."
  },
  {
    id: 13, type: "kanji",
    question: "やすみの　ひに　やまに　のぼりました。",
    context: "「やま」は　どの　かんじですか。",
    options: ["山", "川", "田", "森"],
    correctAnswer: "山",
    explanation: "山（やま）= Gunung."
  },
  {
    id: 14, type: "kanji",
    question: "おかあさんは　がっこうの　せんせいです。",
    context: "「おかあさん」の　「かあ」は　どの　かんじですか。",
    options: ["母", "父", "姉", "妹"],
    correctAnswer: "母",
    explanation: "お母さん（おかあさん）= Ibu. 「母」dibaca 'かあ' dalam kata ini."
  },
  {
    id: 15, type: "kanji",
    question: "でんしゃで　かいしゃに　いきます。",
    context: "「でんしゃ」は　どう　かきますか。",
    options: ["電車", "電話", "自転車", "自動車"],
    correctAnswer: "電車",
    explanation: "電車（でんしゃ）= Kereta listrik."
  },
  {
    id: 16, type: "kanji",
    question: "としょかんで　ほんを　よみました。",
    context: "「よみました」は　どの　かんじを　つかいますか。",
    options: ["読みました", "書きました", "見ました", "聞きました"],
    correctAnswer: "読みました",
    explanation: "読む（よむ）= Membaca. Kanji 「読」digunakan untuk 'membaca'."
  },
  {
    id: 17, type: "kanji",
    question: "にほんごを　べんきょうしています。",
    context: "「にほんご」は　どう　かきますか。",
    options: ["日本語", "日本話", "日本言", "日本文"],
    correctAnswer: "日本語",
    explanation: "日本語（にほんご）= Bahasa Jepang. 「語」berarti bahasa."
  },
  {
    id: 18, type: "kanji",
    question: "あたらしい　くつを　かいました。",
    context: "「あたらしい」は　どの　かんじですか。",
    options: ["新しい", "古い", "高い", "安い"],
    correctAnswer: "新しい",
    explanation: "新しい（あたらしい）= Baru."
  },
  {
    id: 19, type: "kanji",
    question: "わたしは　まいあさ　しんぶんを　よみます。",
    context: "「まいあさ」の　「あさ」は　どう　かきますか。",
    options: ["朝", "昼", "夕", "夜"],
    correctAnswer: "朝",
    explanation: "毎朝（まいあさ）= Setiap pagi. 「朝」berarti pagi."
  },
  {
    id: 20, type: "kanji",
    question: "がいこくから　きた　ひとが　おおいです。",
    context: "「がいこく」は　どう　かきますか。",
    options: ["外国", "外人", "海外", "国外"],
    correctAnswer: "外国",
    explanation: "外国（がいこく）= Luar negeri."
  },

  // --- SOAL 21-30: Kosakata dalam Konteks ---
  {
    id: 21, type: "vocabulary",
    question: "きのう　デパートで　＿＿を　しました。",
    context: "どれが　いちばん　いいですか。",
    options: ["買い物", "食べ物", "飲み物", "乗り物"],
    correctAnswer: "買い物",
    explanation: "買い物（かいもの）= Belanja. Konteks di department store paling cocok dengan 'belanja'."
  },
  {
    id: 22, type: "vocabulary",
    question: "あした　＿＿に　ともだちと　あいます。",
    context: "どれが　いちばん　いいですか。",
    options: ["駅", "空", "山", "海"],
    correctAnswer: "駅",
    explanation: "駅（えき）= Stasiun. Tempat yang paling umum untuk bertemu teman."
  },
  {
    id: 23, type: "vocabulary",
    question: "この　へやは　＿＿が　おおいですね。",
    context: "どれが　いちばん　いいですか。",
    options: ["人", "山", "川", "花"],
    correctAnswer: "人",
    explanation: "人（ひと）= Orang. 'Ruangan ini banyak orangnya' paling masuk akal."
  },
  {
    id: 24, type: "vocabulary",
    question: "＿＿に　でんわばんごうを　かきました。",
    context: "どれが　いちばん　いいですか。",
    options: ["手紙", "手足", "手前", "手間"],
    correctAnswer: "手紙",
    explanation: "手紙（てがみ）= Surat. 'Menulis nomor telepon di surat'."
  },
  {
    id: 25, type: "vocabulary",
    question: "にほんの　＿＿は　とても　きれいです。",
    context: "どれが　いちばん　いいですか。",
    options: ["花", "足", "耳", "口"],
    correctAnswer: "花",
    explanation: "花（はな）= Bunga. 'Bunga Jepang sangat indah'."
  },
  {
    id: 26, type: "grammar",
    question: "わたしは　まいにち　＿＿に　おきます。",
    context: "どれが　いちばん　いいですか。",
    options: ["七時", "七つ", "七日", "七月"],
    correctAnswer: "七時",
    explanation: "七時（しちじ）= Jam tujuh. Untuk menyatakan waktu bangun, gunakan ～時."
  },
  {
    id: 27, type: "vocabulary",
    question: "＿＿の　なかで　さかなが　およいでいます。",
    context: "どれが　いちばん　いいですか。",
    options: ["川", "山", "空", "道"],
    correctAnswer: "川",
    explanation: "川（かわ）= Sungai. 'Ikan berenang di dalam sungai'."
  },
  {
    id: 28, type: "vocabulary",
    question: "きょうは　＿＿が　つよいですから、かさが　いります。",
    context: "どれが　いちばん　いいですか。",
    options: ["雨", "山", "花", "人"],
    correctAnswer: "雨",
    explanation: "雨（あめ）= Hujan. 'Karena hujan deras hari ini, perlu payung'."
  },
  {
    id: 29, type: "vocabulary",
    question: "＿＿で　おいしい　ラーメンを　たべました。",
    context: "どれが　いちばん　いいですか。",
    options: ["店", "山", "川", "空"],
    correctAnswer: "店",
    explanation: "店（みせ）= Toko/Restoran. 'Makan ramen enak di restoran'."
  },
  {
    id: 30, type: "vocabulary",
    question: "にほんごの　＿＿は　むずかしいですが　おもしろいです。",
    context: "どれが　いちばん　いいですか。",
    options: ["勉強", "天気", "買い物", "旅行"],
    correctAnswer: "勉強",
    explanation: "勉強（べんきょう）= Belajar. 'Belajar bahasa Jepang sulit tapi menarik'."
  },

  // --- SOAL 31-40: Membaca Kanji Lanjutan ---
  {
    id: 31, type: "reading",
    question: "父は　毎日　新聞を　よんでいます。",
    context: "「新聞」の　よみかたは　どれですか。",
    options: ["しんぶん", "しんもん", "あたぶん", "にいもん"],
    correctAnswer: "しんぶん",
    explanation: "新聞（しんぶん）= Koran."
  },
  {
    id: 32, type: "reading",
    question: "来週の　金曜日に　パーティーが　あります。",
    context: "「来週」の　よみかたは　どれですか。",
    options: ["らいしゅう", "きしゅう", "くるしゅう", "らいす"],
    correctAnswer: "らいしゅう",
    explanation: "来週（らいしゅう）= Minggu depan."
  },
  {
    id: 33, type: "reading",
    question: "ここから　北に　まっすぐ　いってください。",
    context: "「北」の　よみかたは　どれですか。",
    options: ["きた", "みなみ", "にし", "ひがし"],
    correctAnswer: "きた",
    explanation: "北（きた）= Utara."
  },
  {
    id: 34, type: "reading",
    question: "おとうとは　今年　大学に　はいります。",
    context: "「今年」の　よみかたは　どれですか。",
    options: ["ことし", "こんねん", "いまとし", "きょねん"],
    correctAnswer: "ことし",
    explanation: "今年（ことし）= Tahun ini."
  },
  {
    id: 35, type: "reading",
    question: "出口は　あちらです。",
    context: "「出口」の　よみかたは　どれですか。",
    options: ["でぐち", "しゅつこう", "だしぐち", "でくち"],
    correctAnswer: "でぐち",
    explanation: "出口（でぐち）= Pintu keluar."
  },
  {
    id: 36, type: "reading",
    question: "あの　女の人は　だれですか。",
    context: "「女の人」の　よみかたは　どれですか。",
    options: ["おんなのひと", "じょのひと", "おなのじん", "めのひと"],
    correctAnswer: "おんなのひと",
    explanation: "女の人（おんなのひと）= Wanita."
  },
  {
    id: 37, type: "reading",
    question: "きょうは　火曜日です。",
    context: "「火曜日」の　よみかたは　どれですか。",
    options: ["かようび", "ひようび", "もくようび", "すいようび"],
    correctAnswer: "かようび",
    explanation: "火曜日（かようび）= Hari Selasa."
  },
  {
    id: 38, type: "reading",
    question: "入り口は　どこですか。",
    context: "「入り口」の　よみかたは　どれですか。",
    options: ["いりぐち", "はいりぐち", "にゅうこう", "いりくち"],
    correctAnswer: "いりぐち",
    explanation: "入り口（いりぐち）= Pintu masuk."
  },
  {
    id: 39, type: "reading",
    question: "この　食べ物は　おいしいです。",
    context: "「食べ物」の　よみかたは　どれですか。",
    options: ["たべもの", "しょくもの", "くいもの", "たべぶつ"],
    correctAnswer: "たべもの",
    explanation: "食べ物（たべもの）= Makanan."
  },
  {
    id: 40, type: "reading",
    question: "わたしは　毎朝　六時半に　おきます。",
    context: "「六時半」の　よみかたは　どれですか。",
    options: ["ろくじはん", "むじはん", "ろくときはん", "むっじはん"],
    correctAnswer: "ろくじはん",
    explanation: "六時半（ろくじはん）= Jam setengah tujuh."
  },

  // --- SOAL 41-50: Campuran ---
  {
    id: 41, type: "kanji",
    question: "きょねんの　なつ、うみに　いきました。",
    context: "「うみ」は　どの　かんじですか。",
    options: ["海", "池", "湖", "川"],
    correctAnswer: "海",
    explanation: "海（うみ）= Laut."
  },
  {
    id: 42, type: "grammar",
    question: "この　みちを　＿＿に　いってください。",
    context: "どれが　いちばん　いいですか。",
    options: ["左", "上", "下", "中"],
    correctAnswer: "左",
    explanation: "左（ひだり）= Kiri. 'Silakan pergi ke kiri di jalan ini'."
  },
  {
    id: 43, type: "vocabulary",
    question: "あしたは　＿＿ですから、がっこうは　やすみです。",
    context: "どれが　いちばん　いいですか。",
    options: ["土曜日", "月曜日", "水曜日", "木曜日"],
    correctAnswer: "土曜日",
    explanation: "土曜日（どようび）= Hari Sabtu. Sekolah libur di hari Sabtu."
  },
  {
    id: 44, type: "reading",
    question: "銀行は　あの　大きい　たてものの　中に　あります。",
    context: "「大きい」の　よみかたは　どれですか。",
    options: ["おおきい", "たかい", "ちいさい", "ながい"],
    correctAnswer: "おおきい",
    explanation: "大きい（おおきい）= Besar."
  },
  {
    id: 45, type: "kanji",
    question: "この　かわは　ながいです。",
    context: "「かわ」は　どの　かんじですか。",
    options: ["川", "山", "田", "海"],
    correctAnswer: "川",
    explanation: "川（かわ）= Sungai."
  },
  {
    id: 46, type: "vocabulary",
    question: "＿＿を　のんで　から　でかけましょう。",
    context: "どれが　いちばん　いいですか。",
    options: ["お茶", "お金", "お店", "お手"],
    correctAnswer: "お茶",
    explanation: "お茶（おちゃ）= Teh. 'Mari keluar setelah minum teh'."
  },
  {
    id: 47, type: "reading",
    question: "あの　白い　とりは　きれいですね。",
    context: "「白い」の　よみかたは　どれですか。",
    options: ["しろい", "くろい", "あかい", "あおい"],
    correctAnswer: "しろい",
    explanation: "白い（しろい）= Putih."
  },
  {
    id: 48, type: "grammar",
    question: "田中さんは　＿＿が　じょうずです。",
    context: "どれが　いちばん　いいですか。",
    options: ["日本語", "日本人", "日本国", "日本山"],
    correctAnswer: "日本語",
    explanation: "日本語（にほんご）= Bahasa Jepang. 'Tanaka-san pandai bahasa Jepang'."
  },
  {
    id: 49, type: "reading",
    question: "休みの　日に　何を　しますか。",
    context: "「休み」の　よみかたは　どれですか。",
    options: ["やすみ", "きゅうみ", "きゅうみん", "やすむ"],
    correctAnswer: "やすみ",
    explanation: "休み（やすみ）= Istirahat / Libur."
  },
  {
    id: 50, type: "vocabulary",
    question: "＿＿を　かりて　にほんごを　べんきょうします。",
    context: "どれが　いちばん　いいですか。",
    options: ["辞書", "電話", "電車", "自転車"],
    correctAnswer: "辞書",
    explanation: "辞書（じしょ）= Kamus. 'Meminjam kamus untuk belajar bahasa Jepang'."
  },

  // --- SOAL 51-60: Kanji Guessing Quiz (Short Form) ---
  {
    id: 51, type: "kanji",
    question: "さとう - こめ - しお",
    context: "「さとう」は　どの　かんじですか。",
    options: ["砂糖", "砂漠", "砂利", "砂"],
    correctAnswer: "砂糖",
    explanation: "砂糖（さとう）= Gula. Tiga bahan masak penting: 砂糖（gula）- 米（beras）- 塩（garam）."
  },
  {
    id: 52, type: "kanji",
    question: "あさ - ひる - よる",
    context: "「あさ」は　どの　かんじですか。",
    options: ["朝", "曜", "夜", "午"],
    correctAnswer: "朝",
    explanation: "朝（あさ）= Pagi. 三つの時間: 朝（pagi）- 昼（siang）- 夜（malam）."
  },
  {
    id: 53, type: "kanji",
    question: "せんせい - がくせい - きょうしつ",
    context: "「きょうしつ」は　どの　かんじですか。",
    options: ["教室", "教育", "教科", "教会"],
    correctAnswer: "教室",
    explanation: "教室（きょうしつ）= Ruang kelas. Tempat guru mengajar siswa."
  },
  {
    id: 54, type: "kanji",
    question: "あき - ふゆ - はる - なつ",
    context: "「ふゆ」は　どの　かんじですか。",
    options: ["冬", "秋", "春", "夏"],
    correctAnswer: "冬",
    explanation: "冬（ふゆ）= Musim dingin. Empat musim: 春、夏、秋、冬."
  },
  {
    id: 55, type: "kanji",
    question: "げつようび - すいようび - きんようび",
    context: "「きんようび」は　どの　かんじですか。",
    options: ["金曜日", "木曜日", "火曜日", "土曜日"],
    correctAnswer: "金曜日",
    explanation: "金曜日（きんようび）= Hari Jumat. Hari ketujuh dalam seminggu (Jum'at)."
  },
  {
    id: 56, type: "kanji",
    question: "がっこう - しょうがっこう - ちゅうがっこう - こうこう",
    context: "「ちゅうがっこう」は　どの　かんじですか。",
    options: ["中学校", "小学校", "高校", "大学"],
    correctAnswer: "中学校",
    explanation: "中学校（ちゅうがっこう）= Sekolah menengah pertama (SMP). 中 = menengah."
  },
  {
    id: 57, type: "kanji",
    question: "おとうさん - おかあさん - お兄さん",
    context: "「お兄さん」は　どの　かんじですか。",
    options: ["兄", "姉", "弟", "妹"],
    correctAnswer: "兄",
    explanation: "兄（あに）= Kakak laki-laki. Anggota keluarga dengan お prefix."
  },
  {
    id: 58, type: "kanji",
    question: "ほん - しんぶん - ざっし - じしょ",
    context: "「じしょ」は　どの　かんじですか。",
    options: ["辞書", "地図", "地震", "地球"],
    correctAnswer: "辞書",
    explanation: "辞書（じしょ）= Kamus. Buku referensi untuk belajar bahasa."
  },
  {
    id: 59, type: "kanji",
    question: "せんせい - べんきょう - しゅくだい",
    context: "「しゅくだい」は　どの　かんじですか。",
    options: ["宿題", "宿泊", "宿屋", "宿敵"],
    correctAnswer: "宿題",
    explanation: "宿題（しゅくだい）= Pekerjaan rumah. Tugas yang diberikan guru di rumah."
  },
  {
    id: 60, type: "kanji",
    question: "たべもの - のみもの - あますもの",
    context: "「のみもの」は　どの　かんじですか。",
    options: ["飲み物", "飲料", "飲酒", "飲呑"],
    correctAnswer: "飲み物",
    explanation: "飲み物（のみもの）= Minuman. 飲む＋もの = sesuatu untuk diminum."
  },
];

