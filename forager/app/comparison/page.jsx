import Message from '@/components/Message';
import NavBar from '../../components/NavBar';
import TopNavBar from '../../components/TopNavBar';
import {warningMessage, compareList} from '@/data/development.jsx';
import MushroomList from '@/components/MushroomList';
import Table from '@/components/Table';

export default function MushroomComparisonPage() {
  return (
    <div className="page flex flex-col">
      <TopNavBar  title={'Compare'} link={'/mushroom'}/>
     <div className='m-4 '>
      <Message messageElement={warningMessage} isModal={false}/>
     </div>
 
    <div className='p-2 ml-12 mr-4 flex justify-center items-center '>
      <MushroomList mushList={compareList} isCompare={true} isDashboard={false}/>
    </div>
    <div className='ml-4 mr-4'>
       <Table/>
    </div>
   <div className='m-32'>end of page</div>
    <NavBar />
    </div>
  );
}
