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
using System.Windows.Shapes;

namespace Airborne
{
    /// <summary>
    /// Interaction logic for AddorModifyBooking.xaml
    /// </summary>
    /// 
    
    public partial class AddorModifyBooking : Window
    {
        public Booking NewBooking { get; set; }
        public AddorModifyBooking(Booking argBooking)
        {
            InitializeComponent();
            NewBooking = argBooking;
        }

        private void AddBooking_button(object sender, RoutedEventArgs e)
        {
            NewBooking.NIC_number = NicNumber_button.Text;
            NewBooking.Name = Name_button.Text;
            NewBooking.Contact_number = ContactNumber_button.Text;
            NewBooking.Email = Email_button.Text;
            NewBooking.Departure_airport = DepartureAirport_button.Text;
            NewBooking.Arrival_airport = ArrivalAirport_button.Text;
            NewBooking.number_of_passengers = NumberOfPassengers_button.Text;
            NewBooking.Departure_date = DateOfDeparture_button.Text;
            NewBooking.Departure_time = TimeOfDeparture_button.Text;
            NewBooking.Flight_number = FlightNumber_button.Text;
            NewBooking.Total_price = TotalPrice_button.Text;

            DialogResult = true;
            Close();
        }

        private void Discard(object sender, RoutedEventArgs e)
        {   
            Close();
        }
    }
}
