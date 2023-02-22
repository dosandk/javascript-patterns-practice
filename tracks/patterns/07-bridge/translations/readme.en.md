# Bridge

> Divides one or more classes into two separate hierarchies - abstraction
> and implementation, allowing them to change independently of each other.

- Type: Structural
- Complexity: ⭐⭐⭐

Imagine that you are working on a library of graphical components for a
Web-application. Imagine you are working on a library of graphical components for a Web application
each component could have a number of visual representations
depending on which color palette will be applied to the component.

You understand that the color palette, as well as the nuances of the display, in the process of
growth of the application will be one of the vectors of development, in other words
the app may have buttons in green, red, orange, etc
color scheme, etc. The same is true for other components, which
will lead to the appearance of "green buttons," "red notifiers,"
"blue sliders," etc.

It is also obvious that the number of components in the application
the number of components in the application will also increase.

Fortunately, you are familiar with the "Bridge" pattern and are ready to apply it to solve
of the problem you have.

Please bind the classes `RedColorsPallet` and `GreenColorsPallet`
with the class `Notification` by applying the Bridge pattern.