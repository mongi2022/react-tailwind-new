import React from "react";
import MaskGroup from "./modules/MaskGroup";
import Rectangle73 from "./modules/Rectangle73";
import Group9 from "./modules/Group9";
import IconHome from "./modules/IconHome";
import IconSearch from "./modules/IconSearch";
import Line1 from "./modules/Line1";
import Polygon1 from "./modules/Polygon1";
import IconProfileCircled from "./modules/IconProfileCircled";
import Vector from "./modules/Vector";
import Vector1 from "./modules/Vector1";
import Vector2 from "./modules/Vector2";
import Vector3 from "./modules/Vector3";
import Line3 from "./modules/Line3";
import IconMenu from "./modules/IconMenu";
import IconViewGrid from "./modules/IconViewGrid";
import Vector5 from "./modules/Vector5";
import Vector7 from "./modules/Vector7";
import Group10 from "./modules/Group10";
import Line2 from "./modules/Line2";
import rectangle71 from "./assets/rectangle71.png";
import rectangle7 from "./assets/rectangle7.jpeg";
import rectangle10 from "./assets/rectangle10.jpeg";
import unsplashHh4WbgNyltc from "./assets/unsplashHh4WbgNyltc.jpeg";
import unsplashZvKx6IxUhWq from "./assets/unsplashZvKx6IxUhWq.jpeg";
import unsplashS3NUOqDmUvc from "./assets/unsplashS3NUOqDmUvc.jpeg";
import unsplashUhdlN7U87NA from "./assets/unsplashUhdlN7U87NA.jpeg";
import Group102 from "./modules/Group10-2";
interface Props {}

