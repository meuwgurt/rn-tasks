import { View, Text, SafeAreaView } from "react-native";
import { styles } from './style';

const Header = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Todo CheckList</Text>
                <Text style={styles.description}>오늘도 목표를 향해 열심히 달려보세요!</Text>
            </View>
        </SafeAreaView>
    );
};

export default Header;