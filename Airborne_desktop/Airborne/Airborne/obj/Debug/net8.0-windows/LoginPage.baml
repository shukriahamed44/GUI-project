   M S B A M L   `   `   `  ����C  ?Airborne, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null#clr-namespace:AirborneAirborne  5          Airborne.LoginPage   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      (localclr-namespace:Airborne     5        N� 
Background
  ����� N� Title$ 	LoginPage��5
      .��5      �  � RowDefinitions 5      �� 5      $
��1.5* �6    �� 5      $��2* �6    �� 5      $
��1.2* �6    �� 5      $��2* �6    �� 5      $��* �6    �� 5      $��* �6    �� 5      $��* �6    �� 5      $��* �6    �� 5      $��* �6    �� 5      $��* �6    �� 5      $��* �6     � ColumnDefinitions 5      �� 5       $
��4.5* �6#   �� 5!      $�� 5.5* �6#   .+�5$      �� $��11��6   $��0��6'   $��0q�68   ��5%      �� 5&       �� ImageSource$8 2pack://application:,,,/imagesdesktopapp/lnd_pg.png��6!    j� Stretch$ UniformToFill=�6b   5(      �� 5*      $��1��6   $��1��6"   ��5+      �� 5,      $@ :pack://application:,,,/imagesdesktopapp/main_logo_gray.png��6!   $ Uniform=�6j   5.      �� 50      $��1��6   $��2��6(   $��	Helvetica)�51      $��27(�52      $��Medium"�53      ���#4d4d4d$��center=�55      $��Management System��56      58      �� 5:      $��1��6   $��3��5;      $��	Helvetica)�5<      $��40(�5=      $
��Bold"�5>      ���#4d4d4d$��Center=�5A       �� Padding$ 10q�5B      $��Admin Portal��5E      �� 5G      $��1��6   $��4��5H      $��	Helvetica)�5I      $��20(�5J      $��Medium"�5K      ���#4d4d4d$
��left=�5M      $ 	35 5 5 10q�5N      $��username��5O      �� 5Q      $��1��6   $��5��5R      $��	35,2,35,2q�5S      $��2q�5U      $��17(�5V      $��Center=�5W      ���#4a4a4a5X      �� 5[      $��1��6   $��6��5\      $��	Helvetica)�5]      $��20(�5^      $��Medium"�5_      ���#4d4d4d$
��left=�5a      $ 	35 5 5 10q�5b      $��password��5c      �� 5e      $��1��6   $��7��5f   
   $��	35,2,35,2q�5g   
   $��10q�5h   
   $��2q�5i   
   �� 5l      -   5        $��8��5l      $��1��5m      $��2��5n      $��35 15q�5o      $��	helvetica)�5p      $��20(�5q      
�������$��0q�5s       � Cursor$
 Hand��5u      $��Sign In��5w      ��5y      �� 5z       �� 
StartPoint$	 0,0&�6*   	 �� EndPoint$		 1,1&�6;   .��5{      � 
 � Color$
 #4c739e��6'    � Offset$	 0.0Q�67   � 5|      $
 #98c7ef��6'   $	 1.0Q�67   5}      5      5�      5�      