import React, {useState} from 'react'
import { View, Button, Text } from 'react-native'

function Ex04(){

    const estilo1 = {
        flexDirection: 'column',
        vecViews: [
            {flex:2, backgroundColor:'red'},
            {flex:1, backgroundColor:'purple'},
            {flex:3, backgroundColor:'green'},
            {flex:1, backgroundColor:'magenta'},
            {flex:2, backgroundColor:'yellow'}
        ]
    }

    const estilo2 = {
        flexDirection: 'row',
        vecViews: [
            {flex:3, backgroundColor:'#a9a114'},
            {flex:2, backgroundColor:'#12ac9b'},
            {flex:1, backgroundColor:'#406863'},
            {flex:4, backgroundColor:'#e4a1dc'},
            {flex:1, backgroundColor:'#a3d98d'}
        ]
    }

    const [aparencia, setAparencia] = useState(estilo1)

    return(
        <View style={{flex:1}}>
            <Button 
                title='row'
                onPress={()=>setAparencia(estilo2)}
            />
            <Button 
                title='column'
                onPress={()=>setAparencia(estilo1)}
            />

            <View style={{flex:1, flexDirection:aparencia.flexDirection}}>
                <View style={{
                    flex:aparencia.vecViews[0].flex, 
                    backgroundColor:aparencia.vecViews[0].backgroundColor}}
                >
                </View>

                <View style={{
                    flex:aparencia.vecViews[1].flex, 
                    backgroundColor:aparencia.vecViews[1].backgroundColor}}
                >
                </View>

                <View style={{
                    flex:aparencia.vecViews[2].flex, 
                    backgroundColor:aparencia.vecViews[2].backgroundColor}}
                >
                </View>

                <View style={{
                    flex:aparencia.vecViews[3].flex, 
                    backgroundColor:aparencia.vecViews[3].backgroundColor}}
                >
                </View>

                <View style={{
                    flex:aparencia.vecViews[4].flex, 
                    backgroundColor:aparencia.vecViews[4].backgroundColor}}
                >
                </View>

            </View>

        </View>
    );
}

export default Ex04;