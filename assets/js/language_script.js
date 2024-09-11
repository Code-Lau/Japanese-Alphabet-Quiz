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
    const response = await fetch(`assets/json/${lang}.json`);
    return response.json();
}

// 4. Function to change language
async function changeLanguage(lang) {
    setLanguagePreference(lang);  // This reloads the page and applies the new language
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
}

// 5. Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
});

// 6. Function to change the language when a dropdown link is clicked (I asked ChatGPT for help with writing this function https://openai.com/chatgpt/)
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('data-lang');
        changeLanguage(selectedLang);
    });
});

