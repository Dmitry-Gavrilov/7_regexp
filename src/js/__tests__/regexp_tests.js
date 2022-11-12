import Validator from '../userName_regexp';

test('обычное имя', () => {
  const nickName = 'dima';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('верхний регистр', () => {
  const nickName = 'DIMAN';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('заглавная первая', () => {
  const nickName = 'Diman';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('заглавная последняя', () => {
  const nickName = 'DimA';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('с цифрами', () => {
  const nickName = 'Dmitry85Gavrilov';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('с тире', () => {
  const nickName = 'Dmitry-Gavrilov';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('с нижним подчеркиванием', () => {
  const nickName = 'Dmitry_Gavrilov';
  expect(Validator.ValidateNickName(nickName)).toBeFalsy();
});

test('с цифрой в начале', () => {
  const nickName = '85Dmitry';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('цифры в конце', () => {
  const nickName = 'Dmitry85';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('четыре подряд цифры', () => {
  const nickName = 'Dmitry1985Gavrilov';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('тире вначале', () => {
  const nickName = '-Dmitry';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('тире в конце', () => {
  const nickName = 'Dmitry-';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('нижнее подчеркивание в начале', () => {
  const nickName = '_Dmitry';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test(' нижнее подчеркивание в конце', () => {
  const nickName = 'Dmitry_';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('русские буквы', () => {
  const nickName = 'дима';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});

test('символы', () => {
  const nickName = 'Dmitry!';
  expect(Validator.ValidateNickName(nickName)).toBeTruthy();
});
