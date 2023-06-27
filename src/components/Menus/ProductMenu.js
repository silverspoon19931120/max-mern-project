import MenuBtn from "../Widgets/MenuBtn";
import img1 from "../../assets/imgs/UltimateGPT-Featured_2x-2.webp"
import OutlineBtn from "../Widgets/OutlineBtn";
import { RightOutlined } from "@ant-design/icons";


const categories = [
    {
        name: 'Overview',
        link: ''
    },
    {
        name: 'UltimateGPT',
        link: ''
    },
    {
        name: 'Chat Automation',
        link: ''
    },
    {
        name: 'Ticket Automation',
        link: ''
    },
    {
        name: 'Our AI',
        link: ''
    },
    {
        name: 'Why Ultimate',
        link: ''
    },
];
const integrations = [
    {
        name: 'Zendesk',
        link: ''
    },
    {
        name: 'Salesforce',
        link: ''
    },
    {
        name: 'LiveChat',
        link: ''
    },
    {
        name: 'Freshworks',
        link: ''
    },
    {
        name: 'Intercom',
        link: ''
    },
    {
        name: 'Sunshine Conversations',
        link: ''
    },
    {
        name: 'Sunshine Conversations',
        link: ''
    },
]
export function ProductMenu({ setIsDropMenu = () => { } }) {
    return (
        <div onMouseLeave={() => { setIsDropMenu(false) }} className="grid grid-cols-3 gap-20 container py-8">
            <div>
                {categories?.map((item, index) => {
                    return <div key={index} className="mb-3">
                        <MenuBtn>
                            <div className="text-xl">{item?.name}</div>
                            <RightOutlined />
                        </MenuBtn>
                    </div>
                })}
            </div>
            <div className="bg-white rounded-lg p-8">
                <div className="text-xl">Integrations</div>
                {
                    integrations?.map((item, index) => {
                        return <div key={index} className="mt-3">
                            <MenuBtn>
                                <div className="text-xl">{item?.name}</div>
                                <RightOutlined />
                            </MenuBtn>
                        </div>
                    })
                }
            </div>
            <div className="rounded-lg overflow-hidden text-center bg-white w-full">
                <div className="mb-3"><img className="w-full" src={img1}></img></div>
                <div className="mb-3 font-bold text-2xl">Introducing UltimateGPT</div>
                <div className="mb-3 text-2xl">The LLM-powered bot that plugs into your help center to build a bot in minutes</div>
                <OutlineBtn><div className="text-xl leading-3">Try For Free</div></OutlineBtn>
            </div>
        </div>
    );
}

export default ProductMenu;
