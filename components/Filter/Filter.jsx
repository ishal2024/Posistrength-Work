import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './FilterStyleSheet'
import { MaterialIcons } from "@expo/vector-icons"
import SortBy from './SortBy'
import BusType from './BusType'
import Amenities from './Amenities'
import BusOperator from './BusOperator'
import DepartureTime from './DepartureTime'
import PriceRange from './PriceRange'
import Header from './Header'

const Filter = () => {

    const [isSortByOpen, setSortByOpen] = useState(false)
    const [isBusTypeOpen, setBusTypeOpen] = useState(false)
    const [isDepartureTimeOpen, setDepartureTimeOpen] = useState(false)
    const [isPriceRangeOpen, setPriceRangeOpen] = useState(false)
    const [isBusOperatorOpen, setBusOperatorOpen] = useState(false)
    const [isAmenitiesOpen, setAmenitiesOpen] = useState(false)

    return (
        <View style = {{flex : 1 , paddingBottom : 120}}>
                {/* Header  */}
                <Header />
            <ScrollView>
                {/* Add Horizontal line here  */}
                {/* Sort By Category */}
                <TouchableOpacity style={styles.card} onPress={() => setSortByOpen((prev) => !prev)}>
                    <Text style={styles.label}>Sort By</Text>
                    {isSortByOpen ?
                    <MaterialIcons name="keyboard-arrow-up" size={22} color="#FF6B00" />
                    :
                    <MaterialIcons name="keyboard-arrow-down" size={22}  color="#6B6B6B" />}
                </TouchableOpacity>
                {isSortByOpen && <SortBy />}

                {/* Filter By Bus Type */}
                <TouchableOpacity style={styles.card} onPress={() => setBusTypeOpen((prev) => !prev)}>
                    <Text style={styles.label}>Bus Type</Text>
                    {isBusTypeOpen ?
                    <MaterialIcons name="keyboard-arrow-up" size={22} color="#FF6B00" />
                    :
                    <MaterialIcons name="keyboard-arrow-down" size={22}  color="#6B6B6B" />}
                </TouchableOpacity>
                {isBusTypeOpen && <BusType />}

                {/* Filter By Deaprture Time */}
                <TouchableOpacity style={styles.card} onPress={() => setDepartureTimeOpen((prev) => !prev)}>
                    <Text style={styles.label}>Deaprture Time</Text>
                    {isDepartureTimeOpen ?
                    <MaterialIcons name="keyboard-arrow-up" size={22} color="#FF6B00" />
                    :
                    <MaterialIcons name="keyboard-arrow-down" size={22}  color="#6B6B6B" />}
                </TouchableOpacity>
                {isDepartureTimeOpen && <DepartureTime />}

                {/* Filter By Price Range */}
                <TouchableOpacity style={styles.card} onPress={() => setPriceRangeOpen((prev) => !prev)}>
                    <Text style={styles.label}>Price Range</Text>
                    {isPriceRangeOpen ?
                    <MaterialIcons name="keyboard-arrow-up" size={22} color="#FF6B00" />
                    :
                    <MaterialIcons name="keyboard-arrow-down" size={22}  color="#6B6B6B" />}
                </TouchableOpacity>
                {isPriceRangeOpen && <PriceRange />}


                {/* Filter By Bus Operators */}
                <TouchableOpacity style={styles.card} onPress={() => setBusOperatorOpen((prev) => !prev)}>
                    <Text style={styles.label}>Bus Operators</Text>
                    {isBusOperatorOpen ?
                    <MaterialIcons name="keyboard-arrow-up" size={22} color="#FF6B00" />
                    :
                    <MaterialIcons name="keyboard-arrow-down" size={22}  color="#6B6B6B" />}
                </TouchableOpacity>
                {isBusOperatorOpen && <BusOperator />}

                {/* Filter by Amenities */}
                <TouchableOpacity style={styles.card} onPress={() => setAmenitiesOpen((prev) => !prev)}>
                    <Text style={styles.label}>Amenities</Text>
                    {isAmenitiesOpen ?
                    <MaterialIcons name="keyboard-arrow-up" size={22} color="#FF6B00" />
                    :
                    <MaterialIcons name="keyboard-arrow-down" size={22}  color="#6B6B6B" />}
                </TouchableOpacity>
                {isAmenitiesOpen && <Amenities />}
            </ScrollView>

            {/* Apply Filter Button */}
            <View style={styles.footer}>
                {/* Cancel Button */}
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

                {/* Apply Button */}
                <TouchableOpacity style={styles.applyBtn}>
                    <Text style={styles.applyText}>Apply Filters</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Filter

