import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa"
import Search from "../components/Search"
import { FaXTwitter } from "react-icons/fa6"

function Footer (){
    return(
        <div>
            <div className=" max-w-7xl mx-auto p-20 mt-30 flex justify-between bg-[#0d0d1a] cardshadow">
                <div className="flex flex-col text-white">
                    <h2 className="font-bold pb-2">market place</h2>
                    <a href="">All NFTs</a>
                    <a href="">Art</a>
                    <a href="">music</a>
                    <a href="">domain names</a>
                    <a href="">virtual world</a>
                    <a href="">collecitables</a>
                </div>

                <div className="flex flex-col text-white">
                    <h2 className="font-bold pb-2">Resources</h2>
                    <a href="">Help center</a>
                    <a href="">Partners</a>
                    <a href="">Suggestions</a>
                    <a href="">Discord</a>
                    <a href="">Docs</a>
                    <a href="">Newsettler</a>
                </div>

                <div className="flex flex-col text-white">
                    <h2 className="font-bold pb-2">Community</h2>
                    <a href="">Community</a>
                    <a href="">Documentation</a>
                    <a href="">Brand assets</a>
                    <a href="">Blog</a>
                    <a href="">Forum</a>
                    <a href="">Mailling list</a>
                </div>

                <div className="flex flex-col text-white">
                    <h2 className="font-bold pb-2">News Settler</h2>
                    <p className="pb-4">sign for our newsletter to get the <br /> lettest news in your inbox</p>
                    <Search />
                    <p className="pt-2">we promise we dont spam</p>
                    <div className="flex gap-2 pt-5 text-3xl text-[#b278fb] items-center">
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaTiktok /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaXTwitter /></a>
                        <a href=""><FaTelegram /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer 