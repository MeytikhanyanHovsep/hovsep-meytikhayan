import Image from "next/image";
import { memo } from "react";

type Props = { title: string; description: string; name: string };

const Item = memo(function Item({ title, description, name }: Props) {
    return (
        <div
            id={name}
            className="group hover:blur-none! transition-all duration-300 rounded-[20px] relative max-2xl:p-[2px] p-[3px] overflow-hidden transform-gpu"
        >
            <div className="absolute z-[-1]  rounded-[17px] w-full h-full 0 left-0 transition-opacity duration-500  opacity-0 group-hover:opacity-100  bg-linear-to-b from-primary/50 via-transparent to-transparent  " />

            <div className="z-10 h-full  rounded-[16px] flex flex-col mt-[3px] bg-linear-to-b from-black/50 to-dark/80 p-5 gap-5 max-md:gap-2 max-2xl:gap-3 max-2xl:p-4">
                <Image
                    alt={name}
                    src={`/images/icons/${name}.png`}
                    width={70}
                    height={50}
                    className="max-h-[50px] max-md:h-7 max-2xl:max-h-9 max-w-max mb-2 object-contain"
                />
                <h2 className="text-2xl max-md:text-[18px] max-2xl:text-[20px] text-white">
                    {title}
                </h2>
                <p className="text-gray max-md:text-[12px] max-2xl:text-[14px]">
                    {description}
                </p>
            </div>
        </div>
    );
});

export default Item;
