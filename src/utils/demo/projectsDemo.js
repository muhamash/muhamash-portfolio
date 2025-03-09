export const technologies = [
  { name: 'Javascript', category: 'language' },
  { name: 'Typescript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'Go', category: 'language' },
  { name: 'Rust', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Vue', category: 'framework' },
  { name: 'Angular', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Express', category: 'framework' },
  { name: 'Django', category: 'framework' },
  { name: 'Flask', category: 'framework' },
  { name: 'Spring Boot', category: 'framework' },
  { name: 'TailwindCSS', category: 'library' },
  { name: 'Redux', category: 'library' },
  { name: 'GraphQL', category: 'library' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Firebase', category: 'database' },
  { name: 'Docker', category: 'tool' },
  { name: 'Kubernetes', category: 'tool' },
  { name: 'AWS', category: 'tool' },
  { name: 'Git', category: 'tool' },
];

export const projects = [
  {
    id: '1',
    title: 'Modern E-commerce Platform',
    description: 'A complete e-commerce solution with product listings, shopping cart, user authentication, and payment processing.',
    type: 'fullstack',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/ecommerce',
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'Node.js', category: 'framework' },
      { name: 'Express', category: 'framework' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redux', category: 'library' },
      { name: 'TailwindCSS', category: 'library' },
    ],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Order history and tracking',
      'Admin dashboard for product management'
    ],
    highlights: [
      'Responsive design across all devices',
      'Server-side rendering for SEO optimization',
      'Advanced state management with Redux',
      '99% performance score on Google Lighthouse'
    ],
    createdAt: '2023-01-15',
    updatedAt: '2023-06-20'
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    description: 'A feature-rich chat platform supporting group conversations, direct messaging, and media sharing.',
    type: 'fullstack',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    demoUrl: 'https://example.com/chat-demo',
    repoUrl: 'https://github.com/example/chat-app',
    technologies: [
      { name: 'TypeScript', category: 'language' },
      { name: 'React', category: 'framework' },
      { name: 'Node.js', category: 'framework' },
      { name: 'Express', category: 'framework' },
      { name: 'Socket.io', category: 'library' },
      { name: 'MongoDB', category: 'database' },
    ],
    features: [
      'Real-time messaging using WebSockets',
      'Group channels and direct messaging',
      'File and media sharing',
      'Message status indicators',
      'User presence detection',
      'Emoji and GIF support'
    ],
    highlights: [
      'End-to-end message encryption',
      'Optimistic UI updates for instant feedback',
      'Efficient message syncing for offline use',
      'Low-latency communication (<100ms)'
    ],
    createdAt: '2023-03-10',
    updatedAt: '2023-08-05'
  },
  {
    id: '3',
    title: 'Content Management System',
    description: 'A modern headless CMS with a user-friendly interface for content creation, management, and API access.',
    type: 'backend',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    demoUrl: 'https://example.com/cms-demo',
    repoUrl: 'https://github.com/example/headless-cms',
    technologies: [
      { name: 'Node.js', category: 'framework' },
      { name: 'Express', category: 'framework' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'GraphQL', category: 'library' },
      { name: 'Docker', category: 'tool' },
    ],
    features: [
      'Content modeling and management',
      'Version control and publishing workflow',
      'Role-based access control',
      'GraphQL and REST API endpoints',
      'Media asset management',
      'Webhooks for integration'
    ],
    highlights: [
      'Highly scalable architecture',
      'Comprehensive API documentation',
      'Content localization support',
      'Advanced caching strategies'
    ],
    createdAt: '2023-05-22',
    updatedAt: '2023-09-18'
  },
  {
    id: '4',
    title: 'Portfolio Dashboard',
    description: 'A sleek, data-rich dashboard for tracking investment portfolios, market trends, and financial metrics.',
    type: 'frontend',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    demoUrl: 'https://example.com/portfolio-demo',
    repoUrl: 'https://github.com/example/finance-dashboard',
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'TailwindCSS', category: 'library' },
      { name: 'Redux', category: 'library' },
      { name: 'D3.js', category: 'library' },
    ],
    features: [
      'Interactive data visualization',
      'Real-time market data',
      'Portfolio performance tracking',
      'Customizable dashboard layouts',
      'Alerting and notifications',
      'Report generation and export'
    ],
    highlights: [
      'Sophisticated charting and visualizations',
      'High-performance data rendering',
      'Intuitive drag-and-drop interface',
      'Dark and light theme support'
    ],
    createdAt: '2023-02-08',
    updatedAt: '2023-07-12'
  },
  {
    id: '5',
    title: 'Microservices API Gateway',
    description: 'A robust API gateway service that manages routing, authentication, and rate limiting for microservices architecture.',
    type: 'backend',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    repoUrl: 'https://github.com/example/api-gateway',
    technologies: [
      { name: 'Go', category: 'language' },
      { name: 'Docker', category: 'tool' },
      { name: 'Kubernetes', category: 'tool' },
      { name: 'Redis', category: 'database' },
      { name: 'JWT', category: 'library' },
    ],
    features: [
      'Centralized authentication and authorization',
      'Request routing and load balancing',
      'Rate limiting and throttling',
      'Request/response transformation',
      'Logging and monitoring',
      'Service discovery integration'
    ],
    highlights: [
      'High throughput (10k+ requests/second)',
      'Low latency overhead (<5ms)',
      'Comprehensive metrics collection',
      'Horizontal scaling capabilities'
    ],
    createdAt: '2023-04-18',
    updatedAt: '2023-10-05'
  },
];