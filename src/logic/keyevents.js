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
  if (event.key === 'Escape') return 'AC';
  if (event.key === 'Backspace') return 'Backspace';
  return keyList.find((val) => val === event.key);
}
