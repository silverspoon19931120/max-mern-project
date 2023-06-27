import { Col, Row, Space } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import "./home.css";
import FeatureCard from "./FeatureCard";
import CaseStudyCard from "../../components/CaseStudyCard";
import Testimonitial from "../../components/Testimonitial";
import CTA from "../../components/CTA";
import { RetweetOutlined } from "@ant-design/icons";
import { useSpring, animated } from 'react-spring';

export default function Home() {

  const cStyle = useSpring({
    from: { left: '-100%' },
    to: { left: '100%' },
    config: { duration: 2000 },
    reset: true,
    loop: true,
  });



  return (
    <Layout>
      {/* home header */}
      <div className=" placeholder-slate-200 px-4 md:px-8 lg:px-12 xl:px-container bgcolor1">
        <Row gutter={[12, 12]} justify={"space-between"} align="middle">
          <Col classname="pt-20 pb-20" xs={24} sm={24} md={24} lg={12}>
            <h1 className="leading-snug font-extrabold text-left">
              The customer support automation platform you won’t outgrow
            </h1>
            <div className="capture leading-9">
              Revolutionize your customer support with the generative AI-powered automation platform that will cut costs,
              maximize productivity,
              and evolve alongside you as your business grows.
            </div>
            <button className="rounded-full bg-slate-800 p-3 mt-8" ><div className="text-white text-xl">Learn how</div></button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="hidden md:contents z-0 !relative">
            <img
              src="https://www.ultimate.ai/hubfs/Website/Visuals/HP.svg"
              className="float-right"
              width="550px"
              alt="HP"
            />
            <img
              src="https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/HP-Mar-10-2023-03-44-00-6152-PM.png?width=1280&height=1280&name=HP-Mar-10-2023-03-44-00-6152-PM.png"
              className="float-right absolute right-48"
              width="480px"
              alt="HP-Mar-20-2023-03-44-00-6152-PM"
            />
          </Col>
          <div className="flex justify-center items-center text-center px-4  md:px-8 py-4 pb-8 lg:px-12 xl:px-container w-full backdrop-blur-sm bg-transparent">
            <div className="flex justify-center items-center text-center px-8">
              <img className="icon" src="https://www.ultimate.ai/hubfs/Website/Icons/tips.svg" alt="tips" />
              <p className="text-xl whitespace-pre">Seamless CRM integration</p>
            </div>
            <div className="flex justify-center items-center text-center px-8">
              <img className="icon" src="https://www.ultimate.ai/hubfs/Website/Icons/brain-2.svg" alt="brain-2" />
              <p className="text-xl whitespace-pre">Human-like AI built in-house</p>
            </div>
            <div className="flex justify-center items-center text-center px-8">
              <img className="icon" src="https://www.ultimate.ai/hubfs/Website/Visuals/language-1.svg" alt="language-1" />
              <p className="text-xl whitespace-pre">Support in 109 languages</p>
            </div>
            <div className="flex justify-center items-center text-center px-8">
              <img className="icon" src="https://www.ultimate.ai/hubfs/Website/Icons/nocode.svg" alt="N o-code" />
              <p className="text-xl whitespace-pre">No-code automation platform</p>
            </div>
          </div>
        </Row>
      </div>

      <div className="flex justify-between">
        <div className="rounded-full bg-slate-200 w-56 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Taskrabbit.svg" alt="Taskrabbit"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/Zendesk.svg" alt="Zendesk"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Pockit.svg" alt="Pockit"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Zalando.svg" alt="Zalando"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Hometogo.svg" alt="Hometogo"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/getyourguide_s.svg" alt="getyourguide_s"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Traderepublic.svg" alt="Traderepublic"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/moonpig-1.svg" alt="moonpig-1"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Finnair.svg" alt="Finnair"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/ActiveCampaign.svg" alt="ActiveCampaign"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Taskrabbit.svg" alt="Taskrabbit"></img>
        </div>
        <div className="rounded-full bg-slate-200 w-52 h-20 flex items-center">
          <img src="https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Traderepublic.svg" alt="Traderepublic"></img>
        </div>
      </div>
      <animated.div style={cStyle}>
        <h1>asdads</h1>
      </animated.div>

      <div>
        <Row gutter={[12, 12]} justify={"space-between"} align="middle">
          <Col classname="pt-20 pb-20" xs={24} sm={24} md={24} lg={12}>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="hidden md:contents z-0 !relative">
            <h1 className="leading-snug font-extrabold text-left">
              The customer support automation platform you won’t outgrow
            </h1>
            <div className="capture leading-9">
              Revolutionize your customer support with the generative AI-powered automation platform that will cut costs,
              maximize productivity,
              and evolve alongside you as your business grows.
            </div>
            <button className="rounded-full bg-slate-800 p-3 mt-8" ><div className="text-white text-xl">Learn how</div></button>
          </Col>
        </Row>
      </div>

    </Layout>
  );
}
