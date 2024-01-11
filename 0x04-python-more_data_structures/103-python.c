#include <stdio.h>
#include <Python.h>

void print_python_list(PyObject *p) {
	if (PyList_Check(p)) {
		Py_ssize_t size = PyList_Size(p);
		printf("[*] Python list info\n");
		printf("[*] Size of the Python List = %zd\n", size):printf("[*] Allocated = %zd\n", ((PyListObject *)p)->allocated);
		for (Py_ssize_t i = 0; i < size; ++i) {
			PyObject *item = PyList_GetItem(p, i);
			printf("Element %zd: %s\n", i, Py_TYPE(item)->tp_name);
        }
    } else {
	    printf("  [ERROR] Invalid List Object\n");
    }
}

void print_python_bytes(PyObject *p) {
	if (PyBytes_Check(p)) {
		Py_ssize_t size = PyBytes_Size(p);
		char *bytesData = PyBytes_AsString(p);
		printf("[.] bytes object info\n");
		printf("  [.] Size: %zd\n", size);
		printf("  [.] trying string: %s\n", bytesData);

        printf("  [.] first 10 bytes: ");
        for (Py_ssize_t i = 0; i < size && i < 10; ++i) {
            printf("%02hhx", bytesData[i]);
            if (i < 9) {
                printf(" ");
            }
        }
        printf("\n");
    } else {
        printf("  [ERROR] Invalid Bytes Object\n");
    }
}
