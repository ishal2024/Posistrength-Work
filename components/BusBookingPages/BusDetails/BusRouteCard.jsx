import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DroppingPointsAccordion = ({ isFirst, isLast, item }) => {

    return (
        <View key={item.id} style={styles.pointRow}>
            {/* Left side: Time */}
            <View style={styles.timeContainer}>
                <Text style={[styles.timeText, isFirst && styles.highlightText]}>
                    {item.time}
                </Text>
            </View>

            {/* Center side: Timeline Indicator */}
            <View style={styles.timelineContainer}>
                {/* Vertical Line */}
                {!isLast && <View style={styles.verticalLine} />}

                {/* Indicator Dot */}
                <View style={[
                    styles.dot,
                    isFirst ? styles.dotFirst : (isLast ? styles.dotLast : styles.dotMiddle)
                ]}>
                    {isFirst && <View style={styles.dotInner} />}
                </View>
            </View>

            {/* Right side: Location */}
            <View style={styles.locationContainer}>
                <Text style={[styles.locationText, isFirst && styles.locationTextFirst]}>
                    {item.location}
                </Text>
                {isLast && (
                    <View style={styles.lastBadge}>
                        <Text style={styles.lastBadgeText}>Last Stop</Text>
                    </View>
                )}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    //   container: {
    //     marginHorizontal: 16,
    //     marginVertical: 10,
    //     backgroundColor: '#FFFFFF',
    //     borderRadius: 16,
    //     // Shadow for iOS
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 4 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 8,
    //     // Elevation for Android
    //     elevation: 4,
    //     overflow: 'hidden',
    //   },
    //   header: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     padding: 16,
    //     backgroundColor: '#FFFFFF',
    //   },
    //   headerActive: {
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#F1F3F5',
    //   },
    //   headerTitleRow: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //   },
    //   iconCircle: {
    //     width: 36,
    //     height: 36,
    //     borderRadius: 18,
    //     backgroundColor: '#FFF3E0',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginRight: 12,
    //   },
    //   headerTitle: {
    //     fontSize: 16,
    //     fontWeight: '700',
    //     color: '#2D3436',
    //   },
    //   content: {
    //     paddingTop: 20,
    //     paddingHorizontal: 16,
    //     paddingBottom: 10,
    //   },
    pointRow: {
        flexDirection: 'row',
        minHeight: 70,
    },
    timeContainer: {
        width: 75,
        alignItems: 'flex-start',
        paddingTop: 2,
    },
    timeText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#636E72',
    },
    highlightText: {
        color: '#FF5722',
        fontWeight: '800',
    },
    timelineContainer: {
        width: 30,
        alignItems: 'center',
    },
    verticalLine: {
        position: 'absolute',
        width: 2,
        backgroundColor: '#E9ECEF',
        top: 20,
        bottom: 0,
        zIndex: -1,
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },
    dotFirst: {
        borderColor: '#FF5722',
        width: 18,
        height: 18,
        borderRadius: 9,
        marginTop: 2,
    },
    dotInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FF5722',
    },
    dotMiddle: {
        borderColor: '#ADB5BD',
    },
    dotLast: {
        borderColor: '#4CAF50',
        backgroundColor: '#4CAF50',
    },
    locationContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 25,
    },
    locationText: {
        fontSize: 15,
        color: '#2D3436',
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    locationTextFirst: {
        fontWeight: '700',
        color: '#1A1A1A',
    },
    lastBadge: {
        backgroundColor: '#E8F5E9',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginTop: 4,
    },
    lastBadgeText: {
        color: '#2E7D32',
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});

export default DroppingPointsAccordion;



// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   LayoutAnimation,
//   Platform,
//   UIManager,
// } from 'react-native';
// import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// // Enable LayoutAnimation for Android
// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const DroppingPointsAccordion = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Dummy Data - Keys match your requirement exactly
//   const droppingPoints = [
//     { id: 34, location: "Nahariya Chauraha", time: "08:00 AM", city_id: 137 },
//     { id: 35, location: "Main Bus Stand Road", time: "08:20 AM", city_id: 137 },
//     { id: 36, location: "Railway Station Gate No. 2", time: "08:45 AM", city_id: 137 },
//     { id: 37, location: "City Center Square", time: "09:15 AM", city_id: 137 },
//   ];

