/* jshint esversion: 11 */

const vowelsh = [
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
const kLettersh = [
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
const sLettersh = [
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
const tLettersh = [
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
const nLettersh = [
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
const hLettersh = [
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
const mLettersh = [
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
const rLettersh = [
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
const yLettersh = [
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
const wLettersh = [
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
const gLettersh = [
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
const zLettersh = [
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
const dLettersh = [
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
const bLettersh = [
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
const pLettersh = [
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
const kLettersk = [
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
const sLettersk = [
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
const tLettersk = [
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
const nLettersk = [
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
const hLettersk = [
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
const mLettersk = [
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
const rLettersk = [
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
const yLettersk = [
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
const wLettersk = [
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
const gLettersk = [
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
const zLettersk = [
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
const dLettersk = [
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
const bLettersk = [
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
const pLettersk = [
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

let vowelshShuffled = vowels.sort(() => Math.random() - 0.5);
let kLettershShuffled = kLetters.sort(() => Math.random() - 0.5);
let sLettershShuffled = sLetters.sort(() => Math.random() - 0.5);
let tLettershShuffled = tLetters.sort(() => Math.random() - 0.5);
let nLettershShuffled = nLetters.sort(() => Math.random() - 0.5);
let hLettershShuffled = hLetters.sort(() => Math.random() - 0.5);
let mLettershShuffled = mLetters.sort(() => Math.random() - 0.5);
let rLettershShuffled = rLetters.sort(() => Math.random() - 0.5);
let yLettershShuffled = yLetters.sort(() => Math.random() - 0.5);
let wLettershShuffled = wLetters.sort(() => Math.random() - 0.5);
let gLettershShuffled = gLetters.sort(() => Math.random() - 0.5);
let zLettershShuffled = zLetters.sort(() => Math.random() - 0.5);
let dLettershShuffled = dLetters.sort(() => Math.random() - 0.5);
let bLettershShuffled = bLetters.sort(() => Math.random() - 0.5);
let pLettershShuffled = pLetters.sort(() => Math.random() - 0.5);

let vowelskShuffled = vowels.sort(() => Math.random() - 0.5);
let kLetterskShuffled = kLetters.sort(() => Math.random() - 0.5);
let sLetterskShuffled = sLetters.sort(() => Math.random() - 0.5);
let tLetterskShuffled = tLetters.sort(() => Math.random() - 0.5);
let nLetterskShuffled = nLetters.sort(() => Math.random() - 0.5);
let hLetterskShuffled = hLetters.sort(() => Math.random() - 0.5);
let mLetterskShuffled = mLetters.sort(() => Math.random() - 0.5);
let rLetterskShuffled = rLetters.sort(() => Math.random() - 0.5);
let yLetterskShuffled = yLetters.sort(() => Math.random() - 0.5);
let wLetterskShuffled = wLetters.sort(() => Math.random() - 0.5);
let gLetterskShuffled = gLetters.sort(() => Math.random() - 0.5);
let zLetterskShuffled = zLetters.sort(() => Math.random() - 0.5);
let dLetterskShuffled = dLetters.sort(() => Math.random() - 0.5);
let bLetterskShuffled = bLetters.sort(() => Math.random() - 0.5);
let pLetterskShuffled = pLetters.sort(() => Math.random() - 0.5);

let allLettersHK = [
    ...vowelsh,
    ...kLettersh,
    ...sLettersh,
    ...tLettersh,
    ...nLettersh,
    ...hLettersh,
    ...mLettersh,
    ...rLettersh,
    ...yLettersh,
    ...wLettersh,
    ...gLettersh,
    ...zLettersh,
    ...dLettersh,
    ...bLettersh,
    ...pLettersh,
    ...vowelsk,
    ...kLettersk,
    ...sLettersk,
    ...tLettersk,
    ...nLettersk,
    ...hLettersk,
    ...mLettersk,
    ...rLettersk,
    ...yLettersk,
    ...wLettersk,
    ...gLettersk,
    ...zLettersk,
    ...dLettersk,
    ...bLettersk,
    ...pLettersk
];

let allLettersHKShuffled = allLettersHK.sort(() => Math.random() - 0.5);