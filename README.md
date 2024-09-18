# [Word Burger]()

Word Burger is an app that aims to help users practise and learn the Japanese alphabet, Hiragana, Katakana and Kanji. 

![screenshot]()

Here is a demonstration of responsiveness, done through [Am I Responsive?]()

## UX
This is not a commercial site and as such doesn't need commercial features such as hero sections. The app was designed with a younger audience in mind, and as such I adopted a colourful design scheme. The design is based off a burger and works better when viewed as a mobile app. The header and footer are meant to represent the buns, and the page content represents the ingredients. (The meat of the matter, if you will.)

### Colour Scheme

The colours were chosen with readability and keeping interest in mind, each main colour representing a specific ingredient of a generic burger. The top of the bun, tomatoes, red onions, cheese, pickles, burger patty, lettuce and the bottom of the bun, in that order. The colours are as follows:

- `#FEA836` used for the header and footer
- `#F04863` used for the tomato containers
- `#F02949` used for the tomato container outlines
- `#F45F9F` used for the red onion containers
- `#A14A81` used for the red onion container outlines
- `#FDC756` used for the cheese containers
- `#FEA836` used for the cheese container outlines
- `#2DB455` used for the pickle containers
- `#238A41` used for the pickle container outlines
- `#BC4D41` used for the burger containers
- `#824044` used for the burger container outlines
- `#87BF18` used for the lettuce containers
- `#549A38` used for the lettuce container outlines

As some colours like the burger buns and cheese are lighter, legibility is a concern. I chose darker variants and added shadows to the text to allow the user to more clearly read the text. 

![screenshot]()

### Typography

The font primarily used on this website is [Balsamiq Sans](https://fonts.google.com/specimen/Balsamiq+Sans). I chose this for the easy legibility and childlike educational theme to it. For the Japanese characters, I used [M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c?query=M+PLUS+Rounded+1c). This was the best font that matched Balsamiq Sans and also allowed the use of the Japanese characters. 

![screenshot]()

The social icons are used from [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css).

## Features

### Existing Features

**Logo**
- The logo contains the title and when clicked, returns the user to the home page. This was implemented to give the users an ease of access with navigation if they are unfamiliar with the navigation menu. The title, "Word Burger" is in english, with the same being written beneath it in Japanese, "単語 バーガー". This title would be excluded from all translations because ideally, this would be trademarked. 

![screenshot]()

**Navigation Menu**
- The navigation menu features all the main pages the user would be interested, which includes: the home page, the hiragana page, the katakana page, the kanji page, the tests page and the words page. After the words page link is the, site language dropdown menu. This menu is within the navigation menu as a standalone dropdown menu, containing language options for the user to select. The languages available are: English, French, Spanish, German, Portuguese, Russian and Chinese. When any of these are clicked, the page reloads with the respective langauge applies to all text available, excluding the logo. This also includes the navigation menu itself.

**Guide Buttons**
- On the home page I created buttons with the main navigation links the user would be interested in. This includes the hiragana, katakana, kanji, word and tests pages. This was implemented to save the user time, they can find what they are interested in within seconds of loading the home page. This holds their interest and prevents them from getting lost should they not understand how to use the navigation menu. 

![screenshot]()

**Socials**
- At the bottom of the page are three icons that link to the hypothetical respective social medias associated with Word Burger. As this is not a real app or company, these links don't actually exist. For the purpose of demonstration, all anchors link to their respective websites.

![screenshot]()

**The Hiragana Page**
- This page holds information about hiragana and the characters included within it. The page contains a brief introduction to Hiragana as a concept and explains how many characters there are along with the differences. All characters are displayed alongside their romanji/latin letter counterparts for the user to study. Beneath that is a table that contains all the flashcard quizzes related to hiragana.

![screenshot]()

**The Katakana Page**
- This page is near identical in format and introduction to the hiragana page, with key differences that explain the difference to the user. This page also features an introduction to the characters, the characters themselves and a table containing flashcard quiz links related to Katakana.

![screenshot]()

**The Kanji Page**
- The kanji page is similar to the hiragana and katakana pages in that it gives a brief introduction to Kanji, followed by some characters for the user to study. Currently there is no quizzes for kanji, but there may be in the future.

![screenshot]()

**The Words Page**
- The words page displays some common and beginner friendly words for the user to study.

![screenshot]()

### Future Features

**More Content**
-I would like to add more words and kanji for the user to study

**More Quizzes**
-I would like to add quizzes for kanji and words.

**Scoreboard**
-I would like to add a leaderboard in the future that allows the user to simply keep track of how well they did on certain quizzes and tests.

**Quiz Variations**
-Currently all the quizzes adopt the flashcard study quiz type, in the future I would like to add different quiz formats to allow for more accessibilty to users. By letting the user choose how they want to study, they can learn more effectively.

**Sharing Results**
-I would like to add a feature that allows the user to copy an image of the results they got on a test or quiz so they can share it with their friends.

**More Languages**
-In production, Hindi was initially planned and then cut due to difficulties. In the future, I would like to have as many langauges as possible as options.

## Tools & Technologies Used
For this project, I used gitpod and Visual Studio Code to code in. Github was used to host the repository, Github Pages for the deployment. The main site content was written with HTML, the designs with CSS and the quiz functionality with Javascript. Any images used were put through TinyPng and Webp Converter to reduce the size and convert them to Webp files. The website was originally designed in Figma, although I didn't end up going with said design. Font Awesome was used for all social icons and down arrows. This template along with the template for the TESTING.md file were generated with the Markdown Builer.

- [![Markdown Builder](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://tim.2bn.dev/markdown-builder) used to generate README and TESTING templates.
- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [![GitHub](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) used for secure online code storage.
- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) used as a cloud-based IDE for development.
- [![HTML](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) used for user interaction on the site.
- [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) used for hosting the deployed front-end site
- [![Figma](https://img.shields.io/badge/Figma-grey?logo=figma&logoColor=F24E1E)](https://www.figma.com) used for creating wireframes.
- [![Font Awesome](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com) used for the icons.
- [![DeepL Translator](https://www.deepl.com/en/translator)] used for translations.
- [![Collins Dictionary](https://www.collinsdictionary.com/)] used for translations.


## Testing
For testing, please refer to the [TESTING.md]() file.

## Deployment
This site was deployed by Github Pages. The live link can be found [here.]()

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

### Cloning

You can clone the repository by following these steps:

## Credits 
All code referenced does not belong to me, and is borrowed expressly for learning purposes.
| Source | Content | Location |
| --- | --- | --- |
| []() | | |

## Content

## Media
| Source | Content | Location |
| --- | --- | --- |
| [Wikipedia](https://www.wikipedia.org/) | Hiragana, Katakana and Kanji characters | All characters can be found on wikipedia. |
| [DeepLTranslator](https://www.deepl.com/en/translator) | Translations | All translations was made using the DeepL Translator tool alongside other online dictionaries. |
| [Collins Dictionary](https://www.collinsdictionary.com/) | Specific word translations | The Collins Dictionary was used to double check translations and search for specific words that the DeepL Translator tool may have missed. |

## Acknowledgements
- I would like to thank my (very cool) Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for his support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank my family for help with user testing and UX advice.
