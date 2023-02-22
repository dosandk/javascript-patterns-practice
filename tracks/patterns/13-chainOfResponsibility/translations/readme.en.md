# Chain Of Responsibility

> Allows you to pass requests sequentially through a chain of handlers.
> Each subsequent handler decides whether it can process the request itself and
> Whether it is worth passing the request on down the chain.

- Type: Behavioral
- Complexity: ⭐⭐⭐

Imagine that you need to develop a tool to validate form input fields
Web application.

Since this is not the first time you have encountered such a task in practice,
you understand that the set of validation rules can be expanded in the future.

Also that a different set of rules may be applicable for different form fields.

For form fields with user password, the rules may be stricter compared to
for the form fields for entering the user's password, the rules may be stricter than the validation of the field for entering the user's nickname.

At the moment there are the following classes describing validation rules in the system:
`MinLengthHandler`, `NumbersHandler`, `LettersHander`, `CapitalLettersHandler`
and `SpecialCharsHandler`.

Their work is based on applying a regular expression to a string of
user input:

- `MinLengthHandler` - checks if string is at least 5 characters long
- `NumbersHandler` - checks if string contains at least one numeric character
- `LettersHandler` - checks if string contains at least one alphabetic character
- `CapitalLettersHandler` - checks that the string contains at least one uppercase alphabetic character
- `SpecialCharsHandler` - checks if string contains at least one special character

Please implement methods `setNext`, `next` and `validate` of class `Handler`,
which inherits the above classes.