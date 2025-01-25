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
    /// Interaction logic for ManageAirports.xaml
    /// </summary>
    public partial class ManageAirports : Page
    {
        private DatabaseClass _db = new DatabaseClass();
        public ManageAirports()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData() //a function to show/display the datbase contents
        {
            AirportsGrid.ItemsSource = _db.AirportsList.ToList();
        }

        private void AirportsGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // Logic for handling selection change in the DataGrid
            if (AirportsGrid.SelectedItem is AirportsTable selectedProduct)
            {
                MessageBox.Show($"Selected Product: {selectedProduct.airport_Name}");
            }
        }

        private void AddAirport_button(object sender, RoutedEventArgs e)
        {
            AirportsTable newAirport = new AirportsTable();
            AddAirport newAddAirportWindow = new AddAirport(newAirport);

            if(newAddAirportWindow.ShowDialog() == true)
            {
                _db.AirportsList.Add(newAirport);
                _db.SaveChanges();
                LoadData();
            }

        }

        private void DeleteAirport_button(object sender, RoutedEventArgs e)
        {
            if (AirportsGrid.SelectedItem is AirportsTable selectedProduct)
            {
                _db.AirportsList.Remove(selectedProduct);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void MngAirportBack_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("Options.xaml", UriKind.Relative));
        }
    }
}
