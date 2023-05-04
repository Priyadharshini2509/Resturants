import React from "react";
import { View,Text,FlatList,TouchableOpacity} from "react-native";
import { withNavigation } from 'react-navigation';
import ResultsDetail from "./ResultsDetail";
import ResultsShowScreen from "../Screen/ResultsShowScreen";
    
const ResultList = ({ title, results,navigation}) =>{
    
    if(!results.length){
        return null;
    }
    
    return( 
    <View style = {{marginBottom : 10}}>
        <Text style = {{fontSize : 18,fontWeight : 'bold',marginLeft : 15,marginBottom:5}} >{title}</Text>
        {/* <Text>Results : {results.length}</Text> */}
        <FlatList
        horizontal 
        showsHorizontalScrollIndicator = {false}
        data = {results}
        keyExtractor={(result) => result.id}
        renderItem = {({item}) =>{
            return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen',{id : item.id})}>
                <ResultsDetail result ={item} />
            </TouchableOpacity>
            );
        }}
        />
    </View>
    );
};


export default withNavigation (ResultList);
