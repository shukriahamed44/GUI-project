   M S B A M L   `   `   `  ����C  ?Airborne, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null#clr-namespace:AirborneAirborne  5      !    Airborne.ManageUserAccounts   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      (localclr-namespace:Airborne     5        N� 
Background
  ����� N� Title$ ManageUserAccounts��5
      .��5      �  � RowDefinitions 5   
   �� 5      $
��122* �6   �� 5      $	��40* �6   �� 5      $	��33* �6   �� 5      $	��20* �6   �� 5      $	��33* �6   �� 5      $	��20* �6   �� 5      $	��33* �6   �� 5      $	��68* �6   �� 5      $	��33* �6   �� 5      $	��24* �6   �� 5      $	��24* �6   �� 5      $	��65* �6    � ColumnDefinitions 5   
   �� 5      $
��0.9* �6   �� 5      $��* �6   .+�5"   
   �� $��0��6   $��0��6#   $��2��60   $��0q�6D   ��5#      �� 5$       �� ImageSource$8 2pack://application:,,,/imagesdesktopapp/userac.png��6    j� Stretch$ UniformToFill=�6^   5&      � 5)   
   $��11��6   $��1��5*      $��0��5+      ���#4d4d4d5,      �� 5/   
   -   5        $��0��5/      $��2��50      
����������#4d4d4d$��	40 0 40 0q�53      $��Add User��55      $��	helvetica)�56      $��20(�57      6   �� 5:   
   -   5        $��0��5:      $��4��5;      
����������#4d4d4d$��	helvetica)�5>      $��20(�5?      $��	40 0 40 0q�5@      $��Modify User��5A      6'   �� 5D   
   -   5        $��0��5D      $��6��5E      
����������#4d4d4d$��	helvetica)�5H      $��20(�5I      $��	40 0 40 0q�5J      $��Remove User��5K      6+   �� 5N   
   -   5        $��0��5N      $��8��5O      ���#757575
�������$��	helvetica)�5R      $��20(�5S      $��	40 0 40 0q�5T      $
��Back��5U      6   �� 5X   
   $��0��6   $��10��5Y      
�������$��1��5[       J� Opacity$	 0.5Q�5\      � 5^   
   $��11��6   $��0��6   .+�5_      �� ._�5`      �� $*��$imagesdesktopapp/main_logo_white.png��6   $��35��5a      $
��Left=�5b      $��	40 5 5 5 q�5c      5f      5g      �� 5i   
   $��2��6   $��1��6!   $��	helvetica)�5j      ���#4d4d4d$��20(�5l      $��medium"�5m      $
��left=�5n      $��20 0 0 0q�5o      User Accounts5q   $   &   System.Windows.Controls.DataGrid  5s   
   -   5          Name$ UserDetailsGrid��5u      $��3��5s      $��9��6    $��1��61      AutoGenerateColumns$
 True��5v      $��
20 0 20 40q�5w      $��Stretch=�5x      $��Stretch=�5y      5|      5�      5�      