const AccLang = (props: Props) => {
  return (
    <div
      className="box-border block w-[1445px] h-[1024px] relative overflow-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div className="w-[312px] h-[1024px]">
        <div
          className="w-[312px] h-[1024px] absolute top-0 left-0 rounded-tr-[57px] bg-[#81807e]"
          style={{
            boxShadow: "0px 4px 6px 0 rgba(0,0,0,0.3)",
          }}
        />
      </div>
      <div className="w-[226px] h-[46px] absolute top-[782px] left-[46px] rounded-[40px] bg-[#774f3989]" />
      <div
        className="w-[450px] h-[173px] absolute top-[354px] left-[895px] rounded-[30px] bg-[#f8af8f]"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <Rectangle73 />
      <p className="whitespace-pre-wrap absolute top-[590px] left-96 font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        sélectionner un Thème
      </p>
      <div className="w-[234px] h-[234px]">
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-96 rounded-[30px]"
          src={rectangle71}
          alt="theme1rect"
        />
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-[386px] object-cover rounded-[32px]"
          src={unsplashHh4WbgNyltc}
          alt="theme1"
        />
      </div>
      <div className="w-[234px] h-[234px]">
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-[649px] rounded-[30px]"
          src={rectangle71}
          alt="img"
        />
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-[649px] object-cover rounded-[32px]"
          src={unsplashUhdlN7U87NA}
          alt="theme2"
        />
      </div>
      <div className="w-[234px] h-[234px]">
        <div className="w-[234px] h-[234px]">
          <img
            className="w-[234px] h-[234px] absolute top-[665px] left-[914px] rounded-[30px]"
            src={rectangle71}
            alt="img"
          />
        </div>
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-[914px] object-cover rounded-[32px]"
          src={unsplashZvKx6IxUhWq}
          alt="theme3"
        />
      </div>
      <div className="w-[234px] h-[234px]">
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-[1179px] rounded-[30px]"
          src={rectangle71}
          alt="img"
        />
        <img
          className="w-[234px] h-[234px] absolute top-[665px] left-[1179px] object-cover rounded-[32px]"
          src={unsplashS3NUOqDmUvc}
          alt="theme4"
        />
      </div>
      <div
        className="w-[234px] h-[234px] absolute top-[665px] left-[1179px] rounded-[32px] bg-black/60"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[38px] left-[93px] h-[61px] w-[135px]  font-['MonteCarlo'] text-4xl leading-[normal] text-left text-white">
        Bibliothèque
      </p>
      <IconHome />
      <div className="w-[464px] h-11 absolute top-12 left-96 rounded-[20px] bg-[#e7eaec]" />
      <IconSearch />
      <p className="whitespace-pre-wrap absolute top-[57px] left-[454px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-left text-[#969595]">
        Recherche
      </p>
      <p className="whitespace-pre-wrap absolute top-[50px] left-[1263px] font-['Phetsarath'] text-xl leading-[normal] text-left text-[#acabaa]">
        Fr
      </p>
      <IconProfileCircled />
      <Line1 />
      <Polygon1 />
      <p className="whitespace-pre-wrap absolute top-[194px] left-96 font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        Les nouveautés à la bibliothèque
      </p>
      <p className="whitespace-pre-wrap absolute top-[268px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Formation Initiale
      </p>
      <p className="whitespace-pre-wrap absolute top-[332px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Psychologie Humaine
      </p>
      <p className="whitespace-pre-wrap absolute top-[396px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Divers
      </p>
      <div className="w-[231px] h-6">
        <p className="whitespace-pre-wrap absolute top-[201px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
          Support Divinatoirs
        </p>
        <Vector7 />
      </div>
      <Vector />
      <Vector1 />
      <Vector2 />
      <Line3 />
      <p className="whitespace-pre-wrap absolute top-[793px] left-[107px] font-['Poppins'] text-xxl leading-[normal] tracking-wider text-left text-[#fdfdfd]">
        Blog personnel
      </p>
      <IconMenu />
      <IconViewGrid />
      <img
        className="w-[164px] h-[220px] absolute top-[275px] left-[422px] object-cover"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
        src={rectangle7}
        alt="img"
      />
      <img
        className="w-[164px] h-[220px] absolute top-[275px] left-[932px] object-cover"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
        src={rectangle10}
        alt="img"
      />
      <p className="whitespace-pre-wrap absolute top-[385px] left-[1123px] w-[207px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
        <span className="whitespace-pre-wrap w-[207px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
          le grand livre de la numérologie
        </span>
      </p>
      <p className="whitespace-pre-wrap absolute top-[441px] left-[611px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] italic text-left capitalize text-[#585757]">
        Nom de auteur livre jaune
      </p>
      <p className="whitespace-pre-wrap absolute top-[441px] left-[1121px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] italic text-left capitalize text-[#585757]">
        Nom de auteur livre rose
      </p>
      <Vector3 />
      <Vector5 />
      <div
        className="w-[234px] h-[234px] absolute top-[665px] left-[386px] rounded-[32px] bg-black/25"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <div className="w-[234px] h-[234px] absolute top-[665px] left-[649px] rounded-[32px] bg-black/25" />
      <div
        className="w-[234px] h-[234px] absolute top-[665px] left-[914px] rounded-[32px] bg-black/25"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[838px] left-[461px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-white">
        Thème 1
      </p>
      <p className="whitespace-pre-wrap absolute top-[838px] left-[724px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-white">
        Thème 2
      </p>
      <p className="whitespace-pre-wrap absolute top-[838px] left-[989px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-white">
        Thème 3
      </p>
      <p className="whitespace-pre-wrap absolute top-[838px] left-[1251px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-white">
        Thème 4
      </p>
      <p className="whitespace-pre-wrap absolute top-[385px] left-[613px] w-[207px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
        <span className="whitespace-pre-wrap w-[207px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
          le grand livre de la numérologie
        </span>
      </p>
      <Group10 />
      <Group102 />
      <div
        className="w-[43px] h-12 absolute top-[79px] left-[1263px] rounded bg-white"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[83px] left-[1271px] font-['Phetsarath'] text-sm leading-[normal] text-left text-[#969595]">
        Fr
      </p>
      <p className="whitespace-pre-wrap absolute top-[104px] left-[1271px] font-['Phetsarath'] text-sm leading-[normal] text-left capitalize text-[#969595]">
        En
      </p>
      <Line2 />
    </div>
  );
};

export default AccLang;