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
    /// Interaction logic for ManageAircrafts.xaml
    /// </summary>
    public partial class ManageAircrafts : Page
    {
        private DatabaseClass _db = new DatabaseClass();
        public ManageAircrafts()
        {
            InitializeComponent();
            LoadData();
        }

        private void AddAircraft_button(object sender, RoutedEventArgs e)
        {
            Aircraft_Details newAircraft = new Aircraft_Details();
            AddAircraft newAddAircraftWindow = new AddAircraft(newAircraft);
            if (newAddAircraftWindow.ShowDialog() == true)
            {
                _db.AircraftsList.Add(newAircraft);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void LoadData() //a function to show/display the database contents
        {
            AircraftsGrid.ItemsSource = _db.AircraftsList.ToList();
        }

        private void AircraftsGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // Logic for handling selection change in the DataGrid
            if (AircraftsGrid.SelectedItem is Aircraft_Details selectedProduct)
            {
                MessageBox.Show($"Selected Product: {selectedProduct.Aircraft_ID}");
                MessageBox.Show($"Selected Product: {selectedProduct.Aircraft}");
                MessageBox.Show($"Selected Product: {selectedProduct.Location}");
            }
        }

        private void UpdateLocation_button(object sender, RoutedEventArgs e)
        {
            if (AircraftsGrid.SelectedItem is Aircraft_Details aircraftt)
            {
                Aircraft_Details modaircraft = new Aircraft_Details();

                modaircraft.Aircraft_ID = aircraftt.Aircraft_ID;
                modaircraft.Aircraft = aircraftt.Aircraft;
                modaircraft.Location = aircraftt.Location;

                AddAircraft modifyAircraft = new AddAircraft(modaircraft);

                if(modifyAircraft.ShowDialog() == true)
                {
                    aircraftt.Aircraft_ID = modaircraft.Aircraft_ID;
                    aircraftt.Aircraft = modaircraft.Aircraft;
                    aircraftt.Location = modaircraft.Location;
                    _db.AircraftsList.Update(modaircraft);
                    _db.SaveChanges();
                    LoadData();
                }


             }  

                
         }

        private void RemoveAircraft_button(object sender, RoutedEventArgs e)
        {
            if (AircraftsGrid.SelectedItem is Aircraft_Details selectedAircraft)
            {
                _db.AircraftsList.Remove(selectedAircraft);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void AircraftsBack_button(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("Options.xaml", UriKind.Relative));
        }

      
    }
}
