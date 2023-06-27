import MenuBtn from "../Widgets/MenuBtn";
import img5 from "../../assets/imgs/Lisbon_2x-1.webp"
import img6 from "../../assets/imgs/Partners_2x-1.webp"
import OutlineBtn from "../Widgets/OutlineBtn";
import { RightOutlined } from "@ant-design/icons";


const resources = [
    {
        name: 'About',
        content: "All about Ultimate",
        link: ''
    },
    {
        name: 'Careers',
        content: "Join our team",
        link: ''
    },
    {
        name: 'Security & Privacy',
        content: "Our security certifications and privacy policy",
        link: ''
    }
];

export function CompanyMenu({ setIsDropMenu = () => { } }) {
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
                <div className="mb-3"><img className="w-full" src={img5}></img></div>
                <div className="mb-3 ml-3 !text-left font-bold text-xl">Dive into the Ultimate Culture Playbook</div>
                <div className="mb-8 ml-3 text-xl">Learn what Ultimate's culture is like and discover our company values</div>
                <div className="mb-8"><OutlineBtn><div className="text-xl leading-8">Read more</div></OutlineBtn></div>
            </div>
            <div className="rounded-lg overflow-hidden text-center bg-white w-full">
                <div className="mb-3"><img className="w-full" src={img6}></img></div>
                <div className="mb-3 ml-3 !text-left  font-bold text-xl">Ultimate's Partner Program</div>
                <div className="mb-8 ml-3 text-xl">Partner with us to help your customers scale and grow</div>
                <div className="mb-8"><OutlineBtn><div className="text-xl leading-8">Watch on demand</div></OutlineBtn></div>
            </div>
        </div>
    );
}

export default CompanyMenu;
