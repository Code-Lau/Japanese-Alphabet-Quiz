/* jshint esversion: 11 */

const vowelsH = [
    {
        jp: "あ",
        en: "A",
        ru: "a",
        zh: "安"
    },
    {
        jp: "い",
        en: "I",
        ru: "и",
        zh: "以"
    },
    {
        jp: "う",
        en: "U",
        ru: "у",
        zh: "宇"
    },
    {
        jp: "え",
        en: "E",
        ru: "э",
        zh: "衣"
    },
    {
        jp: "お",
        en: "O",
        ru: "о",
        zh: "於"
    }
];
const kLettersH = [
    {
        jp: "か",
        en: "KA",
        ru: "ка",
        zh: "加"
    },
    {
        jp: "き",
        en: "KI",
        ru: "ки",
        zh: "幾"
    },
    {
        jp: "く",
        en: "KU",
        ru: "ку",
        zh: "久"
    },
    {
        jp: "け",
        en: "KE",
        ru: "кэ",
        zh: "計"
    },
    {
        jp: "こ",
        en: "KO",
        ru: "ко",
        zh: "己"
    }
];
const sLettersH = [
    {
        jp: "さ",
        en: "SA",
        ru: "са",
        zh: "左"
    },
    {
        jp: "し",
        en: "SHI",
        ru: "си",
        zh: "之"
    },
    {
        jp: "す",
        en: "SU",
        ru: "су",
        zh: "寸"
    },
    {
        jp: "せ",
        en: "SE",
        ru: "сэ",
        zh: "世"
    },
    {
        jp: "そ",
        en: "SO",
        ru: "со",
        zh: "曽"
    }
];
const tLettersH = [
    {
        jp: "た",
        en: "TA",
        ru: "та",
        zh: "太"
    },
    {
        jp: "ち",
        en: "CHI",
        ru: "ти",
        zh: "知"
    },
    {
        jp: "つ",
        en: "TSU",
        ru: "цу",
        zh: "川"
    },
    {
        jp: "て",
        en: "TE",
        ru: "тэ",
        zh: "天"
    },
    {
        jp: "と",
        en: "TO",
        ru: "то",
        zh: "止"
    }
];
const nLettersH = [
    {
        jp: "な",
        en: "NA",
        ru: "на",
        zh: "奈"
    },
    {
        jp: "に",
        en: "NI",
        ru: "ни",
        zh: "仁"
    },
    {
        jp: "ぬ",
        en: "NU",
        ru: "ну",
        zh: "奴"
    },
    {
        jp: "ね",
        en: "NE",
        ru: "нэ",
        zh: "祢"
    },
    {
        jp: "の",
        en: "NO",
        ru: "но",
        zh: "乃"
    }
];
const hLettersH = [
    {
        jp: "は",
        en: "HA",
        ru: "ха",
        zh: "波"
    },
    {
        jp: "ひ",
        en: "HI",
        ru: "хи",
        zh: "比"
    },
    {
        jp: "ふ",
        en: "FU",
        ru: "фу",
        zh: "不"
    },
    {
        jp: "へ",
        en: "HE",
        ru: "хэ",
        zh: "部"
    },
    {
        jp: "ほ",
        en: "HO",
        ru: "хо",
        zh: "保"
    }
];
const mLettersH = [
    {
        jp: "ま",
        en: "MA",
        ru: "ма",
        zh: "末"
    },
    {
        jp: "み",
        en: "MI",
        ru: "ми",
        zh: "美"
    },
    {
        jp: "む",
        en: "MU",
        ru: "му",
        zh: "武"
    },
    {
        jp: "め",
        en: "ME",
        ru: "мэ",
        zh: "女"
    },
    {
        jp: "も",
        en: "MO",
        ru: "мо",
        zh: "毛"
    }
];
const rLettersH = [
    {
        jp: "ら",
        en: "RA",
        ru: "ра",
        zh: "良"
    },
    {
        jp: "り",
        en: "RI",
        ru: "ри",
        zh: "利"
    },
    {
        jp: "る",
        en: "RU",
        ru: "ру",
        zh: "留"
    },
    {
        jp: "れ",
        en: "RE",
        ru: "рэ",
        zh: "礼"
    },
    {
        jp: "ろ",
        en: "RO",
        ru: "ро",
        zh: "呂"
    }
];
const yLettersH = [
    {
        jp: "や",
        en: "YA",
        ru: "я",
        zh: "也"
    },
    {
        jp: "ゆ",
        en: "YU",
        ru: "ю",
        zh: "由"
    },
    {
        jp: "よ",
        en: "YO",
        ru: "ё",
        zh: "与"
    }
];
const wLettersH = [
    {
        jp: "わ",
        en: "WA",
        ru: "ва",
        zh: "和"
    },
    {
        jp: "を",
        en: "WO",
        ru: "во",
        zh: "遠"
    },
    {
        jp: "ん",
        en: "N",
        ru: "н",
        zh: "无"
    }
];
const gLettersH = [
    {
        jp: "が",
        en: "KA"
    },
    {
        jp: "ぎ",
        en: "KI"
    },
    {
        jp: "ぐ",
        en: "KU"
    },
    {
        jp: "げ",
        en: "KE"
    },
    {
        jp: "ご",
        en: "KO"
    }
];
const zLettersH = [
    {
        jp: "ざ",
        en: "ZA"
    },
    {
        jp: "じ",
        en: "JI"
    },
    {
        jp: "ず",
        en: "ZU"
    },
    {
        jp: "ぜ",
        en: "ZE"
    },
    {
        jp: "ぞ",
        en: "ZO"
    }
];
const dLettersH = [
    {
        jp: "だ",
        en: "DA"
    },
    {
        jp: "ぢ",
        en: "ji"
    },
    {
        jp: "づ",
        en: "zu"
    },
    {
        jp: "で",
        en: "DE"
    },
    {
        jp: "ど",
        en: "DO"
    }
];
const bLettersH = [
    {
        jp: "ば",
        en: "BA"
    },
    {
        jp: "び",
        en: "BI"
    },
    {
        jp: "ぶ",
        en: "BU"
    },
    {
        jp: "べ",
        en: "BE"
    },
    {
        jp: "ぼ",
        en: "BO"
    }
];
const pLettersH = [
    {
        jp: "ぱ",
        en: "PA"
    },
    {
        jp: "ぴ",
        en: "PI"
    },
    {
        jp: "ぷ",
        en: "PU"
    },
    {
        jp: "ぺ",
        en: "PE"
    },
    {
        jp: "ぽ",
        en: "PO"
    }
];
const vowelsK = [
    {
        jp: "ア",
        en: "A",
        ru: "a",
        zh: "安"
    },
    {
        jp: "イ",
        en: "I",
        ru: "и",
        zh: "以"
    },
    {
        jp: "ウ",
        en: "U",
        ru: "у",
        zh: "宇"
    },
    {
        jp: "エ",
        en: "E",
        ru: "э",
        zh: "衣"
    },
    {
        jp: "オ",
        en: "O",
        ru: "о",
        zh: "於"
    }
];
const kLettersK = [
    {
        jp: "カ",
        en: "KA",
        ru: "ка",
        zh: "加"
    },
    {
        jp: "キ",
        en: "KI",
        ru: "ки",
        zh: "幾"
    },
    {
        jp: "ク",
        en: "KU",
        ru: "ку",
        zh: "久"
    },
    {
        jp: "ケ",
        en: "KE",
        ru: "кэ",
        zh: "計"
    },
    {
        jp: "コ",
        en: "KO",
        ru: "ко",
        zh: "己"
    }
];
const sLettersK = [
    {
        jp: "サ",
        en: "SA",
        ru: "са",
        zh: "左"
    },
    {
        jp: "シ",
        en: "SHI",
        ru: "си",
        zh: "之"
    },
    {
        jp: "ス",
        en: "SU",
        ru: "су",
        zh: "寸"
    },
    {
        jp: "セ",
        en: "SE",
        ru: "сэ",
        zh: "世"
    },
    {
        jp: "ソ",
        en: "SO",
        ru: "со",
        zh: "曽"
    }
];
const tLettersK = [
    {
        jp: "タ",
        en: "TA",
        ru: "та",
        zh: "太"
    },
    {
        jp: "チ",
        en: "CHI",
        ru: "ти",
        zh: "知"
    },
    {
        jp: "ツ",
        en: "TSU",
        ru: "цу",
        zh: "川"
    },
    {
        jp: "テ",
        en: "TE",
        ru: "тэ",
        zh: "天"
    },
    {
        jp: "ト",
        en: "TO",
        ru: "то",
        zh: "止"
    }
];
const nLettersK = [
    {
        jp: "ナ",
        en: "NA",
        ru: "на",
        zh: "奈"
    },
    {
        jp: "ニ",
        en: "NI",
        ru: "ни",
        zh: "仁"
    },
    {
        jp: "ヌ",
        en: "NU",
        ru: "ну",
        zh: "奴"
    },
    {
        jp: "ネ",
        en: "NE",
        ru: "нэ",
        zh: "祢"
    },
    {
        jp: "ノ",
        en: "NO",
        ru: "но",
        zh: "乃"
    }
];
const hLettersK = [
    {
        jp: "ハ",
        en: "HA",
        ru: "ха",
        zh: "波"
    },
    {
        jp: "ヒ",
        en: "HI",
        ru: "хи",
        zh: "比"
    },
    {
        jp: "フ",
        en: "FU",
        ru: "фу",
        zh: "不"
    },
    {
        jp: "ヘ",
        en: "HE",
        ru: "хэ",
        zh: "部"
    },
    {
        jp: "ホ",
        en: "HO",
        ru: "хо",
        zh: "保"
    }
];
const mLettersK = [
    {
        jp: "マ",
        en: "MA",
        ru: "ма",
        zh: "末"
    },
    {
        jp: "ミ",
        en: "MI",
        ru: "ми",
        zh: "美"
    },
    {
        jp: "ム",
        en: "MU",
        ru: "му",
        zh: "武"
    },
    {
        jp: "メ",
        en: "ME",
        ru: "мэ",
        zh: "女"
    },
    {
        jp: "モ",
        en: "MO",
        ru: "мо",
        zh: "毛"
    }
];
const rLettersK = [
    {
        jp: "ラ",
        en: "RA",
        ru: "ра",
        zh: "良"
    },
    {
        jp: "リ",
        en: "RI",
        ru: "ри",
        zh: "利"
    },
    {
        jp: "ル",
        en: "RU",
        ru: "ру",
        zh: "留"
    },
    {
        jp: "レ",
        en: "RE",
        ru: "рэ",
        zh: "礼"
    },
    {
        jp: "ロ",
        en: "RO",
        ru: "ро",
        zh: "呂"
    }
];
const yLettersK = [
    {
        jp: "ヤ",
        en: "YA",
        ru: "я",
        zh: "也"
    },
    {
        jp: "ユ",
        en: "YU",
        ru: "ю",
        zh: "由"
    },
    {
        jp: "ヨ",
        en: "YO",
        ru: "ё",
        zh: "与"
    }
];
const wLettersK = [
    {
        jp: "ワ",
        en: "WA",
        ru: "ва",
        zh: "和"
    },
    {
        jp: "ヲ",
        en: "WO",
        ru: "во",
        zh: "遠"
    },
    {
        jp: "ン",
        en: "N",
        ru: "н",
        zh: "无"
    }
];
const gLettersK = [
    {
        jp: "ガ",
        en: "GA"
    },
    {
        jp: "ギ",
        en: "GI"
    },
    {
        jp: "グ",
        en: "GU"
    },
    {
        jp: "ゲ",
        en: "GE"
    },
    {
        jp: "ゴ",
        en: "GO"
    }
];
const zLettersK = [
    {
        jp: "ザ",
        en: "ZA"
    },
    {
        jp: "ジ",
        en: "JI"
    },
    {
        jp: "ズ",
        en: "ZU"
    },
    {
        jp: "ゼ",
        en: "ZE"
    },
    {
        jp: "ゾ",
        en: "ZO"
    }
];
const dLettersK = [
    {
        jp: "ダ",
        en: "DA"
    },
    {
        jp: "ヂ",
        en: "JI"
    },
    {
        jp: "ヅ",
        en: "ZU"
    },
    {
        jp: "で",
        en: "DE"
    },
    {
        jp: "ど",
        en: "DO"
    }
];
const bLettersK = [
    {
        jp: "バ",
        en: "BA"
    },
    {
        jp: "ビ",
        en: "BI"
    },
    {
        jp: "ブ",
        en: "BU"
    },
    {
        jp: "ベ",
        en: "BE"
    },
    {
        jp: "ボ",
        en: "BO"
    }
];
const pLettersK = [
    {
        jp: "パ",
        en: "PA"
    },
    {
        jp: "ピ",
        en: "PI"
    },
    {
        jp: "",
        en: "PU"
    },
    {
        jp: "ぺ",
        en: "PE"
    },
    {
        jp: "ぽ",
        en: "PO"
    }
];

