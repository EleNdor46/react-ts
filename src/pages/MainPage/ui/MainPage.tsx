import { BugButton } from "app/providers/ErrorBoundary";
import { NotificationList } from "entities/Notification";
import { RaitingCard } from "entities/Raiting";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/Popus";
import { StarRating } from "shared/ui/StarRating/StarRating";
import { Page } from "widgets/Page/Page";
const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <RaitingCard title="oceni" feedbackTitle={"you"} hasFeedback />
        </Page>
    );
};

export default MainPage;
