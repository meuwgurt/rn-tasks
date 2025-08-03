import { Stack } from "expo-router";
import Header from "@/components/header";

export default function Layout() {
    return (
        <Stack screenOptions={{
            header: () => <Header />,
        }}>

        </Stack>
    );
};