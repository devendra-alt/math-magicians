export default function keyevents(event) {
  const keyList = [
    '%',
    '1',
    '2',
    '3',
    'x',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '+',
    '0',
  ];
  if (event.key === 'Enter') return '=';
  return keyList.find((val) => val === event.key);
}
