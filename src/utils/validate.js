export function validateEmail(emailString) {
  /*
  * 邮箱验证
  * @param ： emailString -> string : 邮箱字符串
  * @return ： Boolean
  * */
  return /^([0-9A-Za-z\-_\\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(emailString)
}
