FIXME: TODO:

it('should check if brackets sequence is not correct 10', () => {
  assert.equal(check('|(|)', config5), false);
});

it('should check if brackets sequence is correct 12', () => {
  assert.equal(check('111115611111111222288888822225577877778775555666677777777776622222', config6), true);
});

it('should check if brackets sequence is correct 15', () => {
  assert.equal(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6), true);
});

const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
