# Command

> Turns queries into objects, allowing you to pass them as arguments
> when calling methods, queuing requests, logging them,
> as well as supporting undo operations.

- Type: Behavioral
- Complexity: ⭐⭐⭐

Imagine that you are developing a Web application to display various
documentation.

You are faced with the task of implementing convenient pagination - navigating
pages of the application.

In order to improve usability, you decided that moving
pages can be navigated not only with buttons, but also, for example, with
hotkeys, for example.

Also, you would like the functionality of components, such as buttons, to be independent
on the functionality of the pagination.

To solve the problem you decided to use the "Command" pattern.

Please implement the `execute` methods of classes `NextPage` and `PrevPage` and
and also link their functionality to the class `Button` that describes the component
button.

When executing commands to go to the previous or next page, objects of
the objects of classes `NextPage` and `PrevPage` must change the states of the pagination object
created by the class `Pagination`.