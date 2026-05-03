export interface Story {
  id: number;
  title: string;
  content: string;
  translation: string;
  kanjiUsed: string[];
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Pagi yang Cerah",
    content: "今日はいい天気です。私は七時に起きました。朝ご飯を食べて、学校へ行きます。学校で友達に会います。",
    translation: "Hari ini cuacanya bagus. Saya bangun pada jam tujuh. Saya makan sarapan, lalu pergi ke sekolah. Di sekolah, saya bertemu dengan teman.",
    kanjiUsed: ["今", "日", "天", "気", "私", "七", "時", "朝", "飯", "食", "学", "校", "行", "友", "達", "会"],
  },
  {
    id: 2,
    title: "Keluarga Saya",
    content: "私の家族は五人です。父と母と姉と弟がいます。父は会社員です。母は先生です。",
    translation: "Keluarga saya ada lima orang. Ada ayah, ibu, kakak perempuan, dan adik laki-laki. Ayah adalah karyawan perusahaan. Ibu adalah guru.",
    kanjiUsed: ["私", "家", "族", "五", "人", "父", "母", "姉", "弟", "会", "社", "員", "先", "生"],
  },
  {
    id: 3,
    title: "Belanja di Toko",
    content: "昨日はデパートへ行きました。新しい靴を買いました。少し高かったですが、とてもいい靴です。それから喫茶店でコーヒーを飲みました。",
    translation: "Kemarin saya pergi ke department store. Saya membeli sepatu baru. Sedikit mahal, tapi sepatunya sangat bagus. Setelah itu, saya minum kopi di kafe.",
    kanjiUsed: ["昨", "日", "行", "新", "靴", "買", "少", "高", "喫", "茶", "店", "飲"],
  },
  {
    id: 4,
    title: "Perjalanan dengan Kereta",
    content: "私は毎日電車で会社へ行きます。家から駅まで十分歩きます。電車の中は人が多いです。",
    translation: "Saya setiap hari pergi ke perusahaan dengan kereta. Dari rumah sampai stasiun berjalan kaki sepuluh menit. Di dalam kereta orangnya banyak.",
    kanjiUsed: ["私", "毎", "日", "電", "車", "会", "社", "行", "家", "駅", "十", "分", "歩", "中", "人", "多"],
  },
];
