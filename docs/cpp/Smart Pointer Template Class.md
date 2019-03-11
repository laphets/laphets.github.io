## Why we need smart pointer?
Manage heap memory manually is tedious.

share_point


include <memory>

For auto_ptr
```cpp
template<class X> class auto_ptr {
public:
  explicit auto_ptr(X* p = 0) throw ();
}
```
(The throw() notation, recall, means this constructor doesn’t throw an exception)

```cpp
unique_ptr<double> pdu(new double); // pdu an unique_ptr to double
shared_ptr<string> pss(new string); // pss a shared_ptr to string
```