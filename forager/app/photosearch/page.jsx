import Link from 'next/link';
export default function PhotoSearchPage() {
  return (
    <div className="page relative">
      <Link className=' w-full absolute top-10 left-5 z-50' href="/dashboard" passHref>
        <div className=' inset-0 opacity-0 w-full '>HIdden back button</div>
      </Link>
      <img className='relative w-full h-full z-40' src='assets/cameraScreen.png' alt='Picture that shows a camera view'></img>
      <Link className=' w-full absolute flex bottom-10 left-40 z-50' href="/mushroom" passHref>
        <div className=' inset-0 opacity-0 w-full '>HIdden back button</div>
      </Link>
    </div>
  );
}
