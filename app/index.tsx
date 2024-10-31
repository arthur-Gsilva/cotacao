import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getDolar } from "../services/api";

export default function screen() {

    const [loading, setLoading] = useState(true)
    const [currentValue, setCurrentValue] = useState(0)

    const updateCurrency = async () => {
        setLoading(true)
        const dolar = await getDolar()
        setCurrentValue(dolar)
        setLoading(false)
    }

    useEffect(() => {
        updateCurrency()
    }, [])

    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/dolar.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            {loading &&
                <Text style={styles.h2}>Carregando...</Text>
            }

            {!loading &&
                <>
                    <Text style={styles.h2}>O dolar americano está: </Text>
                    <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)}</Text>
                </>
            }
            

            <Button label="Atualizar" onPress={updateCurrency}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B1C2D',
        paddingHorizontal: 20
    },

    logo: {
        width: 200,
        height: 180
    },

    h2: {
        color: '#CCC',
        fontSize: 24,
        marginTop: 30
    },

    currencyText: {
        color: '#fff',
        fontSize: 52,
        marginTop: 20,
        marginBottom: 40
    }
})