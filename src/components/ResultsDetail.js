import React from "react";
import { View,Image,Text } from "react-native";

const ResultsDetail = ({result}) =>{
    return (
        <View style = {{marginLeft : 15}}>
            <Image style ={{width:250,height :120,borderRadius :4,marginBottom:5}} 
            source ={{uri:result.image_url}} ></Image>
            <Text style ={{fontWeight:'bold'}} >{result.name}</Text>
            <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
        </View>
    );

};
// const styles = Stylesheet.create({});

export default ResultsDetail;