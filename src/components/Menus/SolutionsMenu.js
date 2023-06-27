import MenuBtn from "../Widgets/MenuBtn";
import img2 from "../../assets/imgs/Lush_CaseStudy_Feature_1200x628_2x.webp"
import OutlineBtn from "../Widgets/OutlineBtn";
import { RightOutlined } from "@ant-design/icons";


const industries = [
    {
        name: 'Ecommerce',
        link: ''
    },
    {
        name: 'Financial Services',
        link: ''
    },
    {
        name: 'Travel',
        link: ''
    },
    {
        name: 'Telecommunications',
        link: ''
    },
    {
        name: 'Healthtech',
        link: ''
    }
];
const customerStories = [
    {
        name: 'Finnair',
        link: ''
    },
    {
        name: 'ActiveCampaign',
        link: ''
    },
    {
        name: 'Deezer',
        link: ''
    },
    {
        name: 'Tomorrow',
        link: ''
    },
    {
        name: 'Papier',
        link: ''
    }
]
export function SolutionsMenu({ setIsDropMenu = () => { } }) {
    return (
        <div onMouseLeave={() => { setIsDropMenu(false) }} className="grid grid-cols-3 gap-20 container py-8">
            <div className="bg-white rounded-lg p-8">
                <div className="text-xl">Industries</div>
                {industries?.map((item, index) => {
                    return <div key={index} className="mt-3">
                        <MenuBtn>
                            <div className="text-xl">{item?.name}</div>
                            <RightOutlined />
                        </MenuBtn>
                    </div>
                })}
            </div>
            <div className="bg-white rounded-lg p-8">
                <div className="text-xl">Customer Stories</div>
                {
                    customerStories?.map((item, index) => {
                        return <div key={index} className="mt-3">
                            <MenuBtn>
                                <div className="text-xl">{item?.name}</div>
                                <RightOutlined />
                            </MenuBtn>

                        </div>
                    })
                }
                <div className="mt-8"><OutlineBtn><div className="text-xl leading-3">See all</div></OutlineBtn></div>
            </div>
            <div className="rounded-lg overflow-hidden text-center bg-white w-full">
                <div className="mb-3"><img className="w-full" src={img2}></img></div>
                <div className="mb-3 ml-3 !text-left text-xl">Featured</div>
                <div className="mb-3 font-bold text-xl">How ticket automation helped Lush reach a 60% first contact resolution rate</div>
                <OutlineBtn><div className="text-xl leading-3">Read featured case study</div></OutlineBtn>
            </div>
        </div>
    );
}

export default SolutionsMenu;
