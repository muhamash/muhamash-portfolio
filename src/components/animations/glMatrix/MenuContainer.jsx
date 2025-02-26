import InfiniteMenu from "./Menu";

const items = [
  {
    image: '/ss/hotel.png',
    link: 'http://localhost:3000/projects',
    title: 'Property bookings',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/movie.png',
    link: 'http://localhost:3000/projects',
    title: 'MovieDb',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/portfolio.png',
    link: 'http://localhost:3000/projects',
    title: 'My website',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/task.png',
    link: 'http://localhost:3000/projects',
    title: 'Task manager',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/ss/web.png',
    link: 'http://localhost:3000/projects',
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
