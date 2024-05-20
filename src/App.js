import LeftSection from './Components/LeftSection/index'
import MiddleSection from './Components/MiddleSection/index'
import RightSection from './Components/RightSection/index'
function App() {
  return (
   <>
 <div  className='lg:flex  xl:flex  justify-between grid-cols-3 max-md:flex-col max-md:justify-center mx-48 max-md:mx-0 max-md:grid-cols-1 bg-[#15181B]'>
 <LeftSection/>
 <MiddleSection/>
 <RightSection/>

 </div>
   </>
  );
}

export default App;
