import React from 'react'
import logo from '../../assets/img/coinbaseLogo.svg'

 const footerData = [
        {
          title: "Company",
          links: [
            "About",
            "Careers",
            "Affiliates",
            "Blog",
            "Press",
            "Security",
            "Investors",
            "Vendors",
            "Legal & privacy",
            "Cookie policy",
            "Cookie preferences",
            "Digital Asset Disclosures",
          ],
        },
        {
          title: "Individuals",
          links: [
            "Buy & sell",
            "Earn free crypto",
            "Base App",
            "Coinbase One",
            "Debit Card",
          ],
          subsections: [
            
            {
              subtitle: "Businesses",
              links: [
                "Asset Listings",
                "Coinbase Business",
                "Payments",
                "Commerce",
                "Token Manager",
              ],
            },
            {
              subtitle: "Institutions",
              links: ["Prime", "Staking"],
            },
          ],
        },
        {
          title: "Developers",
          links: [
            "Developer Platform",
            "Base",
            "Server Wallets",
            "Embedded Wallets",
            "Base Accounts (Smart Wallets)",
            "Onramp & Offramp",
            "x402",
            "Trade API",
            "Paymaster",
            "OnchainKit",
            "Data API",
            "Verifications",
            "Node",
            "AgentKit",
          ],
        },
        {
          title: "Support",
          links: [
            "Help center",
            "Contact us",
            "Create account",
            "ID verification",
            "Account information",
            "Payment methods",
            "Account access",
            "Supported crypto",
            "Status",
          ],
          subsections: [
            {
              subtitle: "Asset prices",
              links: [
                "Bitcoin price",
                "Ethereum price",
                "Solana price",
                "XRP price",
              ],
            },
          ],
        },
      ];
const Footer = () => {
    
  return (
    <footer className='bg-gray-100 min-h-screen w-full  flex flex-col p-10 '>
        <div className=' gap-20 flex  justify-between min-h-screen p-10'>
            <div className='flex flex-col justify-between items-center'>
              <img src={logo} alt="" className='w-16 h-16' />

            </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-black mb-3">{section.title}</h3>

            <ul className="space-y-2 text-gray-600">
              {section.links?.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-black cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>

            {section.subsections?.map((sub, i) => (
              <div key={i} className="mt-5">
                <h4 className="font-semibold text-black mb-2">
                  {sub.subtitle}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {sub.links.map((link, j) => (
                    <li
                      key={j}
                      className="hover:text-black cursor-pointer transition"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
        </div>
        <hr  className='w-full border-gray-200 border'/>
        <div className='mt-4 flex justify-between'>
          <div className='flex gap-2 '>
            <p>
              &copy; 2026 Coinbase
            </p>
            <a href="" className='text-gray-500'> •  Privacy</a>
            <a href="" className='text-gray-500'> •  Terms & Conditions</a>

          </div>
          <div className='flex gap-2 '>
            <a href="#"  className='text-gray-500'> •  English</a>
          </div>
        </div>

      </footer>
  )
}

export default Footer