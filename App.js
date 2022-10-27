// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';


//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({item}) => {
        return (
            <View
                style={{
                    flex: 1,
                    width: 395, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5EA33A'
                }}>
                <Image
                    style={styles.introImageStyle}
                    source={item.image} />
                <Text style={styles.introTextStyle}>
                    {item.title}
                </Text>
                <Text style={styles.introSubStyle}>{item.subtitle}</Text>
            </View>
        );
    };

    return (
        <>
            {showRealApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native App Intro Slider using AppIntroSlider
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip
                            from any slide or Done button at last
                        </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowRealApp(false)}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    showSkipButton={true}
                    onSkip={onSkip}
                />
            )}
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 100, height: 100, marginBottom: 70
    },
    introTextStyle: {
        color: "white", fontSize: 20, marginBottom: 50
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    introSubStyle: {
        color: "white", fontSize: 20, width: 350, textAlign: "center"
    }
});

const slides = [
    {
        key: 's1',
        title: "Browse  Food",
        subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
        image: require('./assets/image-slider-1.png'),
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: "Order Food",
        subtitle: "Hungry? Order food in just a few clicks and we’ll take care of you..",
        image: require('./assets/image-slider-2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: "Make Reservations",
        subtitle: "Book a table in advance to avoid waiting in line",
        image: require('./assets/image-slider-3.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: "Quick  Search",
        subtitle: "Quickly find food items you like the most",
        image: require('./assets/image-slider-4.png'),
        backgroundColor: '#3395ff',
    },
    {
        key: 's5',
        title: "Apple Pay",
        subtitle: "We know you’re busy, so you can pay with your phone in just one click",
        image: require('./assets/image-slider-5.png'),
        backgroundColor: '#3395ff',
    }
];

