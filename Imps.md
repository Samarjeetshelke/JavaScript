The `box-sizing` property in CSS defines how the total width and height of an element are calculated. It can be set to one of two values: `content-box` (the default) or `border-box`. Understanding the difference between these two values is crucial for effective layout design in CSS.

### `box-sizing: content-box;` (Default)
When `box-sizing` is set to `content-box`, the `width` and `height` properties apply only to the content of the element. Padding and border are added outside of the specified width and height, which can make managing element sizes tricky.

**Example:**

```css
.example {
    box-sizing: content-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 5px solid black;
}
```

- **Content Width/Height**: 100px
- **Padding**: 10px on each side
- **Border**: 5px on each side
- **Total Width/Height**: 100px (content) + 20px (padding) + 10px (border) = 130px

In this case, the total width and height of the element will be 130px each, which includes the content, padding, and border.

### `box-sizing: border-box;`
When `box-sizing` is set to `border-box`, the `width` and `height` properties include the content, padding, and border. This makes it easier to manage the size of elements because the total size will not exceed the specified width and height.

**Example:**

```css
.example {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 5px solid black;
}
```

- **Content Width/Height**: 70px (calculated as 100px - 20px padding - 10px border)
- **Padding**: 10px on each side
- **Border**: 5px on each side
- **Total Width/Height**: 100px

In this case, the total width and height of the element will remain 100px each, as the padding and border are included within the specified width and height.

### Why Use `box-sizing: border-box;`?
- **Simplifies Layouts**: Makes it easier to define fixed-width layouts without having to account for padding and borders separately.
- **Consistency**: Ensures that elements stay within their specified sizes, reducing unexpected layout shifts.
- **Modern Best Practice**: Many modern CSS frameworks and resets (like Normalize.css) use `box-sizing: border-box` as the default to avoid the complexity of dealing with `content-box`.

### Applying `box-sizing: border-box;` Universally
It is common to apply `box-sizing: border-box` to all elements on a webpage for consistency. This can be done using the universal selector:

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

This ensures that all elements, including pseudo-elements, use the `border-box` model, leading to more predictable and manageable layouts.

### Visual Representation

#### `content-box` (Default)
```
|-----------|
|  Content  |  100px
|-----------|
| Padding   |  10px
|-----------|
| Border    |  5px
|-----------|

Total Width: 100px + 10px + 5px = 115px
```

#### `border-box`
```
|-----------|
|  Content  |  70px
|-----------|
| Padding   |  10px
|-----------|
| Border    |  5px
|-----------|

Total Width: 70px + 10px + 5px = 100px
```

By using `box-sizing: border-box;`, you simplify the layout and ensure elements adhere to their specified dimensions, including padding and border, resulting in more predictable and manageable designs.
