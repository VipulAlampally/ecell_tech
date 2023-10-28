import Link from 'next/link';
import './style.css';

const Header = () => {
  return (
    <div className='header' >
      <h1 sx={{ fontSize: '13vh' }}>Task Manager</h1>

      <div className='navigation'>
        <Link href="/">Home</Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
    
  );
};

export default Header;