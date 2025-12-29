import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import StepProgress from '../StepProgess'
import SuccessSection from './SucessSection'
import BookingInfo from './BookingInfo'
import TicketActions from './TicketActions'

const PaymentSuccess = () => {
  return (
    <SafeAreaView style = {{flex : 1 , paddingHorizontal : 15 , paddingVertical : 15 , backgroundColor : "white"}}>
            <StepProgress activeSteps={['Seats' , 'Pickup' , 'Details' , 'Verify' , 'Payment' , 'Ticket']} />
            <ScrollView style = {{backgroundColor : "white"}}>
               {/* Payment SuccessFull Section */}
               <SuccessSection />

               {/* Booking Information Section */}
               <BookingInfo />

               {/* Ticket Actions Section */}
               <TicketActions />
            </ScrollView> 
        </SafeAreaView>
  )
}

export default PaymentSuccess