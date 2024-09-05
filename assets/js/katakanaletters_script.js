/* jshint esversion: 11 */

const vowelsk = [
    {
        jp: "ア",
        en: "A",
    },
    {
        jp: "イ",
        en: "I"
    },
    {
        jp: "ウ",
        en: "U"
    },
    {
        jp: "エ",
        en: "E"
    },
    {
        jp: "オ",
        en: "O"
    }
];
const kLetters= [
    {
        jp: "カ",
        en: "KA"
    },
    {
        jp: "キ",
        en: "KI"
    },
    {
        jp: "ク",
        en: "KU"
    },
    {
        jp: "ケ",
        en: "KE"
    },
    {
        jp: "コ",
        en: "KO"
    }
];
const sLetters = [
    {
        jp: "サ",
        en: "SA"
    },
    {
        jp: "シ",
        en: "SHI"
    },
    {
        jp: "ス",
        en: "SU"
    },
    {
        jp: "セ",
        en: "SE"
    },
    {
        jp: "ソ",
        en: "SO"
    }
];
const tLetters = [
    {
        jp: "タ",
        en: "TA"
    },
    {
        jp: "チ",
        en: "CHI"
    },
    {
        jp: "ツ",
        en: "TSU"
    },
    {
        jp: "テ",
        en: "TE"
    },
    {
        jp: "ト",
        en: "TO"
    }
];
const nLetters = [
    {
        jp: "ナ",
        en: "NA"
    },
    {
        jp: "ニ",
        en: "NI"
    },
    {
        jp: "ヌ",
        en: "NU"
    },
    {
        jp: "ネ",
        en: "NE"
    },
    {
        jp: "ノ",
        en: "NO"
    }
];
const hLetters = [
    {
        jp: "ハ",
        en: "HA"
    },
    {
        jp: "ヒ",
        en: "HI"
    },
    {
        jp: "フ",
        en: "FU"
    },
    {
        jp: "ヘ",
        en: "HE"
    },
    {
        jp: "ホ",
        en: "HO"
    }
];
const mLetters = [
    {
        jp: "マ",
        en: "MA"
    },
    {
        jp: "ミ",
        en: "MI"
    },
    {
        jp: "ム",
        en: "MU"
    },
    {
        jp: "メ",
        en: "ME"
    },
    {
        jp: "モ",
        en: "MO"
    }
];
const rLetters = [
    {
        jp: "ラ",
        en: "RA"
    },
    {
        jp: "リ",
        en: "RI"
    },
    {
        jp: "ル",
        en: "RU"
    },
    {
        jp: "レ",
        en: "RE"
    },
    {
        jp: "ロ",
        en: "RO"
    }
];
const yLetters = [
    {
        jp: "ヤ",
        en: "YA"
    },
    {
        jp: "ユ",
        en: "YU"
    },
    {
        jp: "ヨ",
        en: "YO"
    }
];
const wLetters = [
    {
        jp: "ワ",
        en: "WA"
    },
    {
        jp: "ヲ",
        en: "WO"
    },
    {
        jp: "ン",
        en: "N"
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

let vowelskShuffled = vowelsk.sort(() => Math.random() - 0.5);
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

let allKLetters = [
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
let allKLettersShuffled = allKLetters.sort(() => Math.random() - 0.5);