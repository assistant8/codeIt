import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

function HandIcon({value}) { //props으로 받고 props.value로 접근도 가능
  if(value=='rock')
    return <img src={rockImg} alt="rock" />;  
  else if (value=='scissor')
    return <img src={scissorImg} alt="scissor" />;  
  else if (value=='paper')
    return <img src={paperImg} alt="paper" />;  
}

export default HandIcon;

const IMAGES = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
  };
  
  function HandIcon({ value }) {
    const src = IMAGES[value];
    return <img src={src} alt={value} />;
  }