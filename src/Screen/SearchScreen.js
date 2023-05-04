import React, {useState}from 'react';
import {Text, ScrollView} from 'react-native';
import SearchBar from './SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen =({navigation})=>{


    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) =>{
        return results.filter(result => {
            return result.price ===price;
        });
    };
    return (
        <>
            <SearchBar 
            term = {term} 
            onTermChange={setTerm}
            onTermSubmit ={() => searchApi(term)} />
            {errorMessage ?<Text>{errorMessage}</Text>: null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
            <ResultList 
                results= {filterResultsByPrice('$')} 
                title ="Cost Effective"
                navigation = {navigation} />
            <ResultList 
                navigation = {navigation}
                results= {filterResultsByPrice('$$')} 
                title = "Bit Pricier" />
            <ResultList 
                results= {filterResultsByPrice('$$$')} 
                navigation = {navigation} 
                title ="Big Spender"/>
            </ScrollView>
        </>
    );
};

export default SearchScreen;