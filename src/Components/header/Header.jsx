import React from 'react'
import styles from "./Header.module.css"
import  Cart  from "../../assets/cart.png"
import  Profile  from "../../assets/profile.png"
import  Search  from "../../assets/search.png"
import  Logo  from "../../assets/logo.png"
import  Content  from "../../assets/panner.png"
import  Tec1  from "../../assets/tec1.png"
import  Tec2  from "../../assets/tec2.png"

const header = ({changeLanguage, language}) => {
  return (
    <div className={`${styles.header} h-[708px] relative overflow-hidden`}>
      <div className='container p-[20px]'>
      <nav className='flex items-center  justify-between'>
          <div className='flex gap-3'>
            <button title={`${language == "EN" ? "Cart" : "سلة"}`} className="hvr-pop">
              <img src={Cart} alt="cart" className='w-[36px] h-[36px]' />
            </button>
            <button title={`${language == "EN" ? "Profile" : "الملف الشخصي"}`} className='hvr-pop'>
              <img src={Profile} alt="profile" className='w-[36px] h-[36px]'/>
            </button>
          </div>
          <div className='flex gap-3'>
            <a to="/" className='font-bold text-[14px] text-[#ffffff]'> {language == "EN" ? "We Are " : "من نحن"}</a>
            <a to="/" className='font-bold text-[14px] text-[#ffffff]'>{language == "EN" ? "Contact Us  " : " الاتصال بنا"}</a>
          </div>
          <div className='relative'>
          <input
        type="text"
        placeholder={language == "EN" ? "You will find everything you need with us" : "ستجد كل ما تريد لدينا"}
        className="w-[638px] h-[44px] px-[22px] rounded-[15px] opacity-50"
      />
      <img
        src={Search}
        alt="Search"
        className={`absolute ${language == "EN" ? "right-[22px]" : "left-[22px]"} top-[50%] transform -translate-y-[50%] w-[40px] h-[37px]`}
      />
          </div>
          <div>
            <img src={Logo} alt="Logo" className='w-[159px] h-[104px]' />
          </div>
       </nav>
       <div className={`flex justify-end relative top-10 ${language == "EN" ? "right-[65px]" : "left-[65px]"} header_translate`}>
       <div className="relative  flex  items-center ">
  
  <button className={`w-[48px] h-[26px] z-10 rounded-[10px] ${language == "EN" ? "bg-secondary" : "bg-primary"}  text-[#ffffff] text-[14px]`} onClick={() => changeLanguage("AR")}>
    عربي
  </button>

  <button className={`w-[86px] h-[26px] rounded-[10px] leading-[21px] text-[#ffffff] text-[14px] absolute ${language == "EN" ? "right-0 pr-[56px] bg-primary " : "left-0 pl-[56px] bg-secondary"}   flex items-center justify-end `} onClick={() => changeLanguage("EN")}>
  EN
  </button>
        </div>

       </div>
       <div className='header_content flex items-center gap-5'>
          <div className='w-[574px] h-[561]'>
            <img src={Content} alt="banner" />
          </div>
          <div className='header_desc '>
            <h1 className='font-bold text-[40px] text-[#ffffff]'>{language == "EN" ? "SHAAN CREAM" : "كريم شان "}</h1>
            <p className="font-bold text-[25px] text-[#ffffff] max-w-[481px]">
                {language === "EN"
                  ? "Today's special offer from shaan cream with a 30% discount on the German sunscreen"
                  : "العرض المميز اليوم من كريم شان بخصم 30% \n الواقي الشمسي الالماني"}
              </p>

            <button className='text-[#ffffff] text-[22px] font-bold mt-20 bg-third border border-[#ffffff] w-[180px] h-[67px] rounded-[20px] hvr-pop'> {language == "EN" ? "Order Now" : "اطلب الان"}</button>
          </div>
        </div>
      </div>
      <div className={` absolute ${language == "EN" ? "top-[450px]" : "top-[325px]"} left-[-20px]`}>
        <img src={Tec1} alt="tec" />
      </div>
      <div className={`absolute  ${language == "EN" ? "top-[325px]" : "top-[450px]"} right-[-12px]`}>
        <img src={Tec2} alt="tec" className='transform scale-x-[-1]'/>
      </div>
      <div
        className="absolute border-l-[29.5px] border-r-[29.5px] border-b-[92px] border-transparent border-b-[#E4A4FB] opacity-50"
        style={{
          width: 0,
          height: 0,
          top: "253px",
          [language === "EN" ? "right" : "left"]: "260.88px",
          transform: `${language === "AR" ? "scaleX(-1) rotate(-72.8deg)" : "rotate(-72.8deg)"}`,
        }}
      ></div>
    </div>
  )
}

export default header
