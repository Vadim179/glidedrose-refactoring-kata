# Changelog & Planning

### Patch 1

- I renamed the file to main.ts.
- After carefully analyzing the file, I came up with a plan to divide and conquer the code paths one by one.
- I will use only OOP to maintain a singular paradigm.
- My plan is to separate items into their own classes, extending from a base class, and have a factory instantiate them to have more separation of concerns and respect the single responsibility principle.
- Created an enum to highlight the items we want custom classes for.
- According to the requirements: _"Conjured" items degrade in Quality twice as fast as normal items_. This means that the "Conjured" item class should not have its own implementation but instead it should rely on the base class's implementation to respect the open-closed principle. I think we can apply a modifier parameter to the base class.
