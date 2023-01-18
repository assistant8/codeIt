import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value }) { //value 하나 받음 - 이미지 띄워줌
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
