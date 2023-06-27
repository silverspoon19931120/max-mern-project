import { Button } from "antd";



export function MenuBtn({ children = <></> }) {
    return (
        <Button size="large" color="gray" className="!rounded-full bg-white w-full flex items-center justify-between"  >
            {children}
        </Button>
    );
}

export default MenuBtn;
