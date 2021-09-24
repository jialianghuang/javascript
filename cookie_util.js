const getCookie = name => {
    return document.cookie.split('; ').reduce((r, v) => {
      const [n, ...val] = v.split('=');   
      return n === name ? decodeURIComponent(val.join('=')) : r
    }, '');
  };

const setCookie = (name, value, days = 7, path = '/') => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}
