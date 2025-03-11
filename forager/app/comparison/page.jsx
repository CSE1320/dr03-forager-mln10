import Message from '@/components/Message';
import NavBar from '../../components/NavBar';
import TopNavBar from '../../components/TopNavBar';
import {warningMessage,mushList, percentageInfo, compareList} from '@/data/development.jsx';
import MushroomList from '@/components/MushroomList';
import Table from '@/components/Table';


export default function MushroomComparisonPage({mushroom = mushList[0]}) {
  return (
    <div className="page flex flex-col">
      <TopNavBar  title={'Compare'} link={'/mushroom'}/>
     <div className='m-4 '>
      <Message messageElement={warningMessage} isModal={false}/>
     </div>
    <div className=' h-auto w-auto'>
      <MushroomList mushList={compareList} isCompare={true} isDashboard={false}/>
    </div>
    <Table/>
    <NavBar />
    </div>
  );
}
