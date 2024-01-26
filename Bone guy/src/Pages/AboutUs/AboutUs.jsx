import './AboutUs.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <div className='upper-half'>
        <Navbar />
      </div>

      <div className='aboutus-wrapper'>
        <div className='aboutus-container'>
          <div className="aboutus-text">
            <p>Because choosing the appropriate treat variety can keep our pets healthy and happy, go for “The Bone Guy". Our story began when we adopted our beloved "Shadow", a one month old German shepherd puppy.<br /><br />
              Like every pet owner, we started to buy treats from pet stores. We have tried a wide variety of brands and types of treats: (biscuits or cookies, jerky, bones, rawhide…). Shadow did like some and dislike others. Eventually, with time, we started to get more attentive about different kinds of treats and their effects on overall health.<br /><br />
              Thus, as we weren't happy with the unhealthy options found in stores especially that we have a baby who would chew anything around him... my husband who is obsessed with cooking and pampering Shadow, thought that why not to bake our own healthy human safe treats.
            </p>
            <p>Thus, as we weren't happy with the unhealthy options found in stores especially that we have a baby who would chew anything around him... my husband who is obsessed with cooking and pampering Shadow, thought that why not to bake our own healthy human safe treats.<br /><br />
              And this is how it all started!<br /><br />
              At first, we used what we could find in our kitchen (our own beef, flour…) and our homemade "Beef Cookies" was born.<br /><br />
              As for Shadow, wow!! He would do anything to have some! Every order he gets, he would execute it right away.<br /><br />
              Then, we made the homemade "Chicken cookies".
            </p>
            <p>Next, we wanted to give Shadow some pure protein treats; and the handcrafted “Beef Jerky” and "Chicken Jerky" were created. Shadow adored these two formulas and we started to notice that he preferred our treats over other store brands.<br /><br />
              And so, whenever we bake for Shadow we would give some treats to our friends and neighbors who have pets. And whenever we took Shadow to the vet we would offer him our homemade natural treat to calm him down while he was taking his vaccines or shower.<br /><br />
              Consequently, our vet was surprised and decided to give the treats for other dogs and cats. And here came the surprise; the treat was a real success! Even our friends and neighbors asked us to prepare treats for their pets.<br /><br />
              And so came the idea: "The Bone Guy", our pet treat service.
            </p>
          </div>
          <div className='aboutus-bottom-text'>
            <p>Nowadays we have more than 14 different products suitable for all dogs and cats, including horns, hooves and bully sticks that are chewing treats unique for dogs.</p>
            <h5>The Bone Guy</h5>
            <i>A treat for every moment!</i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;