
## Introduction

This is an example styleguide demonstrating the Default skin from [styledown-skins](https://github.com/drakeh/styledown-skins). The components and associated documentation are borrowed from the [Pure Framework](http://purecss.io/buttons/). 


## Buttons

### Default Buttons

To create a Pure Button, add the `pure-button` classname to any `<a>` or `<button>` element.

    @example
    a(href="#").pure-button A Pure Button
    button.pure-button A Pure Button

### Disabled Buttons

To mark a button as disabled, add the `pure-button-disabled` classname alongside `pure-button`.

    @example
    a(href="#").pure-button.pure-button-disabled A Disabled Button
    button.pure-button.pure-button-disabled A Disabled Button

### Primary Buttons

To indicate that a button represents a primary action, add the `pure-button-primary` classname alongside `pure-button`.

    @example
    a(href="#").pure-button.pure-button-primary A Primary Button
    button.pure-button.pure-button-primary A Primary Button


## Tables

### Default Table

To style an HTML table, add the `pure-table` classname. This class adds padding and borders to table elements, and emphasizes the header.

    @example
    table.pure-table
        thead
            tr
                th #
                th Make
                th Model
                th Year
        tbody
            tr
                td 1
                td Honda
                td Accord
                td 2009
            tr
                td 2
                td Toyota
                td Camry
                td 2012
            tr
                td 3
                td Hyundai
                td Elantra
                td 2010

