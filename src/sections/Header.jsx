import Search from "../components/Search";
import Button from "../components/Button";

function Header(){
    return(
        <div className="flex poppins items-center w-full justify-between mx-auto 
                        xl:max-w-7xl
                        lg:max-w-6xl">
            <div className="flex items-center gap-3">
                <div> 
                    <img src="/Black White Minimalist Professional Initial Logo (1).png" alt="" /> 
                </div>
                <div className="hidden xl:inline">
                    <Search />
                </div>
            </div>
            <div className="md:flex items-center gap-5 space-x-20 hidden">
                <div className="flex gap-5 text-amber-50">
                    <a href="#">Home</a>
                    <a href="#">explore</a>
                    <a href="#">pages</a>
                    <a href="#">activity</a>
                    <a href="#">elements</a>
                </div>
                <div className="hidden lg:inline">
                    <Button>connect wallet</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;