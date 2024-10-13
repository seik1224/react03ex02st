import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <>
      <div className="fixed w-full h-full flex justify-center items-center">
        <Link to="/">
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-black opacity-20"></div>
        </Link>
        <div className="flex w-[1000px] h-[600px] relative z-10">
          <div className="relative w-[500px] overflow-hidden">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {[0, 1].map((v, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={`${process.env.PUBLIC_URL}/thumb1.jpg`} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-[500px] h-full bg-white flex flex-col rounded-tr-md rounded-br-md">
            <div>
              <div className="flex items-center justify-between p-3 border-b border-gray-200 border-solid">
                <div className="flex items-center">
                  <img src={`${process.env.PUBLIC_URL}/profile1.jpg`} className="w-[32px] rounded-full" alt="" />
                  <p className="pl-3">Mario</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/icon10.svg`} alt="" />
              </div>
              <div className="p-3 overflow-y-auto h-[382px] ">
                {Array.from({ length: 6 }).map((v, i) => {
                  return (
                    <div className="flex items-start mb-3" key={i}>
                      <img src={`${process.env.PUBLIC_URL}/who.jpg`} className="w-[32px] rounded-full" alt="" />
                      <div className="pl-3">
                        <p className="mb-3">댓글작성자</p>
                        <p className="mb-3 text-base">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-auto ">
              <div className="p-3 border-t border-gray-200 border-solid">
                <div className="mb-3">
                  <button className={"hover:opacity-35"}>
                    <img src={`${process.env.PUBLIC_URL}/icon11.svg`} alt="" />
                  </button>
                </div>
                <p className="mb-3">
                  좋아요 <span>0</span>개
                </p>
                <p className=" text-xs text-gray-500">0월 0일</p>
              </div>
              <div className="p-3 border-t border-gray-200 border-solid">
                <input className="w-full  py-1" placeholder="댓글달기"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
