import React from "react";
import img1 from "../Img/murah.png";
import img2 from "../Img/mudah.png";
import img3 from "../Img/fast.png";
import img4 from "../Img/aman.png";

const Choice = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <h1 className="  mx-auto text-center font-bold text-[30px] mb-[100px] ">
        Alasan 4200 Customer Memilih CarHub?
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="w-full cursor-pointer  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img1} alt="" />
          <h2 className="text-2xl font-bold text-center py-8 ">From 0-1</h2>
          <p className="text-center text-1xl  font-medium ">
            Alumni sudah berbelanja. Tanpa pilah-pilih, dengan CarHub kamu bisa
            #JadiYangKamuMau.
          </p>
        </div>
        <div className=" cursor-pointer w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img2} alt="" />
          <h2 className="text-2xl font-bold text-center py-8 ">Refund 100%</h2>
          <p className="text-center text-1xl  font-medium">
            Satu-satunya di Indonesia. Uangmu kembali 100%, plus 10% kalau kamu
            adalah Pemenangnya.
          </p>
        </div>
        <div className="w-full cursor-pointer  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img3} alt="" />
          <h2 className="text-2xl font-bold text-center py-8 ">99.8%</h2>
          <p className="text-center text-1xl  font-medium ">
            Alumni sudah bekerja. Tanpa pilah-pilih, dengan kurikulum CarHub
            kamu bisa #JadiYangKamuMau.
          </p>
        </div>
        <div className="w-full  cursor-pointer shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img4} alt="" />
          <h2 className="text-2xl font-bold text-center py-8 ">
            Price Vs Value
          </h2>
          <p className="text-center text-1xl  font-medium ">
            Yes. Customer kami sadar bahwa value yang didapat vs harga yang
            mereka bayar melebihi ekspektasi mereka.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choice;
