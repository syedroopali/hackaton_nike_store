import CardSection from "@/components/CardSection";
import DontMissScetion from "@/components/DontMissScetion";
import EssentialSection from "@/components/EssentialSection";
import FeaturedSection from "@/components/FeaturedSection";
import FirstLookSection from "@/components/FirstLookSection";
import FooterLinksSection from "@/components/FooterLinksSection";
import GearUpSection from "@/components/GearUpSection";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <FirstLookSection />
      <CardSection />
      <FeaturedSection />
      <GearUpSection />
      <DontMissScetion />
      <EssentialSection />
      <FooterLinksSection />
    </div>
  );
};

export default page;
