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
    /// Interaction logic for Options.xaml
    /// </summary>
    public partial class Options : Page
    {
        public Options()
        {
            InitializeComponent();
        }


        private void sign_out_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("LoginPage.xaml", UriKind.Relative));


        }

        private void Airportslist_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("ManageAirports.xaml", UriKind.Relative));
        }

       

        private void Bookings_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("ManageBookings.xaml", UriKind.Relative));
        }

        private void ManageAircrafts_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("ManageAircrafts.xaml", UriKind.Relative));
        }

        private void ManageUsers_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("ManageUserAccounts.xaml", UriKind.Relative));
        }
    }
}
