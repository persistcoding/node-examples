export default function (req) {

  if(!req) {
    throw new TypeError('argument req is required')
  }
  if(typeof req !== 'object') {
    throw new TypeError('argument req is required to be an object')
  }

  // get header
  const header = getAuthorization(req.req || req)

  // parse header
  return parse(header);
}


function getAuthorization(req) {
  if(!req.headers || typeof req.headers !=='object') {
    throw new TypeError('argument req is required to have headers property')
  }

  // console.log('req.headers.authorization')
  // console.log(req.headers.authorization)

  return req.headers.authorization
}

/**
 * RegExp for basic auth credentials
 *
 * credentials = auth-scheme 1*SP token68
 * auth-scheme = "Basic" ; case insensitive
 * token68     = 1*( ALPHA / DIGIT / "-" / "." / "_" / "~" / "+" / "/" ) *"="
 * @private
 */
const CREDENTIALS_REGEXP = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/

/**
 * RegExp for basic auth user/pass
 *
 * user-pass   = userid ":" password
 * userid      = *<TEXT excluding ":">
 * password    = *TEXT
 * @private
 */

var USER_PASS_REGEXP = /^([^:]*):(.*)$/

function parse (string) {
  if(typeof string !="string") {
    return undefined
  }
  // parse header
  const match = CREDENTIALS_REGEXP.exec(string)
  if(!match) {
    return undefined
  }

  // decode user pass
  const userPass = USER_PASS_REGEXP.exec(decodeBase64(match[1]))

  if(!userPass) {
    return undefined
  }

  return new Credentials(userPass[1], userPass[2]);
}

function Credentials (name, pass) {
  this.name = name
  this.pass = pass
}


function decodeBase64(str) {
  const result = new Buffer(str, 'base64').toString()

  // console.log('decodeBase64')
  // console.log(result)
  return result
}