let vowelsHShuffled = vowelsH.sort(() => Math.random() - 0.5);
let kLettersHShuffled = kLettersH.sort(() => Math.random() - 0.5);
let sLettersHShuffled = sLettersH.sort(() => Math.random() - 0.5);
let tLettersHShuffled = tLettersH.sort(() => Math.random() - 0.5);
let nLettersHShuffled = nLettersH.sort(() => Math.random() - 0.5);
let hLettersHShuffled = hLettersH.sort(() => Math.random() - 0.5);
let mLettersHShuffled = mLettersH.sort(() => Math.random() - 0.5);
let rLettersHShuffled = rLettersH.sort(() => Math.random() - 0.5);
let yLettersHShuffled = yLettersH.sort(() => Math.random() - 0.5);
let wLettersHShuffled = wLettersH.sort(() => Math.random() - 0.5);
let gLettersHShuffled = gLettersH.sort(() => Math.random() - 0.5);
let zLettersHShuffled = zLettersH.sort(() => Math.random() - 0.5);
let dLettersHShuffled = dLettersH.sort(() => Math.random() - 0.5);
let bLettersHShuffled = bLettersH.sort(() => Math.random() - 0.5);
let pLettersHShuffled = pLettersH.sort(() => Math.random() - 0.5);

let vowelskShuffled = vowelsK.sort(() => Math.random() - 0.5);
let kLettersKShuffled = kLettersK.sort(() => Math.random() - 0.5);
let sLettersKShuffled = sLettersK.sort(() => Math.random() - 0.5);
let tLettersKShuffled = tLettersK.sort(() => Math.random() - 0.5);
let nLettersKShuffled = nLettersK.sort(() => Math.random() - 0.5);
let hLettersKShuffled = hLettersK.sort(() => Math.random() - 0.5);
let mLettersKShuffled = mLettersK.sort(() => Math.random() - 0.5);
let rLettersKShuffled = rLettersK.sort(() => Math.random() - 0.5);
let yLettersKShuffled = yLettersK.sort(() => Math.random() - 0.5);
let wLettersKShuffled = wLettersK.sort(() => Math.random() - 0.5);
let gLettersKShuffled = gLettersK.sort(() => Math.random() - 0.5);
let zLettersKShuffled = zLettersK.sort(() => Math.random() - 0.5);
let dLettersKShuffled = dLettersK.sort(() => Math.random() - 0.5);
let bLettersKShuffled = bLettersK.sort(() => Math.random() - 0.5);
let pLettersKShuffled = pLettersK.sort(() => Math.random() - 0.5);

