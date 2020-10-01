# vietnamese-number

A simple function to read natural numbers into Vietnamese. Light and performance!

## Installation

```bash
npm install -s vietnamese-number
```

or

```bash
yarn add -s vietnamese-number
```

## Usage

```javascript
const readNumber = require('vietnamese-number')

readNumber('1') // một
readNumber('25') // hai mươi lăm
readNumber('123') // một trăm hai mươi ba
readNumber('146982') // một trăm bốn mươi sáu nghìn chín trăm tám mươi hai
readNumber('47902574895729057482') // bốn mươi bảy tỷ tỷ chín trăm linh hai triệu tỷ năm trăm bảy mươi tư nghìn tỷ tám trăm chín mươi lăm tỷ bảy trăm hai mươi chín triệu không trăm năm mươi bảy nghìn bốn trăm tám mươi hai
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
