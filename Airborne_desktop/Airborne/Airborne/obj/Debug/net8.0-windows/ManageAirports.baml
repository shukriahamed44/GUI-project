   M S B A M L   `   `   `  ����C  ?Airborne, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null#clr-namespace:AirborneAirborne  5          Airborne.ManageAirports   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      (localclr-namespace:Airborne     5        N� 
Background
  ����� N� Title$ ManageAirports��5
      .��5      �  � RowDefinitions 5   
   �� 5      $
��122* �6   �� 5      $	��30* �6   �� 5      $	��30* �6   �� 5      $	��20* �6   �� 5      $	��30* �6   �� 5      $	��68* �6   �� 5      $	��30* �6   �� 5      $	��24* �6   �� 5      $	��24* �6   �� 5      $	��65* �6    � ColumnDefinitions 5   
   �� 5      $
��0.9* �6   �� 5      $��* �6   .+�5   
   �� $��0��6   $��0��6#   $��2��60   $��0q�6D   ��5       �� 5!       �� ImageSource$D >pack://application:,,,/imagesdesktopapp/airport_management.png��6    j� Stretch$ UniformToFill=�6j   5#      �� 5%   
   $��0��6   $��1��6!   $��	helvetica)�5&      
�������$��70(�5(      $
��Bold"�5)      $��Right=�5*       �� Padding$ 	0,20,40,0q�5+      
Airports5,      � 5.   
   $��9��6   $��1��5/      $��0��50      ���#4d4d4d51      �� 54   
   -   5        $��0��54      $��2��55      
����������#4d4d4d$��	40 0 40 0q�58      $��Add Airport��59      $��	helvetica)�5:      $��20(�5;      6   �� 5>   
   -   5        $��0��5>      $��4��5?      
����������#4d4d4d$��	helvetica)�5B      $��20(�5C      $��	40 0 40 0q�5D      $��Remove Airport��5E      6*   �� 5H   
   -   5        $��0��5H      $��6��5I      ���#757575
�������$��	helvetica)�5L      $��20(�5M      $��	40 0 40 0q�5N      $
��Back��5O      6   �� 5R   
   $��0��6   $��8��5S      
�������$��1��5U       J� Opacity$	 0.5Q�5V      � 5X   
   $��9��6   $��0��6   .+�5Y      �� ._�5Z      �� $*��$imagesdesktopapp/main_logo_white.png��6   $��35��5[      $
��Left=�5\      $��	40 5 5 5 q�5]      5`      5a      �� 5c   
   $��2��6   $��1��6!   $��	helvetica)�5d      ���#4d4d4d$��20(�5f      $��medium"�5g      $
��left=�5h      $��20 0 0 0q�5i      Available airports list5k   .   &   System.Windows.Controls.DataGrid  5m   
   -   5          Name$ AirportsGrid��5o      $��3��5m      $��7��6    $��1��61   	   AutoGenerateColumns$
	 True��5p      $��
20 0 20 40q�5q      $��Stretch=�5r      $��Stretch=�5s      5v      5|      5}      