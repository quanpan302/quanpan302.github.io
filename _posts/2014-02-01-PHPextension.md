---
title: "PHP Extension"
categories:
  - SD
tags:
  - PHP Core
  - Zend Engine
  - Hacker
last_modified_at: 2014-02-01T12:00:00-10:00
---

PHP ships with the extensions most useful to the majority of developers. They are called "core" extensions. PHP extensions are usually called `php_*.dll` (where the star represents the name of the extension) and they are located under the `PHP\ext` folder.

- [What Is Zend? and What Is PHP?](#what-is-zend-and-what-is-php)
- [External Modules vs Built-in Modules](#external-modules-vs-built-in-modules)
- [Creating Extensions](#creating-extensions)

Extending PHP" is easier said than done. PHP has evolved to a full-fledged tool consisting of a few megabytes of source code, and to hack a system like this quite a few things have to be learned and considered.

This is not the most scientific and professional approach, but the method that's the most fun and gives the best end results. In the following sections, you'll learn quickly how to get the most basic extensions to work almost instantly. After that, you'll learn about Zend's advanced API functionality. 

- [PHP at the Core: A Hacker's Guide](https://www.php.net/manual/en/internals2.php){:target="_blank"}
- [Zend API: Hacking the Core of PHP](https://www.php.net/manual/en/internals2.ze1.zendapi.php){:target="_blank"}

## What Is Zend? and What Is PHP?

 The name Zend refers to the language engine, PHP's core. The term PHP refers to the complete system as it appears from the outside. This might sound a bit confusing at first, but it's not that complicated (see below). To implement a Web script interpreter, you need three parts:

1. The interpreter part analyzes the input code, translates it, and executes it.
2. The functionality part implements the functionality of the language (its functions, etc.).
3. The interface part talks to the Web server, etc.

Zend itself really forms only the language core, implementing PHP at its very basics with some predefined functions. PHP contains all the modules that actually create the language's outstanding capabilities. 

- Zend takes part 1 completely and a bit of part 2; 
- PHP takes parts 2 and 3. 
- Together they form the complete PHP package.

![](/assets/images/posts/2014-02-01-PHPextension/Zend.01-internal-structure.png)

## External Modules vs Built-in Modules

**External modules** can be loaded at script runtime using the function dl(). This function loads a shared object from disk and makes its functionality available to the script to which it's being bound. After the script is terminated, the external module is discarded from memory.

External modules are great for third-party products, small additions to PHP that are rarely used, or just for testing purposes. To develop additional functionality quickly, external modules provide the best results. For frequent usage, larger implementations, and complex code, the disadvantages outweigh the advantages.

**Built-in modules** are compiled directly into PHP and carried around with every PHP process; their functionality is instantly available to every script that's being run.

Built-in modules are best when you have a solid library of functions that remains relatively unchanged, requires better than poor-to-average performance, or is used frequently by many scripts on your site. The need to recompile PHP is quickly compensated by the benefit in speed and ease of use. However, built-in modules are not ideal when rapid development of small additions is required.

## Creating Extensions

Before we start discussing code issues, you should familiarize yourself with the source tree to be able to quickly navigate through PHP's files. This is a must-have ability to implement and debug extensions. 

### Source Layout

| Directory    | Contents |
| ------------ | -------- |
| php-src      | Main PHP source files and main header files; here you'll find all of PHP's API definitions, macros, etc. (important). Everything else is below this directory. |
| php-src/ext  | Repository for dynamic and built-in modules; by default, these are the "official" PHP modules that have been integrated into the main source tree. From PHP 4.0, it's possible to compile these standard extensions as dynamic loadable modules (at least, those that support it). |
| php-src/main | This directory contains the main php macros and definitions. (important) |
| php-src/pear | Directory for the PHP Extension and Application Repository. This directory contains core PEAR files. |
| php-src/sapi | Contains the code for the different server abstraction layers. |
| TSRM         | Location of the "Thread Safe Resource Manager" (TSRM) for Zend and PHP. |
| ZendEngine2  | Location of the Zend Engine files; here you'll find all of Zend's API definitions, macros, etc. (important). |

### A simple extension.

**Prepare structure**

Creating directory my_module

Creating basic files: `config.m4 my_module.c php_my_module.h` and `tests/001.phpt my_module.php`.

To use your new extension, you will have to execute the following steps:

1.  `cd ..`
2.  `vi ext/my_module/config.m4`
3.  `./buildconf`
4.  `./configure --[with|enable]-my_module`
5.  `make`
6.  `./php -f ext/my_module/my_module.php`
7.  `vi ext/my_module/my_module.c`
8.  `make`

Repeat steps 3-6 until you are satisfied with ext/my_module/config.m4 and
step 6 confirms that your module is compiled into PHP. Then, start writing
code and repeat the last two steps as often as necessary.

**config.m4**

```bash
dnl config.m4 for extension my_module

dnl Comments in this file start with the string 'dnl'.
dnl Remove where necessary. This file will not work
dnl without editing.

dnl If your extension references something external, use with:

dnl PHP_ARG_WITH(my_module, for my_module support,
dnl Make sure that the comment is aligned:
dnl [  --with-my_module             Include my_module support])

dnl Otherwise use enable:

dnl PHP_ARG_ENABLE(my_module, whether to enable my_module support,
dnl Make sure that the comment is aligned:
dnl [  --enable-my_module           Enable my_module support])

if test "$PHP_MY_MODULE" != "no"; then
  dnl Write more examples of tests here...

  dnl # --with-my_module -> check with-path
  dnl SEARCH_PATH="/usr/local /usr"     # you might want to change this
  dnl SEARCH_FOR="/include/my_module.h"  # you most likely want to change this
  dnl if test -r $PHP_MY_MODULE/; then # path given as parameter
  dnl   MY_MODULE_DIR=$PHP_MY_MODULE
  dnl else # search default path list
  dnl   AC_MSG_CHECKING([for my_module files in default path])
  dnl   for i in $SEARCH_PATH ; do
  dnl     if test -r $i/$SEARCH_FOR; then
  dnl       MY_MODULE_DIR=$i
  dnl       AC_MSG_RESULT(found in $i)
  dnl     fi
  dnl   done
  dnl fi
  dnl
  dnl if test -z "$MY_MODULE_DIR"; then
  dnl   AC_MSG_RESULT([not found])
  dnl   AC_MSG_ERROR([Please reinstall the my_module distribution])
  dnl fi

  dnl # --with-my_module -> add include path
  dnl PHP_ADD_INCLUDE($MY_MODULE_DIR/include)

  dnl # --with-my_module -> chech for lib and symbol presence
  dnl LIBNAME=my_module # you may want to change this
  dnl LIBSYMBOL=my_module # you most likely want to change this 

  dnl PHP_CHECK_LIBRARY($LIBNAME,$LIBSYMBOL,
  dnl [
  dnl   PHP_ADD_LIBRARY_WITH_PATH($LIBNAME, $MY_MODULE_DIR/lib, MY_MODULE_SHARED_LIBADD)
  dnl   AC_DEFINE(HAVE_MY_MODULELIB,1,[ ])
  dnl ],[
  dnl   AC_MSG_ERROR([wrong my_module lib version or lib not found])
  dnl ],[
  dnl   -L$MY_MODULE_DIR/lib -lm -ldl
  dnl ])
  dnl
  dnl PHP_SUBST(MY_MODULE_SHARED_LIBADD)

  PHP_NEW_EXTENSION(my_module, my_module.c, $ext_shared)
fi
```

**my_module.c**

```c
/* include standard header */
#include "php.h"

/* declaration of functions to be exported */
ZEND_FUNCTION(first_module);

/* compiled function list so Zend knows what's in this module */
zend_function_entry firstmod_functions[] =
{
    ZEND_FE(first_module, NULL)
    ZEND_FE_END
};

/* compiled module information */
zend_module_entry firstmod_module_entry =
{
    STANDARD_MODULE_HEADER,
    "First Module",
    firstmod_functions,
    NULL, 
    NULL, 
    NULL, 
    NULL, 
    NULL,
    NO_VERSION_YET,
    STANDARD_MODULE_PROPERTIES
};

/* implement standard "stub" routine to introduce ourselves to Zend */
#if COMPILE_DL_FIRST_MODULE
ZEND_GET_MODULE(firstmod)
#endif

/* implement function that is meant to be made available to PHP */
ZEND_FUNCTION(first_module)
{
    long parameter;

    if (zend_parse_parameters(ZEND_NUM_ARGS() TSRMLS_CC, "l", &parameter) == FAILURE) {
        return;
    }

    RETURN_LONG(parameter);
}
```

