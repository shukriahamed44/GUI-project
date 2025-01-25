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
    /// Interaction logic for AddAirport.xaml
    /// </summary>
    public partial class AddAirport : Window
    {
        public AirportsTable NewAirport { get; set; }
        public AddAirport( AirportsTable argAirport)
        {
            InitializeComponent();
            NewAirport = argAirport;

        }

        private void Save_Airport(object sender, RoutedEventArgs e)
        {
            NewAirport.airport_Name = AirportNameTextbox.Text;
            NewAirport.Id = Convert.ToInt32(AirportIDTextbox.Text);

            DialogResult = true;
            Close();

        }
    }
}
