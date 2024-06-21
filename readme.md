# Hopes and Prayers

The library for when you can't find anything else.

It's possible it could give you the right answer?

## Usage

```js
import { Hope, Prayer } from 'hopes-and-prayers';

const couldBeTheRightAnswer = new Hope().send();

const theAnswer = new Prayer().send();

// no, I know my answer has 4 characters
const couldBeTheRightAnswer = new Hope().send(4);

const theAnswer = new Prayer().send(4);
```
