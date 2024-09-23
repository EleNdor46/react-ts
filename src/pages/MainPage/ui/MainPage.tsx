import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton></BugButton>
      {t("Главная страница")} 
      <Counter/>
      <Input></Input>
    </div>
  );
};

export default MainPage;
