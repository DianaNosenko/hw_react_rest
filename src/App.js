import { getByAltText } from '@testing-library/react';
import './App.css';
import Appcreate from './Components/Appcreate';
import img1 from './IMG_1.jpg';
import img2 from './IMG_2.jpg';

const mainHeader = <h1>How the app works</h1>

const article1 = {
  h2:'Create an account',
  h3:'Create/login to an existing account to get started',
  h4:'An account is created with your email and a desired password'
}
const article2 = {
  h2:'Explore varieties',
  h3:'Shop for your favorites meal as e dey hot.',
  h4:'Shop for your favorite meals or drinks and enjoy while doing it.'
}
function App() {
  return (
    <>
    {mainHeader}
      <Appcreate 
      image = {img1}
      infoH2 = {article1.h2}
      infoH3 = {article1.h3}
      infoH4 = {article1.h4}
      />
      <div className='last-section'>
      <Appcreate 
      image={img2}
      infoH2 = {article2.h2}
      infoH3 = {article2.h3}
      infoH4 = {article2.h4}
     />
     </div>
    </>
  );
}

export default App;
