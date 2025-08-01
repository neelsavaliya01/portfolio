import Header from './Header'
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Contect = () => {
  return (
    <div>


      <div className='bg-black h-full px-35' style={{ height: "calc(100vh - 88px)" }}>
        <div className="flex justify-center items-center h-full">
          <div className="bg-gray-800 h-120 w-400 rounded-4xl text-white px-18 flex">
            <div>
              <div className='flex mt-10 bg-gray-900 h-15 w-80 rounded-3xl px-5  items-center'>
                <img src='imges/neel3.png' className='w-3 h-3 mr-5' />
                <p className='text-[28px] font-bold text-cyan-300'>Available for work</p>
              </div>
              <div className='mt-10'>
                <p className='text-[35px] font-bold'>Drop me a line or say 👋 on social<br></br> networks</p>
                <p className='text-[20px] py-5 font-semibold '>Whether you're a web developer in need of support or an early<br></br>
                  -stage company looking to level up your development, I'd love to<br></br>
                  talk about your project. If you want to develop your website, let's<br></br>
                  collaborate and bring your vision to life</p>
              </div>
            </div>
            <div className='px-50 mt-15'>
              <img src='https://sahilbhai.vercel.app/images/dev1.jpg' className='w-92 h-60 rounded-2xl' />
              <p className='text-[30px] font-bold mt-3'>neelsavaliya01@gmail.com</p>
              <div className='flex gap-15 mt-3'>
                <p><IoLogoGithub className='h-15 w-15 ' /></p>
                <p><MdEmail className='h-15 w-15' /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect
