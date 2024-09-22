/* jshint esversion: 11 */

const vowels = [
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
const kLetters= [
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
const sLetters = [
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
const tLetters = [
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
const nLetters = [
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
const hLetters = [
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
const mLetters = [
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
const rLetters = [
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
const wLetters = [
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
    },
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
const gLetters= [
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
const zLetters = [
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
const dLetters = [
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
const bLetters = [
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
const pLetters = [
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

let vowelsShuffled = vowels.sort(() => Math.random() - 0.5);
let kLettersShuffled = kLetters.sort(() => Math.random() - 0.5);
let sLettersShuffled = sLetters.sort(() => Math.random() - 0.5);
let tLettersShuffled = tLetters.sort(() => Math.random() - 0.5);
let nLettersShuffled = nLetters.sort(() => Math.random() - 0.5);
let hLettersShuffled = hLetters.sort(() => Math.random() - 0.5);
let mLettersShuffled = mLetters.sort(() => Math.random() - 0.5);
let rLettersShuffled = rLetters.sort(() => Math.random() - 0.5);
let wLettersShuffled = wLetters.sort(() => Math.random() - 0.5);
let gLettersShuffled = gLetters.sort(() => Math.random() - 0.5);
let zLettersShuffled = zLetters.sort(() => Math.random() - 0.5);
let dLettersShuffled = dLetters.sort(() => Math.random() - 0.5);
let bLettersShuffled = bLetters.sort(() => Math.random() - 0.5);
let pLettersShuffled = pLetters.sort(() => Math.random() - 0.5);

let allLetters = [
    ...vowels,
    ...kLetters,
    ...sLetters,
    ...tLetters,
    ...nLetters,
    ...hLetters,
    ...mLetters,
    ...rLetters,
    ...wLetters,
    ...gLetters,
    ...zLetters,
    ...dLetters,
    ...bLetters,
    ...pLetters
];
let allLettersShuffled = allLetters.sort(() => Math.random() - 0.5);