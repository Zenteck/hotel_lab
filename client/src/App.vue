<template lang="html">
  <div id="app">
    <bookings-form/>
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import { eventBus } from './main';
import BookingService from './services/BookingService';

export default {
  name: "app",
  data(){
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
  this.fetchData();

  eventBus.$on('booking-added', booking => this.bookings.push(booking));

  eventBus.$on('booking-deleted', id => {
    const index = this.bookings.findIndex(booking => booking._id === id);
    this.bookings.splice(index, 1);
  })
},
methods: {
  fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background: url('https://i.pinimg.com/originals/b8/f7/09/b8f709e8166d9abf9be10d1ba46b4dbc.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
