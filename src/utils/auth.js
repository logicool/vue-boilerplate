import Cookies from 'js-cookie'
const TokenKey = 'Request-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

/**
 * 设定cookie token
 * @param {string} token token
 * @param {number} expires 有效期 默认1天
 */
export function setToken(token, expires = 1) {
  return Cookies.set(TokenKey, token, { expires: expires })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
