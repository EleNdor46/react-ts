import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Page } from "widgets/Page/Page";
const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <BugButton></BugButton>
            <ListBox
                defautlValue="Choose..."
                onChange={(value: string) => {}}
                value={undefined}
                items={[
                    { value: "12", content: "122" },
                    { value: "13", content: "123" },
                    { value: "14", content: "124" },
                    { value: "15", content: "125", disabled: true },
                ]}
            ></ListBox>
        </Page>
    );
};

export default MainPage;
