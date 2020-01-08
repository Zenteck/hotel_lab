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
import { eventBus } from '../main';
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
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}

.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.5);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
