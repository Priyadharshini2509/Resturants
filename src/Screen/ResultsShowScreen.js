import React ,{useEffect, useState}from 'react';
import { View,Text,FlatList,Image } from 'react-native';
import yelp from '../Api/yelp';

const ResultsShowScreen = ({ navigation,route}) =>{

    const {id} = route.params;
    const [result,setResult] = useState(null);
    
//    const id = navigation.getParam('id');
    console.log(result);

    const getResult = async () =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result){
        return null;
    }

    return (
        <View>
            {/* <Text>ResultList</Text> */}
            {/* <Text>
                {(navigation.id)}
            </Text> */}
             <Text>{result.name}</Text>
             <FlatList>
                data = {result.photos}
                keyExtractor={(photo) => photo}
                renderItem = {({ item}) =>{
                    return <Image style= {{height : 200,width:300,}} source = {{uri : item}}/>
                }}
             </FlatList>
        </View>
    );
}

export default ResultsShowScreen;