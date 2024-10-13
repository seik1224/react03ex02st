import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-[460px] mt-8 mb-14 mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <img src={`${process.env.PUBLIC_URL}/profile1.jpg`} className="w-[32px] rounded-full" alt="" />
              <p className="pl-3">Mario</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/icon10.svg`} alt="" />
          </div>
          <Link to={`/detail/1`}>
            <div className="mb-3">
              <img src={`${process.env.PUBLIC_URL}/thumb1.jpg`} className="w-full" alt="" />
            </div>
          </Link>
          <div>
            <div className="mb-3">
              <button className={"hover:opacity-35"}>
                <img src={`${process.env.PUBLIC_URL}/icon11.svg`} alt="" />
              </button>
            </div>
            <div>
              <p className="mb-3">
                좋아요 <span>0</span>개
              </p>
              <h4 className="mb-3">제목</h4>
              <p className="mb-3 text-base">내용</p>
            </div>
            <div>
              <input className="w-full border-b border-solid border-gray-300 py-3" placeholder="댓글달기"></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
