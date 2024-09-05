/* jshint esversion: 11 */

const vowels = [
    {
        jp: "あ",
        en: "A",
    },
    {
        jp: "い",
        en: "I"
    },
    {
        jp: "う",
        en: "U"
    },
    {
        jp: "え",
        en: "E"
    },
    {
        jp: "お",
        en: "O"
    }
];
const kLetters= [
    {
        jp: "か",
        en: "KA"
    },
    {
        jp: "き",
        en: "KI"
    },
    {
        jp: "く",
        en: "KU"
    },
    {
        jp: "け",
        en: "KE"
    },
    {
        jp: "こ",
        en: "KO"
    }
];
const sLetters = [
    {
        jp: "さ",
        en: "SA"
    },
    {
        jp: "し",
        en: "SHI"
    },
    {
        jp: "す",
        en: "SU"
    },
    {
        jp: "せ",
        en: "SE"
    },
    {
        jp: "そ",
        en: "SO"
    }
];
const tLetters = [
    {
        jp: "た",
        en: "TA"
    },
    {
        jp: "ち",
        en: "CHI"
    },
    {
        jp: "つ",
        en: "TSU"
    },
    {
        jp: "て",
        en: "TE"
    },
    {
        jp: "と",
        en: "TO"
    }
];
const nLetters = [
    {
        jp: "な",
        en: "NA"
    },
    {
        jp: "に",
        en: "NI"
    },
    {
        jp: "ぬ",
        en: "NU"
    },
    {
        jp: "ね",
        en: "NE"
    },
    {
        jp: "の",
        en: "NO"
    }
];
const hLetters = [
    {
        jp: "は",
        en: "HA"
    },
    {
        jp: "ひ",
        en: "HI"
    },
    {
        jp: "ふ",
        en: "FU"
    },
    {
        jp: "へ",
        en: "HE"
    },
    {
        jp: "ほ",
        en: "HO"
    }
];
const mLetters = [
    {
        jp: "ま",
        en: "MA"
    },
    {
        jp: "み",
        en: "MI"
    },
    {
        jp: "む",
        en: "MU"
    },
    {
        jp: "め",
        en: "ME"
    },
    {
        jp: "も",
        en: "MO"
    }
];
const rLetters = [
    {
        jp: "ら",
        en: "RA"
    },
    {
        jp: "り",
        en: "RI"
    },
    {
        jp: "る",
        en: "RU"
    },
    {
        jp: "れ",
        en: "RE"
    },
    {
        jp: "ろ",
        en: "RO"
    }
];
const yLetters = [
    {
        jp: "や",
        en: "YA"
    },
    {
        jp: "ゆ",
        en: "YU"
    },
    {
        jp: "よ",
        en: "YO"
    }
];
const wLetters = [
    {
        jp: "わ",
        en: "WA"
    },
    {
        jp: "を",
        en: "WO"
    },
    {
        jp: "ん",
        en: "N"
    }
];
const gLetters= [
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
const zLetters = [
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
const dLetters = [
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
const bLetters = [
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
const pLetters = [
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

let allHLetters = [
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

let allHLettersShuffled = allHLetters.sort(() => Math.random() - 0.5);