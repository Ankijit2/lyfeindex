import "./App.css";
import { useState } from "react";
import logo from "./assets/logo1.svg";
import aboutimg from "./assets/aboutimg.svg";
import search from "./assets/searchicon.svg";
import cross from "./assets/cross.svg";
import menus from "./assets/menu.svg";


function App() {
  const [Showmenu,setShowmenu]=useState(menus)
  function menu(){
    let a= document.getElementById('menu')
    let b=document.getElementById('micon')
    if (a.style.right != "0px") {
      a.style.right="0";
      console.log(a.style.right)
      setShowmenu(cross)
      console
    }
    else{
      b.src={menus}
      a.style.right="-200px"; 
      console.log(a.style.right)  
      setShowmenu(menus)  
    }
  }
  return (
    <>
      <div id="head">
        <div id="smallmenu"><img src="" alt="" /></div>
        <nav className="flex justify-between px-8 py-4 "  id="nav">
          <div className="flex-col">
            <div id="logoname">LYFEINDEX</div>
            <div className=" text-center mt-2" id="logodescp">Love you 4ever</div>
          </div>
          <div className="hidden" id="micon" onClick={menu}><img src={Showmenu} className="h-[32px] w-[32px]" alt="" /></div>
          <div className="flex gap-7 menuopen" id="menu">
            <li className="font-semibold">HOME</li>
            <li className="font-semibold">ABOUT-US</li>

            <li className="font-semibold">ADD MEMORIAL</li>
            <li className="font-semibold">PRIVACY POLICY</li>
            <li className="font-semibold">CONTACT-US</li>
          </div>
        </nav>
        <div id="memories" className=" flex flex-row justify-between items-center mt-10 gap-12 mx-8 " >
          <div className=""><img src={logo} alt=""/></div>
          <div className="basis-[45%] m-14 md" id="slogandescp">
            <div className=" text-center  text-xl ">

              Hear The Stories of Other&apos;s Loved Ones
            </div>

            <p className="mt-[42px] mb-9 text-center " id="slogan">
              Discover cherished memories. Enter a loved one&apos;s name to explore
              heartfelt memorials and stories. Their legacy lives on through
              shared experiences. Start your journey of remembrance
            </p>

            <div id="searchbox" className="flex items-center mb-7 ">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Memorial"
              />
              <img src={search} alt="" className="mr-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-12 mt-20 mx-8 mb-20 " id="intro">
        <div className="aboutdesp mt-8 text-justify flex flex-col">
          <h1 className="text-3xl self-start">Introducing lyfeindex</h1>
          <p className="mt-5 font-light"> Our lyfeindex site is a dedicated space where cherished memories of departed loved ones are safeguarded and celebrated. We understand the profound impact that stories can have on our lives, and we aim to create a platform that not only honors legacies but also connects people through shared experiences.Our mission is to provide a comforting and uplifting space for individuals to memorialize their loved ones.</p>

          <div className="mt-6 feature text-left">
            <h1 className="text-lg font-bold ">Features</h1>
            <li >Personalized Memorial Pages</li>
            <li >Intuitive Search and Discovery</li>
            <li >Community and Supportive Ecosystem:</li>
            <li >Global Support in 108 Languages</li>
          </div>


        </div>
        <div className="aboutimg self-center">
          <img src={aboutimg} alt="" className="width-[100%] rounded-full" />
        </div>
      </div>
      <hr />

      <div className=" flex flex-col justify-center items-center gap-5 mb-10  " id="addmemo">
        <h1 className="pt-24 self-center text-xl font-semibold text-justify">Craft a Memorial: Honoring Lives, Cherishing Legacies</h1>
        <p className="block w-[60%]  text-justify text-light">Embark on a journey of love and remembrance. Click below to create a memorial page, a dedicated space where you can honor and celebrate the life of your loved one. Preserve their legacy with cherished memories, photos, and stories</p>
        <button className="px-4 py-2 self-center">Add Memorial</button>
      </div>
    </>
  );
}

export default App;