//   const toggleAccordion = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     setIsOpen(!isOpen);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Accordion Header */}
//       <TouchableOpacity
//         style={[styles.header, isOpen && styles.headerActive]}
//         onPress={toggleAccordion}
//         activeOpacity={0.7}
//       >
//         <View style={styles.headerTitleRow}>
//           <View style={styles.iconCircle}>
//             <MaterialCommunityIcons name="map-marker-radius" size={20} color="#FF5722" />
//           </View>
//           <Text style={styles.headerTitle}>Dropping Points</Text>
//         </View>
//         <Feather
//           name={isOpen ? "chevron-up" : "chevron-down"}
//           size={24}
//           color={isOpen ? "#FF5722" : "#636E72"}
//         />
//       </TouchableOpacity>

//       {/* Accordion Content */}
//       {isOpen && (
//         <View style={styles.content}>
//           {droppingPoints.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === droppingPoints.length - 1;

//             return (
//               <View key={item.id} style={styles.pointRow}>
//                 {/* Left side: Time */}
//                 <View style={styles.timeContainer}>
//                   <Text style={[styles.timeText, isFirst && styles.highlightText]}>
//                     {item.time}
//                   </Text>
//                 </View>

//                 {/* Center side: Timeline Indicator */}
//                 <View style={styles.timelineContainer}>
//                   {/* Vertical Line */}
//                   {!isLast && <View style={styles.verticalLine} />}
                  
//                   {/* Indicator Dot */}
//                   <View style={[
//                     styles.dot, 
//                     isFirst ? styles.dotFirst : (isLast ? styles.dotLast : styles.dotMiddle)
//                   ]}>
//                     {isFirst && <View style={styles.dotInner} />}
//                   </View>
//                 </View>

//                 {/* Right side: Location */}
//                 <View style={styles.locationContainer}>
//                   <Text style={[styles.locationText, isFirst && styles.locationTextFirst]}>
//                     {item.location}
//                   </Text>
//                   {isLast && (
//                     <View style={styles.lastBadge}>
//                       <Text style={styles.lastBadgeText}>Last Stop</Text>
//                     </View>
//                   )}
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 16,
//     marginVertical: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     // Elevation for Android
//     elevation: 4,
//     overflow: 'hidden',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   headerActive: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#F1F3F5',
//   },
//   headerTitleRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconCircle: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF3E0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   headerTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#2D3436',
//   },
//   content: {
//     paddingTop: 20,
//     paddingHorizontal: 16,
//     paddingBottom: 10,
//   },
//   pointRow: {
//     flexDirection: 'row',
//     minHeight: 70,
//   },
//   timeContainer: {
//     width: 75,
//     alignItems: 'flex-start',
//     paddingTop: 2,
//   },
//   timeText: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#636E72',
//   },
//   highlightText: {
//     color: '#FF5722',
//     fontWeight: '800',
//   },
//   timelineContainer: {
//     width: 30,
//     alignItems: 'center',
//   },
//   verticalLine: {
//     position: 'absolute',
//     width: 2,
//     backgroundColor: '#E9ECEF',
//     top: 20,
//     bottom: 0,
//     zIndex: -1,
//   },
//   dot: {
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 4,
//   },
//   dotFirst: {
//     borderColor: '#FF5722',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     marginTop: 2,
//   },
//   dotInner: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#FF5722',
//   },
//   dotMiddle: {
//     borderColor: '#ADB5BD',
//   },
//   dotLast: {
//     borderColor: '#4CAF50',
//     backgroundColor: '#4CAF50',
//   },
//   locationContainer: {
//     flex: 1,
//     paddingLeft: 10,
//     paddingBottom: 25,
//   },
//   locationText: {
//     fontSize: 15,
//     color: '#2D3436',
//     fontWeight: '500',
//     textTransform: 'capitalize',
//   },
//   locationTextFirst: {
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   lastBadge: {
//     backgroundColor: '#E8F5E9',
//     alignSelf: 'flex-start',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 4,
//     marginTop: 4,
//   },
//   lastBadgeText: {
//     color: '#2E7D32',
//     fontSize: 10,
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
// });

// export default DroppingPointsAccordion;