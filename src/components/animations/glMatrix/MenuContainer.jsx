import InfiniteMenu from "./Menu";

const items = [
  {
    image: '/ss/hotel.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Booking hub',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/movie.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'MovieDb',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/portfolio.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Portfolio',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/task.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Tasks',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/web.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Web',
    description: 'This is pretty cool, right?'
  }
];

export default function MenuContainer() {
    return (
        <div className="rounded-lg" style={ { height: '580px', position: 'relative', borderRadius: "10px" } }>
            <InfiniteMenu items={ items } />
        </div>
    );
}
