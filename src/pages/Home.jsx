import { useEffect } from 'react';
import Stuff from '../components/Stuff';

const TITLE = "Нямушка"

const stuffs = [
  { 
    id: 1,
    image: '../assets/images/Cat.png',
    title: TITLE, 
    type: 'Сказочное заморское яство', 
    compound: 'с фуа-гра',
    kit: ['10 порций', 'мышь в подарок'],
    weight: 0.5,
    ingridients: 'Печень утки разварная с артишоками',
    count: 10
  },
  { 
    id: 2,
    image: '../assets/images/Cat.png',
    title: TITLE, 
    type: 'Сказочное заморское яство', 
    compound: 'с рыбой',
    kit: ['40 порций', '2 мыши в подарок'],
    weight: 2,
    ingridients: 'Головы щучьи с чесноком да свежайшая сёмгушка',
    count: 3
  },
  { 
    id: 3,
    image: '../assets/images/Cat.png',
    title: TITLE, 
    type: 'Сказочное заморское яство', 
    compound: 'с курой',
    kit: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weight: 5,
    ingridients: 'Филе из цыплят с трюфелями в бульоне',
    count: 0
  }
];

export default function Home() {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <article className='home'>
      <div className='container home__container'>
        <h2 className='home__title'>Ты сегодня покормил кота?</h2>
        <div className='stuffs'>
          {stuffs.map((stuff, index) => <Stuff key={stuff.id} stuff={stuff} selected={index === 1} />)}
        </div>
      </div>
    </article>
  );
}