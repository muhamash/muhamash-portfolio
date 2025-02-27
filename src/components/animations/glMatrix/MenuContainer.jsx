"use client"

import dynamic from "next/dynamic";

const InfiniteMenu = dynamic( () => import( "./Menu" ), { ssr: false } );

const items = [
  {
    image: '/ss/hotel.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Booking hub',
    description: 'Typescript, MERN, Tailwindcss'
  },
  {
    image: '/ss/movie.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'MovieDb',
    description: 'Javascript, MERN, Tailwindcss'
  },
  {
    image: '/ss/portfolio.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Portfolio',
    description: 'Javascript, MERN, Tailwindcss'
  },
  {
    image: '/ss/task.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Tasks',
    description: 'Javascript, Mysql, MERN, Prisma'
  },
  {
    image: '/ss/web.png',
    link: 'https://muhamash-portfolio.vercel.app/projects',
    title: 'Web',
    description: 'Javascript, MERN, Tailwindcss'
  }
];

export default function MenuContainer() {
    return (
        <div className="rounded-lg" style={ { height: '580px', position: 'relative', borderRadius: "10px" } }>
            <InfiniteMenu items={ items } />
        </div>
    );
}
