//1-5 Taken from: https://medium.com/@nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505


// 1. Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}
// 2. Function to set the language preference:
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// 3. Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
}

// 4. Function to change language
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

 // 5. Call updateContent() on page load
 window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
  });