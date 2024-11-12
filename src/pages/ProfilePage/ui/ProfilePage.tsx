import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/className";
import { Page } from "widgets/Page/Page";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard";
import { useParams } from "react-router-dom";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text title={"id error"} theme={TextTheme.ERROR} />;
    }

    return (
        <Page className={classNames("", {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
