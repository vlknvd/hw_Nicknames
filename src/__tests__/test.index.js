import Validator from '../index';

test('Проверка имени пользователя', () => {
  const name = 'ivanov_356_i';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeTruthy();
});
