import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import Mushroom from '@/components/Mushroom';
import {warningMessage, dummyData, mushroom1} from '@/data/development.jsx';

export default function DashboardPage() {
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <Mushroom mushroom={mushroom1}></Mushroom>
      <NavBar />
    </div>
  );
}
