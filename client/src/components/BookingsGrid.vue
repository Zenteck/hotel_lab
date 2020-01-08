<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <p>{{ booking.name }}</p>
      <p>{{ booking.email }}</p>
      <p>{{ booking.checked_in }}</p>

      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
    </div>
  </div>
</template>

<script>
mport { eventBus } from '../main';
import BookingService from '@/services/BookingService.js';
export default {

  name: "bookings-grid",
	props: ["bookings"],
	filters: {
		format(value){
			return new Date(value).toLocaleString().substring(0, 10);
    }},

  methods: {
    deleteBooking(id) {
      BookingService.deleteBooking(id)
      .then(() => eventBus.$emit('booking-deleted', id)
    )}}

}

</script>

<style lang="css" scoped>
</style>
