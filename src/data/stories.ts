export interface Story {
  id: number;
  title: string;
  content: string;
  translation: string;
  kanjiUsed: string[];
  furigana: Record<string, string>;
  difficulty: "mudah" | "sedang" | "sulit";
  readTime: number;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Pagi Hari Tanaka",
    difficulty: "mudah",
    readTime: 3,
    content: "田中さんは毎日六時に起きます。まず顔を洗って、朝ご飯を食べます。朝ご飯はいつもパンと牛乳です。それから七時半に家を出ます。\n\n学校まで歩いて十五分です。途中で友達の山田さんに会います。二人で学校まで歩きます。\n\n学校に着くと、まず教室に入ります。先生が来る前に、本を読みます。今日の授業は日本語と数学です。田中さんは日本語が好きです。\n\n昼ご飯は学校の食堂で食べます。今日は魚と白いご飯を食べました。とてもおいしかったです。",
    translation: "Tanaka bangun setiap hari jam enam. Pertama mencuci muka, lalu makan sarapan. Sarapannya selalu roti dan susu. Kemudian keluar rumah jam setengah delapan.\n\nDari rumah ke sekolah berjalan kaki lima belas menit. Di perjalanan bertemu teman, Yamada. Mereka berdua berjalan ke sekolah.\n\nSetibanya di sekolah, pertama masuk ke kelas. Sebelum guru datang, membaca buku. Pelajaran hari ini bahasa Jepang dan matematika. Tanaka suka bahasa Jepang.\n\nMakan siang di kantin sekolah. Hari ini makan ikan dan nasi putih. Sangat enak.",
    kanjiUsed: ["田", "中", "毎", "日", "六", "時", "朝", "食", "七", "半", "家", "出", "学", "校", "歩", "十", "五", "分", "友", "山", "二", "人", "教", "室", "入", "先", "生", "来", "前", "本", "読", "今", "語", "数", "好", "昼", "魚", "白", "起", "顔", "洗", "乳", "着", "途", "授", "業", "堂"],
    furigana: {"田":"た","中":"なか","毎":"まい","日":"にち","六":"ろく","時":"じ","朝":"あさ","食":"た","七":"しち","半":"はん","家":"いえ","出":"で","学":"がっ","校":"こう","歩":"ある","十":"じゅう","五":"ご","分":"ふん","友":"とも","山":"やま","二":"ふた","人":"り","教":"きょう","室":"しつ","入":"はい","先":"せん","生":"せい","来":"く","前":"まえ","本":"ほん","読":"よ","今":"きょ","語":"ご","数":"すう","好":"す","昼":"ひる","魚":"さかな","白":"しろ","起":"お","顔":"かお","洗":"あら","乳":"にゅう","着":"つ","途":"と","授":"じゅ","業":"ぎょう","堂":"どう"}
  },
  {
    id: 2,
    title: "Keluarga Yamamoto",
    difficulty: "mudah",
    readTime: 3,
    content: "山本さんの家族は五人です。お父さんとお母さんと、お姉さんと弟がいます。\n\nお父さんは会社員です。毎日電車で会社に行きます。家から駅まで十分歩きます。お母さんは学校の先生です。小学校で子供たちに国語を教えています。\n\nお姉さんは大学生です。毎日大学で英語を勉強しています。来年、外国に行きたいと言っています。弟は中学生です。サッカーが大好きです。\n\n日曜日には、家族みんなで出かけます。先週は山に行きました。天気がよくて、とても楽しかったです。",
    translation: "Keluarga Yamamoto ada lima orang. Ada ayah, ibu, kakak perempuan, dan adik laki-laki.\n\nAyahnya karyawan perusahaan. Setiap hari pergi ke kantor naik kereta. Dari rumah ke stasiun berjalan 10 menit. Ibunya guru sekolah. Mengajar bahasa di SD.\n\nKakak perempuannya mahasiswi. Setiap hari belajar bahasa Inggris di universitas. Tahun depan ingin pergi ke luar negeri. Adiknya siswa SMP. Sangat suka sepak bola.\n\nHari Minggu, seluruh keluarga pergi jalan-jalan. Minggu lalu pergi ke gunung. Cuacanya bagus dan sangat menyenangkan.",
    kanjiUsed: ["山", "本", "家", "族", "五", "人", "父", "母", "姉", "弟", "会", "社", "員", "毎", "日", "電", "車", "行", "駅", "十", "分", "歩", "学", "校", "先", "生", "小", "子", "国", "語", "教", "大", "来", "年", "外", "言", "中", "出", "週", "天", "気"],
    furigana: {"山":"やま","本":"もと","家":"か","族":"ぞく","五":"ご","人":"にん","父":"とう","母":"かあ","姉":"ねえ","弟":"おとうと","会":"かい","社":"しゃ","員":"いん","毎":"まい","日":"にち","電":"でん","車":"しゃ","行":"い","駅":"えき","十":"じゅっ","分":"ぷん","歩":"ある","学":"がく","校":"こう","先":"せん","生":"せい","小":"しょう","子":"こ","国":"こく","語":"ご","教":"おし","大":"だい","来":"らい","年":"ねん","外":"がい","言":"い","中":"ちゅう","出":"で","週":"しゅう","天":"てん","気":"き"}
  },
  {
    id: 3,
    title: "Belanja di Tokyo",
    difficulty: "sedang",
    readTime: 4,
    content: "先週の土曜日、わたしは東京に行きました。朝九時に電車に乗りました。\n\n東京駅に着いて、まずデパートに入りました。新しい服を買いたかったです。三時間くらい店を見ました。白いシャツと青いかばんを買いました。シャツは三千円で、かばんは五千円でした。少し高かったですが、とてもいい物でした。\n\nそれから、友達と会って、一緒に昼ご飯を食べました。駅の近くの小さい店で、おいしいラーメンを食べました。\n\n午後は本屋に行きました。日本語の本を二冊買いました。来週の試験のために勉強します。\n\n夕方六時に電車で家に帰りました。とても楽しい一日でした。",
    translation: "Sabtu minggu lalu, saya pergi ke Tokyo. Naik kereta jam 9 pagi.\n\nTiba di Stasiun Tokyo, pertama masuk ke department store. Ingin membeli baju baru. Melihat-lihat toko sekitar 3 jam. Membeli kemeja putih dan tas biru. Kemeja 3000 yen, tas 5000 yen. Agak mahal, tapi barangnya sangat bagus.\n\nKemudian bertemu teman dan makan siang bersama. Makan ramen enak di restoran kecil dekat stasiun.\n\nSore hari pergi ke toko buku. Membeli 2 buku bahasa Jepang. Untuk belajar ujian minggu depan.\n\nSore jam 6 pulang ke rumah naik kereta. Hari yang sangat menyenangkan.",
    kanjiUsed: ["先", "週", "土", "東", "行", "朝", "九", "時", "電", "車", "駅", "入", "新", "買", "三", "店", "白", "青", "千", "円", "五", "少", "高", "物", "友", "会", "一", "昼", "食", "近", "小", "午", "後", "本", "日", "語", "二", "来", "試", "六", "家", "着", "乗", "服", "間", "屋", "冊"],
    furigana: {"先":"せん","週":"しゅう","土":"ど","東":"とう","行":"い","朝":"あさ","九":"く","時":"じ","電":"でん","車":"しゃ","駅":"えき","入":"はい","新":"あたら","買":"か","三":"さん","店":"みせ","白":"しろ","青":"あお","千":"ぜん","円":"えん","五":"ご","少":"すこ","高":"たか","物":"もの","友":"とも","会":"あ","一":"いっ","昼":"ひる","食":"た","近":"ちか","小":"ちい","午":"ご","後":"ご","本":"ほん","日":"にち","語":"ご","二":"に","来":"らい","試":"し","六":"ろく","家":"いえ","着":"つ","乗":"の","服":"ふく","間":"ま","屋":"や","冊":"さつ"}
  },
  {
    id: 4,
    title: "Hari Libur di Taman",
    difficulty: "sedang",
    readTime: 4,
    content: "今日は休みの日です。天気がとてもいいです。空は青くて、風が少し吹いています。\n\nわたしは午前十時に起きました。朝ご飯を食べてから、大きい公園に行きました。公園には花がたくさん咲いていました。赤い花と白い花と黄色い花がありました。\n\n公園の中に川があります。川の水はとてもきれいです。魚が泳いでいるのが見えました。子供たちが川の近くで遊んでいます。\n\nわたしは木の下に座って、本を読みました。風が気持ちよくて、少し眠くなりました。\n\n午後三時に友達が来ました。一緒にお茶を飲みました。楽しい一日でした。",
    translation: "Hari ini hari libur. Cuacanya sangat bagus. Langit biru dan angin bertiup sedikit.\n\nSaya bangun jam 10 pagi. Setelah sarapan, pergi ke taman besar. Di taman banyak bunga bermekaran. Ada bunga merah, putih, dan kuning.\n\nDi dalam taman ada sungai. Air sungainya sangat jernih. Terlihat ikan berenang. Anak-anak bermain di dekat sungai.\n\nSaya duduk di bawah pohon dan membaca buku. Anginnya nyaman, jadi sedikit mengantuk.\n\nJam 3 sore teman datang. Minum teh bersama. Hari yang menyenangkan.",
    kanjiUsed: ["今", "日", "休", "天", "気", "空", "青", "風", "少", "午", "前", "十", "時", "朝", "食", "大", "花", "赤", "白", "中", "川", "水", "魚", "見", "子", "近", "遊", "木", "下", "座", "本", "読", "後", "三", "友", "来", "一", "茶", "起", "公", "園", "咲", "泳", "眠"],
    furigana: {"今":"きょ","日":"ひ","休":"やす","天":"てん","気":"き","空":"そら","青":"あお","風":"かぜ","少":"すこ","午":"ご","前":"まえ","十":"じゅう","時":"じ","朝":"あさ","食":"た","大":"おお","花":"はな","赤":"あか","白":"しろ","中":"なか","川":"かわ","水":"みず","魚":"さかな","見":"み","子":"こ","近":"ちか","遊":"あそ","木":"き","下":"した","座":"すわ","本":"ほん","読":"よ","後":"ご","三":"さん","友":"とも","来":"き","一":"いち","茶":"ちゃ","起":"お","公":"こう","園":"えん","咲":"さ","泳":"およ","眠":"ねむ"}
  },
  {
    id: 5,
    title: "Surat untuk Teman",
    difficulty: "sulit",
    readTime: 5,
    content: "山田さんへ\n\nお元気ですか。わたしは元気です。日本に来てから三か月になりました。\n\n毎日学校で日本語を勉強しています。先生はとても親切です。クラスには外国から来た学生が十五人います。中国やアメリカやフランスの人がいます。\n\nわたしは東京の小さいアパートに住んでいます。駅から歩いて五分です。近くに大きいスーパーがあるので、買い物はべんりです。\n\n先週、友達と一緒に富士山を見に行きました。とても大きくて、きれいでした。山の上には白い雪がありました。写真をたくさん撮りました。\n\n来月、学校の試験があります。今、毎日三時間勉強しています。少し大変ですが、がんばります。\n\nまた手紙を書きます。お体に気をつけてください。\n\nより",
    translation: "Untuk Yamada,\n\nApa kabar? Saya baik-baik saja. Sudah tiga bulan sejak datang ke Jepang.\n\nSetiap hari belajar bahasa Jepang di sekolah. Gurunya sangat baik. Di kelas ada 15 mahasiswa dari luar negeri. Ada orang dari Tiongkok, Amerika, dan Prancis.\n\nSaya tinggal di apartemen kecil di Tokyo. Lima menit jalan kaki dari stasiun. Dekat ada supermarket besar jadi belanja mudah.\n\nMinggu lalu pergi melihat Gunung Fuji bersama teman. Sangat besar dan indah. Di puncak gunung ada salju putih. Mengambil banyak foto.\n\nBulan depan ada ujian sekolah. Sekarang belajar 3 jam setiap hari. Agak berat tapi akan berusaha.\n\nNanti saya tulis surat lagi. Jaga kesehatan.\n\nSalam",
    kanjiUsed: ["山", "田", "元", "気", "日", "本", "来", "三", "月", "毎", "学", "校", "語", "先", "生", "外", "国", "十", "五", "人", "中", "東", "小", "駅", "歩", "分", "近", "大", "買", "物", "友", "一", "富", "見", "行", "上", "白", "雪", "写", "真", "試", "今", "時", "間", "少", "手", "紙", "書", "体", "親", "切", "住", "撮"],
    furigana: {"山":"やま","田":"だ","元":"げん","気":"き","日":"に","本":"ほん","来":"き","三":"さん","月":"げつ","毎":"まい","学":"がっ","校":"こう","語":"ご","先":"せん","生":"せい","外":"がい","国":"こく","十":"じゅう","五":"ご","人":"にん","中":"ちゅう","東":"とう","小":"ちい","駅":"えき","歩":"ある","分":"ふん","近":"ちか","大":"おお","買":"か","物":"もの","友":"とも","一":"いっ","富":"ふ","見":"み","行":"い","上":"うえ","白":"しろ","雪":"ゆき","写":"しゃ","真":"しん","試":"し","今":"いま","時":"じ","間":"かん","少":"すこ","手":"て","紙":"がみ","書":"か","体":"からだ","親":"した","切":"きれ","住":"す","撮":"と"}
  },
  {
    id: 6,
    title: "Perjalanan ke Kyoto",
    difficulty: "sulit",
    readTime: 5,
    content: "夏休みに、家族で京都に行きました。東京から新幹線で二時間半かかりました。\n\n京都駅に着いて、まずホテルに行きました。ホテルの部屋は大きくて、きれいでした。窓から山が見えました。\n\n一日目は、有名なお寺を見に行きました。とても古い建物でした。外国人の観光客がたくさんいました。\n\n二日目は、川の近くを歩きました。小さい店がたくさんありました。お茶とお菓子を買いました。母は新しい着物を見て、とても喜びました。\n\n三日目は、山の上のお寺に行きました。三百段の階段を上りました。上からの景色はとてもきれいでした。町全体が見えました。\n\n楽しい三日間でした。来年もまた行きたいです。",
    translation: "Liburan musim panas, pergi ke Kyoto bersama keluarga. Dari Tokyo naik shinkansen memakan waktu dua setengah jam.\n\nTiba di Stasiun Kyoto, pertama ke hotel. Kamar hotelnya besar dan bersih. Dari jendela terlihat gunung.\n\nHari pertama pergi melihat kuil terkenal. Bangunan yang sangat tua. Banyak turis asing.\n\nHari kedua jalan-jalan dekat sungai. Banyak toko kecil. Membeli teh dan kue. Ibu melihat kimono baru dan sangat senang.\n\nHari ketiga pergi ke kuil di atas gunung. Menaiki 300 anak tangga. Pemandangan dari atas sangat indah. Terlihat seluruh kota.\n\nTiga hari yang menyenangkan. Tahun depan ingin pergi lagi.",
    kanjiUsed: ["夏", "休", "家", "族", "東", "新", "二", "時", "半", "駅", "大", "山", "見", "一", "日", "有", "名", "古", "外", "国", "人", "川", "近", "歩", "小", "店", "茶", "買", "母", "三", "百", "上", "町", "全", "来", "年", "行", "京", "線", "着", "部", "屋", "窓", "寺", "建", "物", "観", "光", "客", "菓", "着", "喜", "段", "階", "景", "色"],
    furigana: {"夏":"なつ","休":"やす","家":"か","族":"ぞく","東":"とう","新":"しん","二":"に","時":"じ","半":"はん","駅":"えき","大":"おお","山":"やま","見":"み","一":"いち","日":"にち","有":"ゆう","名":"めい","古":"ふる","外":"がい","国":"こく","人":"じん","川":"かわ","近":"ちか","歩":"ある","小":"ちい","店":"みせ","茶":"ちゃ","買":"か","母":"はは","三":"さん","百":"びゃく","上":"うえ","町":"まち","全":"ぜん","来":"らい","年":"ねん","行":"い","京":"きょ","線":"せん","着":"つ","部":"ぶ","屋":"や","窓":"まど","寺":"てら","建":"たて","物":"もの","観":"かん","光":"ひか","客":"きゃく","菓":"か","喜":"よろこ","段":"だん","階":"かい","景":"けし","色":"いろ"}
  },
];
