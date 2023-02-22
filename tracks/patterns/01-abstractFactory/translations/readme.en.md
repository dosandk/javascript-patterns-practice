# Abstract Factory

> Allows you to create families of related objects without being bound to
allows you to create families of related objects without being bound > to specific classes of objects you create.

- Type: Creational
- Complexity: ⭐⭐

Imagine you are developing a complex library of UI components
for a web application.

During the implementation, you had the need to create components in
in the course of the implementation, you had the need to create components in the same style.

For example, the button or notification component can be displayed in green,
to confirm successful user actions.

Or the component can be colored red, which will
or the component can be colored red to signal an error in the process of some action.

In order to be able to flexibly create, extend, and customize
you decided to use the Abstract Factory pattern in order to flexibly create and expand and customize your component library.

Please implement method `create` for each of factories: `SuccessControl`,
`ErrorControl`, which will create components of the corresponding type.

Also implement an abstract factory `ControlsFactory` which will create the factories
`SuccessControl` and `ErrorControl`