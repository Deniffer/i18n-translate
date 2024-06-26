import { useTranslations } from "next-intl";
import React from "react";
import { IconType } from "react-icons";
import { FaToolbox } from "react-icons/fa6";
import { RoughNotation } from "react-rough-notation";

interface FeatureItem {
  title: string;
  content: string;
  icon: IconType;
}

interface FeatureProps {
  title: string;
  content: string;
  icon: string;
}

const icons: Record<string, IconType> = {
  FaToolbox: FaToolbox,
};

const Feature = ({ id }: { id: string }) => {
  const t = useTranslations("LandingPage");
  const FEATURES: FeatureItem[] = t
    .raw("Feature.list")
    .map((item: FeatureProps) => ({
      title: item.title,
      content: item.content,
      icon: icons[item.icon],
    }));
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {t("Feature.title")}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES?.map((feature: FeatureItem, index: number) => (
          <div
            key={feature.title}
            className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index === 0 ? "md:border-r" : ""}
              ${index === 1 ? "lg:border-r" : ""}
              ${index === 2 ? "md:border-r lg:border-r-0" : ""}
              ${index === 3 ? "lg:border-b-0 lg:border-r" : ""}
              ${index === 4 ? "md:border-b-0 md:border-r" : ""}
              ${index === 5 ? "border-b-0 border-r-0" : ""}
            `}
          >
            <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
              {feature.icon &&
                React.createElement(feature.icon, { className: "text-2xl" })}
            </div>
            <h3 className={"text-xl font-semibold mb-2"}>{feature.title}</h3>
            <p className="text-slate-700 dark:text-slate-400">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;

