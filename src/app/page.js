import Image from "next/image";
import TopLayout from "@/components/TopLayout";
import Button from "@/components/Button"


export default function Home() {
  return (
    <TopLayout>
      <div className="flex items-center justify-center">
      <Image src="onboardImage.svg" alt="" width={254} height={193} />
      </div>
      <div className="text-center mt-15">
        <h1 className="text-lg font-bold mb-2">Gets things with TODOs</h1>
        <p className="text-sm text-[#000000B3] leading-5 px-6">
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.
        </p>
      </div>
      <div className="flex items-center justify-center mt-20">
        <Button label="Get Started" href="/register" />
      </div>
    </TopLayout>
  );
}
