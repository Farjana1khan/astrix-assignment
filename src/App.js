import LeftSection from './Components/LeftSection/index'
import MiddleSection from './Components/MiddleSection/index'
import RightSection from './Components/RightSection/index'
function App() {
  return (
   <>
 <div  className='flex justify-between grid-cols-2 mx-48 bg-[#15181B]'>
 <LeftSection/>
 <MiddleSection/>
 <RightSection/>

 </div>
   </>
  );
}

export default App;
