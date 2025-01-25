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
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace Airborne
{
    /// <summary>
    /// Interaction logic for ManageUserAccounts.xaml
    /// </summary>
    public partial class ManageUserAccounts : Page
    {
        private DatabaseClass _db = new DatabaseClass();
        public ManageUserAccounts()
        {
            InitializeComponent();
            LoadData();
        }

        private void AddUser_button(object sender, RoutedEventArgs e)
        {
            UserDetails newUser = new UserDetails();
            AddModUserAC newAddModWindow = new AddModUserAC(newUser);

            if(newAddModWindow.ShowDialog() == true)
            {
                _db.UserDetailsList.Add(newUser);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void LoadData() //a function to show/display the database contents
        {
            UserDetailsGrid.ItemsSource = _db.UserDetailsList.ToList();
        }

        private void UserDetailsGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // Logic for handling selection change in the DataGrid
            if (UserDetailsGrid.SelectedItem is UserDetails selecteduser)
            {
                MessageBox.Show($"Selected Product: {selecteduser.User_ID}");
                MessageBox.Show($"Selected Product: {selecteduser.User_Name}");
                MessageBox.Show($"Selected Product: {selecteduser.User_Email}");
                MessageBox.Show($"Selected Product: {selecteduser.username}");
                MessageBox.Show($"Selected Product: {selecteduser.password}");
                MessageBox.Show($"Selected Product: {selecteduser.accountType}");

            }
        }

        private void ModifyUser_button(object sender, RoutedEventArgs e)
        {
            if (UserDetailsGrid.SelectedItem is UserDetails usert)
            {
                UserDetails moduser = new UserDetails();

                moduser.User_ID = usert.User_ID;
                moduser.User_Name = usert.User_Name;
                moduser.User_Email = usert.User_Email;
                moduser.username = usert.username;
                moduser.password = usert.password;
                moduser.accountType = usert.accountType;

                AddModUserAC modUserWindow = new AddModUserAC(moduser);

                if (modUserWindow.ShowDialog() == true)
                {
                    usert.User_ID = moduser.User_ID;
                    usert.User_Name = moduser.User_Name;
                    usert.User_Email = moduser.User_Email;
                    usert.username = moduser.username;
                    usert.password = moduser.password;
                    usert.accountType = moduser.accountType;

                    _db.SaveChanges();
                    LoadData();
                }


            }
        }

        private void RemoveUser_button(object sender, RoutedEventArgs e)
        {
            if(UserDetailsGrid.SelectedItem is UserDetails selectedUser)
            {
                _db.UserDetailsList.Remove(selectedUser);
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
