import './SubCategories.css';
import Training from '../assets/training.svg';
import Snacks from '../assets/snacks.svg';
import DentalChew from '../assets/dentalChew.svg';
import Confort from '../assets/confort.svg';
import BrainStimulationChew from '../assets/brainStimulationChew.svg';

const SubCategories = () => {
  return (
    <div className='subcategories-wrapper'>
      <div className='subcategories-container'>
        <h1>TREATS FOR EVERY MOMENT</h1>
        <div>
          <button>Cats & Dogs</button>
          <button>Dogs</button>
        </div>
      </div>
      <p>Whether you need to train or pamper your dog and cat, or just give them something to chew on to help them calm down, stimulate their brain, or promote their dental hygiene: “The bone guy offers you a wide range of tasty treats to keep every dog and cat begs for more”.</p>
      <div className="subcategories-sections">
        <a href="" className="subcategories-sections-icon-box">
          <div className="icon-box">
            <img src={Training} alt="" />
            <span className="text">TRAINING</span>
          </div></a>
        <a href="" className="subcategories-sections-icon-box">
          <div className="icon-box">
            <img src={Snacks} alt="" />
            <span className="text">SNACKS</span>
          </div></a>
        <a href="">
          <div className="icon-box">
            <img src={DentalChew} alt="" />
            <span className="text">DENTAL CHEW</span>
          </div></a>
        <a href="">
          <div className="icon-box">
            <img src={Confort} alt="" />
            <span className="text">CONFORT</span>
          </div></a>
        <a href="">
          <div className="icon-box">
            <img src={BrainStimulationChew} alt="" />
            <span className="text">BRAIN STIMULATION CHEW</span>
          </div></a>
      </div>

    </div>
  );
}

export default SubCategories;