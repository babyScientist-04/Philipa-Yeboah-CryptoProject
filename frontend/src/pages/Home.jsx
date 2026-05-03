import React from 'react'
import image from '../assets/img/HeroMobileFrame.jpeg'
import tablet from '../assets/img/Tablet.jpeg'
import screenshots from '../assets/img/MobileFrame.jpeg'
import logo from '../assets/img/coinbaseLogo.svg'
import ig from '../assets/img/IGFrame.jpeg'
import dollar  from '../assets/img/p.jpeg'
import hand from '../assets/img/Learn_Bit_hand.png'
import bank from '../assets/img/Replace_Bank.png'
import blockchain from '../assets/img/BlockChains.jpeg'
import Footer from '../components/layout/Footer'
import Button from '../components/common/Button'


const Home = () => {
 
  return (
    <main className=' py-10 w-full mx-auto'>
      <section className='flex px-5 justify-between items-center gap-14 w-full min-h-screen bg-white'>
        <div className=' flex flex-col justify-start  w-1/2'>
          <img src={image} alt="" className=' rounded-[4rem]'/>
          <p className='text-gray-500 text-sm'>
            Stocks and prediction markets not available in your jurisdiction.
          </p>
        </div>

        <div className='w-1/2 flex space-y-4 flex-col justify-center' >
            <h1 className='font-(--font-coinbase-regular) text-7xl'>
              The future of finance is here.
            </h1>
            <p className='text-xl'>
              Trade crypto and more on a platform you can trust.
            </p>
            <div className='flex justify-start  gap-2'>
              <form action="" >
                <input 
                type="email"
                placeholder='satoshi@nakamoto.com'
                
                className='p-4 rounded-xl w-full  border border-gray-200 outline-none focus:ring-0 focus:ring-(--primary)'
               />
              </form>
              <Button primary>Sign up</Button>

              
            </div>
        </div>
      </section>
      <section className='bg-gray-100 min-h-screen mt-14 flex  px-5 justify-between items-center gap-14 w-full'>
       <div className='flex flex-col space-y-3 '>
         <h1 className='text-4xl'>
          Explore crypto like Bitcoin,  Ethereum, and Dodgecoin
        </h1>
        <p className='mt-6 text-gray-500'>
          Simply and securely buy, sell, and manage hundreds of  <br /> cryptocurrencies.
        </p>
        <div className='w-2/3 font-semibold'>
           <Button secondary >See more assets</Button>
        </div>
       </div>
       <div className='rounded-[4rem] bg-black w-full h-screen my-14 mx-8'>

       </div>


      </section>
      <section className='mt-14 flex flex-col px-5 gap-14 w-full min-h-screen'>
          <div className='flex gap-14 justify-between items-center'>
            <div className='w-1/2 h-96 m-4'>
              <img src={tablet} alt="" className='rounded-[4rem] '/>
            </div>
            <div className='flex flex-col justify-center w-1/2 items-start space-y-3'>
                <h1 className='text-4xl'>
                  Powerful tools, designed for the advanced trader.
                </h1>
                <p className='mt-5 text-gray-500'>
                  Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
                </p>
                <div className=''>
                  <Button secondary>Start trading</Button>
                </div>
            </div>
          </div>
          <div className='flex gap-14 justify-between m-12 items-center'>
            <div>

            </div>
            <div className='w-1/2 flex flex-col'>
            <div className='flex gap-2 px-1 py-1 rounded-lg w-48 justify-center mb-5 items-center border border-gray-300'>
                <img src={logo} alt="" className='w-4 h-4'/>
                <p>COINBASE ONE</p>
            </div>
              <div className='space-y-3'>
                <h1 className='text-5xl mb-6'>
                Zero trading fees, <br /> more rewards.
              </h1>
              <p className='text-gray-500'>
                Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
              </p>
              <div className=''>
                <Button secondary>Claim free trial</Button>
              </div>
              </div>
            </div>
            <div className='w-1/2  '>
              <img src={screenshots} alt="" className='rounded-[4rem]' />
            </div>

          </div>
          
            <div className='flex gap-14  justify-between m-12 items-center'>
                <img src={ig} alt="" className='rounded-[4rem] w-1/2' />
                <div>
                  <div className='flex gap-2 px-1 py-1 rounded-lg w-28 justify-center mb-5 items-center border border-gray-300'>
                    <img src={logo} alt="" className='w-4 h-4'/>
                    <p>BASE APP</p>
                  </div>
                    <div className='space-y-3'>
                      <h1 className='text-4xl'>
                      Countless ways to earn crypto with the Base App.
                    </h1>
                    <p className='text-gray-500 mt-5'>
                      An everything app to trade, create, discover, and chat, all in one place.
                    </p>
                    <div >
                      <Button secondary>Learn more</Button>
                    </div>

                    </div>
                </div>
            </div>
            
      </section>
      <section className='mt-14  p-20 flex flex-col px-10 gap-14 w-full min-h-screen bg-gray-100'>
        <div className='flex gap-20 justify-between'>
          <h1 className='text-6xl'>
            New to crypto?  <br /> Learn some <br /> crypto basics
          </h1>
          <div className='w-1/2 space-y-3'>
            <p className='text-gray-500 text-xl'>
              Beginner guides, practical tips, and market updates for <br /> first-timers, experienced investors, and everyone in <br /> between
            </p>
            <div >
              <Button secondary>Read more</Button>
            </div>
            
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
            <div className='flex flex-col justify-start items-center'>
              <img src={dollar} alt="" className='rounded-[4rem]'/>
              <a href="" className='text-4xl hover:underline mt-5'>
                USDC:The digital dollar for the global crypto economy
              </a>
              <p className='text-gray-500 mt-3'>
                Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more... 
              </p>
            </div>
            <div className='flex flex-col justify-start items-center'>
              <img src={bank} alt=""className='rounded-[4rem] ' />
              <a href="" className='text-4xl hover:underline mt-5'>
                Can crypto really replace your bank account
              </a>
              <p className='text-gray-500 mt-3'>
                If you’re a big enough fan of crypto, you’ve probably heard the phrase “be your own bank” or the term “bankless” — the idea being that... 
              </p>
            </div>
            <div className='flex flex-col justify-start items-center'>
              <img src={hand} alt="" className='rounded-[4rem]' />
              <a href="" className='text-4xl hover:underline mt-5'>
                When is the best time to invest in crypto?
              </a>
              <p className='text-gray-500 mt-3'>
                Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause... 
              </p>
            </div>
        </div>
      </section>
      <section className='mt-14  p-20 flex flex-col   w-full min-h-screen'>
          <div className='flex justify-between items-center gap-14'>
            <div className='flex flex-col w-1/2 space-y-6'>
            <h1 className='text-7xl'>
              Take control  <br /> of your money
            </h1>
            <p className='text-xl'>
                Start your portfolio today and discover crypto
            </p>
            <div className='flex gap-6'>
              <form action="" >
                <input 
                type="email"
                placeholder='satoshi@nakamoto.com'
                
                className='p-4 rounded-xl w-80 border border-gray-200 outline-none focus:ring-0 focus:ring-(--primary)'
               />
              </form>
              <Button primary>Sign up</Button>

              
            </div>

          </div>
          <img src={blockchain} alt="" className='w-1/2 h-1/2 rounded-[4rem] ' />
          </div>

          <div className='flex flex-col justify-center items-center mt-40 p-20'>
            <p className='text-sm text-gray-500'>
            DEX trading is offered by Coinbase Bermuda Technologies Ltd.
          </p>
          <p className='text-sm text-gray-500 mt-10'>
            Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
          </p>
          </div>
      </section>
      <Footer/>
      


    </main>
  )
}

export default Home