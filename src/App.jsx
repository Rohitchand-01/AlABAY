import GradientText from "./components/misc/GradientText";
import "./assets/index.css";
import dogimg from "./assets/images/dog.png";
import dogsimg from "./assets/images/dogs.png";
import frame from "./assets/images/frame1.png";
import rectangle from "./assets/images/rectangle 3.png";
import map from "./assets/images/map.png";
const App = () => {
  return (
    <div className=" flex flex-col gap-56">
      <GradientText />
      <div className=" text-5xl w-full bg-[#181C27]">
        <p className=" text-5xl text-white text-center p-2">
          where the <span className="text-[#FFA800]">legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className="text-[#FFA800]">Join us</span> in celebrating the <span className="text-[#FFA800]">strength</span>, <span className="text-[#FFA800]">loyalty</span>, and <span className="text-[#FFA800]">heritage</span> of the Alabay breed.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="w-full px-10 h-100 gradient-background">
          <div className="text-right">
            <p className="text-[100px] text-[#F76902] ">History Of</p>
            <p className="text-[220px] text-green-50 leading-none"> ALABAY</p>
          </div>
          <div className="text-right">
            <p className="text-[42px] font-sans font-semibold">The Central Asian Shepherd Dog, </p>
            <p className="text-[42px] font-sans font-semibold">also known as Alabay, has been a </p>
            <p className="text-[42px] font-sans font-semibold">guardian of livestock and property</p>
            <p className="text-[42px] font-sans font-semibold"> for centuries. Originating from </p>
            <p className="text-[42px] font-sans font-semibold">Central Asia, these dogs are </p>
            <p className="text-[42px] font-sans font-semibold">renowned for their courage,</p>
            <p className="text-[42px] font-sans font-semibold"> strength, and loyalty.</p>
          </div>
          <img className=" absolute w-[800px] top-[1000px] left-[60px]" src={dogimg} alt="" />
        </div>
        <div className="flex gap-10 Montserrat justify-center mt-32 font-bold">
          <p className=" text-[32px]">ALL</p>
          <p className="text-[#FFA800] text-[32px]">PHOTOS</p>
          <p className=" text-[32px]">VIDEOS</p>
        </div>
        <img className="w-[1240px]" src={frame} alt="" />
        <p className="text-[150px] text-[#FFA800]">PROJECT VISION</p>
        <img className="w-[1240px] " src={dogsimg} alt="" />
        <div className="text-center font-sans font-semibold leading-none mt-28">
          <p className="text-[30px]">Our mission is to honor the heritage of the Alabay by creating a</p>
          <p className="text-[30px]">vibrant, loyal, and powerful community. Just as the Alabay protects its</p>
          <p className="text-[30px]">flock, we aim to build a pack that stands strong together</p>
        </div>        
        <img className=" w-[1240px] absolute top-[2520px] z-[-10]" src={rectangle} alt="" />
      </div>
      <div className=" flex ml-40 mt-[-120px] gap-3">
          <p className="text-[120px] text-white">ROAD MAP</p>
          <img className="w-[710px]" src={map} alt="" />
        </div>
    </div>
  )
}

export default App
