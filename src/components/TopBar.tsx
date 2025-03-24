import ButtonSection from './ButtonSection';
import Logo from '@/assets/Logo';

function TopBar() {
  return (
    <div className='w-full flex flex-row justify-between items-center'>
      <div className='flex'>
        <Logo />
        <div className='flex flex-col justify-center justify-self-center'>
          <h2 className='text-2xl text-stone-600 font-bold'>Woof & Woof</h2>
          <p className='text-xs text-stone-500'>
            Discover Everything You Want To Know About Your Favourite Dog Breeds
          </p>
        </div>
      </div>
      <ButtonSection />
    </div>
  );
}

export default TopBar;
