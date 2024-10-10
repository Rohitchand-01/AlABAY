import GradientText from "./components/misc/GradientText";
import "./assets/index.css";
import dogimg from "./assets/images/dog.png";
import dogsimg from "./assets/images/dogs.png";
import frame from "./assets/images/frame1.png";
import rectangle from "./assets/images/Rectangle3.png";
import map from "./assets/images/map.png";
import frame1 from "./assets/images/Frame 18.png";
import frame2 from "./assets/images/Frame 19.png";
import tshirt1 from "./assets/images/tshirt1.png";
import game from "./assets/images/game.png";
import frame50 from "./assets/images/Frame 50.png";
import arrow from "./assets/images/arrow.png";
import frame36 from "./assets/images/Frame 36.png";
import dog3 from "./assets/images/dog3.png";



const App = () => {
  return (
    <div className=" relative flex flex-col gap-56 overflow-scroll h-[100lvh]">
      <GradientText />
      <div className=" text-5xl w-full bg-[#181C27]">
        <p className=" text-5xl text-white text-center p-2">
          where the <span className="text-[#FFA800]">legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className="text-[#FFA800]">Join us</span> in celebrating the <span className="text-[#FFA800]">strength</span>, <span className="text-[#FFA800]">loyalty</span>, and <span className="text-[#FFA800]">heritage</span> of the Alabay breed.
        </p>
      </div>


      <div className=" absolute flex flex-col justify-center items-center">
        <div className="h-[90lvh]"></div>


        <div className="bg-white items-center w-[80%] rounded-t-3xl">


          <div className="  w-full px-10 h-100 rounded-t-3xl bg-white gradient-background">
            <div className="text-right">
              <p className="text-[100px] text-[#F76902] ">History Of</p>
              <p className="text-[220px] text-green-50 leading-none"> ALABAY</p>
            </div>
            <div className="text-right ">
              <p className="text-[36px] font-sans font-semibold">The Central Asian Shepherd Dog, </p>
              <p className="text-[36px] font-sans font-semibold">also known as Alabay, has been a </p>
              <p className="text-[36px] font-sans font-semibold">guardian of livestock and property</p>
              <p className="text-[36px] font-sans font-semibold"> for centuries. Originating from </p>
              <p className="text-[36px] font-sans font-semibold">Central Asia, these dogs are </p>
              <p className="text-[36px] font-sans font-semibold">renowned for their courage,</p>
              <p className="text-[36px] font-sans font-semibold"> strength, and loyalty.</p>
            </div>
            <img className=" absolute w-[650px] top-[980px] left-[150px]" src={dogimg} alt="" />
          </div>



          <div>
            <div className="flex gap-10 Montserrat justify-center mt-32 font-bold">
              <p className=" text-[32px]">ALL</p>
              <p className="text-[#FFA800] text-[32px]">PHOTOS</p>
              <p className=" text-[32px]">VIDEOS</p>
            </div>
            <img className="w-[1100px] ml-16 " src={frame} alt="" />
            <p className="text-[150px] text-[#FFA800] ml-20">PROJECT VISION</p>
            <img className="absolute  w-[1240px] top-[2000px] z-10" src={dogsimg} alt="" />
          </div>




          <div className=" relative mt-0">
            <img className=" mt-[300px]" src={rectangle} alt="" />
            <div className="text-center font-sans font-semibold leading-none mt-28 absolute top-[200px]">
              <p className="text-[30px]">Our mission is to honor the heritage of the Alabay by creating a</p>
              <p className="text-[30px]">vibrant, loyal, and powerful community. Just as the Alabay protects its</p>
              <p className="text-[30px]">flock, we aim to build a pack that stands strong together</p>
            </div><div className=" w-[80%] flex">
              <p className="text-[200px] mt-16 absolute top-[600px] text-white">ROAD MAP</p>
            </div>
            <div className="flex flex-col justify-right mt-[200px] absolute top-[1000px]">
              <div className="">
                <p className=" font-sans font-bold text-[48px]">Our journey is just beginning.</p>
                <p className=" font-sans font-bold text-[48px]">Explore our roadmap to see the </p>
                <p className=" font-sans font-bold text-[48px]">exciting milestones and future</p>
                <p className=" font-sans font-bold text-[48px]">plans we have in store</p>
              </div>
              <div className="">
                <p className="text-[#FFA800] text-[46px] font-sans font-bold ">Join us as we grow and achieve</p>
                <p className="text-[#FFA800] text-[46px] font-sans font-bold ">new heights.</p>
              </div>
            </div>
          </div>


          <div className=" mt-[400px]">
            <img className=" w-[80%] ml-28" src={frame1} alt="" />
          </div>




          <div className="relative">
            <img className="top-[5005.52px] z-[-10]" src={rectangle} alt="" />
            <div className=" p-9 flex absolute top-[-100px]">
              <div className=" flex flex-col">
                <p className=" text-[130px] text-white mt-[330px]">TOKENOMICS</p>
                <div className=" rounded-3xl bg-[#353535] mb-[67px] w-[450px] mt-12">
                  <p className=" pl-5 text-[36px] text-white Montserrat">LIQUIDITY</p>
                  <p className=" pl-5 text-[60px] text-[#FFF280] Montserrat">LOCKED</p>
                </div>
                <div className=" rounded-3xl bg-[#353535] mb-[67px] w-[450px]">
                  <p className=" pl-5 text-[36px] text-white Montserrat">CONTRACT</p>
                  <p className=" pl-5 text-[60px] text-[#FFF280] Montserrat">RENOUNCED</p>
                </div>
                <div className=" rounded-3xl bg-[#353535] mb-[67px] w-[450px]">
                  <p className=" pl-5 text-[36px] text-white Montserrat">TAXES</p>
                  <p className=" pl-5 text-[60px] text-[#FFF280] Montserrat">0%</p>
                </div>
              </div>
              <img className=" w-[500px] mt-[500px]" src={frame2} alt="" />
            </div>
          </div>




          <div className=" flex flex-col items-center">
            <p className="text-[180px] text-[#FFA800]">merchandise</p>
            <img className=" w-[70%] mt-28" src={tshirt1} alt="" />
          </div>




          <div className=" relative">
            <img className="z-[-10]" src={rectangle} alt="" />
            <div className=" absolute top-[100px] flex flex-col items-center justify-center ml-52 mt-44">
              <p className="text-[200px] text-white">GAMES</p>
              <p className="text-[50px] font-sans font-bold">Stay tuned for upcoming games !</p>
            </div>
            <div className="justify-center items-center flex w-[90%] absolute top-[700px]">
              <img className=" mt-20 ml-32" src={game} alt="" />
              <button class="absolute bottom-[120px]  bg-[#843AFC] text-white px-4 py-2 rounded-full w-[200px] hover:bg-purple-600 font-sans font-bold">
                DISCOVER
              </button>
            </div>
          </div>





          <div className="mt-44">
            <div className="flex gap-5 text-left w-[85%] mt-16">
              <p className=" text-[64px] font-sans font-bold text-[#FFA800] ml-10">GAME </p>
              <p className=" text-[64px] font-sans font-bold">PREVIEWS</p>
            </div>
            <div className=" flex justify-center items-center mt-10">
              <img className=" w-[75%]" src={frame50} alt="" />
              <img className="" src={arrow} alt="" />
            </div>
          </div>




          <div className=" flex flex-col items-center">
            <p className=" w-[80%] text-left text-[150px] text-[#FFA800] mt-72">
              social media
              links
            </p>
            <div className=" w-[85%] flex justify-center items-center">
              <img className=" w-[50%]" src={frame36} alt="" />
              <img className=" w-[50%]" src={dog3} alt="" />
            </div>
          </div>




        </div>
      </div>
    </div >
  )
}

export default App
