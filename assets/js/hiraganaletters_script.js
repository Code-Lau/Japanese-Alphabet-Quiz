/* jshint esversion: 11 */

const vowels = [
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
const kLetters= [
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
const sLetters = [
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
const tLetters = [
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
const nLetters = [
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
const hLetters = [
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
const mLetters = [
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
const rLetters = [
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
const yLetters = [
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
const wLetters = [
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
const gLetters= [
    {
        jp: "が",
        en: "GA",
        ru: "га",
        zh: ""
    },
    {
        jp: "ぎ",
        en: "GI",
        ru: "ги",
        zh: ""
    },
    {
        jp: "ぐ",
        en: "GU",
        ru: "гу",
        zh: ""
    },
    {
        jp: "げ",
        en: "GE",
        ru: "гэ",
        zh: ""
    },
    {
        jp: "ご",
        en: "GO",
        ru: "го",
        zh: ""
    }
];
const zLetters = [
    {
        jp: "ざ",
        en: "ZA",
        ru: "дза",
        zh: ""
    },
    {
        jp: "じ",
        en: "JI",
        ru: "дзи",
        zh: ""
    },
    {
        jp: "ず",
        en: "ZU",
        ru: "дзу",
        zh: ""
    },
    {
        jp: "ぜ",
        en: "ZE",
        ru: "дзэ",
        zh: ""
    },
    {
        jp: "ぞ",
        en: "ZO",
        ru: "дзо",
        zh: ""
    }
];
const dLetters = [
    {
        jp: "だ",
        en: "DA",
        ru: "да",
        zh: ""
    },
    {
        jp: "ぢ",
        en: "JI",
        ru: "дзи",
        zh: ""
    },
    {
        jp: "づ",
        en: "ZU",
        ru: "дзу",
        zh: ""
    },
    {
        jp: "で",
        en: "DE",
        ru: "дэ",
        zh: ""
    },
    {
        jp: "ど",
        en: "DO",
        ru: "до",
        zh: ""
    }
];
const bLetters = [
    {
        jp: "ば",
        en: "BA",
        ru: "ба",
        zh: ""
    },
    {
        jp: "び",
        en: "BI",
        ru: "би",
        zh: ""
    },
    {
        jp: "ぶ",
        en: "BU",
        ru: "бу",
        zh: ""
    },
    {
        jp: "べ",
        en: "BE",
        ru: "бэ",
        zh: ""
    },
    {
        jp: "ぼ",
        en: "BO",
        ru: "бо",
        zh: ""
    }
];
const pLetters = [
    {
        jp: "ぱ",
        en: "PA",
        ru: "па",
        zh: ""
    },
    {
        jp: "ぴ",
        en: "PI",
        ru: "пи",
        zh: ""
    },
    {
        jp: "ぷ",
        en: "PU",
        ru: "пу",
        zh: ""
    },
    {
        jp: "ぺ",
        en: "PE",
        ru: "пэ",
        zh: ""
    },
    {
        jp: "ぽ",
        en: "PO",
        ru: "по",
        zh: ""
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
let yLettersShuffled = yLetters.sort(() => Math.random() - 0.5);
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
    ...yLetters,
    ...wLetters,
    ...gLetters,
    ...zLetters,
    ...dLetters,
    ...bLetters,
    ...pLetters
];

let allLettersShuffled = allLetters.sort(() => Math.random() - 0.5);