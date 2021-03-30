import React from 'react'
import {StyleSheet, Text , View , Image , ScrollView , SafeAreaView} from 'react-native'

export default function EventDetails(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>

            <View style={styles.icon}>
                <Image
                source={require('../assets/star.png')}
                />
            </View>

            <View style={styles.title}>
              <Text style={styles.titleText}>Przykładowa nazwa wydarzenia</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                 source={require('../assets/city.jpg')}
                />   
            </View>

            <View style={styles.informationContainer}>
                <Text style={styles.informationTitle}>
                     <Image
                source={require('../assets/clock.png')}
                />  
                    Data wydarzenia 
                </Text>
                <Text style={styles.informationText}>15.09.2022 , godzina 18:00</Text>               
            </View>

            <View style={styles.informationContainer}>
                <Text style={styles.informationTitle}>
                     <Image
                source={require('../assets/City.png')}
                />  
                    Adres wydarzenia 
                </Text>
                <Text style={styles.informationText}>Województwo Małopolskie</Text>
                <Text style={styles.informationText}>Kraków ul.Floriańska 25</Text>                    
            </View>

            <View style={styles.informationContainer}>
                <Text style={styles.informationTitle}>
                     <Image
                source={require('../assets/user.png')}
                />  
                   Twórca
                </Text>

                <Text style={styles.informationText}>Jan Kowalski</Text>               
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.informationTitle}>Opis wydarzenia</Text>

                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d3d3d3",
    },
    imageContainer:{
        marginTop:15,
    },
    image:{
        width:"90%",
        height:150,
        resizeMode:'contain',
        alignSelf:'center',
        borderRadius:25,
        marginBottom:30,
    },
    icon:{
        position:'absolute',
        alignSelf:'flex-end',
        top:5,
        right:10,
    },
    title:{
        alignSelf:'flex-start',
        alignItems:'center',
        marginTop:10,
        left:10,
        
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
    },
    informationContainer:{
        marginBottom:20,
    },
    informationTitle:{
        fontWeight:'bold',
        fontSize:24,
        marginLeft:5,
    },
    informationText:{
        marginTop:10,
        marginLeft:10,
        fontSize:17,
        fontFamily:'sans-serif-light',
    },
    descriptionContainer:{
        marginBottom:20,
        width:'95%',
        alignItems:'center',
        alignSelf:'center',
        
    },
    description:{
     alignSelf:'flex-start',
     marginTop:20,
     marginLeft:10,
     fontSize:15,
     lineHeight:25,
    },
})