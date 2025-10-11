import { GiCancel } from "react-icons/gi";
import Button from "./Button";

function Humbergur ({onClose}){

    return(
        <>
        <div className="flex items-center gap-12 pt-2 px-3">
            <div className="w-40">
            <img src="public/Black White Minimalist Professional Initial Logo (1).png" alt="" className="w-full" />
            </div>
            <GiCancel  className="text-2xl text-white" onClick={onClose}/>
        </div>
        <div className="text-white text-2xl flex flex-col justify-center gap-5 text-center pt-20">
            <Button className="bg-amber-700 mx-6 pb-3 md:hidden">connect wallet</Button>
            <a href="#">Home</a>
            <a href="#">explore</a>
            <a href="#">pages</a>
            <a href="#">activity</a>
            <a href="#">elements</a>
        </div>
        </>
    )
}

export default Humbergur;