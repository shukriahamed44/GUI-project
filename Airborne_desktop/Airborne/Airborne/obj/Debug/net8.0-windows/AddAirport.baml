   M S B A M L   `   `   `  ����C  ?Airborne, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null#clr-namespace:AirborneAirborne  5   	       Airborne.AddAirport   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   (localclr-namespace:Airborne     5   	     � Title$  
AddAirport��5   	   $	��450��6   $	��800��6)   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��auto �6   �� 5      $	�� 2* �6   �� 5      $	�� 2* �6   �� 5      $�� * �6   �� 5      $�� * �6   �� 5      $�� 0.5*  �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� $��0��6   $��0��5      $��2��5      $��	Helvetica)�5      $��35(�5      $��Center=�5      $
��Bold"�5       �� Padding$ 25q�5      $��Add Airport��5       �� 5"   
   $��1��6   $��0��5#      $��3��5$      .+�5'      �� $��	Helvetica)�6   $��25(�5(      $
��Left=�5)      $ 50 10 30 10q�5*      $��70 10q�5+      $��
Airport ID��5-      �� 5/      $��	Helvetica)�6   $
��Left=�50      $ 50 10 30 10q�51      $��70 10q�52      $��25(�53      $��Airport Name��55      58      �� 5:   
   $��1��6   $��1��5;      $��3��5<      .+�5>      �� -   5         ��Name$ AirportIDTextbox��5@      $��20 20 60 0 q�5>      $��10q�5?      5@      �� 5B      -   5        $ AirportNameTextbox��5E      $��10q�5C      $��
20 27 60 0q�5D      5E      5I      �� 5K   
   -   5        $��4��5L      ���#4c739e
�������$��	Helvetica)�5O      $��20(�5P      $��10q�5Q      $��	55 5 55 5q�5R      .��5V      Add Airport5W      �� 5Y   
   $��4��5Z      $��1��5[      ���#4c739e
�������$��	Helvetica)�5^      $��20(�5_      $��10q�5`      $��	35 5 55 5q�5a      .��5c      Discard Changes5d      5f      5g      