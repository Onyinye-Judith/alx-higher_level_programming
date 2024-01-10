#!/usr/bin/python3

def no_c(my_string):
    filtered_string = ''.join(cha for char in my_string if char.lower() != 'c')
    return filtered_string
