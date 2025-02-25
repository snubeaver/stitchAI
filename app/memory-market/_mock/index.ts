export const mockAgentMemory = [
  {
    id: '1',
    name: "80% Distilled Elon Musk's X",
    price: 0.9,
    priceLabel: '/month',

    active: false,
  },
  {
    id: '2',
    name: 'Meme God from Reddit',
    price: 12,
    priceLabel: '/month',

    active: false,
  },
];

export const mockExternalMemory = [
  {
    id: '1',
    name: 'DeFi memory trained by Titanium Research',
    price: 3.99,
    priceLabel: '/month',

    active: true,
  },
  {
    id: '2',
    name: 'S&P500 stock price feed for 1 month',
    price: 30,
    priceLabel: '/month',

    active: false,
  },
];

export const mockAgentMemoryDetail = [
  {
    id: '1',
    name: 'DeFi memory trained by A16Z Research Blogs',
    creator: 'Toodles.eth',

    lastUpdated: new Date('2025-02-25T00:00:00.000Z'),

    price: 3.99,
    priceLabel: '/month',

    description:
      "This consists of external data scraped from a16z's blog articles and podcast. a16z, or Andreessen Horowitz, is a leading venture capital firm known for its extensive coverage on technology trends, including artificial intelligence, blockchain, Fintech, and more. It contains a compilation of text from a16z's blog posts and transcripts or summaries from their podcast episodes, offering a rich source of information for understanding the firm's insights and predictions in the tech industry.",

    coverage: [
      {
        source: '284 Webpages',
        detail: '',
      },
      {
        source: '52 Audios',
        detail: '',
      },
      {
        source: '12 Videos',
        detail: '',
      },
    ],
  },
];
