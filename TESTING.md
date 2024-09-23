# Testing

> Return back to the [README.md](README.md) file.

## Code Validation

All files were put the their respective validators, and came back with no errors.

### HTML

For all HTML files, I used [HTML W3C Validator.](https://validator.w3.org/) For some of these files, it comes back with warnings, stating that I have empty h2 tags or similar. This is done on purpose as I was using the data-i18n tag to translate text. I am aware of these warnings but don't consider them issues.

Home Page

![screenshot](assets/documentation/index.htmlchecker.png)

Hiragana Page

![screenshot](assets/documentation/hiraganatest.htmlchecker.png)

Katakana Page

![screenshot](assets/documentation/katakana.htmlchecker.png)

Kanji Page

![screenshot](assets/documentation/kanji.htmlchecker.png)

Words Page

![screenshot](assets/documentation/words.htmlchecker.png)

Tests Page

![screenshot](assets/documentation/tests.htmlchecker.png)

Error Page

![screenshot](assets/documentation/errorpage.htmlchecker.png)

Hiragana Game Page

![screenshot](assets/documentation/hiraganatest.htmlchecker.png)

Katakana Game Page

![screenshot](assets/documentation/katakanatest.htmlchecker.png)

All Letters Game Page

![screenshot](assets/documentation/allletterstest.htmlchecker.png)

Quiz End Page

![screenshot](assets/documentation/quizend.htmlchecker.png)

### CSS

For the style sheet, I used the [CSS Jigsaw Validator.](https://jigsaw.w3.org/css-validator/)

**Style sheet**

![screenshot](assets/documentation/stylesheetcheckerp1.png)
![screenshot](assets/documentation/stylesheetcheckerp2.png)

### Javascript

For the javascript files, I used the [JShint Validator.](https://jshint.com/) For the "letters" files, they claim to have many unused variables, but this is only true within the file itself. In the case of the website, these files are being called upon in conjunction with the game scripts, and are used on the html game pages.

Burgermenu Script

![screenshot](assets/documentation/burgermenuscriptjshint.png)

Game Script (For Hiragana and Katakana seperately)

![screenshot](assets/documentation/gamescriptjshint.png)

All Letters Game Script (For both Hiragana and Katakana together)

![screenshot](assets/documentation/alllettersgamescriptjshint.png)

Language Script

![screenshot](assets/documentation/languagescriptjshint.png)

Hiragana Letters Script

![screenshot](assets/documentation/hiraganalettersscriptjshint.png)

Katakana Letters Script

![screenshot](assets/documentation/katakanalettersscriptjshint.png)

All Letters Script

![screenshot](assets/documentation/alllettersscriptjshint.png)

## Responsiveness

### Home Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Home - Desktop](assets/documentation/homedesktop.png) | ![Home - Tablet](assets/documentation/hometablet.png) | ![Home - Mobile](assets/documentation/homemobile.png) |

### Hiragana Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Hiragana - Desktop](assets/documentation/hiraganadesktop.png) | ![Hiragana - Tablet](assets/documentation/hiraganatablet.png) | ![Hiragana - Mobile](assets/documentation/hiraganamobile.png) |

### Katakana Page 

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Katakana Page - Desktop](assets/documentation/katakanadesktop.png) |  ![Katakana Page - Tablet](assets/documentation/katakanatablet.png) | ![Katakana Page - Mobile](assets/documentation/katakanamobile.png) |

### Kanji Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Kanji - Desktop](assets/documentation/kanjidesktop.png) | ![Kanji - Tablet](assets/documentation/kanjitablet.png) | ![Kanji - Mobile](assets/documentation/kanjimobile.png) |

### Words Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Words - Desktop](assets/documentation/wordsdesktop.png) | ![Words - Tablet](assets/documentation/wordstablet.png) | ![Words - Mobile](assets/documentation/wordsmobile.png) |

### Tests Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Tests - Desktop](assets/documentation/testsdesktop.png) | ![Tests - Tablet](assets/documentation/teststablet.png) | ![Tests - Mobile](assets/documentation/testsmobile.png) |

### Quiz Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Quiz - Desktop](assets/documentation/quizdesktop.png) | ![Quiz - Tablet](assets/documentation/quiztablet.png) | ![Quiz - Mobile](assets/documentation/quizmobile.png) |

### Quiz End Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Quiz End - Desktop](assets/documentation/quizenddesktop.png) | ![Quiz End - Tablet](assets/documentation/quizendtablet.png) | ![Quiz End - Mobile](assets/documentation/quizendtablet.png) |

### Error Page

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Error - Desktop](assets/documentation/errordeskop.png) | ![Error - Tablet](assets/documentation/errortablet.png) | ![Error - Mobile](assets/documentation/errormobile.png) |


## Compatibility Testing

Here I manually tested all functionality and features across all responsive sizes and browsers. For this, I used Chrome, Opera, Firefox and Edge.

**Firefox**

![screenshot](assets/documentation/firefoxtest.png)

**Chrome**

![screenshot](assets/documentation/chrometest.png)

**Opera**

![screenshot](assets/documentation/operatest.png)

**Edge** 

![screenshot](assets/documentation/edgetest.png)

## Lighthouse Tests

I ran a lighthouse test for the home page and the game page to test the performance of the website.

| Home | Quiz |
| :---: | :---: |
| ![screenshot](assets/documentation/lighthousehome.png) | ![screenshot](assets/documentation/lighthousequiz.png) |

## Manual Testing

| Test | Goal | Outcome |
| --- | --- | --- |
| Responsiveness | Website should be responsive to all screen sizes | Passed |
| Logo | The logo should redirect the user to the home page if clicked | Passed |
| Nav Menu | All navigational links should direct the user to the intended source | Passed |
| Buttons | All buttons should function to answer questions | Passed |
| Score | Score should increase upon answering a question correctly | Passed |
| Language | The language should change to the respective choice when instructed to | Passed |
| Progress Bar | The progress bar should increase regardless of the answer being correct | Passed |
| Social Icons | All social icons should open a separate tab to the appropriate social media | Passed |

## Site Speed Tests

For this, I used [Catchpoint's Site Performance Service.](https://www.webpagetest.org/) This allows you to test site performance, speed, core web vitals and visual comparisons on all devices.

![screenshot](assets/documentation/pageperformance.png)

### Device Compatibilty 

For device compatibilty I tested the following devices:
- Two desktop computers using Firefox and Chrome respectively

- ASUS Notebook PC using Chrome 

- Samsung Galaxy S20 FE

- Samsung Galaxy A12

- Samsung Galaxy M12

- Samsung Galaxy A03

All of these devices had no issues running the site or interacting with features.
    
### User Experience Testing

- I asked some family and friends to load the website on their devices and to test anything that seemed like it was interactable. The feedback was unanimous in that there were no issues.
- The design was clear and easy to understand, they had no issue navigating the site or information presented. 
- They offered some suggestions for design and content that I hope to implement in the future.

### User Feedback Incorporation:
Some suggestions for features I have taken on board include 
- Recommended colours
- "A" character favicon

### Bugs
There are no remaining bugs that I'm aware of.