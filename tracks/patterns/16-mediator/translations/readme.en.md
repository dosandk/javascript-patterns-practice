# Mediator

> Allows you to reduce the connectivity of multiple classes to each other,
> by moving these connections to a single intermediate class.

- Type: Behavioral
- Complexity: ⭐⭐

Imagine that your friends like to spend time together in different cafes, but
trouble is, in those cafes, the check for payment is given only per table, not per
each guest individually.

![](/assets/friends.png)

This causes difficulties in calculating the amount of payment for each participant from
Your company.

You decided to fix this inconvenience by implementing the `BillSharing` class,
and your friends made it easier by agreeing to always share the amount
of the check equally among themselves.

The only additional condition is to add the function "borrow from your friends,
which will allow in the case of a shortage of funds from one of your friends, to divide
this lack of money among the other participants of the get-togethers.

Implement methods `addParticipant`, `share` and `borrow` of class `BillSharing`.
And also methods `pay` and `borrow` of class `User`