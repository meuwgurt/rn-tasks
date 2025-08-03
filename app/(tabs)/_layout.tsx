import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{

            }}
        >
            <Tabs.Screen
                name="all"
                options={{
                    title: "전체",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="active"
                options={{
                    title: "진행 중",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="closed"
                options={{
                    title: "완료",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="checkmark-circle" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
};