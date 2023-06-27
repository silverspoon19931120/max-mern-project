import { Button } from "antd";

export function OutlineBtn({ children=<></> }) {
    return (
        <Button size="large" className="text-xl !rounded-full border-black" variant="outlined">
            {children}
        </Button>
    );
}

export default OutlineBtn;
