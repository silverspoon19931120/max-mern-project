import MenuBtn from "../Widgets/MenuBtn";
import img3 from "../../assets/imgs/Blog_Header_Meet_UltimateGPT_1200x628.webp"
import img4 from "../../assets/imgs/Website-Header_Q2-23-JuneProductEvent1208x628_2x.webp"
import OutlineBtn from "../Widgets/OutlineBtn";
import { RightOutlined } from "@ant-design/icons";


const resources = [
    {
        name: 'The Ultimate Blog',
        content: "The latest AI and CX insights",
        link: ''
    },
    {
        name: 'Events',
        content: "Learn how to level up your support",
        link: ''
    },
    {
        name: 'Support Academy',
        content: "An interactive CS learning hub",
        link: ''
    },
    {
        name: 'Guides',
        content: "Free ebooks and how-to guides",
        link: ''
    }
];

export function ResourcesMenu({ setIsDropMenu = () => { } }) {
    return (
        <div onMouseLeave={() => { setIsDropMenu(false) }} className="grid grid-cols-3 gap-20 container py-8">
            <div>
                {resources?.map((item, index) => {
                    return <div key={index} className="mb-3">
                        <div className="flex justify-between items-center bg-white rounded-lg px-3 py-1 h-28">
                            <div className="text-xl leading-3">
                                <div className="text-xl ml-3 !text-left font-bold">{item?.name}</div>
                                <div className="text-xl ml-3 !text-left">{item?.content}</div>
                            </div>
                            <div>
                                <RightOutlined />
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="rounded-lg overflow-hidden text-center bg-white w-full">
                <div className="mb-3"><img className="w-full" src={img3}></img></div>
                <div className="mb-3 ml-3 !text-left text-xl">Featured blog</div>
                <div className="mb-8 ml-3 font-bold text-xl">Meet UltimateGPT: The LLM-powered bot to revolutionize your support</div>
                <div className="mb-2"><OutlineBtn><div className="text-xl leading-8">Read more</div></OutlineBtn></div>
            </div>
            <div className="rounded-lg overflow-hidden text-center bg-white w-full">
                <div className="mb-3"><img className="w-full" src={img4}></img></div>
                <div className="mb-3 ml-3 !text-left text-xl">Featured event</div>
                <div className="mb-8 ml-3 font-bold text-xl">Beyond AI: Why integrations are the secret to better support</div>
                <div className="mb-2"><OutlineBtn><div className="text-xl leading-8">Watch on demand</div></OutlineBtn></div>
            </div>
        </div>
    );
}

export default ResourcesMenu;
