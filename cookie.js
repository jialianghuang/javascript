// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('test2='))
  .split('=')[1];

function showCookieValue() {
  const output = document.getElementById('cookie-value')
  output.textContent = '> ' + cookieValue
}

function clearOutputCookieValue() {
  const output = document.getElementById('cookie-value')
  output.textContent = ''
}
function doOnce() {
  if (!document.cookie.split('; ').find(row => row.startsWith('doSomethingOnlyOnce'))) {
    // Note that we are setting `SameSite=None;` in this example because the example
    // needs to work cross-origin.
    // It is more common not to set the `SameSite` attribute, which results in the default,
    // and more secure, value of `SameSite=Lax;`
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    const output = document.getElementById('do-once')
    output.textContent = '> Do something here!'
  }
}

function clearOutputDoOnce() {
  const output = document.getElementById('do-once')
  output.textContent = ''
}
function resetOnce() {
  // Note that we are setting `SameSite=None;` in this example because the example
  // needs to work cross-origin.
  // It is more common not to set the `SameSite` attribute, which results in the default,
  // and more secure, value of `SameSite=Lax;`
  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

  const output = document.getElementById('reset-once')
  output.textContent = '> Reset!'
}

function clearOutputResetOnce() {
  const output = document.getElementById('reset-once')
  output.textContent = ''
}
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "reader=1; SameSite=None; Secure";

function checkACookieExists() {
  if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
    const output = document.getElementById('a-cookie-existence')
    output.textContent = '> The cookie "reader" exists'
  }
}

function clearOutputACookieExists() {
  const output = document.getElementById('a-cookie-existence')
  output.textContent = ''
}
function checkCookieHasASpecificValue() {
  if (document.cookie.split(';').some((item) => item.includes('reader=1'))) {
    const output = document.getElementById('a-specific-value-of-the-cookie')
    output.textContent = '> The cookie "reader" has a value of "1"'
  }
}

function clearASpecificValueOfTheCookie() {
  const output = document.getElementById('a-specific-value-of-the-cookie')
  output.textContent = ''
}
