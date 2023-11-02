import Image from "next/image"

const imageUrls = {
    black: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1200&q=75",
    white: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1200&q=75",
    blue: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1200&q=75",
}

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["xs", "s", "md", "lg", "xl"];

const page = () => {
    const selectedColor = "black";
    const selectedSize = "md";
    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-slate-300">
            <div className="w-[70rem] h-[30rem] bg-white flex">
                <div className="w-[50%] h-full flex items-center justify-center">
                    <Image
                        src={imageUrls[selectedColor]}
                        alt={selectedColor}
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>
                <div className="w-[50%] h-full ">
                    <h1 className="text-3xl font-bold text-left mt-20">Acme Circle T-Shirt</h1>
                    <h2 className="p-2 rounded-3xl bg-blue-500 w-28 text-center mt-5">$200 USD</h2>
                    <h2 className="mt-5 text-xl font-semibold">Color</h2>
                    {colorVariants.map((color, index) => (
                        <button key={index} className="p-2 rounded-3xl bg-slate-200 w-28 text-center mt-5 mx-2">{color}</button>
                    ))}
                    <h2 className="mt-5 text-xl font-semibold">Size</h2>
                    {sizeVariants.map((size, index) => (
                        <button key={index} className="p-2 rounded-3xl bg-slate-200 w-28 text-center mt-5 mx-2">{size}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page