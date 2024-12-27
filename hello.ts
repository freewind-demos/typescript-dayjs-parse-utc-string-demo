import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const utcString = '2024-01-02T03:04:05Z';
console.log('utcString', utcString);

console.log('no plugin, Z     ', dayjs(utcString, 'YYYY-MM-DDTHH:mm:ssZ').toDate().toISOString());
console.log('no plugin, [Z]   ', dayjs(utcString, 'YYYY-MM-DDTHH:mm:ss[Z]').toDate().toISOString());

dayjs.extend(customParseFormat);
console.log('with plugin, Z   ', dayjs(utcString, 'YYYY-MM-DDTHH:mm:ssZ').toDate().toISOString());
console.log('with plugin, [Z] ', dayjs(utcString, 'YYYY-MM-DDTHH:mm:ss[Z]').toDate().toISOString());


