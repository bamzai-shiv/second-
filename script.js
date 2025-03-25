// Select elements
const cookieConsentBanner = document.getElementById('cookieConsent');
const closeBannerBtn = document.getElementById('closeBannerBtn');
const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

// Check if user already accepted/closed the banner in previous visits
// const cookiesAccepted = localStorage.getItem('cookiesAccepted');
// if (cookiesAccepted === 'true') {
//   cookieConsentBanner.style.display = 'none';
// }

// Close the banner when user clicks the "X" button
closeBannerBtn.addEventListener('click', () => {
  cookieConsentBanner.style.display = 'none';
  // localStorage.setItem('cookiesAccepted', 'true');
});

// Hide banner and (optionally) save user acceptance when clicking "I like Cookies"
acceptCookiesBtn.addEventListener('click', () => {
  cookieConsentBanner.style.display = 'none';
  // localStorage.setItem('cookiesAccepted', 'true');
});
