import CardCarousel from "../components/CardCarousel";

export default function IntroPage() {
    return (
        <div>
            <div className="m-10">
                <h1 className="uppercase text-[90px] ">Simona</h1>
                <h3 className="text-[48px]">Your fateful next connection</h3>
                <div className="mt-8">
                    <p className="mb-4">Do you remember the last time you had to search through dozen of websites just to find that one right person?</p>
                    <p>With Simona you don't have to feel lost anymore, start searching for your next gig, exhibition or a business partner now within our cool scene and connect with various funky folks out there!</p>
                    <button className="bg-gray-300 rounded-lg p-2 mt-4">Join us</button>
                </div>
            </div>
            <div>
                <h2 className="uppercase text-[38px] pl-5 mb-5">Our groovy Artists</h2>
                <CardCarousel />
            </div>
            <div className="h-[200px] bg-gray-600 mt-4 mb-4">
                <h2></h2>
            </div>
            <div>
                <h2 className="uppercase text-[38px] pl-5 mb-5">Our radical Entrepreneurs</h2>
                <CardCarousel />
            </div>
            <div>
                
            </div>
            <div>
                <h2>Our Team</h2>
                <h4>Meet the stellar quartet that frequently enjoys a nice cup of warm tea of coffee</h4>
            </div>
        </div>
    );
}
