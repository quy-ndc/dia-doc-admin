import { Metadata } from 'next';
import Image from 'next/image';
import backgroundImage from '@/assets/login-bg.jpg';
import SignInForm from './sign-in-form';


export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className='relative z-20 flex items-center text-2xl text-black font-medium font-semibold tracking-wider capitalize'>
          diabetes doctor
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
