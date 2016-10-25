// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function() {
    'use strict'

    // one(): Find one matching element using any CSS selector
    var one = function(selector) {
        return document.querySelector(selector)
    }

    // all(): Find all matching elements using any CSS selector
    var all = function(selector) {
        return document.querySelectorAll(selector)
    }

    // remove(): Remove an element
    // could also write return one(selector).remove()
    // can return window.md and chain functions on to eachother
    var remove = function(selector) {
        return document.querySelector(selector).remove()
    }

    // addClass(): Add a CSS class to an element
    var addClass = function(selector, className) {
        document.querySelector(selector).classList.add(className)
        return document.querySelector(selector)
    }

    // removeClass(): Remove a CSS class from an element
    var removeClass = function(selector, className) {
        document.querySelector(selector).classList.remove(className)
        return document.querySelector(selector)
    }

    // hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
    var hasClass = function(selector, className) {
        return document.querySelector(selector).classList.contains(className)
    }

    // getAttr(): Get an HTML attribute from an element
    var getAttr = function(selector, attribute) {
        return document.querySelector(selector).getAttribute(attribute)
    }

    // setAttr(): Set an HTML attribute on an element
    var setAttr = function(selector, attribute, value) {
        document.querySelector(selector).setAttribute(attribute, value)
        return document.querySelector(selector)
    }

    // setHTML(): Set the innerHTML of an element
    var setHTML = function(selector, value) {
        document.querySelector(selector).innerHTML = value
        return document.querySelector(selector)
    }

    // getHTML(): Get the innerHTML of an element
    var getHTML = function(selector) {
        return document.querySelector(selector).innerHTML
    }

    // filpPage()
    var flipPage = function(degrees) {
        one('body').style.transform = "rotate(" + degrees + "deg)"
    }

    // ajax() function that fetches API data
    var ajax = function(url, successCallback) {
        fetch(url)
        .then(res => res.json())
        .then(res => res.results)
        .then(successCallback)
    }

    // getProp() function that gets an element's object property value.
    var getProp = function(selector, property) {
        return one(selector)[property]
        // can't use (selector).property because it takes it literally and thinks you're looking for a property called property
    }

    // setProp() function that sets an element's object property value.
    var setProp = function(selector, property, value) {
        one(selector)[property] = value
        return one(selector)
    }

    // getValue() function that sets an form field's value attribute.
    var getValue = function(selector) {
        return one(selector).value
    }

    // setValue() function that sets an form field's value attribute.
    var setValue = function(selector, value) {
        one(selector).value = value
        return one(selector)
    }

    // addEvent() function that adds an event listener and callback function to an element.
    var addEvent = function(selector, listener, eventToAdd) {
        md.one(selector).addEventListener(listener, eventToAdd)
    }


    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        flipPage: flipPage,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        setValue: setValue,
        addEvent: addEvent,
    }

}())
