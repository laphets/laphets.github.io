## Header File 
In general, each `.cc` should has an associated `.h`

## #define
In order to prevent multiple inclusion, should have `#ifndef` `#define` `#endif`.
`<PROJECT>_<PATH>_<FILE>_H_`

## Forward Declarations
Not understanding

## inline 
Define functions inline only when they are small, say, 10 lines or fewer.
recursive functions: not inline
virtual function: inline

> Review for inline

## Names and Order of Includes
File should be listed as descendants of the project's source directory
For example, google-awesome-project/src/base/logging.h should be included as:
```cpp
#include "base/logging.h"
```
Do not use `.` or `..`

In `dir/foo.cc`, you want implement `dir/foo.h`
The include order is:
- `dir/foo.h`
- A blank line
- C system file
- C++ system file
- A blank line
- Other libraries `.h` files
- Your project `.h` files


However, any includes present in the related header do not need to be included again in the related cc (i.e., foo.cc can rely on foo.h's includes).

## Namespace
Do not use using-directives (e.g. `using namespace foo`).

### inline namespace
In the outer namesapce, can directly access methods/variable without using scope resolution `::`