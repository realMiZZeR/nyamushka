import { useEffect } from 'react';
import Stuff from '../assets/styles/components/Stuff';

const TITLE = "Нямушка"

const stuffs = [
  { 
    id: 1,
    title: TITLE, 
    type: 'Сказочное заморское яство', 
    compound: 'с фуа-гра',
    kit: ['10 порций', 'мышь в подарок'],
    weight: 0.5
  },
  { 
    id: 2,
    title: TITLE, 
    type: 'Сказочное заморское яство', 
    compound: 'с рыбой',
    kit: ['40 порций', '2 мыши в подарок'],
    weight: 2
  },
  { 
    id: 3,
    title: TITLE, 
    type: 'Сказочное заморское яство', 
    compound: 'с курой',
    kit: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weight: 5
  }
];

export default function Home() {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <div className='home'>
      <div className='container'>
        <h2 className='home__title'>Ты сегодня покормил кота?</h2>
        {stuffs.map(stuff => <Stuff key={stuff.id} stuff={stuff} />)}
      </div>
    </div>
  );
}