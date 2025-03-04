export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tagsParam = searchParams.get('tags'); 
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 4;

  let filteredItems = items; 

  if (tagsParam) {
    let queryTags = tagsParam.split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag !== '');

    if (!queryTags.includes('all') && queryTags.length > 0) {
      filteredItems = items.filter(item => 
        queryTags.some(queryTag => 
          item.tags.some(itemTag => 
            itemTag.toLowerCase() === queryTag
          )
        )
      );
    }
  }

  // Pagination logic
  const totalData = filteredItems.length;
  const totalPages = Math.ceil(totalData / limit);
  const startIndex = (page - 1) * limit;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + limit);

  return new Response(JSON.stringify({
    data: paginatedItems,
    page,
    limit,
    totalPages,
    totalData,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// Sample Data
const items = [
  { image: '/ss/hotel.png', tags: ["node", "nest", "next"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'Booking hub', description: 'Typescript, MERN, Tailwindcss' },
  { image: '/ss/movie.png', tags: ["node", "nest", "tailwind"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'MovieDb', description: 'Javascript, MERN, Tailwindcss' },
  { image: '/ss/portfolio.png', tags: ["react", "nest", "tailwind"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'Portfolio', description: 'Javascript, MERN, Tailwindcss' },
  { image: '/ss/task.png', tags: ["react", "next", "tailwind"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'Tasks', description: 'Javascript, Mysql, MERN, Prisma' },
  { image: '/ss/web.png', tags: ["react", "mysql"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'Web', description: 'Javascript, MERN, Tailwindcss' },
  { image: '/ss/web.png', tags: ["react", "mongodb"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'Web', description: 'Javascript, MERN, Tailwindcss' },
  { image: '/ss/hotel.png', tags: ["react", "postgres"], link: 'https://muhamash-portfolio.vercel.app/projects', title: 'Web', description: 'Javascript, MERN, Tailwindcss' }
];