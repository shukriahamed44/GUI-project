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
    /// Interaction logic for AddModUserAC.xaml
    /// </summary>
    public partial class AddModUserAC : Window
    {
        public UserDetails NewUser { get; set; }
        public AddModUserAC(UserDetails argNewUser)
        {
            InitializeComponent();
            NewUser = argNewUser;
        }

        private void AddUser_button(object sender, RoutedEventArgs e)
        {
            NewUser.User_ID = UserID_button.Text;
            NewUser.User_Name = Name_button.Text;
            NewUser.User_Email = Email_button.Text;
            NewUser.username = username_button.Text;
            NewUser.password = password_button.Text;
            NewUser.accountType = account_button.Text;

            DialogResult = true;
            Close();
        }

        private void Discard_button(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
