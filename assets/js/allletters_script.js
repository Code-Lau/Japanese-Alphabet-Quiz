/* jshint esversion: 11 */

const vowelsH = [
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
const kLettersH = [
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
const sLettersH = [
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
const tLettersH = [
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
const nLettersH = [
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
const hLettersH = [
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
const mLettersH = [
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
const rLettersH = [
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
const yLettersH = [
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
const wLettersH = [
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
const kLettersK = [
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
const sLettersK = [
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
const tLettersK = [
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
const nLettersK = [
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
const hLettersK = [
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
const mLettersK = [
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
const rLettersK = [
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
const yLettersK = [
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
const wLettersK = [
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

let allSeion = {
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
}

let allDakuon = {
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
}

let allLetters = [
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