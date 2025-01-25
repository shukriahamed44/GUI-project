using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Airborne
{
    /// <summary>
    /// Interaction logic for ManageBookings.xaml
    /// </summary>
    public partial class ManageBookings : Page
    {
        private DatabaseClass _db = new DatabaseClass();
        public ManageBookings()
        {
            InitializeComponent();
            LoadData();
        }

        private void ModifyBooking_button(object sender, RoutedEventArgs e)
        {
            if(BookingsGrid.SelectedItem is Booking bookingrow)
            {
                Booking booking = new Booking();
                booking.NIC_number = bookingrow.NIC_number;
                booking.Name = bookingrow.Name;
                booking.Contact_number = bookingrow.Contact_number;
                booking.Email = bookingrow.Email;
                booking.Departure_airport = bookingrow.Departure_airport;
                booking.Arrival_airport = bookingrow.Arrival_airport;
                booking.number_of_passengers = bookingrow.number_of_passengers;
                booking.Departure_date = bookingrow.Departure_date;
                booking.Departure_time = bookingrow.Departure_time;
                booking.Flight_number = bookingrow.Flight_number;
                booking.Total_price = bookingrow.Total_price;

                AddorModifyBooking modifyBooking = new AddorModifyBooking(booking);

                if (modifyBooking.ShowDialog() == true)
                {
                    bookingrow.NIC_number = booking.NIC_number;
                    bookingrow.Name = booking.Name;
                    bookingrow.Contact_number = booking.Contact_number;
                    bookingrow.Email = booking.Email;
                    bookingrow.Departure_airport = booking.Departure_airport;
                    bookingrow.Arrival_airport = booking.Arrival_airport;
                    bookingrow.number_of_passengers = booking.number_of_passengers;
                    bookingrow.Departure_date = booking.Departure_date;
                    bookingrow.Departure_time = booking.Departure_time;
                    bookingrow.Flight_number = booking.Flight_number;
                    bookingrow.Total_price = booking.Total_price;

                    _db.BookingList.Update(booking);
                    _db.SaveChanges();
                    LoadData();
                }



                
        }
    }

        private void BookingsGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // Logic for handling selection change in the DataGrid
            if (BookingsGrid.SelectedItem is Booking selectedProduct)
            {
                MessageBox.Show($"Selected Product: {selectedProduct.Name}");
                MessageBox.Show($"Selected Product: {selectedProduct.NIC_number}");
                MessageBox.Show($"Selected Product: {selectedProduct.Contact_number}");
                MessageBox.Show($"Selected Product: {selectedProduct.Email}");
                MessageBox.Show($"Selected Product: {selectedProduct.Departure_airport}");
                MessageBox.Show($"Selected Product: {selectedProduct.Arrival_airport}");
                MessageBox.Show($"Selected Product: {selectedProduct.number_of_passengers}");
                MessageBox.Show($"Selected Product: {selectedProduct.Departure_date}");
                MessageBox.Show($"Selected Product: {selectedProduct.Departure_time}");
                MessageBox.Show($"Selected Product: {selectedProduct.Flight_number}");
                MessageBox.Show($"Selected Product: {selectedProduct.Total_price}");

            }
        }

        private void LoadData() //a function to show/display the datbase contents
        {
            BookingsGrid.ItemsSource = _db.BookingList.ToList();
        }

        private void DeleteAirport_button(object sender, RoutedEventArgs e)
        {
            
            if (BookingsGrid.SelectedItem is Booking selectedProduct)
            {
                _db.BookingList.Remove(selectedProduct);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void AddBooking_button(object sender, RoutedEventArgs e)
        {
            Booking newBooking = new Booking();
            AddorModifyBooking newAddBookingWindow = new AddorModifyBooking(newBooking);
            if (newAddBookingWindow.ShowDialog() == true)
            {
                _db.BookingList.Add(newBooking);
                _db.SaveChanges();
                LoadData();
            }

        }

        private void BookingsBack_button(object sender, RoutedEventArgs e)
        {
            
            NavigationService.Navigate(new Uri("Options.xaml", UriKind.Relative));
        }
    
    }
}
