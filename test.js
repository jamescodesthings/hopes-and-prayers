import { strict as assert } from 'assert';

const testRandomTimes = 100;

describe('hopes-and-prayers', () => {
  it('should hello world!', () => {
    assert.equal('hello world', 'hello world');
  });

  it('should contain Hope', async () => {
    assert((await import('./index.js')).Hope);
  });

  it('should contain Prayer', async () => {
    assert((await import('./index.js')).Prayer);
  });

  describe('Hope', () => {
    let hope;
    before('get hopes', async () => {
      const { Hope } = await import('./index.js');

      hope = new Hope();
    });

    for (let i = 0; i < testRandomTimes; i++) {
      it(`should send back a pseudorandom string that could be the correct answer ${i}`, () => {
        const answer = hope.send();

        assert.equal(typeof answer, 'string');
        assert(answer.length >= 1);
        assert(answer.length <= 50);
      });
    }

    for (let i = 0; i < testRandomTimes; i++) {
      it(`should send back a pseudorandom string that could be the correct answer with a given number of characters ${i}`, () => {
        const answer = hope.send(9);

        assert.equal(typeof answer, 'string');
        assert.equal(answer.length, 9);
      });
    }
  });

  describe('Prayer', () => {
    let prayer;
    before('get prayers', async () => {
      const { Prayer } = await import('./index.js');

      prayer = new Prayer();
    });

    for (let i = 0; i < testRandomTimes; i++) {
      it(`should send back a pseudorandom string that could be the correct answer ${i}`, () => {
        const answer = prayer.send();

        assert.equal(typeof answer, 'string');
        assert(answer.length >= 1);
        assert(answer.length <= 50);
      });
    }

    for (let i = 0; i < testRandomTimes; i++) {
      it(`should send back a pseudorandom string that could be the correct answer with a given number of characters ${i}`, () => {
        const answer = prayer.send(9);

        assert.equal(typeof answer, 'string');
        assert.equal(answer.length, 9);
      });
    }
  });
});
