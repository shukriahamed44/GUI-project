   M S B A M L   `   `   `  ����C  ?Airborne, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null#clr-namespace:AirborneAirborne  5   	       Airborne.AddAircraft   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   (localclr-namespace:Airborne     5   	     � Title$  AddAircraft��5   	   $	��450��6   $	��800��6*   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��auto �6   �� 5      $	�� 2* �6   �� 5      $	�� 2* �6   �� 5      $�� * �6   �� 5      $�� * �6   �� 5      $�� 0.5*  �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� $��0��6   $��0��5      $��2��5      $��	Helvetica)�5      $��35(�5      $��Center=�5      $
��Bold"�5       �� Padding$ 25q�5      $��Add/ Modify Aircrafts��5       �� 5"   
   $��1��6   $��0��5#      $��3��5$      .+�5'      �� $��	Helvetica)�6   $��25(�5(      $
��Left=�5)      $ 50 10 30 10q�5*      $��70 10q�5+      $��Aircraft ID��5-      �� 5/      $��	Helvetica)�6   $
��Left=�50      $ 50 10 30 10q�51      $��70 10q�52      $��25(�53      $��Aircraft��55      �� 57      $��	Helvetica)�6   $
��Left=�58      $ 50 10 30 10q�59      $��70 10q�5:      $��25(�5;      $��Location��5=      5@      �� 5B   
   $��1��6   $��1��5C      $��3��5D      .+�5F      �� -   5         ��Name$ AircraftIDTextbox��5H      $��20 20 60 0 q�5F      $��10q�5G      5H      �� 5J      -   5        $ AircraftTextbox��5M      $��10q�5K      $��
20 27 60 0q�5L      5M      �� 5P      -   5        $ LocationTextbox��5S      $��10q�5Q      $��
20 27 60 0q�5R      5S      5W      �� 5Y   
   -   5        $��4��5Z      ���#4c739e
�������$��	Helvetica)�5]      $��20(�5^      $��10q�5_      $��	55 5 55 5q�5`      .��5d   	   Add Aircraft5e      �� 5g   
   -   5        $��4��5h      $��1��5i      ���#4c739e
�������$��	Helvetica)�5l      $��20(�5m      $��10q�5n      $��	35 5 55 5q�5o      .��5r      Discard Changes5s      5t      5u      