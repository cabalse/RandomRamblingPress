export function GetProducts() {
  return [
    {
      id: 1,
      type: 'product',
      orderNumber: 'itj-votd-001',
      price: 140,
      orderType: 'print-on-demand',
      title: 'Village of the Damned',
      image: 'village-of-the-damed-cover.jpg',
      facts: { type: 'softcover', format: '15x23', pages: 24, print: 'BoD' },
      short:
        'Small adventure for Into the Jungle. What hides in the village, the village of the damned?',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ex sit amet tellus tempor ornare vel imperdiet felis. Pellentesque condimentum diam at molestie vehicula. Morbi scelerisque risus in elit viverra, nec rhoncus ipsum blandit. Praesent maximus, massa sit amet tempus accumsan, nisi velit lacinia lorem, laoreet porttitor tellus arcu eu nisi. Etiam faucibus velit luctus quam pretium, porttitor ullamcorper ipsum iaculis. Nullam lectus enim, eleifend ut congue eget, posuere ut eros. Nullam odio massa, eleifend non sagittis sed, tempus eu ex. Proin ante nunc, blandit ut tristique et, maximus a sem.',
        'Vestibulum tempus massa sed enim eleifend ultrices. Ut ut consequat felis, sed aliquet tellus. Nullam ac hendrerit mauris. Curabitur pellentesque tortor ut condimentum scelerisque. Quisque condimentum venenatis ipsum non tincidunt. Donec nec efficitur augue. Vivamus ac venenatis erat, et dapibus quam. Nam ac pulvinar leo. Pellentesque feugiat augue molestie eros pellentesque, id laoreet mi interdum.'
      ]
    },
    {
      id: 2,
      type: 'product',
      orderNumber: 'lotfp-pnyv-001',
      price: 175,
      orderType: 'print-on-demand',
      title: 'Pink Nails and Sparkling Vomit',
      image: 'pink-nails-and-sparkling-vomit-cover.jpg',
      facts: { type: 'softcover', format: '15x23', pages: 8, print: 'BoD' },
      short:
        'Do you dare enter the dungeon of the pissed of princess of the seven bridges?',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ex sit amet tellus tempor ornare vel imperdiet felis. Pellentesque condimentum diam at molestie vehicula. Morbi scelerisque risus in elit viverra, nec rhoncus ipsum blandit. Praesent maximus, massa sit amet tempus accumsan, nisi velit lacinia lorem, laoreet porttitor tellus arcu eu nisi. Etiam faucibus velit luctus quam pretium, porttitor ullamcorper ipsum iaculis. Nullam lectus enim, eleifend ut congue eget, posuere ut eros. Nullam odio massa, eleifend non sagittis sed, tempus eu ex. Proin ante nunc, blandit ut tristique et, maximus a sem.',
        'Vestibulum tempus massa sed enim eleifend ultrices. Ut ut consequat felis, sed aliquet tellus. Nullam ac hendrerit mauris. Curabitur pellentesque tortor ut condimentum scelerisque. Quisque condimentum venenatis ipsum non tincidunt. Donec nec efficitur augue. Vivamus ac venenatis erat, et dapibus quam. Nam ac pulvinar leo. Pellentesque feugiat augue molestie eros pellentesque, id laoreet mi interdum.'
      ],
      externalLinks: [
        {
          text: 'You can also buy this at RPG DriveThrough',
          Link:
            'https://www.drivethrurpg.com/product/302260/Ironsworn-Delve?src=hottest'
        }
      ]
    },
    {
      id: 3,
      type: 'category',
      title: 'Dungescape',
      image: 'pink-nails-and-sparkling-vomit-cover.jpg',
      short: 'Some text to explain what the Dungescape series of adventures is',
      link: '/dungescape'
    }
  ];
}
