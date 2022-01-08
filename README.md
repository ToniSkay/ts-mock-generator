# TS Mock Generator

This project was created for generating json mocks from typescript interfaces and vice versa.
<br><br>
<a href="https://toniskay.github.io/ts-mock-generator/">DEMO</a>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Guide for use

### If you want create json mock from interface:
 - You need to select `Interface To Mock` tab in header.
 - Then you need fill textarea with 'INTERFACE' name.
    - Interface should equal structure base typescript interfaces, for example: `{ color: string; width: boolean; }`.
 - Click to 'Generate' button.
 - Pay attention to  another textarea with 'MOCK' name. There you can see mock based on your interface.

##### TS Mock Generator supports almost all modern tips in intrefaces, such as: 
 - Optional Properties. `{ color?: string; width?: number; }`
 - Double type with `undefined` (other types support will be add in next releases) `{ color: string | undefined; width: number | undefined; }`
 - Another interface in type. `{ color: ColorInterface; width: WidthInterface; }`.
 - Enum in type. `{ color: ColorEnum; width: WidthEnum; }`

##### If you want add additional interface or enum:
 - Click to "Add additional data" button.
 - Pay attention to modal window.
 - Select type in first field. Interface or Enum.
 - Provide name in second field (name need to equal interface/enum name in base interface).
 - Provide interface or mock in third field.
 - Click 'Save changes' button.

Also you can remove not needed additional interface by click to trash can icon.
