import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Blog = () => {
  const { id } = useParams();
  return (
    <>
      <section>
        <nav className="p-5 border-b-2 flex gap-2 bg-slate-200">
          <Link
            to="/"
            className="font-semibold flex justify-center items-center gap-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
          >
            <AiFillHome /> <span>Home</span>
          </Link>
          /<span className="cursor-pointer">Education system scam</span>
        </nav>

        <div className="flex mx-5 gap-3 md:gap-5 flex-col md:flex-row">
          <div className="w-full md:w-[60vw] bg-white mx-auto p-5 rounded-lg my-10">
            <h1 className="text-4xl font-bold my-5">Education</h1>
            <img src="/img.jpg" alt="" className="w-full h-[40vh] object-cover rounded-2xl shadow-md"/>
            <div className="flex gap-2 my-5">
              <span className="px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize">Programming</span>
              <span className="px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize">Coding</span>
            </div>
            <hr />
            <div className="my-5">
              <p className="overflow-x-clip">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique impedit fuga quisquam in mollitia unde autem sunt non, voluptates rem commodi iste eveniet a qui nobis? Ipsa iste ab nesciunt, repellendus atque amet recusandae quos suscipit necessitatibus voluptate aspernatur, beatae reprehenderit saepe tenetur! Soluta unde fuga porro dolor voluptatem tempora saepe nulla sint ad quaerat nemo alias commodi sapiente vel illum provident, corporis id ea reiciendis accusantium veniam. Veniam expedita similique ea id laborum unde repellendus nulla iusto provident fugiat error incidunt sit enim atque accusantium sed, cupiditate architecto minus veritatis in itaque nihil culpa voluptatem? Porro excepturi velit perspiciatis?
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 text-base">
              <img src="/logo.jpg" alt="" className="rounded-full w-[40px] h-[40px]"/>
              <div>
                <h4 className="font-bold">Coding</h4>
                <p className="font-bold">26/06/2024</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Blog;
