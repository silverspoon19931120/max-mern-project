import { Col, Row } from 'antd';
import React from 'react';
import Layout from '../../components/Layout';
import './home.css';
import OutlineBtn from '../../components/Widgets/OutlineBtn';
import MenuBtn from '../../components/Widgets/MenuBtn';

export default function ProductOverview() {
    return (
        <Layout>
            {/* home header */}
            <div className=' placeholder-slate-200 px-4 md:px-8 lg:px-12 xl:px-container bgcolor1'>
                <Row gutter={[12, 12]} justify={'space-between'} align='middle'>
                    <Col classname='pb-20' xs={24} sm={24} md={24} lg={12}>
                        <h1 className='leading-snug font-extrabold text-left'>
                            Turn your customer support into a competitive
                            advantage
                        </h1>
                        <div className='capture leading-9'>
                            Drive growth, success, and cost savings, and deliver
                            joyful customer experiences at scale with generative
                            AI-powered customer service automation.
                        </div>
                        <button className='rounded-full bg-slate-800 p-3 mt-8'>
                            <div className='text-white text-xl'>Learn how</div>
                        </button>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        className='hidden md:contents z-0 !relative'
                    >
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Visuals/Zendesk-Chatbot-4.svg'
                            className='float-right'
                            width='550px'
                            alt='HP'
                        />
                        <img
                            src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/C-Level.jpg?width=1800&height=1013&name=C-Level.jpg'
                            className='float-right absolute right-48 rounded-2xl w-[630px]'
                            alt='HP-Mar-20-2023-03-44-00-6152-PM'
                        />
                    </Col>
                    <div className='flex justify-center items-center text-center px-4  md:px-8 py-4 pb-8 lg:px-12 xl:px-container w-full backdrop-blur-sm bg-transparent'>
                        <div className='flex justify-center items-center text-center px-8'>
                            <img
                                className='icon'
                                src='https://www.ultimate.ai/hubfs/Website/Icons/tips.svg'
                                alt='tips'
                            />
                            <p className='text-xl whitespace-pre'>
                                Seamless CRM integration
                            </p>
                        </div>
                        <div className='flex justify-center items-center text-center px-8'>
                            <img
                                className='icon'
                                src='https://www.ultimate.ai/hubfs/Website/Icons/brain-2.svg'
                                alt='brain-2'
                            />
                            <p className='text-xl whitespace-pre'>
                                Human-like AI built in-house
                            </p>
                        </div>
                        <div className='flex justify-center items-center text-center px-8'>
                            <img
                                className='icon'
                                src='https://www.ultimate.ai/hubfs/Website/Visuals/language-1.svg'
                                alt='language-1'
                            />
                            <p className='text-xl whitespace-pre'>
                                Support in 109 languages
                            </p>
                        </div>
                        <div className='flex justify-center items-center text-center px-8'>
                            <img
                                className='icon'
                                src='https://www.ultimate.ai/hubfs/Website/Icons/nocode.svg'
                                alt='N o-code'
                            />
                            <p className='text-xl whitespace-pre'>
                                No-code automation platform
                            </p>
                        </div>
                    </div>
                </Row>
                <div className='flex justify-between py-20'>
                    <div className='rounded-full bg-slate-200 w-56 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Taskrabbit.svg'
                            alt='Taskrabbit'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/Zendesk.svg'
                            alt='Zendesk'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Pockit.svg'
                            alt='Pockit'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Zalando.svg'
                            alt='Zalando'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Hometogo.svg'
                            alt='Hometogo'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/getyourguide_s.svg'
                            alt='getyourguide_s'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Traderepublic.svg'
                            alt='Traderepublic'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/moonpig-1.svg'
                            alt='moonpig-1'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Finnair.svg'
                            alt='Finnair'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/ActiveCampaign.svg'
                            alt='ActiveCampaign'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Taskrabbit.svg'
                            alt='Taskrabbit'
                        ></img>
                    </div>
                    <div className='rounded-full bg-slate-200 w-52 h-20 flex items-center'>
                        <img
                            src='https://www.ultimate.ai/hubfs/Website/Brand%20Logos/Black/Traderepublic.svg'
                            alt='Traderepublic'
                        ></img>
                    </div>
                </div>
            </div>

            {/* The Ultimate support automation solution */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <h2 className='text-left pt-10'>
                    The Ultimate support automation solution
                </h2>
                <p className='pt-10 font-base'>
                    Automate 60% of your customer service with AI. Provide
                    better, faster, more personalized support across all
                    <br />
                    digital channels with chat and ticket automation, plus build
                    a bot in minutes with the all-new, generative AI-
                    <br />
                    powered UltimateGPT.
                </p>
                <div className='grid grid-cols-5 pt-10 gap-4'>
                    <div className='col-span-5 md:col-span-2'>
                        <div className='font-bold text-lg flex items-center justify-start'>
                            <div className='w-8 h-8 rounded-full bg-gray-900 flex flex-col items-center'>
                                <img
                                    src='https://www.ultimate.ai/hubfs/Website/Icons/chat.svg'
                                    alt='icon'
                                    className='w-4 m-auto'
                                />
                            </div>
                            <p className='pl-4'>Chat Automation</p>
                        </div>
                        <p className='font-base pb-10 pt-4'>
                            Provide better, faster CX, resolve requests
                            round-the-clock, and collect the context and info
                            your agents need with an AI chatbot that can speak
                            109 languages.
                        </p>
                        <OutlineBtn>Automation Chat</OutlineBtn>
                        <div className='font-bold text-lg flex items-center justify-start pt-4'>
                            <div className='w-8 h-8 rounded-full bg-gray-400 flex flex-col items-center'>
                                <img
                                    src='https://www.ultimate.ai/hubfs/Website/Icons/ticket-3.svg'
                                    alt='icon'
                                    className='w-4 m-auto'
                                />
                            </div>
                            <p className='pl-4 text-gray-400'>
                                Ticket Automation
                            </p>
                        </div>
                        <div className='font-bold text-lg flex items-center justify-start pt-4'>
                            <div className='w-8 h-8 rounded-full bg-gray-400 flex flex-col items-center'>
                                <img
                                    src='https://www.ultimate.ai/hubfs/Website/Icons/UltimateGPT-Brain.svg'
                                    alt='icon'
                                    className='w-4 m-auto'
                                />
                            </div>
                            <p className='pl-4 text-gray-400'>UltimateGPT</p>
                        </div>
                    </div>
                    <div className='col-span-5 md:col-span-3'>
                        <img
                            src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/Chat-PO.jpg?width=2360&height=1400&name=Chat-PO.jpg'
                            className='w-full'
                        ></img>
                    </div>
                </div>
            </div>

            {/* Why you'll love our customer support automation platform */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <h2 className='pt-10 leading-9'>
                    Why you'll love our customer support automation platform
                </h2>
                <div className='grid grid-cols-6 pt-10'>
                    <div className='col-span-2'></div>
                    <div className='col-span-4'>
                        <div className='sm:grid grid-cols-2 gap-4'>
                            <div>
                                <div className='flex items-center justify-start'>
                                    <img
                                        src='https://www.ultimate.ai/hubfs/Website/Icons/AI.svg'
                                        alt='img'
                                    />
                                    <div className='bg-black h-[1px] w-full'></div>
                                </div>
                                <p className='text-lg font-bold'>
                                    Human-like AI
                                </p>
                                <p className='text-sm'>
                                    Have natural, on-brand conversations with
                                    your customers thanks to LLMs and
                                    conversational and generative AI — the same
                                    tech behind ChatGPT
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center justify-start'>
                                    <img
                                        src='https://www.ultimate.ai/hubfs/Website/Icons/plug.svg'
                                        alt='img'
                                    />
                                    <div className='bg-black h-[1px] w-full'></div>
                                </div>
                                <p className='text-lg font-bold'>
                                    No coding required
                                </p>
                                <p className='text-sm'>
                                    Our easy-to-use platform was created for
                                    customer support teams, including our
                                    intuitive, no-code Dialogue Builder
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center justify-start'>
                                    <img
                                        src='https://www.ultimate.ai/hubfs/Website/Icons/language-1.svg'
                                        alt='img'
                                    />
                                    <div className='bg-black h-[1px] w-full'></div>
                                </div>
                                <p className='text-lg font-bold'>
                                    Speak any language effortlessly
                                </p>
                                <p className='text-sm'>
                                    Communicate with your customers in up to 109
                                    languages and manage them all in one place
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center justify-start'>
                                    <img
                                        src='https://www.ultimate.ai/hubfs/Website/Icons/security.svg'
                                        alt='img'
                                    />
                                    <div className='bg-black h-[1px] w-full'></div>
                                </div>
                                <p className='text-lg font-bold'>
                                    Safety & security certifications
                                </p>
                                <p className='text-sm'>
                                    Your data is safe with us: we're GDPR and
                                    SOC 2 type 2 compliant
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The latest generative AI technology\ */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <div className='sm:flex items-center justify-between'>
                    <div className='sm:w-2/5'>
                        <h2 className='leading-9'>
                            The latest generative AI technology
                        </h2>
                        <p className='py-4'>
                            Deliver accurate, efficient and on-brand customer
                            experiences that are tailored to your brand with our
                            industry-leading, built-in-house AI. Plus, you can
                            now build a bot in minutes with our LLM and
                            generative AI-powered solution, UltimateGPT.
                        </p>
                        <button className='rounded-full p-3 ml-4 bg-gray-900'>
                            <div className='text-white px-4 font-sans'>
                                See our AI in action
                            </div>
                        </button>
                    </div>
                    <div className='sm:w-2/5'>
                        <img
                            src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/Humanised-Bot-2-2.png?width=580&height=580&name=Humanised-Bot-2-2.png'
                            className='w-full'
                        />
                    </div>
                </div>
            </div>

            {/* Fully connected, living in your tech stack */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <div className='sm:flex items-center justify-between'>
                    <div className='sm:w-2/5'>
                        <img
                            src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/ProductOverview_TechStack_update_2.png?width=580&height=580&name=ProductOverview_TechStack_update_2.png'
                            className='w-full'
                        />
                    </div>

                    <div className='sm:w-2/5'>
                        <h2 className='leading-9'>
                            Fully connected, living in your tech stack
                        </h2>
                        <p className='py-4'>
                            Ultimate’s customer support automation platform
                            integrates seamlessly into your tech stack,
                            including your CRM and back office systems. It’s
                            endlessly configurable and customizable, so your
                            solution grows with you, without disrupting your
                            tech stack or creating data silos.
                        </p>
                        <button className='rounded-full p-3 ml-4 bg-gray-900'>
                            <div className='text-white px-4 font-sans'>
                                Explore all integrations
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* The latest generative AI technology\ */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <div className='sm:flex items-center justify-between'>
                    <div className='sm:w-2/5'>
                        <h2 className='leading-9'>
                            1 virtual agent, 109 languages
                        </h2>
                        <p className='py-4'>
                            Support your customers globally and deliver
                            personalized customer experiences at scale with an
                            AI-powered virtual agent that can understand up to
                            109 languages — from Arabic to Zulu.
                        </p>
                        <button className='rounded-full p-3 ml-4 bg-gray-900'>
                            <div className='text-white px-4 font-sans'>
                                Launch multilingual support
                            </div>
                        </button>
                    </div>
                    <div className='sm:w-2/5'>
                        <img
                            src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/GlobalSupport-3.png?width=580&height=571&name=GlobalSupport-3.png'
                            className='w-full'
                        />
                    </div>
                </div>
            </div>

            {/* The latest generative AI technology\ */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <div className='text-center'>
                    <h2 className='leading-9'>Supported CRM integrations</h2>
                    <p className='py-4'>
                        Connect your CRM to our no-code platform in just one
                        click. The result? Fast and effective resolutions for
                        your customers on chat, email, messaging, and social.
                    </p>
                    <button className='rounded-full p-3 ml-4 bg-gray-900'>
                        <div className='text-white px-4 font-sans'>
                            Browse all integrations
                        </div>
                    </button>
                </div>
                <div className='pt-10'>
                    <div className='sm:flex items-center justify-center'>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/Zendesk.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/Type=Black%2c%20Brand=Salesforce.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/LiveChat-black.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/SunCo.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                    </div>
                    <div className='sm:flex items-center justify-center mt-4'>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/Freshworks.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Dixa-black.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                        <div class='w-full sm:w-1/4 mt-4 px-2.5 bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800 rounded-full py-3 ml-3'>
                            <img
                                src='https://www.ultimate.ai/hubfs/Website/CRM%20Logos/Black/Intercom.svg'
                                alt='img'
                                style={{ maxHeight: '55px', maxWidth: '170px' }}
                                className='w-full m-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* The latest generative AI technology\ */}
            <div className='py-10 px-4 md:px-8 lg:px-12 xl:px-container'>
                <h2 className='py-10 leading-9 text-center'>
                    Leading brands trust Ultimate to scale and streamline their
                    customer support
                </h2>
                <div className='pt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <div className='w-full'>
                            <img
                                src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/Deezer%20Case%20Study/Deezer-teaser_2x.jpg?width=376&height=235&name=Deezer-teaser_2x.jpg'
                                className='w-full rounded-lg'
                            />
                            <p className='pt-4'>
                                How Deezer delivered joyful CX while saving 200
                                agent hours per week
                            </p>
                        </div>
                        <div className='w-full'>
                            <img
                                src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/ActiveCampaign%20Case%20Study/ActiveCampaign-teaser-384x240_2x.jpg?width=376&height=235&name=ActiveCampaign-teaser-384x240_2x.jpg'
                                className='w-full rounded-lg'
                            />
                            <p className='pt-4'>
                                How chat automation is saving ActiveCampaign
                                $55K each month
                            </p>
                        </div>
                        <div className='w-full'>
                            <img
                                src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/Vandebron%20Case%20Study/Vandebron-teaser_2x.jpg?width=376&height=235&name=Vandebron-teaser_2x.jpg'
                                className='w-full rounded-lg'
                            />
                            <p className='pt-4'>
                                How Vandebron scaled their chat support by 150%
                                without scaling their team
                            </p>
                        </div>
                        <div className='w-full'>
                            <img
                                src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/finnair-384x240.jpg?width=376&height=235&name=finnair-384x240.jpg'
                                className='w-full rounded-lg'
                            />
                            <p className='pt-4'>
                                How Finnair leaned on automation to evolve with
                                the times
                            </p>
                        </div>
                        <div className='w-full'>
                            <img
                                src='https://www.ultimate.ai/hs-fs/hubfs/Website/Visuals/Verkkokauppa%20Case%20Study/Verkkokauppa-teaser_2x.jpg?width=376&height=235&name=Verkkokauppa-teaser_2x.jpg'
                                className='w-full rounded-lg'
                            />
                            <p className='pt-4'>
                                How Verkkokauppa saves €330K per year with
                                ecommerce automation
                            </p>
                        </div>
                        <div className='w-full'>
                            <img
                                src='https://www.ultimate.ai/hs-fs/hubfs/jackpots-teaser_2x-1.png?width=376&height=235&name=jackpots-teaser_2x-1.png'
                                className='w-full rounded-lg'
                            />
                            <p className='pt-4'>
                                How Jackpots.ch scaled to 24/7 support in 4
                                languages without hiring extra agentss
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stay ahead of the curve with AI-powered support automation */}
            <div
                className='py-10 px-4 md:px-8 lg:px-12 xl:px-container bg-cover bg-center h-screen'
                style={{
                    backgroundImage:
                        'url("https://www.ultimate.ai/hubfs/raw_assets/public/ultimate/images/swoosh/cta-indigo.svg")',
                }}
            >
                <div className='border-[1px] border-black rounded-full py-10 lg:py-20 md:px-56 backdrop-blur-md bg-transparent text-center'>
                    <h2 className="pb-10 leading-9">
                        Stay ahead of the curve with AI-powered support
                        automation
                    </h2>
                    <button className='rounded-full p-3 ml-4 bg-gray-900'>
                        <div className='text-white px-4 font-sans'>
                            Explore all integrations
                        </div>
                    </button>
                    <img src="https://www.ultimate.ai/hubfs/raw_assets/public/ultimate/images/g2/stars-45.svg" className="pt-10 m-auto" />
                    <a href="#">Leader on G2</a>
                </div>
            </div>
        </Layout>
    );
}
