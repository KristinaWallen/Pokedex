// import {Component} from 'react';
import './card-list.styles.css';
import Card from '../card/card.component.jsx'

const CardList = ({monsters}) => {
  const monsterCards = monsters.map((monster, i) => {
    return (<Card key={i} monster={monster} />)
  })
  return (
    <div className='card-list'>
    {monsterCards} 
    </div>
  )
}

// class CardList extends Component {

//   render() {
//     const {monsters} = this.props;
//     const monsterCards = monsters.map((monster, i) => {
//       return (<Card key={i} monster={monster} />)
//     })
//     return (
//       <div className='card-list'>
//       {monsterCards} 
//       </div>
//     )
//   }
// }

export default CardList;