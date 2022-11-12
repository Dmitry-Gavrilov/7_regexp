export default class Validator {
  static ValidateNickName(nickName) {
    return /[^\w-]/.test(nickName) || /^[\d-_]|[\d-_]$/.test(nickName) || /\d{4,}/.test(nickName);// выдаст true, если ник не соответсвует требованиям к нему, и false при соответствии имени требованиям
  }
}
