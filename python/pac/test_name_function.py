import unittest
from name_function import get_formatted_name


class NameTestCase(unittest.TestCase):

    def test_first_last_name(self):
        format_name = get_formatted_name('yang', 'can')
        self.assertEqual(format_name, 'Yang Can')

unittest.main()

# import unittest
# from name_function import get_formatted_name


# class NameTestCase(unittest.TestCase):

#     def test_first_last_name(self):
#         formatted_name = get_formatted_name('janis', 'joplin')
#         self.assertEqual(formatted_name, 'JanisJoplin')

# unittest.main()
