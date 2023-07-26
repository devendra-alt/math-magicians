import { rest } from 'msw';

const handlers = [
  rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        quote:
            'A great empire, like a great cake, is most easily diminished at the edges.',
        author: 'Jean Piaget',
        category: 'best',
      },
    ])
  )),
];

export default handlers;
