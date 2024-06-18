import { Button } from "@/components/ui/button";

import { RocketIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import Link from "next/link";

const CTAButton = () => {
  const t = useTranslations("LandingPage");
  return (
    <Link href="/project">
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <RocketIcon />
        {t("CTAButton.title")}
      </Button>
    </Link>
  );
};

export default CTAButton;

