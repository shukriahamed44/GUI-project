   M S B A M L   `   `   `  ����C  ?Airborne, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null#clr-namespace:AirborneAirborne  5          Airborne.Options   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      (localclr-namespace:Airborne     5        N� 
Background
  ����� N� Title$ Options��5
       � 	Resources 5         BackgroundAnimation �� TargetProperty g� Duration g� RepeatBehavior �� Value �� KeyTime��%u  &	        �� 5   
   .��5      �� $D >(Grid.Background).(LinearGradientBrush.GradientStops)[0].Color�6+   $ 0:0:5D�5   /   $ Forever��6@   .g�5      �� $ 	LightBlue��6&   $ 0:0:0��68   �� 5      $ 	CadetBlue��6&   $ 0:0:2��68   �� 5      $ #4c739e��6&   $ 0:0:4��66   5      �� 5      $D >(Grid.Background).(LinearGradientBrush.GradientStops)[1].Color�6+   $ 0:0:5D�5   /   $ Forever��6@   .g�5      �� $ 	LightBlue��6&   $ 0:0:0��6:   �� 5      $ CornflowerBlue��6&   $ 0:0:2��6=   �� 5      $ #4c739e��6&   $ 0:0:4��66   5      5      5      .��5      �  � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $��8* �6   �� 5       $��2* �6   	 � ColumnDefinitions	 5#   
   �� 5$      $��2* �6   �� 5%      $��* �6   .+�5(   
   � $��0��6   $��0��6   ��5)      �� 5*      
 �� 
StartPoint$	
 0,0&�6&    �� EndPoint$	 1,1&�67   .��5+      �  � Color$ #4c739e��6#    � Offset$	 0.0Q�63   � 5,      $ #98c7ef��6#   $	 1.0Q�63   5-       � Triggers 50      :� 51       :� RoutedEvent$ Loaded��6   .[�52      �� #��[  6"   54      57      �� 59   
   $��0��6   $��1��6!   $��	Helvetica)�5:      $��27(�5;      $��Medium"�5<       �� Padding$ 5 5 5 5q�5=      ���#4d4d4d$��center=�5?      $��Admin Portal��5@      �� 5B   
   $��1��6   $��2��6"   .+�5C      �� -   5        $��Bookings��5C      $	��250��5D      $��	helvetica)�5E      $��20(�5F      $��5 5 5 5q�5G      ���#4d4d4d
�������$��Center=�5J      $��	0 60 0 10q�5L      6(   �� 5M      -   5        $��Manage Airports��5M      $	��250��5N      $��	helvetica)�5O      $��20(�5P      $��5 5 5 5q�5Q      ���#4d4d4d
�������$��Center=�5T      $��0 5 0 10q�5V      6'   �� 5W      -   5        $��Manage Aircrafts��5W      $	��250��5X      $��	helvetica)�5Y      $��20(�5Z      $��5 5 5 5q�5[      ���#4d4d4d
�������$��Center=�5^      $��0 5 0 10q�5_      6'   �� 5a      -   5        $��Manage User Accounts��5a      $	��250��5b      $��	helvetica)�5c      $��20(�5d      $��5 5 5 5q�5e      ���#4d4d4d
�������$��Center=�5h      $��0 5 0 10q�5j      �� 5l      $��1��6   ���#4d4d4d$��	0 600 0 0q�62   5n      � 5p   
   $��2��6   $��0��6   .+�5q      �� ._�5r      �� $)��#imagesdesktopapp/main_logo_gray.png��6   $��40��5s      $
��Left=�5t      $��	40 5 5 5 q�5u       J� Opacity$	 0.5Q�5v      5x      5y      �� 5{   
   -   5        $��2��5{      $��1��6   $��40 20 40 20q�5|      $��	helvetica)�5}      $��22(�5~      
����������#9f9f9f.��5�      
Sign Out6   5�      5�      