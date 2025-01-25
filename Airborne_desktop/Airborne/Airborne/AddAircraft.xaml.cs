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
    /// Interaction logic for AddAircraft.xaml
    /// </summary>
    public partial class AddAircraft : Window
    {
        public Aircraft_Details newAircraft { get; set; } 
        public AddAircraft(Aircraft_Details argAircraft)
        {
            InitializeComponent();
            newAircraft = argAircraft;
        }

        private void Save_Aircraft(object sender, RoutedEventArgs e)
        {
            newAircraft.Aircraft_ID = AircraftIDTextbox.Text;
            newAircraft.Aircraft = AircraftTextbox.Text;
            newAircraft.Location = LocationTextbox.Text;

            DialogResult = true;
            Close();

        }

        private void Discard_button(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
