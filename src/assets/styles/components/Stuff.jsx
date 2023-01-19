
/**
 * 
 * @param {object} stuff 
 * @returns 
 */

export default function Stuff({ stuff }) {
  return (
    <div className='stuff'>
      <div className='stuff__image'>{ stuff.image }</div>
      <div className='stuff__type'>{ stuff.type }</div>
      <h3 className='stuff__title'>{ stuff.title }</h3>
      <strong className='stuff__compound'>{ stuff.compound }</strong>
      <p className='stuff__kit'>
        { stuff.kit.map((item, index) => {
          return (
            <span key={index}>{ item }</span>
          );
        })}
      </p>
      <div className='stuff__weight'>
        <strong>{ stuff.weight }</strong>
        <small>кг</small>
      </div>
    </div>
  );
}