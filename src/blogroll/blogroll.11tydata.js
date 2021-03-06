module.exports = async () => {
  const blogs = [
    {
      name: 'Chris Ferdinandi',
      url: 'https://gomakethings.com',
      text:
        'Chris is the vanilla JS guy, who explains even more complicated stuff in a really simple and approachable way.',
      rss: 'https://gomakethings.com/feed/index.xml',
      twitter: 'chrisferdinandi',
    },
    {
      name: 'Tania Rascia',
      url: 'https://www.taniarascia.com',
      text:
        'Tania writes articles that dive real deep into a topic, about many entirely different topics like React, PHP and Authentication.',
      rss: 'https://www.taniarascia.com/rss.xml',
      twitter: 'taniarascia',
    },
    {
      name: 'Sāra Soueidan',
      url: 'https://www.sarasoueidan.com',
      text: "Sāra is the person for accessibility, SVG's and markup in general!",
      rss: 'https://www.sarasoueidan.com/blog/index.xml',
      twitter: 'SaraSoueidan',
    },
    {
      name: 'Max Böck',
      url: 'https://mxb.dev',
      text:
        'Max writes about concepts and strategies in web development and gets you in the right mindset with sometimes more personal posts.',
      rss: 'https://mxb.dev/feed.xml',
      twitter: 'mxbck',
    },
    {
      name: 'Marcus Herrmann',
      url: 'https://marcus.io',
      text:
        'Marcus is a specialist for accessibility in combination with frontend Frameworks like React and Vue.',
      rss: 'https://marcus.io/feed',
      twitter: '_marcusherrmann',
    },
    {
      name: 'Manuel Matuzovic',
      url: 'https://www.matuzo.at',
      text:
        'Manuel writes a lot about CSS and how it is often underestimated. His articles are often very impressive.',
      rss: 'https://www.matuzo.at/feed.xml',
      twitter: 'mmatuzo',
    },
    {
      name: 'Jake Archibald',
      url: 'https://jakearchibald.com',
      text:
        'Jake is a comedian, uh, no... Developer, or both? Nonetheless, he writes and talks about the newest and coolest stuff in frontend development.',
      rss: 'https://jakearchibald.com/posts.rss',
      twitter: 'jaffathecake',
    },
    {
      name: 'Mike Riethmuller',
      url: 'https://www.madebymike.com.au',
      text: 'Mike writes about the basics/fundamentals of CSS and JavaScript.',
      rss: 'https://www.madebymike.com.au/feed.xml',
      twitter: 'MikeRiethmuller',
    },
    {
      name: 'Zach Leatherman',
      url: 'https://www.zachleat.com',
      text:
        'Zach is the one who build the foundation for this Page, 11ty, and made, at least for me, the IndieWeb big.',
      rss: 'https://www.zachleat.com/web/feed/',
      twitter: 'zachleat',
    },
  ];

  return { blogs };
};