let allSeion = [
    ...vowelsH,
    ...kLettersH,
    ...sLettersH,
    ...tLettersH,
    ...nLettersH,
    ...hLettersH,
    ...mLettersH,
    ...rLettersH,
    ...yLettersH,
    ...wLettersH,
    ...vowelsK,
    ...kLettersK,
    ...sLettersK,
    ...tLettersK,
    ...nLettersK,
    ...hLettersK,
    ...mLettersK,
    ...rLettersK,
    ...yLettersK,
    ...wLettersK,
];

let allDakuon = [
    ...gLettersH,
    ...zLettersH,
    ...dLettersH,
    ...bLettersH,
    ...pLettersH,
    ...gLettersK,
    ...zLettersK,
    ...dLettersK,
    ...bLettersK,
    ...pLettersK
];

let allLettersHK = [
    ...vowelsH,
    ...kLettersH,
    ...sLettersH,
    ...tLettersH,
    ...nLettersH,
    ...hLettersH,
    ...mLettersH,
    ...rLettersH,
    ...yLettersH,
    ...wLettersH,
    ...gLettersH,
    ...zLettersH,
    ...dLettersH,
    ...bLettersH,
    ...pLettersH,
    ...vowelsK,
    ...kLettersK,
    ...sLettersK,
    ...tLettersK,
    ...nLettersK,
    ...hLettersK,
    ...mLettersK,
    ...rLettersK,
    ...yLettersK,
    ...wLettersK,
    ...gLettersK,
    ...zLettersK,
    ...dLettersK,
    ...bLettersK,
    ...pLettersK
];

let allSeionShuffled = allSeion.sort(() => Math.random() - 0.5);
let allDakuonShuffled = allDakuon.sort(() => Math.random() - 0.5);
let allLettersHKShuffled = allLettersHK.sort(() => Math.random() - 0.5);