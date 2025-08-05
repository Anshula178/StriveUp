import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import ProcessSteps from './components/Aboutus/ProcessSteps';
import TechSlider from './components/Aboutus/TechSlider';


export default function Home() {
  return (
    <main>
      <Banner />
      <TechSlider/>
      <Aboutus />
      <Dedicated />
      <ProcessSteps/>
      <Digital />
      <Beliefs />
      <Ourteam />
      <Featured />
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta />
    </main>
  )
}
