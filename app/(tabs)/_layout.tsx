import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import All from "./all";
import Active from "./active";
import Closed from "./closed";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
    return (
        <Tab.Navigator initialRouteName="All">
            <Tab.Screen name="All" component={All} options={{ title: '전체'}} />
            <Tab.Screen name="Active" component={Active} options={{ title: '진행중'}} />
            <Tab.Screen name="Closed" component={Closed} options={{ title: '완료'}} />
        </Tab.Navigator>
    );
}