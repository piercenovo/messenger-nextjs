import Image from 'next/image'
import LogoutButton from './LogoutButton'
import SigninButton from './SigninButton'

function Header() {
  const session = true

  if (session) {
    return (
      <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-6 shadow-sm'>
        <div className='flex flex-row w-full justify-between items-center max-w-3xl'>
          <div className='flex space-x-2 items-center'>
            <Image
              className='rounded-full mx-2 object-contain'
              width={50}
              height={10}
              src='https://img.icons8.com/dusk/256/circled-user-male-skin-type-7.png'
              alt='Profile Picture'
            />

            <div>
              <p className='text-blue-400'>
                Logged in as:
              </p>
              <p className='font-bold text-lg'>
                Pierce Novoa
              </p>
            </div>
          </div>

          <LogoutButton />
        </div>
      </header>
    )
  }

  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-6 shadow-sm'>
      <div className='flex flex-row w-full justify-between items-center max-w-3xl'>
        <div className='flex space-x-2 items-center'>
          <Image
            src='https://img.icons8.com/fluency/256/meta.png'
            alt='Logo'
            width={50}
            height={10}
          />
          <p className='text-blue-400 invisible sm:visible'>
            Welcome to Messenger App
          </p>
        </div>

        <SigninButton />
      </div>
    </header>
  )
}
export default Header
