/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./var/arr */ 16),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/getProto */ 67),
	__webpack_require__(/*! ./var/slice */ 21),
	__webpack_require__(/*! ./var/concat */ 39),
	__webpack_require__(/*! ./var/push */ 40),
	__webpack_require__(/*! ./var/indexOf */ 24),
	__webpack_require__(/*! ./var/class2type */ 20),
	__webpack_require__(/*! ./var/toString */ 41),
	__webpack_require__(/*! ./var/hasOwn */ 23),
	__webpack_require__(/*! ./var/fnToString */ 42),
	__webpack_require__(/*! ./var/ObjectFunctionString */ 68),
	__webpack_require__(/*! ./var/support */ 7),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./core/DOMEval */ 43),
	__webpack_require__(/*! ./core/toType */ 10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr, document, getProto, slice, concat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, isFunction, isWindow, DOMEval, toType ) {

"use strict";

var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/isFunction.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/document.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return window.document;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/*!*********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/selector.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./selector-sizzle */ 70) ], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/init.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ./var/rsingleTag */ 48),

	__webpack_require__(/*! ../traversing/findFilter */ 49)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, isFunction, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/data/var/dataPriv.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../Data */ 52)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
	"use strict";

	return new Data();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/rnothtmlwhite.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://infra.spec.whatwg.org/#ascii-whitespace
	return ( /[^\x20\t\r\n\f]+/g );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/support.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/access.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/toType */ 10),
	__webpack_require__(/*! ../var/isFunction */ 1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, toType, isFunction ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/nodeName.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};

return nodeName;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/toType.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/class2type */ 20),
	__webpack_require__(/*! ../var/toString */ 41)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type, toString ) {

"use strict";

function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

return toType;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/*!*********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/deferred.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/slice */ 21),
	__webpack_require__(/*! ./callbacks */ 31)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, isFunction, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/traversing.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/indexOf */ 24),
	__webpack_require__(/*! ./traversing/var/dir */ 73),
	__webpack_require__(/*! ./traversing/var/siblings */ 74),
	__webpack_require__(/*! ./traversing/var/rneedsContext */ 50),
	__webpack_require__(/*! ./core/nodeName */ 9),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./traversing/findFilter */ 49),
	__webpack_require__(/*! ./selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, dir, siblings, rneedsContext, nodeName ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/*!******************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/event.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/documentElement */ 30),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./var/slice */ 21),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./core/nodeName */ 9),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, documentElement, isFunction, rnothtmlwhite,
	slice, dataPriv, nodeName ) {

"use strict";

var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/*!*****************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./ajax/var/location */ 88),
	__webpack_require__(/*! ./ajax/var/nonce */ 64),
	__webpack_require__(/*! ./ajax/var/rquery */ 63),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./ajax/parseXML */ 89),
	__webpack_require__(/*! ./event/trigger */ 37),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./serialize */ 65) // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/*!****************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css.js ***!
  \****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/pnum */ 26),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/rcssNum */ 25),
	__webpack_require__(/*! ./css/var/rnumnonpx */ 27),
	__webpack_require__(/*! ./css/var/cssExpand */ 28),
	__webpack_require__(/*! ./css/var/getStyles */ 44),
	__webpack_require__(/*! ./css/var/swap */ 38),
	__webpack_require__(/*! ./css/curCSS */ 45),
	__webpack_require__(/*! ./css/adjustCSS */ 46),
	__webpack_require__(/*! ./css/addGetHookIf */ 47),
	__webpack_require__(/*! ./css/support */ 29),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./core/ready */ 51),
	__webpack_require__(/*! ./selector */ 3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, pnum, access, camelCase, document, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/*!********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/arr.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return [];
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/isWindow.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/camelCase.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}

return camelCase;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/*!*******************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/jquery.js ***!
  \*******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./selector */ 3),
	__webpack_require__(/*! ./traversing */ 12),
	__webpack_require__(/*! ./callbacks */ 31),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./deferred/exceptionHook */ 75),
	__webpack_require__(/*! ./core/ready */ 51),
	__webpack_require__(/*! ./data */ 76),
	__webpack_require__(/*! ./queue */ 33),
	__webpack_require__(/*! ./queue/delay */ 77),
	__webpack_require__(/*! ./attributes */ 81),
	__webpack_require__(/*! ./event */ 13),
	__webpack_require__(/*! ./event/focusin */ 85),
	__webpack_require__(/*! ./manipulation */ 22),
	__webpack_require__(/*! ./manipulation/_evalUrl */ 87),
	__webpack_require__(/*! ./wrap */ 90),
	__webpack_require__(/*! ./css */ 15),
	__webpack_require__(/*! ./css/hiddenVisibleSelectors */ 91),
	__webpack_require__(/*! ./serialize */ 65),
	__webpack_require__(/*! ./ajax */ 14),
	__webpack_require__(/*! ./ajax/xhr */ 92),
	__webpack_require__(/*! ./ajax/script */ 93),
	__webpack_require__(/*! ./ajax/jsonp */ 94),
	__webpack_require__(/*! ./ajax/load */ 95),
	__webpack_require__(/*! ./event/ajax */ 98),
	__webpack_require__(/*! ./effects */ 34),
	__webpack_require__(/*! ./effects/animatedSelector */ 99),
	__webpack_require__(/*! ./offset */ 100),
	__webpack_require__(/*! ./dimensions */ 101),
	__webpack_require__(/*! ./deprecated */ 102),
	__webpack_require__(/*! ./exports/amd */ 104),
	__webpack_require__(/*! ./exports/global */ 105)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

return jQuery;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/class2type.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/slice.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.slice;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/concat */ 39),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/push */ 40),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./manipulation/var/rcheckableType */ 61),
	__webpack_require__(/*! ./manipulation/var/rtagName */ 56),
	__webpack_require__(/*! ./manipulation/var/rscriptType */ 57),
	__webpack_require__(/*! ./manipulation/wrapMap */ 58),
	__webpack_require__(/*! ./manipulation/getAll */ 59),
	__webpack_require__(/*! ./manipulation/setGlobalEval */ 60),
	__webpack_require__(/*! ./manipulation/buildFragment */ 55),
	__webpack_require__(/*! ./manipulation/support */ 79),

	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./data/var/dataUser */ 53),
	__webpack_require__(/*! ./data/var/acceptData */ 32),
	__webpack_require__(/*! ./core/DOMEval */ 43),
	__webpack_require__(/*! ./core/nodeName */ 9),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./traversing */ 12),
	__webpack_require__(/*! ./selector */ 3),
	__webpack_require__(/*! ./event */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, concat, isFunction, push, access,
	rcheckableType, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval, nodeName ) {

"use strict";

var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/hasOwn.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./class2type */ 20)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/indexOf.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.indexOf;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/rcssNum.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/pnum */ 26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/*!*********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/pnum.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/var/rnumnonpx.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../var/pnum */ 26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/var/cssExpand.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/support.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/documentElement */ 30),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/*!********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/documentElement.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./document */ 2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document ) {
	"use strict";

	return document.documentElement;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/callbacks.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/toType */ 10),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, toType, isFunction, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 32 */
/*!********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/data/var/acceptData.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/*!******************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/queue.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./callbacks */ 31)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/*!********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/effects.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rcssNum */ 25),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./css/var/cssExpand */ 28),
	__webpack_require__(/*! ./css/var/isHiddenWithinTree */ 54),
	__webpack_require__(/*! ./css/var/swap */ 38),
	__webpack_require__(/*! ./css/adjustCSS */ 46),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./css/showHide */ 78),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./queue */ 33),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./traversing */ 12),
	__webpack_require__(/*! ./manipulation */ 22),
	__webpack_require__(/*! ./css */ 15),
	__webpack_require__(/*! ./effects/Tween */ 80)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand,
	isHiddenWithinTree, swap, adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/*!*******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/attributes/support.js ***!
  \*******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/*!**********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/stripAndCollapse.js ***!
  \**********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/event/trigger.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ../data/var/acceptData */ 32),
	__webpack_require__(/*! ../var/hasOwn */ 23),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ../var/isWindow */ 17),
	__webpack_require__(/*! ../event */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/var/swap.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 39 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/concat.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.concat;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/*!*********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/push.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.push;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 41 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/toString.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./class2type */ 20)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
	"use strict";

	return class2type.toString;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/fnToString.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./hasOwn */ 23)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 43 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/DOMEval.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document ) {
	"use strict";

	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 44 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/var/getStyles.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 45 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/curCSS.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ./var/rboxStyle */ 69),
	__webpack_require__(/*! ./var/rnumnonpx */ 27),
	__webpack_require__(/*! ./var/getStyles */ 44),
	__webpack_require__(/*! ./support */ 29),
	__webpack_require__(/*! ../selector */ 3) // Get jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rboxStyle, rnumnonpx, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/adjustCSS.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/rcssNum */ 25)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/*!*****************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/addGetHookIf.js ***!
  \*****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 48 */
/*!********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/var/rsingleTag.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 49 */
/*!**********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/traversing/findFilter.js ***!
  \**********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/indexOf */ 24),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ./var/rneedsContext */ 50),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, isFunction, rneedsContext ) {

"use strict";

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 50 */
/*!*****************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/traversing/var/rneedsContext.js ***!
  \*****************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ 0),
	__webpack_require__(/*! ../../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 51 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/ready.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../core/readyException */ 72),
	__webpack_require__(/*! ../deferred */ 11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 52 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/data/Data.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/camelCase */ 18),
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./var/acceptData */ 32)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, camelCase, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 53 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/data/var/dataUser.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../Data */ 52)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
	"use strict";

	return new Data();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 54 */
/*!***************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/var/isHiddenWithinTree.js ***!
  \***************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ 0),
	__webpack_require__(/*! ../../selector */ 3)

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/*!***************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/buildFragment.js ***!
  \***************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/toType */ 10),
	__webpack_require__(/*! ./var/rtagName */ 56),
	__webpack_require__(/*! ./var/rscriptType */ 57),
	__webpack_require__(/*! ./wrapMap */ 58),
	__webpack_require__(/*! ./getAll */ 59),
	__webpack_require__(/*! ./setGlobalEval */ 60)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, toType, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 56 */
/*!**************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/var/rtagName.js ***!
  \**************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 57 */
/*!*****************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/var/rscriptType.js ***!
  \*****************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^$|^module$|\/(?:java|ecma)script/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 58 */
/*!*********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/wrapMap.js ***!
  \*********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

return wrapMap;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 59 */
/*!********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/getAll.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/nodeName */ 9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, nodeName ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 60 */
/*!***************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/setGlobalEval.js ***!
  \***************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../data/var/dataPriv */ 5)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 61 */
/*!********************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/var/rcheckableType.js ***!
  \********************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 62 */
/*!****************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/attributes/prop.js ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/access */ 8),
	__webpack_require__(/*! ./support */ 35),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 63 */
/*!****************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/var/rquery.js ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /\?/ );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 64 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/var/nonce.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return Date.now();
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 65 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/serialize.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/toType */ 10),
	__webpack_require__(/*! ./manipulation/var/rcheckableType */ 61),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./traversing */ 12), // filter
	__webpack_require__(/*! ./attributes/prop */ 62)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, toType, rcheckableType, isFunction ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 66 */
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_application_css__ = __webpack_require__(/*! src/application.css */ 106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_application_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_src_application_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(/*! jquery */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ujs__ = __webpack_require__(/*! jquery-ujs */ 107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ujs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ujs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_package_dist_index_js__ = __webpack_require__(/*! package/dist/index.js */ 108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_package_dist_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_package_dist_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_package_dist_index_css__ = __webpack_require__(/*! package/dist/index.css */ 110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_package_dist_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_package_dist_index_css__);








$('.simple_form_attachments').simple_form_attachments();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ 19)))

/***/ }),
/* 67 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/getProto.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return Object.getPrototypeOf;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 68 */
/*!*************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/var/ObjectFunctionString.js ***!
  \*************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./fnToString */ 42)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 69 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/var/rboxStyle.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./cssExpand */ 28)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( cssExpand ) {
	"use strict";

	return new RegExp( cssExpand.join( "|" ), "i" );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 70 */
/*!****************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/selector-sizzle.js ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ../external/sizzle/dist/sizzle */ 71)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 71 */
/*!************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/external/sizzle/dist/sizzle.js ***!
  \************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return Sizzle; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}
// EXPOSE

})( window );


/***/ }),
/* 72 */
/*!********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/readyException.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 73 */
/*!*******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/traversing/var/dir.js ***!
  \*******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 74 */
/*!************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/traversing/var/siblings.js ***!
  \************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 75 */
/*!***********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/deferred/exceptionHook.js ***!
  \***********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../deferred */ 11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */
/*!*****************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/data.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./data/var/dataUser */ 53)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, camelCase, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 77 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/queue/delay.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../queue */ 33),
	__webpack_require__(/*! ../effects */ 34) // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 78 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/showHide.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ../css/var/isHiddenWithinTree */ 54)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 79 */
/*!*********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/support.js ***!
  \*********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 80 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/effects/Tween.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../css */ 15)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 81 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/attributes.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./attributes/attr */ 82),
	__webpack_require__(/*! ./attributes/prop */ 62),
	__webpack_require__(/*! ./attributes/classes */ 83),
	__webpack_require__(/*! ./attributes/val */ 84)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 82 */
/*!****************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/attributes/attr.js ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/access */ 8),
	__webpack_require__(/*! ../core/nodeName */ 9),
	__webpack_require__(/*! ./support */ 35),
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, nodeName, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 83 */
/*!*******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/attributes/classes.js ***!
  \*******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/stripAndCollapse */ 36),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ../core/init */ 4)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 84 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/attributes/val.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/stripAndCollapse */ 36),
	__webpack_require__(/*! ./support */ 35),
	__webpack_require__(/*! ../core/nodeName */ 9),
	__webpack_require__(/*! ../var/isFunction */ 1),

	__webpack_require__(/*! ../core/init */ 4)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, support, nodeName, isFunction ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/event/focusin.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ./support */ 86),

	__webpack_require__(/*! ../event */ 13),
	__webpack_require__(/*! ./trigger */ 37)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 86 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/event/support.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/*!**********************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/manipulation/_evalUrl.js ***!
  \**********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 88 */
/*!******************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/var/location.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return window.location;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 89 */
/*!**************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/parseXML.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 90 */
/*!*****************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/wrap.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./manipulation */ 22), // clone
	__webpack_require__(/*! ./traversing */ 12) // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, isFunction ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 91 */
/*!***************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/css/hiddenVisibleSelectors.js ***!
  \***************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 92 */
/*!*********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/xhr.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/support */ 7),
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 93 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/script.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 94 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/jsonp.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ./var/nonce */ 64),
	__webpack_require__(/*! ./var/rquery */ 63),
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, isFunction, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 95 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/ajax/load.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/stripAndCollapse */ 36),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ../core/parseHTML */ 96),
	__webpack_require__(/*! ../ajax */ 14),
	__webpack_require__(/*! ../traversing */ 12),
	__webpack_require__(/*! ../manipulation */ 22),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, isFunction ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 96 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/parseHTML.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ./var/rsingleTag */ 48),
	__webpack_require__(/*! ../manipulation/buildFragment */ 55),

	// This is the only module that needs core/support
	__webpack_require__(/*! ./support */ 97)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 97 */
/*!*************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/core/support.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 98 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/event/ajax.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../event */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 99 */
/*!*************************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/effects/animatedSelector.js ***!
  \*************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../selector */ 3),
	__webpack_require__(/*! ../effects */ 34)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 100 */
/*!*******************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/offset.js ***!
  \*******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/documentElement */ 30),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./css/var/rnumnonpx */ 27),
	__webpack_require__(/*! ./css/curCSS */ 45),
	__webpack_require__(/*! ./css/addGetHookIf */ 47),
	__webpack_require__(/*! ./css/support */ 29),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./css */ 15),
	__webpack_require__(/*! ./selector */ 3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, document, documentElement, isFunction, rnumnonpx,
             curCSS, addGetHookIf, support, isWindow ) {

"use strict";

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 101 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/dimensions.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./css */ 15)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, isWindow ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 102 */
/*!***********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/deprecated.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/nodeName */ 9),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./core/toType */ 10),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./var/slice */ 21),

	__webpack_require__(/*! ./event/alias */ 103)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 103 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/event/alias.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),

	__webpack_require__(/*! ../event */ 13),
	__webpack_require__(/*! ./trigger */ 37)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 104 */
/*!************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/exports/amd.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 105 */
/*!***************************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery/src/exports/global.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, noGlobal ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 106 */
/*!********************************************!*\
  !*** ./app/javascript/src/application.css ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/*!**********************************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/node_modules/jquery-ujs/src/rails.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );


/***/ }),
/* 108 */
/*!*******************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/package/dist/index.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(/*! jquery */ 19));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["@tomasc/simple_form_attachments"] = factory(require("jquery"));else root["@tomasc/simple_form_attachments"] = factory(root["jquery"]);
})(undefined, function (__WEBPACK_EXTERNAL_MODULE_0__) {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 2);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
                                                                                                             * jQuery File Upload Plugin
                                                                                                             * https://github.com/blueimp/jQuery-File-Upload
                                                                                                             *
                                                                                                             * Copyright 2010, Sebastian Tschan
                                                                                                             * https://blueimp.net
                                                                                                             *
                                                                                                             * Licensed under the MIT license:
                                                                                                             * https://opensource.org/licenses/MIT
                                                                                                             */

            /* jshint nomen:false */
            /* global define, require, window, document, location, Blob, FormData */

            ;(function (factory) {
                'use strict';

                if (true) {
                    // Register as an anonymous AMD module:
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                    // Node/CommonJS:
                    factory(require('jquery'), require('./vendor/jquery.ui.widget'));
                } else {
                    // Browser globals:
                    factory(window.jQuery);
                }
            })(function ($) {
                'use strict';

                // Detect file input support, based on
                // http://viljamis.com/blog/2012/file-upload-support-on-mobile/

                $.support.fileInput = !(new RegExp(
                // Handle devices which give false positives for the feature detection:
                '(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) ||
                // Feature detection for all other devices:
                $('<input type="file">').prop('disabled'));

                // The FileReader API is not actually used, but works as feature detection,
                // as some Safari versions (5?) support XHR file uploads via the FormData API,
                // but not non-multipart XHR file uploads.
                // window.XMLHttpRequestUpload is not available on IE10, so we check for
                // window.ProgressEvent instead to detect XHR2 file upload capability:
                $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
                $.support.xhrFormDataFileUpload = !!window.FormData;

                // Detect support for Blob slicing (required for chunked uploads):
                $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

                // Helper function to create drag handlers for dragover/dragenter/dragleave:
                function getDragHandler(type) {
                    var isDragOver = type === 'dragover';
                    return function (e) {
                        e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
                        var dataTransfer = e.dataTransfer;
                        if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, { delegatedEvent: e })) !== false) {
                            e.preventDefault();
                            if (isDragOver) {
                                dataTransfer.dropEffect = 'copy';
                            }
                        }
                    };
                }

                // The fileupload widget listens for change events on file input fields defined
                // via fileInput setting and paste or drop events of the given dropZone.
                // In addition to the default jQuery Widget methods, the fileupload widget
                // exposes the "add" and "send" methods, to add or directly send files using
                // the fileupload API.
                // By default, files added via file input selection, paste, drag & drop or
                // "add" method are uploaded immediately, but it is possible to override
                // the "add" callback option to queue file uploads.
                $.widget('blueimp.fileupload', {

                    options: {
                        // The drop target element(s), by the default the complete document.
                        // Set to null to disable drag & drop support:
                        dropZone: $(document),
                        // The paste target element(s), by the default undefined.
                        // Set to a DOM node or jQuery object to enable file pasting:
                        pasteZone: undefined,
                        // The file input field(s), that are listened to for change events.
                        // If undefined, it is set to the file input fields inside
                        // of the widget element on plugin initialization.
                        // Set to null to disable the change listener.
                        fileInput: undefined,
                        // By default, the file input field is replaced with a clone after
                        // each input field change event. This is required for iframe transport
                        // queues and allows change events to be fired for the same file
                        // selection, but can be disabled by setting the following option to false:
                        replaceFileInput: true,
                        // The parameter name for the file form data (the request argument name).
                        // If undefined or empty, the name property of the file input field is
                        // used, or "files[]" if the file input name property is also empty,
                        // can be a string or an array of strings:
                        paramName: undefined,
                        // By default, each file of a selection is uploaded using an individual
                        // request for XHR type uploads. Set to false to upload file
                        // selections in one request each:
                        singleFileUploads: true,
                        // To limit the number of files uploaded with one XHR request,
                        // set the following option to an integer greater than 0:
                        limitMultiFileUploads: undefined,
                        // The following option limits the number of files uploaded with one
                        // XHR request to keep the request size under or equal to the defined
                        // limit in bytes:
                        limitMultiFileUploadSize: undefined,
                        // Multipart file uploads add a number of bytes to each uploaded file,
                        // therefore the following option adds an overhead for each file used
                        // in the limitMultiFileUploadSize configuration:
                        limitMultiFileUploadSizeOverhead: 512,
                        // Set the following option to true to issue all file upload requests
                        // in a sequential order:
                        sequentialUploads: false,
                        // To limit the number of concurrent uploads,
                        // set the following option to an integer greater than 0:
                        limitConcurrentUploads: undefined,
                        // Set the following option to true to force iframe transport uploads:
                        forceIframeTransport: false,
                        // Set the following option to the location of a redirect url on the
                        // origin server, for cross-domain iframe transport uploads:
                        redirect: undefined,
                        // The parameter name for the redirect url, sent as part of the form
                        // data and set to 'redirect' if this option is empty:
                        redirectParamName: undefined,
                        // Set the following option to the location of a postMessage window,
                        // to enable postMessage transport uploads:
                        postMessage: undefined,
                        // By default, XHR file uploads are sent as multipart/form-data.
                        // The iframe transport is always using multipart/form-data.
                        // Set to false to enable non-multipart XHR uploads:
                        multipart: true,
                        // To upload large files in smaller chunks, set the following option
                        // to a preferred maximum chunk size. If set to 0, null or undefined,
                        // or the browser does not support the required Blob API, files will
                        // be uploaded as a whole.
                        maxChunkSize: undefined,
                        // When a non-multipart upload or a chunked multipart upload has been
                        // aborted, this option can be used to resume the upload by setting
                        // it to the size of the already uploaded bytes. This option is most
                        // useful when modifying the options object inside of the "add" or
                        // "send" callbacks, as the options are cloned for each file upload.
                        uploadedBytes: undefined,
                        // By default, failed (abort or error) file uploads are removed from the
                        // global progress calculation. Set the following option to false to
                        // prevent recalculating the global progress data:
                        recalculateProgress: true,
                        // Interval in milliseconds to calculate and trigger progress events:
                        progressInterval: 100,
                        // Interval in milliseconds to calculate progress bitrate:
                        bitrateInterval: 500,
                        // By default, uploads are started automatically when adding files:
                        autoUpload: true,

                        // Error and info messages:
                        messages: {
                            uploadedBytes: 'Uploaded bytes exceed file size'
                        },

                        // Translation function, gets the message key to be translated
                        // and an object with context specific data as arguments:
                        i18n: function i18n(message, context) {
                            message = this.messages[message] || message.toString();
                            if (context) {
                                $.each(context, function (key, value) {
                                    message = message.replace('{' + key + '}', value);
                                });
                            }
                            return message;
                        },

                        // Additional form data to be sent along with the file uploads can be set
                        // using this option, which accepts an array of objects with name and
                        // value properties, a function returning such an array, a FormData
                        // object (for XHR file uploads), or a simple object.
                        // The form of the first fileInput is given as parameter to the function:
                        formData: function formData(form) {
                            return form.serializeArray();
                        },

                        // The add callback is invoked as soon as files are added to the fileupload
                        // widget (via file input selection, drag & drop, paste or add API call).
                        // If the singleFileUploads option is enabled, this callback will be
                        // called once for each file in the selection for XHR file uploads, else
                        // once for each file selection.
                        //
                        // The upload starts when the submit method is invoked on the data parameter.
                        // The data object contains a files property holding the added files
                        // and allows you to override plugin options as well as define ajax settings.
                        //
                        // Listeners for this callback can also be bound the following way:
                        // .bind('fileuploadadd', func);
                        //
                        // data.submit() returns a Promise object and allows to attach additional
                        // handlers using jQuery's Deferred callbacks:
                        // data.submit().done(func).fail(func).always(func);
                        add: function add(e, data) {
                            if (e.isDefaultPrevented()) {
                                return false;
                            }
                            if (data.autoUpload || data.autoUpload !== false && $(this).fileupload('option', 'autoUpload')) {
                                data.process().done(function () {
                                    data.submit();
                                });
                            }
                        },

                        // Other callbacks:

                        // Callback for the submit event of each file upload:
                        // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

                        // Callback for the start of each file upload request:
                        // send: function (e, data) {}, // .bind('fileuploadsend', func);

                        // Callback for successful uploads:
                        // done: function (e, data) {}, // .bind('fileuploaddone', func);

                        // Callback for failed (abort or error) uploads:
                        // fail: function (e, data) {}, // .bind('fileuploadfail', func);

                        // Callback for completed (success, abort or error) requests:
                        // always: function (e, data) {}, // .bind('fileuploadalways', func);

                        // Callback for upload progress events:
                        // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

                        // Callback for global upload progress events:
                        // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

                        // Callback for uploads start, equivalent to the global ajaxStart event:
                        // start: function (e) {}, // .bind('fileuploadstart', func);

                        // Callback for uploads stop, equivalent to the global ajaxStop event:
                        // stop: function (e) {}, // .bind('fileuploadstop', func);

                        // Callback for change events of the fileInput(s):
                        // change: function (e, data) {}, // .bind('fileuploadchange', func);

                        // Callback for paste events to the pasteZone(s):
                        // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

                        // Callback for drop events of the dropZone(s):
                        // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

                        // Callback for dragover events of the dropZone(s):
                        // dragover: function (e) {}, // .bind('fileuploaddragover', func);

                        // Callback for the start of each chunk upload request:
                        // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

                        // Callback for successful chunk uploads:
                        // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

                        // Callback for failed (abort or error) chunk uploads:
                        // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

                        // Callback for completed (success, abort or error) chunk upload requests:
                        // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

                        // The plugin options are used as settings object for the ajax calls.
                        // The following are jQuery ajax settings required for the file uploads:
                        processData: false,
                        contentType: false,
                        cache: false,
                        timeout: 0
                    },

                    // A list of options that require reinitializing event listeners and/or
                    // special initialization code:
                    _specialOptions: ['fileInput', 'dropZone', 'pasteZone', 'multipart', 'forceIframeTransport'],

                    _blobSlice: $.support.blobSlice && function () {
                        var slice = this.slice || this.webkitSlice || this.mozSlice;
                        return slice.apply(this, arguments);
                    },

                    _BitrateTimer: function _BitrateTimer() {
                        this.timestamp = Date.now ? Date.now() : new Date().getTime();
                        this.loaded = 0;
                        this.bitrate = 0;
                        this.getBitrate = function (now, loaded, interval) {
                            var timeDiff = now - this.timestamp;
                            if (!this.bitrate || !interval || timeDiff > interval) {
                                this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                                this.loaded = loaded;
                                this.timestamp = now;
                            }
                            return this.bitrate;
                        };
                    },

                    _isXHRUpload: function _isXHRUpload(options) {
                        return !options.forceIframeTransport && (!options.multipart && $.support.xhrFileUpload || $.support.xhrFormDataFileUpload);
                    },

                    _getFormData: function _getFormData(options) {
                        var formData;
                        if ($.type(options.formData) === 'function') {
                            return options.formData(options.form);
                        }
                        if ($.isArray(options.formData)) {
                            return options.formData;
                        }
                        if ($.type(options.formData) === 'object') {
                            formData = [];
                            $.each(options.formData, function (name, value) {
                                formData.push({ name: name, value: value });
                            });
                            return formData;
                        }
                        return [];
                    },

                    _getTotal: function _getTotal(files) {
                        var total = 0;
                        $.each(files, function (index, file) {
                            total += file.size || 1;
                        });
                        return total;
                    },

                    _initProgressObject: function _initProgressObject(obj) {
                        var progress = {
                            loaded: 0,
                            total: 0,
                            bitrate: 0
                        };
                        if (obj._progress) {
                            $.extend(obj._progress, progress);
                        } else {
                            obj._progress = progress;
                        }
                    },

                    _initResponseObject: function _initResponseObject(obj) {
                        var prop;
                        if (obj._response) {
                            for (prop in obj._response) {
                                if (obj._response.hasOwnProperty(prop)) {
                                    delete obj._response[prop];
                                }
                            }
                        } else {
                            obj._response = {};
                        }
                    },

                    _onProgress: function _onProgress(e, data) {
                        if (e.lengthComputable) {
                            var now = Date.now ? Date.now() : new Date().getTime(),
                                loaded;
                            if (data._time && data.progressInterval && now - data._time < data.progressInterval && e.loaded !== e.total) {
                                return;
                            }
                            data._time = now;
                            loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
                            // Add the difference from the previously loaded state
                            // to the global loaded counter:
                            this._progress.loaded += loaded - data._progress.loaded;
                            this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
                            data._progress.loaded = data.loaded = loaded;
                            data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
                            // Trigger a custom progress event with a total data property set
                            // to the file size(s) of the current upload and a loaded data
                            // property calculated accordingly:
                            this._trigger('progress', $.Event('progress', { delegatedEvent: e }), data);
                            // Trigger a global progress event for all current file uploads,
                            // including ajax calls queued for sequential file uploads:
                            this._trigger('progressall', $.Event('progressall', { delegatedEvent: e }), this._progress);
                        }
                    },

                    _initProgressListener: function _initProgressListener(options) {
                        var that = this,
                            xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
                        // Accesss to the native XHR object is required to add event listeners
                        // for the upload progress event:
                        if (xhr.upload) {
                            $(xhr.upload).bind('progress', function (e) {
                                var oe = e.originalEvent;
                                // Make sure the progress event properties get copied over:
                                e.lengthComputable = oe.lengthComputable;
                                e.loaded = oe.loaded;
                                e.total = oe.total;
                                that._onProgress(e, options);
                            });
                            options.xhr = function () {
                                return xhr;
                            };
                        }
                    },

                    _isInstanceOf: function _isInstanceOf(type, obj) {
                        // Cross-frame instanceof check
                        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
                    },

                    _initXHRData: function _initXHRData(options) {
                        var that = this,
                            formData,
                            file = options.files[0],

                        // Ignore non-multipart setting if not supported:
                        multipart = options.multipart || !$.support.xhrFileUpload,
                            paramName = $.type(options.paramName) === 'array' ? options.paramName[0] : options.paramName;
                        options.headers = $.extend({}, options.headers);
                        if (options.contentRange) {
                            options.headers['Content-Range'] = options.contentRange;
                        }
                        if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                            options.headers['Content-Disposition'] = 'attachment; filename="' + encodeURI(file.name) + '"';
                        }
                        if (!multipart) {
                            options.contentType = file.type || 'application/octet-stream';
                            options.data = options.blob || file;
                        } else if ($.support.xhrFormDataFileUpload) {
                            if (options.postMessage) {
                                // window.postMessage does not allow sending FormData
                                // objects, so we just add the File/Blob objects to
                                // the formData array and let the postMessage window
                                // create the FormData object out of this array:
                                formData = this._getFormData(options);
                                if (options.blob) {
                                    formData.push({
                                        name: paramName,
                                        value: options.blob
                                    });
                                } else {
                                    $.each(options.files, function (index, file) {
                                        formData.push({
                                            name: $.type(options.paramName) === 'array' && options.paramName[index] || paramName,
                                            value: file
                                        });
                                    });
                                }
                            } else {
                                if (that._isInstanceOf('FormData', options.formData)) {
                                    formData = options.formData;
                                } else {
                                    formData = new FormData();
                                    $.each(this._getFormData(options), function (index, field) {
                                        formData.append(field.name, field.value);
                                    });
                                }
                                if (options.blob) {
                                    formData.append(paramName, options.blob, file.name);
                                } else {
                                    $.each(options.files, function (index, file) {
                                        // This check allows the tests to run with
                                        // dummy objects:
                                        if (that._isInstanceOf('File', file) || that._isInstanceOf('Blob', file)) {
                                            formData.append($.type(options.paramName) === 'array' && options.paramName[index] || paramName, file, file.uploadName || file.name);
                                        }
                                    });
                                }
                            }
                            options.data = formData;
                        }
                        // Blob reference is not needed anymore, free memory:
                        options.blob = null;
                    },

                    _initIframeSettings: function _initIframeSettings(options) {
                        var targetHost = $('<a></a>').prop('href', options.url).prop('host');
                        // Setting the dataType to iframe enables the iframe transport:
                        options.dataType = 'iframe ' + (options.dataType || '');
                        // The iframe transport accepts a serialized array as form data:
                        options.formData = this._getFormData(options);
                        // Add redirect url to form data on cross-domain uploads:
                        if (options.redirect && targetHost && targetHost !== location.host) {
                            options.formData.push({
                                name: options.redirectParamName || 'redirect',
                                value: options.redirect
                            });
                        }
                    },

                    _initDataSettings: function _initDataSettings(options) {
                        if (this._isXHRUpload(options)) {
                            if (!this._chunkedUpload(options, true)) {
                                if (!options.data) {
                                    this._initXHRData(options);
                                }
                                this._initProgressListener(options);
                            }
                            if (options.postMessage) {
                                // Setting the dataType to postmessage enables the
                                // postMessage transport:
                                options.dataType = 'postmessage ' + (options.dataType || '');
                            }
                        } else {
                            this._initIframeSettings(options);
                        }
                    },

                    _getParamName: function _getParamName(options) {
                        var fileInput = $(options.fileInput),
                            paramName = options.paramName;
                        if (!paramName) {
                            paramName = [];
                            fileInput.each(function () {
                                var input = $(this),
                                    name = input.prop('name') || 'files[]',
                                    i = (input.prop('files') || [1]).length;
                                while (i) {
                                    paramName.push(name);
                                    i -= 1;
                                }
                            });
                            if (!paramName.length) {
                                paramName = [fileInput.prop('name') || 'files[]'];
                            }
                        } else if (!$.isArray(paramName)) {
                            paramName = [paramName];
                        }
                        return paramName;
                    },

                    _initFormSettings: function _initFormSettings(options) {
                        // Retrieve missing options from the input field and the
                        // associated form, if available:
                        if (!options.form || !options.form.length) {
                            options.form = $(options.fileInput.prop('form'));
                            // If the given file input doesn't have an associated form,
                            // use the default widget file input's form:
                            if (!options.form.length) {
                                options.form = $(this.options.fileInput.prop('form'));
                            }
                        }
                        options.paramName = this._getParamName(options);
                        if (!options.url) {
                            options.url = options.form.prop('action') || location.href;
                        }
                        // The HTTP request method must be "POST" or "PUT":
                        options.type = (options.type || $.type(options.form.prop('method')) === 'string' && options.form.prop('method') || '').toUpperCase();
                        if (options.type !== 'POST' && options.type !== 'PUT' && options.type !== 'PATCH') {
                            options.type = 'POST';
                        }
                        if (!options.formAcceptCharset) {
                            options.formAcceptCharset = options.form.attr('accept-charset');
                        }
                    },

                    _getAJAXSettings: function _getAJAXSettings(data) {
                        var options = $.extend({}, this.options, data);
                        this._initFormSettings(options);
                        this._initDataSettings(options);
                        return options;
                    },

                    // jQuery 1.6 doesn't provide .state(),
                    // while jQuery 1.8+ removed .isRejected() and .isResolved():
                    _getDeferredState: function _getDeferredState(deferred) {
                        if (deferred.state) {
                            return deferred.state();
                        }
                        if (deferred.isResolved()) {
                            return 'resolved';
                        }
                        if (deferred.isRejected()) {
                            return 'rejected';
                        }
                        return 'pending';
                    },

                    // Maps jqXHR callbacks to the equivalent
                    // methods of the given Promise object:
                    _enhancePromise: function _enhancePromise(promise) {
                        promise.success = promise.done;
                        promise.error = promise.fail;
                        promise.complete = promise.always;
                        return promise;
                    },

                    // Creates and returns a Promise object enhanced with
                    // the jqXHR methods abort, success, error and complete:
                    _getXHRPromise: function _getXHRPromise(resolveOrReject, context, args) {
                        var dfd = $.Deferred(),
                            promise = dfd.promise();
                        context = context || this.options.context || promise;
                        if (resolveOrReject === true) {
                            dfd.resolveWith(context, args);
                        } else if (resolveOrReject === false) {
                            dfd.rejectWith(context, args);
                        }
                        promise.abort = dfd.promise;
                        return this._enhancePromise(promise);
                    },

                    // Adds convenience methods to the data callback argument:
                    _addConvenienceMethods: function _addConvenienceMethods(e, data) {
                        var that = this,
                            getPromise = function getPromise(args) {
                            return $.Deferred().resolveWith(that, args).promise();
                        };
                        data.process = function (resolveFunc, rejectFunc) {
                            if (resolveFunc || rejectFunc) {
                                data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).then(function () {
                                    if (data.errorThrown) {
                                        return $.Deferred().rejectWith(that, [data]).promise();
                                    }
                                    return getPromise(arguments);
                                }).then(resolveFunc, rejectFunc);
                            }
                            return this._processQueue || getPromise([this]);
                        };
                        data.submit = function () {
                            if (this.state() !== 'pending') {
                                data.jqXHR = this.jqXHR = that._trigger('submit', $.Event('submit', { delegatedEvent: e }), this) !== false && that._onSend(e, this);
                            }
                            return this.jqXHR || that._getXHRPromise();
                        };
                        data.abort = function () {
                            if (this.jqXHR) {
                                return this.jqXHR.abort();
                            }
                            this.errorThrown = 'abort';
                            that._trigger('fail', null, this);
                            return that._getXHRPromise(false);
                        };
                        data.state = function () {
                            if (this.jqXHR) {
                                return that._getDeferredState(this.jqXHR);
                            }
                            if (this._processQueue) {
                                return that._getDeferredState(this._processQueue);
                            }
                        };
                        data.processing = function () {
                            return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === 'pending';
                        };
                        data.progress = function () {
                            return this._progress;
                        };
                        data.response = function () {
                            return this._response;
                        };
                    },

                    // Parses the Range header from the server response
                    // and returns the uploaded bytes:
                    _getUploadedBytes: function _getUploadedBytes(jqXHR) {
                        var range = jqXHR.getResponseHeader('Range'),
                            parts = range && range.split('-'),
                            upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
                        return upperBytesPos && upperBytesPos + 1;
                    },

                    // Uploads a file in multiple, sequential requests
                    // by splitting the file up in multiple blob chunks.
                    // If the second parameter is true, only tests if the file
                    // should be uploaded in chunks, but does not invoke any
                    // upload requests:
                    _chunkedUpload: function _chunkedUpload(options, testOnly) {
                        options.uploadedBytes = options.uploadedBytes || 0;
                        var that = this,
                            file = options.files[0],
                            fs = file.size,
                            ub = options.uploadedBytes,
                            mcs = options.maxChunkSize || fs,
                            slice = this._blobSlice,
                            dfd = $.Deferred(),
                            promise = dfd.promise(),
                            jqXHR,
                            _upload;
                        if (!(this._isXHRUpload(options) && slice && (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)) || options.data) {
                            return false;
                        }
                        if (testOnly) {
                            return true;
                        }
                        if (ub >= fs) {
                            file.error = options.i18n('uploadedBytes');
                            return this._getXHRPromise(false, options.context, [null, 'error', file.error]);
                        }
                        // The chunk upload method:
                        _upload = function upload() {
                            // Clone the options object for each chunk upload:
                            var o = $.extend({}, options),
                                currentLoaded = o._progress.loaded;
                            o.blob = slice.call(file, ub, ub + ($.type(mcs) === 'function' ? mcs(o) : mcs), file.type);
                            // Store the current chunk size, as the blob itself
                            // will be dereferenced after data processing:
                            o.chunkSize = o.blob.size;
                            // Expose the chunk bytes position range:
                            o.contentRange = 'bytes ' + ub + '-' + (ub + o.chunkSize - 1) + '/' + fs;
                            // Process the upload data (the blob and potential form data):
                            that._initXHRData(o);
                            // Add progress listeners for this chunk upload:
                            that._initProgressListener(o);
                            jqXHR = (that._trigger('chunksend', null, o) !== false && $.ajax(o) || that._getXHRPromise(false, o.context)).done(function (result, textStatus, jqXHR) {
                                ub = that._getUploadedBytes(jqXHR) || ub + o.chunkSize;
                                // Create a progress event if no final progress event
                                // with loaded equaling total has been triggered
                                // for this chunk:
                                if (currentLoaded + o.chunkSize - o._progress.loaded) {
                                    that._onProgress($.Event('progress', {
                                        lengthComputable: true,
                                        loaded: ub - o.uploadedBytes,
                                        total: ub - o.uploadedBytes
                                    }), o);
                                }
                                options.uploadedBytes = o.uploadedBytes = ub;
                                o.result = result;
                                o.textStatus = textStatus;
                                o.jqXHR = jqXHR;
                                that._trigger('chunkdone', null, o);
                                that._trigger('chunkalways', null, o);
                                if (ub < fs) {
                                    // File upload not yet complete,
                                    // continue with the next chunk:
                                    _upload();
                                } else {
                                    dfd.resolveWith(o.context, [result, textStatus, jqXHR]);
                                }
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                o.jqXHR = jqXHR;
                                o.textStatus = textStatus;
                                o.errorThrown = errorThrown;
                                that._trigger('chunkfail', null, o);
                                that._trigger('chunkalways', null, o);
                                dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown]);
                            });
                        };
                        this._enhancePromise(promise);
                        promise.abort = function () {
                            return jqXHR.abort();
                        };
                        _upload();
                        return promise;
                    },

                    _beforeSend: function _beforeSend(e, data) {
                        if (this._active === 0) {
                            // the start callback is triggered when an upload starts
                            // and no other uploads are currently running,
                            // equivalent to the global ajaxStart event:
                            this._trigger('start');
                            // Set timer for global bitrate progress calculation:
                            this._bitrateTimer = new this._BitrateTimer();
                            // Reset the global progress values:
                            this._progress.loaded = this._progress.total = 0;
                            this._progress.bitrate = 0;
                        }
                        // Make sure the container objects for the .response() and
                        // .progress() methods on the data object are available
                        // and reset to their initial state:
                        this._initResponseObject(data);
                        this._initProgressObject(data);
                        data._progress.loaded = data.loaded = data.uploadedBytes || 0;
                        data._progress.total = data.total = this._getTotal(data.files) || 1;
                        data._progress.bitrate = data.bitrate = 0;
                        this._active += 1;
                        // Initialize the global progress values:
                        this._progress.loaded += data.loaded;
                        this._progress.total += data.total;
                    },

                    _onDone: function _onDone(result, textStatus, jqXHR, options) {
                        var total = options._progress.total,
                            response = options._response;
                        if (options._progress.loaded < total) {
                            // Create a progress event if no final progress event
                            // with loaded equaling total has been triggered:
                            this._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: total,
                                total: total
                            }), options);
                        }
                        response.result = options.result = result;
                        response.textStatus = options.textStatus = textStatus;
                        response.jqXHR = options.jqXHR = jqXHR;
                        this._trigger('done', null, options);
                    },

                    _onFail: function _onFail(jqXHR, textStatus, errorThrown, options) {
                        var response = options._response;
                        if (options.recalculateProgress) {
                            // Remove the failed (error or abort) file upload from
                            // the global progress calculation:
                            this._progress.loaded -= options._progress.loaded;
                            this._progress.total -= options._progress.total;
                        }
                        response.jqXHR = options.jqXHR = jqXHR;
                        response.textStatus = options.textStatus = textStatus;
                        response.errorThrown = options.errorThrown = errorThrown;
                        this._trigger('fail', null, options);
                    },

                    _onAlways: function _onAlways(jqXHRorResult, textStatus, jqXHRorError, options) {
                        // jqXHRorResult, textStatus and jqXHRorError are added to the
                        // options object via done and fail callbacks
                        this._trigger('always', null, options);
                    },

                    _onSend: function _onSend(e, data) {
                        if (!data.submit) {
                            this._addConvenienceMethods(e, data);
                        }
                        var that = this,
                            jqXHR,
                            aborted,
                            slot,
                            pipe,
                            options = that._getAJAXSettings(data),
                            send = function send() {
                            that._sending += 1;
                            // Set timer for bitrate progress calculation:
                            options._bitrateTimer = new that._BitrateTimer();
                            jqXHR = jqXHR || ((aborted || that._trigger('send', $.Event('send', { delegatedEvent: e }), options) === false) && that._getXHRPromise(false, options.context, aborted) || that._chunkedUpload(options) || $.ajax(options)).done(function (result, textStatus, jqXHR) {
                                that._onDone(result, textStatus, jqXHR, options);
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                that._onFail(jqXHR, textStatus, errorThrown, options);
                            }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                                that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
                                that._sending -= 1;
                                that._active -= 1;
                                if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                                    // Start the next queued upload,
                                    // that has not been aborted:
                                    var nextSlot = that._slots.shift();
                                    while (nextSlot) {
                                        if (that._getDeferredState(nextSlot) === 'pending') {
                                            nextSlot.resolve();
                                            break;
                                        }
                                        nextSlot = that._slots.shift();
                                    }
                                }
                                if (that._active === 0) {
                                    // The stop callback is triggered when all uploads have
                                    // been completed, equivalent to the global ajaxStop event:
                                    that._trigger('stop');
                                }
                            });
                            return jqXHR;
                        };
                        this._beforeSend(e, options);
                        if (this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) {
                            if (this.options.limitConcurrentUploads > 1) {
                                slot = $.Deferred();
                                this._slots.push(slot);
                                pipe = slot.then(send);
                            } else {
                                this._sequence = this._sequence.then(send, send);
                                pipe = this._sequence;
                            }
                            // Return the piped Promise object, enhanced with an abort method,
                            // which is delegated to the jqXHR object of the current upload,
                            // and jqXHR callbacks mapped to the equivalent Promise methods:
                            pipe.abort = function () {
                                aborted = [undefined, 'abort', 'abort'];
                                if (!jqXHR) {
                                    if (slot) {
                                        slot.rejectWith(options.context, aborted);
                                    }
                                    return send();
                                }
                                return jqXHR.abort();
                            };
                            return this._enhancePromise(pipe);
                        }
                        return send();
                    },

                    _onAdd: function _onAdd(e, data) {
                        var that = this,
                            result = true,
                            options = $.extend({}, this.options, data),
                            files = data.files,
                            filesLength = files.length,
                            limit = options.limitMultiFileUploads,
                            limitSize = options.limitMultiFileUploadSize,
                            overhead = options.limitMultiFileUploadSizeOverhead,
                            batchSize = 0,
                            paramName = this._getParamName(options),
                            paramNameSet,
                            paramNameSlice,
                            fileSet,
                            i,
                            j = 0;
                        if (!filesLength) {
                            return false;
                        }
                        if (limitSize && files[0].size === undefined) {
                            limitSize = undefined;
                        }
                        if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
                            fileSet = [files];
                            paramNameSet = [paramName];
                        } else if (!(options.singleFileUploads || limitSize) && limit) {
                            fileSet = [];
                            paramNameSet = [];
                            for (i = 0; i < filesLength; i += limit) {
                                fileSet.push(files.slice(i, i + limit));
                                paramNameSlice = paramName.slice(i, i + limit);
                                if (!paramNameSlice.length) {
                                    paramNameSlice = paramName;
                                }
                                paramNameSet.push(paramNameSlice);
                            }
                        } else if (!options.singleFileUploads && limitSize) {
                            fileSet = [];
                            paramNameSet = [];
                            for (i = 0; i < filesLength; i = i + 1) {
                                batchSize += files[i].size + overhead;
                                if (i + 1 === filesLength || batchSize + files[i + 1].size + overhead > limitSize || limit && i + 1 - j >= limit) {
                                    fileSet.push(files.slice(j, i + 1));
                                    paramNameSlice = paramName.slice(j, i + 1);
                                    if (!paramNameSlice.length) {
                                        paramNameSlice = paramName;
                                    }
                                    paramNameSet.push(paramNameSlice);
                                    j = i + 1;
                                    batchSize = 0;
                                }
                            }
                        } else {
                            paramNameSet = paramName;
                        }
                        data.originalFiles = files;
                        $.each(fileSet || files, function (index, element) {
                            var newData = $.extend({}, data);
                            newData.files = fileSet ? element : [element];
                            newData.paramName = paramNameSet[index];
                            that._initResponseObject(newData);
                            that._initProgressObject(newData);
                            that._addConvenienceMethods(e, newData);
                            result = that._trigger('add', $.Event('add', { delegatedEvent: e }), newData);
                            return result;
                        });
                        return result;
                    },

                    _replaceFileInput: function _replaceFileInput(data) {
                        var input = data.fileInput,
                            inputClone = input.clone(true),
                            restoreFocus = input.is(document.activeElement);
                        // Add a reference for the new cloned file input to the data argument:
                        data.fileInputClone = inputClone;
                        $('<form></form>').append(inputClone)[0].reset();
                        // Detaching allows to insert the fileInput on another form
                        // without loosing the file input value:
                        input.after(inputClone).detach();
                        // If the fileInput had focus before it was detached,
                        // restore focus to the inputClone.
                        if (restoreFocus) {
                            inputClone.focus();
                        }
                        // Avoid memory leaks with the detached file input:
                        $.cleanData(input.unbind('remove'));
                        // Replace the original file input element in the fileInput
                        // elements set with the clone, which has been copied including
                        // event handlers:
                        this.options.fileInput = this.options.fileInput.map(function (i, el) {
                            if (el === input[0]) {
                                return inputClone[0];
                            }
                            return el;
                        });
                        // If the widget has been initialized on the file input itself,
                        // override this.element with the file input clone:
                        if (input[0] === this.element[0]) {
                            this.element = inputClone;
                        }
                    },

                    _handleFileTreeEntry: function _handleFileTreeEntry(entry, path) {
                        var that = this,
                            dfd = $.Deferred(),
                            entries = [],
                            dirReader,
                            errorHandler = function errorHandler(e) {
                            if (e && !e.entry) {
                                e.entry = entry;
                            }
                            // Since $.when returns immediately if one
                            // Deferred is rejected, we use resolve instead.
                            // This allows valid files and invalid items
                            // to be returned together in one set:
                            dfd.resolve([e]);
                        },
                            successHandler = function successHandler(entries) {
                            that._handleFileTreeEntries(entries, path + entry.name + '/').done(function (files) {
                                dfd.resolve(files);
                            }).fail(errorHandler);
                        },
                            readEntries = function readEntries() {
                            dirReader.readEntries(function (results) {
                                if (!results.length) {
                                    successHandler(entries);
                                } else {
                                    entries = entries.concat(results);
                                    readEntries();
                                }
                            }, errorHandler);
                        };
                        path = path || '';
                        if (entry.isFile) {
                            if (entry._file) {
                                // Workaround for Chrome bug #149735
                                entry._file.relativePath = path;
                                dfd.resolve(entry._file);
                            } else {
                                entry.file(function (file) {
                                    file.relativePath = path;
                                    dfd.resolve(file);
                                }, errorHandler);
                            }
                        } else if (entry.isDirectory) {
                            dirReader = entry.createReader();
                            readEntries();
                        } else {
                            // Return an empy list for file system items
                            // other than files or directories:
                            dfd.resolve([]);
                        }
                        return dfd.promise();
                    },

                    _handleFileTreeEntries: function _handleFileTreeEntries(entries, path) {
                        var that = this;
                        return $.when.apply($, $.map(entries, function (entry) {
                            return that._handleFileTreeEntry(entry, path);
                        })).then(function () {
                            return Array.prototype.concat.apply([], arguments);
                        });
                    },

                    _getDroppedFiles: function _getDroppedFiles(dataTransfer) {
                        dataTransfer = dataTransfer || {};
                        var items = dataTransfer.items;
                        if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
                            return this._handleFileTreeEntries($.map(items, function (item) {
                                var entry;
                                if (item.webkitGetAsEntry) {
                                    entry = item.webkitGetAsEntry();
                                    if (entry) {
                                        // Workaround for Chrome bug #149735:
                                        entry._file = item.getAsFile();
                                    }
                                    return entry;
                                }
                                return item.getAsEntry();
                            }));
                        }
                        return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise();
                    },

                    _getSingleFileInputFiles: function _getSingleFileInputFiles(fileInput) {
                        fileInput = $(fileInput);
                        var entries = fileInput.prop('webkitEntries') || fileInput.prop('entries'),
                            files,
                            value;
                        if (entries && entries.length) {
                            return this._handleFileTreeEntries(entries);
                        }
                        files = $.makeArray(fileInput.prop('files'));
                        if (!files.length) {
                            value = fileInput.prop('value');
                            if (!value) {
                                return $.Deferred().resolve([]).promise();
                            }
                            // If the files property is not available, the browser does not
                            // support the File API and we add a pseudo File object with
                            // the input value as name with path information removed:
                            files = [{ name: value.replace(/^.*\\/, '') }];
                        } else if (files[0].name === undefined && files[0].fileName) {
                            // File normalization for Safari 4 and Firefox 3:
                            $.each(files, function (index, file) {
                                file.name = file.fileName;
                                file.size = file.fileSize;
                            });
                        }
                        return $.Deferred().resolve(files).promise();
                    },

                    _getFileInputFiles: function _getFileInputFiles(fileInput) {
                        if (!(fileInput instanceof $) || fileInput.length === 1) {
                            return this._getSingleFileInputFiles(fileInput);
                        }
                        return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).then(function () {
                            return Array.prototype.concat.apply([], arguments);
                        });
                    },

                    _onChange: function _onChange(e) {
                        var that = this,
                            data = {
                            fileInput: $(e.target),
                            form: $(e.target.form)
                        };
                        this._getFileInputFiles(data.fileInput).always(function (files) {
                            data.files = files;
                            if (that.options.replaceFileInput) {
                                that._replaceFileInput(data);
                            }
                            if (that._trigger('change', $.Event('change', { delegatedEvent: e }), data) !== false) {
                                that._onAdd(e, data);
                            }
                        });
                    },

                    _onPaste: function _onPaste(e) {
                        var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                            data = { files: [] };
                        if (items && items.length) {
                            $.each(items, function (index, item) {
                                var file = item.getAsFile && item.getAsFile();
                                if (file) {
                                    data.files.push(file);
                                }
                            });
                            if (this._trigger('paste', $.Event('paste', { delegatedEvent: e }), data) !== false) {
                                this._onAdd(e, data);
                            }
                        }
                    },

                    _onDrop: function _onDrop(e) {
                        e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
                        var that = this,
                            dataTransfer = e.dataTransfer,
                            data = {};
                        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                            e.preventDefault();
                            this._getDroppedFiles(dataTransfer).always(function (files) {
                                data.files = files;
                                if (that._trigger('drop', $.Event('drop', { delegatedEvent: e }), data) !== false) {
                                    that._onAdd(e, data);
                                }
                            });
                        }
                    },

                    _onDragOver: getDragHandler('dragover'),

                    _onDragEnter: getDragHandler('dragenter'),

                    _onDragLeave: getDragHandler('dragleave'),

                    _initEventHandlers: function _initEventHandlers() {
                        if (this._isXHRUpload(this.options)) {
                            this._on(this.options.dropZone, {
                                dragover: this._onDragOver,
                                drop: this._onDrop,
                                // event.preventDefault() on dragenter is required for IE10+:
                                dragenter: this._onDragEnter,
                                // dragleave is not required, but added for completeness:
                                dragleave: this._onDragLeave
                            });
                            this._on(this.options.pasteZone, {
                                paste: this._onPaste
                            });
                        }
                        if ($.support.fileInput) {
                            this._on(this.options.fileInput, {
                                change: this._onChange
                            });
                        }
                    },

                    _destroyEventHandlers: function _destroyEventHandlers() {
                        this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
                        this._off(this.options.pasteZone, 'paste');
                        this._off(this.options.fileInput, 'change');
                    },

                    _destroy: function _destroy() {
                        this._destroyEventHandlers();
                    },

                    _setOption: function _setOption(key, value) {
                        var reinit = $.inArray(key, this._specialOptions) !== -1;
                        if (reinit) {
                            this._destroyEventHandlers();
                        }
                        this._super(key, value);
                        if (reinit) {
                            this._initSpecialOptions();
                            this._initEventHandlers();
                        }
                    },

                    _initSpecialOptions: function _initSpecialOptions() {
                        var options = this.options;
                        if (options.fileInput === undefined) {
                            options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]');
                        } else if (!(options.fileInput instanceof $)) {
                            options.fileInput = $(options.fileInput);
                        }
                        if (!(options.dropZone instanceof $)) {
                            options.dropZone = $(options.dropZone);
                        }
                        if (!(options.pasteZone instanceof $)) {
                            options.pasteZone = $(options.pasteZone);
                        }
                    },

                    _getRegExp: function _getRegExp(str) {
                        var parts = str.split('/'),
                            modifiers = parts.pop();
                        parts.shift();
                        return new RegExp(parts.join('/'), modifiers);
                    },

                    _isRegExpOption: function _isRegExpOption(key, value) {
                        return key !== 'url' && $.type(value) === 'string' && /^\/.*\/[igm]{0,3}$/.test(value);
                    },

                    _initDataAttributes: function _initDataAttributes() {
                        var that = this,
                            options = this.options,
                            data = this.element.data();
                        // Initialize options set via HTML5 data-attributes:
                        $.each(this.element[0].attributes, function (index, attr) {
                            var key = attr.name.toLowerCase(),
                                value;
                            if (/^data-/.test(key)) {
                                // Convert hyphen-ated key to camelCase:
                                key = key.slice(5).replace(/-[a-z]/g, function (str) {
                                    return str.charAt(1).toUpperCase();
                                });
                                value = data[key];
                                if (that._isRegExpOption(key, value)) {
                                    value = that._getRegExp(value);
                                }
                                options[key] = value;
                            }
                        });
                    },

                    _create: function _create() {
                        this._initDataAttributes();
                        this._initSpecialOptions();
                        this._slots = [];
                        this._sequence = this._getXHRPromise(true);
                        this._sending = this._active = 0;
                        this._initProgressObject(this);
                        this._initEventHandlers();
                    },

                    // This method is exposed to the widget API and allows to query
                    // the number of active uploads:
                    active: function active() {
                        return this._active;
                    },

                    // This method is exposed to the widget API and allows to query
                    // the widget upload progress.
                    // It returns an object with loaded, total and bitrate properties
                    // for the running uploads:
                    progress: function progress() {
                        return this._progress;
                    },

                    // This method is exposed to the widget API and allows adding files
                    // using the fileupload API. The data parameter accepts an object which
                    // must have a files property and can contain additional options:
                    // .fileupload('add', {files: filesList});
                    add: function add(data) {
                        var that = this;
                        if (!data || this.options.disabled) {
                            return;
                        }
                        if (data.fileInput && !data.files) {
                            this._getFileInputFiles(data.fileInput).always(function (files) {
                                data.files = files;
                                that._onAdd(null, data);
                            });
                        } else {
                            data.files = $.makeArray(data.files);
                            this._onAdd(null, data);
                        }
                    },

                    // This method is exposed to the widget API and allows sending files
                    // using the fileupload API. The data parameter accepts an object which
                    // must have a files or fileInput property and can contain additional options:
                    // .fileupload('send', {files: filesList});
                    // The method returns a Promise object for the file upload call.
                    send: function send(data) {
                        if (data && !this.options.disabled) {
                            if (data.fileInput && !data.files) {
                                var that = this,
                                    dfd = $.Deferred(),
                                    promise = dfd.promise(),
                                    jqXHR,
                                    aborted;
                                promise.abort = function () {
                                    aborted = true;
                                    if (jqXHR) {
                                        return jqXHR.abort();
                                    }
                                    dfd.reject(null, 'abort', 'abort');
                                    return promise;
                                };
                                this._getFileInputFiles(data.fileInput).always(function (files) {
                                    if (aborted) {
                                        return;
                                    }
                                    if (!files.length) {
                                        dfd.reject();
                                        return;
                                    }
                                    data.files = files;
                                    jqXHR = that._onSend(null, data);
                                    jqXHR.then(function (result, textStatus, jqXHR) {
                                        dfd.resolve(result, textStatus, jqXHR);
                                    }, function (jqXHR, textStatus, errorThrown) {
                                        dfd.reject(jqXHR, textStatus, errorThrown);
                                    });
                                });
                                return this._enhancePromise(promise);
                            }
                            data.files = $.makeArray(data.files);
                            if (data.files.length) {
                                return this._onSend(null, data);
                            }
                        }
                        return this._getXHRPromise(false, data && data.context);
                    }

                });
            });

            /***/
        },
        /* 2 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__simple_form_attachments__ = __webpack_require__(3);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__simple_form_attachments___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__simple_form_attachments__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_assets_stylesheets_simple_form_attachments_attachment_scss__ = __webpack_require__(16);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_assets_stylesheets_simple_form_attachments_attachment_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_assets_stylesheets_simple_form_attachments_attachment_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_assets_stylesheets_simple_form_attachments_attachment_col_scss__ = __webpack_require__(17);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_assets_stylesheets_simple_form_attachments_attachment_col_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_assets_stylesheets_simple_form_attachments_attachment_col_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_assets_stylesheets_simple_form_attachments_attachment_col_actions_scss__ = __webpack_require__(18);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_assets_stylesheets_simple_form_attachments_attachment_col_actions_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_assets_stylesheets_simple_form_attachments_attachment_col_actions_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__lib_assets_stylesheets_simple_form_attachments_attachment_col_errors_scss__ = __webpack_require__(19);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__lib_assets_stylesheets_simple_form_attachments_attachment_col_errors_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_assets_stylesheets_simple_form_attachments_attachment_col_errors_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__lib_assets_stylesheets_simple_form_attachments_attachment_col_fields_scss__ = __webpack_require__(20);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__lib_assets_stylesheets_simple_form_attachments_attachment_col_fields_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__lib_assets_stylesheets_simple_form_attachments_attachment_col_fields_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__lib_assets_stylesheets_simple_form_attachments_attachment_col_file_info_scss__ = __webpack_require__(21);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__lib_assets_stylesheets_simple_form_attachments_attachment_col_file_info_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__lib_assets_stylesheets_simple_form_attachments_attachment_col_file_info_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__lib_assets_stylesheets_simple_form_attachments_attachment_col_handle_scss__ = __webpack_require__(22);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__lib_assets_stylesheets_simple_form_attachments_attachment_col_handle_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__lib_assets_stylesheets_simple_form_attachments_attachment_col_handle_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__lib_assets_stylesheets_simple_form_attachments_attachment_col_hidden_scss__ = __webpack_require__(23);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__lib_assets_stylesheets_simple_form_attachments_attachment_col_hidden_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__lib_assets_stylesheets_simple_form_attachments_attachment_col_hidden_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__lib_assets_stylesheets_simple_form_attachments_attachment_col_progress_scss__ = __webpack_require__(24);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__lib_assets_stylesheets_simple_form_attachments_attachment_col_progress_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__lib_assets_stylesheets_simple_form_attachments_attachment_col_progress_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__lib_assets_stylesheets_simple_form_attachments_attachment_col_thumb_scss__ = __webpack_require__(25);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__lib_assets_stylesheets_simple_form_attachments_attachment_col_thumb_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__lib_assets_stylesheets_simple_form_attachments_attachment_col_thumb_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__lib_assets_stylesheets_simple_form_attachments_attachment_list_scss__ = __webpack_require__(26);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__lib_assets_stylesheets_simple_form_attachments_attachment_list_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__lib_assets_stylesheets_simple_form_attachments_attachment_list_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__lib_assets_stylesheets_simple_form_attachments_button_scss__ = __webpack_require__(27);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__lib_assets_stylesheets_simple_form_attachments_button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__lib_assets_stylesheets_simple_form_attachments_button_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__lib_assets_stylesheets_simple_form_attachments_label_scss__ = __webpack_require__(28);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__lib_assets_stylesheets_simple_form_attachments_label_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__lib_assets_stylesheets_simple_form_attachments_label_scss__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__lib_assets_stylesheets_simple_form_attachments_simple_form_attachments_scss__ = __webpack_require__(29);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__lib_assets_stylesheets_simple_form_attachments_simple_form_attachments_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__lib_assets_stylesheets_simple_form_attachments_simple_form_attachments_scss__);

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            /* WEBPACK VAR INJECTION */
            (function (jQuery) {

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _numeraljs = __webpack_require__(4);

                var _numeraljs2 = _interopRequireDefault(_numeraljs);

                var _handlebarsMin = __webpack_require__(5);

                var _handlebarsMin2 = _interopRequireDefault(_handlebarsMin);

                var _sortablejs = __webpack_require__(6);

                var _sortablejs2 = _interopRequireDefault(_sortablejs);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                // /* The jQuery UI widget factory, can be omitted if jQuery UI is already included */
                __webpack_require__(7);

                __webpack_require__(8);

                __webpack_require__(9);

                __webpack_require__(11);

                __webpack_require__(14);

                (function ($, window) {
                    var Plugin, defaults, document, pluginName;
                    pluginName = 'simple_form_attachments';
                    document = window.document;
                    defaults = {
                        debug: true,
                        sortable_options: {
                            animation: 150,
                            draggable: '.simple_form_attachments__attachment',
                            forcePlaceholderSize: true,
                            ghostClass: 'simple_form_attachments__attachment__ghost',
                            handle: '.simple_form_attachments__attachment__col__handle'
                        },
                        // axis: 'y'
                        // containment: 'parent'
                        // placeholder: 'simple_form_attachments__attachment__placeholder'
                        slide_speed: 'fast'
                    };
                    Plugin = function () {
                        function Plugin(element, options) {
                            _classCallCheck(this, Plugin);

                            this.get_attachment_template = this.get_attachment_template.bind(this);
                            this.element = element;
                            this.options = $.extend({}, defaults, options);
                            this.$element = $(this.element);
                            this._defaults = defaults;
                            this._name = pluginName;
                            this.init();
                            this.attachments_counter = 0;
                        }

                        _createClass(Plugin, [{
                            key: 'init',
                            value: function init() {
                                var _this = this;

                                alert("A");
                                this.set_unique_ids();
                                this.get_file_input().on('fileuploadalways', function (e) {
                                    if (_this.is_sortable()) {
                                        return _this.init_sortable();
                                    }
                                });
                                if (this.is_sortable()) {
                                    this.init_sortable();
                                }
                                return this.init_fileupload();
                            }
                        }, {
                            key: 'init_sortable',
                            value: function init_sortable() {
                                return this.sortable = new _sortablejs2.default(this.get_attachment_list()[0], this.options.sortable_options);
                            }
                        }, {
                            key: 'init_fileupload',
                            value: function init_fileupload() {
                                var _this2 = this;

                                if (this.options.debug) {
                                    console.log("init jQuery.fileupload");
                                }
                                this.get_file_input().fileupload({
                                    dataType: 'json',
                                    dropZone: this.$element,
                                    formData: {
                                        'attachment_type]': this.get_attachment_type_input().val(),
                                        'attachment_parent[name]': this.get_attachment_parent_name_input().val(),
                                        'attachment_parent[class]': this.get_attachment_parent_class_input().val(),
                                        'attachment_relation[type]': this.get_attachment_relation_type_input().val(),
                                        'attachment_relation[key]': this.get_attachment_relation_key_input().val(),
                                        'attachment_relation[name]': this.get_attachment_relation_name_input().val(),
                                        'attachment_relation[referenced]': this.get_attachment_relation_referenced_input().val(),
                                        'authenticity_token': $('meta[name="csrf-token"]').attr('content'),
                                        'attachment_relation[multiple]': this.is_multiple()
                                    },
                                    namespace: 'simple_form_attachments',
                                    url: this.get_attachments_path(),
                                    acceptFileTypes: /(\.|\/)(jpg)$/i,
                                    // getNumberOfFiles: -> 2
                                    // maxNumberOfFiles: 2
                                    start: function start(e, data) {
                                        if (_this2.options.debug) {
                                            _this2.set_logs(e, data);
                                        }
                                        return _this2.disable_form_submit();
                                    },
                                    add: function add(e, data) {
                                        var $template, file, i, len, properties, ref, result;
                                        if (_this2.options.debug) {
                                            _this2.set_logs(e, data);
                                        }
                                        if (!_this2.is_multiple()) {
                                            _this2.get_attachment_list().find('.simple_form_attachments__attachment').remove();
                                        }
                                        ref = data.files;
                                        for (i = 0, len = ref.length; i < len; i++) {
                                            file = ref[i];
                                            properties = {
                                                size: file.size,
                                                size_human: _this2.get_size_human(file.size),
                                                mime_type: file.type,
                                                multiple: _this2.is_multiple(),
                                                thumb_url: URL.createObjectURL(file)
                                            };
                                            result = $.extend({}, file, properties);
                                            $template = _this2.get_attachment_template(result).addClass('simple_form_attachments__attachment__is_uploading');
                                            data.context = $template;
                                            $template.data('data', data);
                                            _this2.get_attachment_list().append($template);
                                        }
                                        return data.submit();
                                    },
                                    fail: function fail(e, data) {
                                        var $result;
                                        if (_this2.options.debug) {
                                            _this2.set_logs(e, data);
                                        }
                                        if (!!data.jqXHR.responseText) {
                                            $result = $(JSON.parse(data.jqXHR.responseText).html).addClass('simple_form_attachments__attachment__has_error');
                                            $result.find('.simple_form_attachments__attachment__col__errors');
                                            return data.context.replaceWith($result);
                                        }
                                    },
                                    progress: function progress(e, data) {
                                        var progress;
                                        if (_this2.options.debug) {
                                            _this2.set_logs(e, data);
                                        }
                                        progress = parseInt(data.loaded / data.total * 100, 10);
                                        return data.context.find('.simple_form_attachments__attachment__col__progress__bar').width(progress + '%');
                                    },
                                    done: function done(e, data) {
                                        var $result;
                                        if (_this2.options.debug) {
                                            _this2.set_logs(e, data);
                                        }
                                        if (_this2.options.debug) {
                                            console.log(data.result.html);
                                        }
                                        $result = $(data.result.html).addClass('simple_form_attachments__attachment__is_uploaded');
                                        return data.context.replaceWith($result);
                                    },
                                    stop: function stop(e, data) {
                                        if (_this2.options.debug) {
                                            _this2.set_logs(e, data);
                                        }
                                        return _this2.enable_form_submit();
                                    }
                                });
                                this.$element.on('click', '.simple_form_attachments__button__delete, .simple_form_attachments__button__close', function (e) {
                                    var $template;
                                    e.preventDefault();
                                    e.stopPropagation();
                                    $template = $(e.currentTarget).closest('.simple_form_attachments__attachment');
                                    return _this2.remove_template($template);
                                });
                                this.$element.on('click', '.simple_form_attachments__button__cancel', function (e) {
                                    var $template, data;
                                    e.preventDefault();
                                    e.stopPropagation();
                                    $template = $(e.currentTarget).closest('.simple_form_attachments__attachment');
                                    data = $template.data('data') || {};
                                    _this2.enable_form_submit();
                                    if (!!data.jqXHR) {
                                        data.jqXHR.abort();
                                    } else {
                                        data.errorThrown = 'abort';
                                        e.data.fileupload._trigger('fail', e, data);
                                    }
                                    return _this2.remove_template($template);
                                });
                                this.$element.on('dragover', function (e) {
                                    e.preventDefault();
                                    return _this2.$element.addClass('dragover');
                                });
                                this.$element.on('dragleave', function (e) {
                                    e.preventDefault();
                                    return _this2.$element.removeClass('dragover');
                                });
                                return this.$element.on('drop', function (e) {
                                    e.preventDefault();
                                    return _this2.$element.removeClass('dragover');
                                });
                            }

                            // ---------------------------------------------------------------------

                        }, {
                            key: 'get_attachment_list',
                            value: function get_attachment_list() {
                                return this.$element.find('.simple_form_attachments__attachment_list');
                            }
                        }, {
                            key: 'get_attachments_path',
                            value: function get_attachments_path() {
                                return this.$element.data('attachments-path');
                            }
                        }, {
                            key: 'get_disabled_submit_text',
                            value: function get_disabled_submit_text() {
                                return this.$element.data('disabled-submit-text');
                            }
                        }, {
                            key: 'get_file_input',
                            value: function get_file_input() {
                                return this.$element.find('input.file');
                            }
                        }, {
                            key: 'get_form',
                            value: function get_form() {
                                return this.$element.parents('form').first();
                            }
                        }, {
                            key: 'get_form_submit',
                            value: function get_form_submit() {
                                return this.get_form().find('input[type="submit"]').first();
                            }
                        }, {
                            key: 'get_max_number_of_files',
                            value: function get_max_number_of_files() {
                                return this.$element.data('max-number-of-files');
                            }
                        }, {
                            key: 'get_number_of_files',
                            value: function get_number_of_files() {
                                return this.get_attachment_list().children('.simple_form_attachments__attachment').not('.simple_form_attachments__attachment__has_error').length;
                            }
                        }, {
                            key: 'get_attachment_type_input',
                            value: function get_attachment_type_input() {
                                return this.$element.find('input[name="attachment_type"]');
                            }
                        }, {
                            key: 'get_attachment_multiple_input',
                            value: function get_attachment_multiple_input() {
                                return this.$element.find('input[name="attachment[multiple]"]');
                            }
                        }, {
                            key: 'get_attachment_parent_class_input',
                            value: function get_attachment_parent_class_input() {
                                return this.$element.find('input[name="attachment_parent[class]"]');
                            }
                        }, {
                            key: 'get_attachment_parent_name_input',
                            value: function get_attachment_parent_name_input() {
                                return this.$element.find('input[name="attachment_parent[name]"]');
                            }
                        }, {
                            key: 'get_attachment_relation_key_input',
                            value: function get_attachment_relation_key_input() {
                                return this.$element.find('input[name="attachment_relation[key]"]');
                            }
                        }, {
                            key: 'get_attachment_relation_name_input',
                            value: function get_attachment_relation_name_input() {
                                return this.$element.find('input[name="attachment_relation[name]"]');
                            }
                        }, {
                            key: 'get_attachment_relation_type_input',
                            value: function get_attachment_relation_type_input() {
                                return this.$element.find('input[name="attachment_relation[type]"]');
                            }
                        }, {
                            key: 'get_attachment_relation_referenced_input',
                            value: function get_attachment_relation_referenced_input() {
                                return this.$element.find('input[name="attachment_relation[referenced]"]');
                            }
                        }, {
                            key: 'get_relation_name',
                            value: function get_relation_name() {
                                return this.$element.data('relation-name');
                            }
                        }, {
                            key: 'get_relation_key',
                            value: function get_relation_key() {
                                return this.$element.data('relation-key');
                            }
                        }, {
                            key: 'get_size_human',
                            value: function get_size_human(bytes) {
                                return (0, _numeraljs2.default)(bytes).format('0.0 b');
                            }
                        }, {
                            key: 'get_attachment_template',
                            value: function get_attachment_template(file) {
                                var template;
                                template = _handlebarsMin2.default.compile(this.$element.find('script#simple_form_attachments__template').html());
                                return $(template(file));
                            }

                            // ---------------------------------------------------------------------

                        }, {
                            key: 'set_logs',
                            value: function set_logs(e, data) {
                                console.log(e.type);
                                console.log(e);
                                return console.log(data);
                            }
                        }, {
                            key: 'enable_form_submit',
                            value: function enable_form_submit() {
                                var $submit, submit_text;
                                $submit = this.get_form_submit();
                                submit_text = $submit.data('submit-text');
                                $submit.removeAttr('disabled');
                                return $submit.val(submit_text);
                            }
                        }, {
                            key: 'disable_form_submit',
                            value: function disable_form_submit() {
                                var $submit;
                                $submit = this.get_form_submit();
                                $submit.attr('data-submit-text', $submit.val());
                                return $submit.val(this.get_disabled_submit_text()).attr('disabled', 'disabled');
                            }
                        }, {
                            key: 'remove_template',
                            value: function remove_template($template) {
                                return $template.slideUp(this.options.slide_speed).promise().done(function () {
                                    return $(this).remove();
                                });
                            }
                        }, {
                            key: 'create_index',
                            value: function create_index() {
                                return new Date().getTime() + this.attachments_counter++;
                            }

                            // ---------------------------------------------------------------------

                        }, {
                            key: 'is_multiple',
                            value: function is_multiple() {
                                return this.get_file_input().attr('multiple') !== void 0;
                            }
                        }, {
                            key: 'is_sortable',
                            value: function is_sortable() {
                                return this.get_attachment_list().hasClass('simple_form_attachments__attachment_list__is_sortable');
                            }

                            // ---------------------------------------------------------------------

                        }, {
                            key: 'set_unique_ids',
                            value: function set_unique_ids() {
                                var $input, $label, default_id, new_id;
                                $input = this.get_file_input();
                                default_id = $input.attr('id');
                                $label = this.$element.find('[for=\'' + default_id + '\']');
                                $input.data('default-id', default_id);
                                $label.data('default-for', default_id);
                                new_id = default_id + '__' + this.guid();
                                $input.attr('id', new_id);
                                return $label.attr('for', new_id);
                            }

                            // ---------------------------------------------------------------------

                        }, {
                            key: 'guid',
                            value: function guid() {
                                return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
                            }
                        }, {
                            key: 's4',
                            value: function s4() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                            }
                        }]);

                        return Plugin;
                    }();
                    // ---------------------------------------------------------------------
                    return $.fn[pluginName] = function (options) {
                        return this.each(function () {
                            if (!$.data(this, 'plugin_' + pluginName)) {
                                return $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                            }
                        });
                    };
                })(jQuery, window);
                /* WEBPACK VAR INJECTION */
            }).call(exports, __webpack_require__(0));

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                             * numeral.js
                                                                             * version : 1.5.6
                                                                             * author : Adam Draper
                                                                             * license : MIT
                                                                             * http://adamwdraper.github.com/Numeral-js/
                                                                             */

            (function () {

                /************************************
                    Constants
                ************************************/

                var _numeral,
                    VERSION = '1.5.6',

                // internal storage for language config files
                languages = {},
                    currentLanguage = 'en',
                    zeroFormat = null,
                    defaultFormat = '0,0',

                // check for nodeJS
                hasModule = typeof module !== 'undefined' && module.exports;

                /************************************
                    Constructors
                ************************************/

                // Numeral prototype object
                function Numeral(number) {
                    this._value = number;
                }

                /**
                 * Implementation of toFixed() that treats floats more like decimals
                 *
                 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
                 * problems for accounting- and finance-related software.
                 */
                function toFixed(value, precision, roundingFunction, optionals) {
                    var power = Math.pow(10, precision),
                        optionalsRegExp,
                        output;

                    //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
                    // Multiply up by precision, round accurately, then divide and use native toFixed():
                    output = (roundingFunction(value * power) / power).toFixed(precision);

                    if (optionals) {
                        optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
                        output = output.replace(optionalsRegExp, '');
                    }

                    return output;
                }

                /************************************
                    Formatting
                ************************************/

                // determine what type of formatting we need to do
                function formatNumeral(n, format, roundingFunction) {
                    var output;

                    // figure out what kind of format we are dealing with
                    if (format.indexOf('$') > -1) {
                        // currency!!!!!
                        output = formatCurrency(n, format, roundingFunction);
                    } else if (format.indexOf('%') > -1) {
                        // percentage
                        output = formatPercentage(n, format, roundingFunction);
                    } else if (format.indexOf(':') > -1) {
                        // time
                        output = formatTime(n, format);
                    } else {
                        // plain ol' numbers or bytes
                        output = formatNumber(n._value, format, roundingFunction);
                    }

                    // return string
                    return output;
                }

                // revert to number
                function unformatNumeral(n, string) {
                    var stringOriginal = string,
                        thousandRegExp,
                        millionRegExp,
                        billionRegExp,
                        trillionRegExp,
                        suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                        bytesMultiplier = false,
                        power;

                    if (string.indexOf(':') > -1) {
                        n._value = unformatTime(string);
                    } else {
                        if (string === zeroFormat) {
                            n._value = 0;
                        } else {
                            if (languages[currentLanguage].delimiters.decimal !== '.') {
                                string = string.replace(/\./g, '').replace(languages[currentLanguage].delimiters.decimal, '.');
                            }

                            // see if abbreviations are there so that we can multiply to the correct number
                            thousandRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                            millionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                            billionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                            trillionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');

                            // see if bytes are there so that we can multiply to the correct number
                            for (power = 0; power <= suffixes.length; power++) {
                                bytesMultiplier = string.indexOf(suffixes[power]) > -1 ? Math.pow(1024, power + 1) : false;

                                if (bytesMultiplier) {
                                    break;
                                }
                            }

                            // do some math to create our number
                            n._value = (bytesMultiplier ? bytesMultiplier : 1) * (stringOriginal.match(thousandRegExp) ? Math.pow(10, 3) : 1) * (stringOriginal.match(millionRegExp) ? Math.pow(10, 6) : 1) * (stringOriginal.match(billionRegExp) ? Math.pow(10, 9) : 1) * (stringOriginal.match(trillionRegExp) ? Math.pow(10, 12) : 1) * (string.indexOf('%') > -1 ? 0.01 : 1) * ((string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1) * Number(string.replace(/[^0-9\.]+/g, ''));

                            // round if we are talking about bytes
                            n._value = bytesMultiplier ? Math.ceil(n._value) : n._value;
                        }
                    }
                    return n._value;
                }

                function formatCurrency(n, format, roundingFunction) {
                    var symbolIndex = format.indexOf('$'),
                        openParenIndex = format.indexOf('('),
                        minusSignIndex = format.indexOf('-'),
                        space = '',
                        spliceIndex,
                        output;

                    // check for space before or after currency
                    if (format.indexOf(' $') > -1) {
                        space = ' ';
                        format = format.replace(' $', '');
                    } else if (format.indexOf('$ ') > -1) {
                        space = ' ';
                        format = format.replace('$ ', '');
                    } else {
                        format = format.replace('$', '');
                    }

                    // format the number
                    output = formatNumber(n._value, format, roundingFunction);

                    // position the symbol
                    if (symbolIndex <= 1) {
                        if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
                            output = output.split('');
                            spliceIndex = 1;
                            if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex) {
                                // the symbol appears before the "(" or "-"
                                spliceIndex = 0;
                            }
                            output.splice(spliceIndex, 0, languages[currentLanguage].currency.symbol + space);
                            output = output.join('');
                        } else {
                            output = languages[currentLanguage].currency.symbol + space + output;
                        }
                    } else {
                        if (output.indexOf(')') > -1) {
                            output = output.split('');
                            output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
                            output = output.join('');
                        } else {
                            output = output + space + languages[currentLanguage].currency.symbol;
                        }
                    }

                    return output;
                }

                function formatPercentage(n, format, roundingFunction) {
                    var space = '',
                        output,
                        value = n._value * 100;

                    // check for space before %
                    if (format.indexOf(' %') > -1) {
                        space = ' ';
                        format = format.replace(' %', '');
                    } else {
                        format = format.replace('%', '');
                    }

                    output = formatNumber(value, format, roundingFunction);

                    if (output.indexOf(')') > -1) {
                        output = output.split('');
                        output.splice(-1, 0, space + '%');
                        output = output.join('');
                    } else {
                        output = output + space + '%';
                    }

                    return output;
                }

                function formatTime(n) {
                    var hours = Math.floor(n._value / 60 / 60),
                        minutes = Math.floor((n._value - hours * 60 * 60) / 60),
                        seconds = Math.round(n._value - hours * 60 * 60 - minutes * 60);
                    return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
                }

                function unformatTime(string) {
                    var timeArray = string.split(':'),
                        seconds = 0;
                    // turn hours and minutes into seconds and add them all up
                    if (timeArray.length === 3) {
                        // hours
                        seconds = seconds + Number(timeArray[0]) * 60 * 60;
                        // minutes
                        seconds = seconds + Number(timeArray[1]) * 60;
                        // seconds
                        seconds = seconds + Number(timeArray[2]);
                    } else if (timeArray.length === 2) {
                        // minutes
                        seconds = seconds + Number(timeArray[0]) * 60;
                        // seconds
                        seconds = seconds + Number(timeArray[1]);
                    }
                    return Number(seconds);
                }

                function formatNumber(value, format, roundingFunction) {
                    var negP = false,
                        signed = false,
                        optDec = false,
                        abbr = '',
                        abbrK = false,
                        // force abbreviation to thousands
                    abbrM = false,
                        // force abbreviation to millions
                    abbrB = false,
                        // force abbreviation to billions
                    abbrT = false,
                        // force abbreviation to trillions
                    abbrForce = false,
                        // force abbreviation
                    bytes = '',
                        ord = '',
                        abs = Math.abs(value),
                        suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                        min,
                        max,
                        power,
                        w,
                        precision,
                        thousands,
                        d = '',
                        neg = false;

                    // check if number is zero and a custom zero format has been set
                    if (value === 0 && zeroFormat !== null) {
                        return zeroFormat;
                    } else {
                        // see if we should use parentheses for negative number or if we should prefix with a sign
                        // if both are present we default to parentheses
                        if (format.indexOf('(') > -1) {
                            negP = true;
                            format = format.slice(1, -1);
                        } else if (format.indexOf('+') > -1) {
                            signed = true;
                            format = format.replace(/\+/g, '');
                        }

                        // see if abbreviation is wanted
                        if (format.indexOf('a') > -1) {
                            // check if abbreviation is specified
                            abbrK = format.indexOf('aK') >= 0;
                            abbrM = format.indexOf('aM') >= 0;
                            abbrB = format.indexOf('aB') >= 0;
                            abbrT = format.indexOf('aT') >= 0;
                            abbrForce = abbrK || abbrM || abbrB || abbrT;

                            // check for space before abbreviation
                            if (format.indexOf(' a') > -1) {
                                abbr = ' ';
                                format = format.replace(' a', '');
                            } else {
                                format = format.replace('a', '');
                            }

                            if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
                                // trillion
                                abbr = abbr + languages[currentLanguage].abbreviations.trillion;
                                value = value / Math.pow(10, 12);
                            } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
                                // billion
                                abbr = abbr + languages[currentLanguage].abbreviations.billion;
                                value = value / Math.pow(10, 9);
                            } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
                                // million
                                abbr = abbr + languages[currentLanguage].abbreviations.million;
                                value = value / Math.pow(10, 6);
                            } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
                                // thousand
                                abbr = abbr + languages[currentLanguage].abbreviations.thousand;
                                value = value / Math.pow(10, 3);
                            }
                        }

                        // see if we are formatting bytes
                        if (format.indexOf('b') > -1) {
                            // check for space before
                            if (format.indexOf(' b') > -1) {
                                bytes = ' ';
                                format = format.replace(' b', '');
                            } else {
                                format = format.replace('b', '');
                            }

                            for (power = 0; power <= suffixes.length; power++) {
                                min = Math.pow(1024, power);
                                max = Math.pow(1024, power + 1);

                                if (value >= min && value < max) {
                                    bytes = bytes + suffixes[power];
                                    if (min > 0) {
                                        value = value / min;
                                    }
                                    break;
                                }
                            }
                        }

                        // see if ordinal is wanted
                        if (format.indexOf('o') > -1) {
                            // check for space before
                            if (format.indexOf(' o') > -1) {
                                ord = ' ';
                                format = format.replace(' o', '');
                            } else {
                                format = format.replace('o', '');
                            }

                            ord = ord + languages[currentLanguage].ordinal(value);
                        }

                        if (format.indexOf('[.]') > -1) {
                            optDec = true;
                            format = format.replace('[.]', '.');
                        }

                        w = value.toString().split('.')[0];
                        precision = format.split('.')[1];
                        thousands = format.indexOf(',');

                        if (precision) {
                            if (precision.indexOf('[') > -1) {
                                precision = precision.replace(']', '');
                                precision = precision.split('[');
                                d = toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
                            } else {
                                d = toFixed(value, precision.length, roundingFunction);
                            }

                            w = d.split('.')[0];

                            if (d.split('.')[1].length) {
                                d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
                            } else {
                                d = '';
                            }

                            if (optDec && Number(d.slice(1)) === 0) {
                                d = '';
                            }
                        } else {
                            w = toFixed(value, null, roundingFunction);
                        }

                        // format number
                        if (w.indexOf('-') > -1) {
                            w = w.slice(1);
                            neg = true;
                        }

                        if (thousands > -1) {
                            w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
                        }

                        if (format.indexOf('.') === 0) {
                            w = '';
                        }

                        return (negP && neg ? '(' : '') + (!negP && neg ? '-' : '') + (!neg && signed ? '+' : '') + w + d + (ord ? ord : '') + (abbr ? abbr : '') + (bytes ? bytes : '') + (negP && neg ? ')' : '');
                    }
                }

                /************************************
                    Top Level Functions
                ************************************/

                _numeral = function numeral(input) {
                    if (_numeral.isNumeral(input)) {
                        input = input.value();
                    } else if (input === 0 || typeof input === 'undefined') {
                        input = 0;
                    } else if (!Number(input)) {
                        input = _numeral.fn.unformat(input);
                    }

                    return new Numeral(Number(input));
                };

                // version number
                _numeral.version = VERSION;

                // compare numeral object
                _numeral.isNumeral = function (obj) {
                    return obj instanceof Numeral;
                };

                // This function will load languages and then set the global language.  If
                // no arguments are passed in, it will simply return the current global
                // language key.
                _numeral.language = function (key, values) {
                    if (!key) {
                        return currentLanguage;
                    }

                    if (key && !values) {
                        if (!languages[key]) {
                            throw new Error('Unknown language : ' + key);
                        }
                        currentLanguage = key;
                    }

                    if (values || !languages[key]) {
                        loadLanguage(key, values);
                    }

                    return _numeral;
                };

                // This function provides access to the loaded language data.  If
                // no arguments are passed in, it will simply return the current
                // global language object.
                _numeral.languageData = function (key) {
                    if (!key) {
                        return languages[currentLanguage];
                    }

                    if (!languages[key]) {
                        throw new Error('Unknown language : ' + key);
                    }

                    return languages[key];
                };

                _numeral.language('en', {
                    delimiters: {
                        thousands: ',',
                        decimal: '.'
                    },
                    abbreviations: {
                        thousand: 'k',
                        million: 'm',
                        billion: 'b',
                        trillion: 't'
                    },
                    ordinal: function ordinal(number) {
                        var b = number % 10;
                        return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                    },
                    currency: {
                        symbol: '$'
                    }
                });

                _numeral.zeroFormat = function (format) {
                    zeroFormat = typeof format === 'string' ? format : null;
                };

                _numeral.defaultFormat = function (format) {
                    defaultFormat = typeof format === 'string' ? format : '0.0';
                };

                /************************************
                    Helpers
                ************************************/

                function loadLanguage(key, values) {
                    languages[key] = values;
                }

                /************************************
                    Floating-point helpers
                ************************************/

                // The floating-point helper functions and implementation
                // borrows heavily from sinful.js: http://guipn.github.io/sinful.js/

                /**
                 * Array.prototype.reduce for browsers that don't support it
                 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Compatibility
                 */
                if ('function' !== typeof Array.prototype.reduce) {
                    Array.prototype.reduce = function (callback, opt_initialValue) {
                        'use strict';

                        if (null === this || 'undefined' === typeof this) {
                            // At the moment all modern browsers, that support strict mode, have
                            // native implementation of Array.prototype.reduce. For instance, IE8
                            // does not support strict mode, so this check is actually useless.
                            throw new TypeError('Array.prototype.reduce called on null or undefined');
                        }

                        if ('function' !== typeof callback) {
                            throw new TypeError(callback + ' is not a function');
                        }

                        var index,
                            value,
                            length = this.length >>> 0,
                            isValueSet = false;

                        if (1 < arguments.length) {
                            value = opt_initialValue;
                            isValueSet = true;
                        }

                        for (index = 0; length > index; ++index) {
                            if (this.hasOwnProperty(index)) {
                                if (isValueSet) {
                                    value = callback(value, this[index], index, this);
                                } else {
                                    value = this[index];
                                    isValueSet = true;
                                }
                            }
                        }

                        if (!isValueSet) {
                            throw new TypeError('Reduce of empty array with no initial value');
                        }

                        return value;
                    };
                }

                /**
                 * Computes the multiplier necessary to make x >= 1,
                 * effectively eliminating miscalculations caused by
                 * finite precision.
                 */
                function multiplier(x) {
                    var parts = x.toString().split('.');
                    if (parts.length < 2) {
                        return 1;
                    }
                    return Math.pow(10, parts[1].length);
                }

                /**
                 * Given a variable number of arguments, returns the maximum
                 * multiplier that must be used to normalize an operation involving
                 * all of them.
                 */
                function correctionFactor() {
                    var args = Array.prototype.slice.call(arguments);
                    return args.reduce(function (prev, next) {
                        var mp = multiplier(prev),
                            mn = multiplier(next);
                        return mp > mn ? mp : mn;
                    }, -Infinity);
                }

                /************************************
                    Numeral Prototype
                ************************************/

                _numeral.fn = Numeral.prototype = {

                    clone: function clone() {
                        return _numeral(this);
                    },

                    format: function format(inputString, roundingFunction) {
                        return formatNumeral(this, inputString ? inputString : defaultFormat, roundingFunction !== undefined ? roundingFunction : Math.round);
                    },

                    unformat: function unformat(inputString) {
                        if (Object.prototype.toString.call(inputString) === '[object Number]') {
                            return inputString;
                        }
                        return unformatNumeral(this, inputString ? inputString : defaultFormat);
                    },

                    value: function value() {
                        return this._value;
                    },

                    valueOf: function valueOf() {
                        return this._value;
                    },

                    set: function set(value) {
                        this._value = Number(value);
                        return this;
                    },

                    add: function add(value) {
                        var corrFactor = correctionFactor.call(null, this._value, value);
                        function cback(accum, curr, currI, O) {
                            return accum + corrFactor * curr;
                        }
                        this._value = [this._value, value].reduce(cback, 0) / corrFactor;
                        return this;
                    },

                    subtract: function subtract(value) {
                        var corrFactor = correctionFactor.call(null, this._value, value);
                        function cback(accum, curr, currI, O) {
                            return accum - corrFactor * curr;
                        }
                        this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;
                        return this;
                    },

                    multiply: function multiply(value) {
                        function cback(accum, curr, currI, O) {
                            var corrFactor = correctionFactor(accum, curr);
                            return accum * corrFactor * (curr * corrFactor) / (corrFactor * corrFactor);
                        }
                        this._value = [this._value, value].reduce(cback, 1);
                        return this;
                    },

                    divide: function divide(value) {
                        function cback(accum, curr, currI, O) {
                            var corrFactor = correctionFactor(accum, curr);
                            return accum * corrFactor / (curr * corrFactor);
                        }
                        this._value = [this._value, value].reduce(cback);
                        return this;
                    },

                    difference: function difference(value) {
                        return Math.abs(_numeral(this._value).subtract(value).value());
                    }

                };

                /************************************
                    Exposing Numeral
                ************************************/

                // CommonJS module is defined
                if (hasModule) {
                    module.exports = _numeral;
                }

                /*global ender:false */
                if (typeof ender === 'undefined') {
                    // here, `this` means `window` in the browser, or `global` on the server
                    // add `numeral` as a global object via a string identifier,
                    // for Closure Compiler 'advanced' mode
                    this['numeral'] = _numeral;
                }

                /*global define:false */
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return _numeral;
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
            }).call(this);

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            /**!
            
             @license
             handlebars v4.0.11
            
            Copyright (C) 2011-2017 by Yehuda Katz
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in
            all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
            THE SOFTWARE.
            
            */
            !function (a, b) {
                true ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? exports.Handlebars = b() : a.Handlebars = b();
            }(this, function () {
                return function (a) {
                    function b(d) {
                        if (c[d]) return c[d].exports;var e = c[d] = { exports: {}, id: d, loaded: !1 };return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports;
                    }var c = {};return b.m = a, b.c = c, b.p = "", b(0);
                }([function (a, b, c) {
                    "use strict";
                    function d() {
                        var a = r();return a.compile = function (b, c) {
                            return k.compile(b, c, a);
                        }, a.precompile = function (b, c) {
                            return k.precompile(b, c, a);
                        }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a;
                    }var e = c(1)["default"];b.__esModule = !0;var f = c(2),
                        g = e(f),
                        h = c(35),
                        i = e(h),
                        j = c(36),
                        k = c(41),
                        l = c(42),
                        m = e(l),
                        n = c(39),
                        o = e(n),
                        p = c(34),
                        q = e(p),
                        r = g["default"].create,
                        s = d();s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"];
                }, function (a, b) {
                    "use strict";
                    b["default"] = function (a) {
                        return a && a.__esModule ? a : { "default": a };
                    }, b.__esModule = !0;
                }, function (a, b, c) {
                    "use strict";
                    function d() {
                        var a = new h.HandlebarsEnvironment();return n.extend(a, h), a.SafeString = j["default"], a.Exception = l["default"], a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function (b) {
                            return p.template(b, a);
                        }, a;
                    }var e = c(3)["default"],
                        f = c(1)["default"];b.__esModule = !0;var g = c(4),
                        h = e(g),
                        i = c(21),
                        j = f(i),
                        k = c(6),
                        l = f(k),
                        m = c(5),
                        n = e(m),
                        o = c(22),
                        p = e(o),
                        q = c(34),
                        r = f(q),
                        s = d();s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"];
                }, function (a, b) {
                    "use strict";
                    b["default"] = function (a) {
                        if (a && a.__esModule) return a;var b = {};if (null != a) for (var c in a) {
                            Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                        }return b["default"] = a, b;
                    }, b.__esModule = !0;
                }, function (a, b, c) {
                    "use strict";
                    function d(a, b, c) {
                        this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this);
                    }var e = c(1)["default"];b.__esModule = !0, b.HandlebarsEnvironment = d;var f = c(5),
                        g = c(6),
                        h = e(g),
                        i = c(10),
                        j = c(18),
                        k = c(20),
                        l = e(k),
                        m = "4.0.11";b.VERSION = m;var n = 7;b.COMPILER_REVISION = n;var o = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0" };b.REVISION_CHANGES = o;var p = "[object Object]";d.prototype = { constructor: d, logger: l["default"], log: l["default"].log, registerHelper: function registerHelper(a, b) {
                            if (f.toString.call(a) === p) {
                                if (b) throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers, a);
                            } else this.helpers[a] = b;
                        }, unregisterHelper: function unregisterHelper(a) {
                            delete this.helpers[a];
                        }, registerPartial: function registerPartial(a, b) {
                            if (f.toString.call(a) === p) f.extend(this.partials, a);else {
                                if ("undefined" == typeof b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');this.partials[a] = b;
                            }
                        }, unregisterPartial: function unregisterPartial(a) {
                            delete this.partials[a];
                        }, registerDecorator: function registerDecorator(a, b) {
                            if (f.toString.call(a) === p) {
                                if (b) throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators, a);
                            } else this.decorators[a] = b;
                        }, unregisterDecorator: function unregisterDecorator(a) {
                            delete this.decorators[a];
                        } };var q = l["default"].log;b.log = q, b.createFrame = f.createFrame, b.logger = l["default"];
                }, function (a, b) {
                    "use strict";
                    function c(a) {
                        return k[a];
                    }function d(a) {
                        for (var b = 1; b < arguments.length; b++) {
                            for (var c in arguments[b]) {
                                Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                            }
                        }return a;
                    }function e(a, b) {
                        for (var c = 0, d = a.length; c < d; c++) {
                            if (a[c] === b) return c;
                        }return -1;
                    }function f(a) {
                        if ("string" != typeof a) {
                            if (a && a.toHTML) return a.toHTML();if (null == a) return "";if (!a) return a + "";a = "" + a;
                        }return m.test(a) ? a.replace(l, c) : a;
                    }function g(a) {
                        return !a && 0 !== a || !(!p(a) || 0 !== a.length);
                    }function h(a) {
                        var b = d({}, a);return b._parent = a, b;
                    }function i(a, b) {
                        return a.path = b, a;
                    }function j(a, b) {
                        return (a ? a + "." : "") + b;
                    }b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;var k = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" },
                        l = /[&<>"'`=]/g,
                        m = /[&<>"'`=]/,
                        n = Object.prototype.toString;b.toString = n;var o = function o(a) {
                        return "function" == typeof a;
                    };o(/x/) && (b.isFunction = o = function o(a) {
                        return "function" == typeof a && "[object Function]" === n.call(a);
                    }), b.isFunction = o;var p = Array.isArray || function (a) {
                        return !(!a || "object" != (typeof a === 'undefined' ? 'undefined' : _typeof(a))) && "[object Array]" === n.call(a);
                    };b.isArray = p;
                }, function (a, b, c) {
                    "use strict";
                    function d(a, b) {
                        var c = b && b.loc,
                            g = void 0,
                            h = void 0;c && (g = c.start.line, h = c.start.column, a += " - " + g + ":" + h);for (var i = Error.prototype.constructor.call(this, a), j = 0; j < f.length; j++) {
                            this[f[j]] = i[f[j]];
                        }Error.captureStackTrace && Error.captureStackTrace(this, d);try {
                            c && (this.lineNumber = g, e ? Object.defineProperty(this, "column", { value: h, enumerable: !0 }) : this.column = h);
                        } catch (k) {}
                    }var e = c(7)["default"];b.__esModule = !0;var f = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];d.prototype = new Error(), b["default"] = d, a.exports = b["default"];
                }, function (a, b, c) {
                    a.exports = { "default": c(8), __esModule: !0 };
                }, function (a, b, c) {
                    var d = c(9);a.exports = function (a, b, c) {
                        return d.setDesc(a, b, c);
                    };
                }, function (a, b) {
                    var c = Object;a.exports = { create: c.create, getProto: c.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: c.getOwnPropertyDescriptor, setDesc: c.defineProperty, setDescs: c.defineProperties, getKeys: c.keys, getNames: c.getOwnPropertyNames, getSymbols: c.getOwnPropertySymbols, each: [].forEach };
                }, function (a, b, c) {
                    "use strict";
                    function d(a) {
                        g["default"](a), i["default"](a), k["default"](a), m["default"](a), o["default"](a), q["default"](a), s["default"](a);
                    }var e = c(1)["default"];b.__esModule = !0, b.registerDefaultHelpers = d;var f = c(11),
                        g = e(f),
                        h = c(12),
                        i = e(h),
                        j = c(13),
                        k = e(j),
                        l = c(14),
                        m = e(l),
                        n = c(15),
                        o = e(n),
                        p = c(16),
                        q = e(p),
                        r = c(17),
                        s = e(r);
                }, function (a, b, c) {
                    "use strict";
                    b.__esModule = !0;var d = c(5);b["default"] = function (a) {
                        a.registerHelper("blockHelperMissing", function (b, c) {
                            var e = c.inverse,
                                f = c.fn;if (b === !0) return f(this);if (b === !1 || null == b) return e(this);if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);if (c.data && c.ids) {
                                var g = d.createFrame(c.data);g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = { data: g };
                            }return f(b, c);
                        });
                    }, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    var d = c(1)["default"];b.__esModule = !0;var e = c(5),
                        f = c(6),
                        g = d(f);b["default"] = function (a) {
                        a.registerHelper("each", function (a, b) {
                            function c(b, c, f) {
                                j && (j.key = b, j.index = c, j.first = 0 === c, j.last = !!f, k && (j.contextPath = k + b)), i += d(a[b], { data: j, blockParams: e.blockParams([a[b], b], [k + b, null]) });
                            }if (!b) throw new g["default"]("Must pass iterator to #each");var d = b.fn,
                                f = b.inverse,
                                h = 0,
                                i = "",
                                j = void 0,
                                k = void 0;if (b.data && b.ids && (k = e.appendContextPath(b.data.contextPath, b.ids[0]) + "."), e.isFunction(a) && (a = a.call(this)), b.data && (j = e.createFrame(b.data)), a && "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) if (e.isArray(a)) for (var l = a.length; h < l; h++) {
                                h in a && c(h, h, h === a.length - 1);
                            } else {
                                var m = void 0;for (var n in a) {
                                    a.hasOwnProperty(n) && (void 0 !== m && c(m, h - 1), m = n, h++);
                                }void 0 !== m && c(m, h - 1, !0);
                            }return 0 === h && (i = f(this)), i;
                        });
                    }, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    var d = c(1)["default"];b.__esModule = !0;var e = c(6),
                        f = d(e);b["default"] = function (a) {
                        a.registerHelper("helperMissing", function () {
                            if (1 !== arguments.length) throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                        });
                    }, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    b.__esModule = !0;var d = c(5);b["default"] = function (a) {
                        a.registerHelper("if", function (a, b) {
                            return d.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || d.isEmpty(a) ? b.inverse(this) : b.fn(this);
                        }), a.registerHelper("unless", function (b, c) {
                            return a.helpers["if"].call(this, b, { fn: c.inverse, inverse: c.fn, hash: c.hash });
                        });
                    }, a.exports = b["default"];
                }, function (a, b) {
                    "use strict";
                    b.__esModule = !0, b["default"] = function (a) {
                        a.registerHelper("log", function () {
                            for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) {
                                b.push(arguments[d]);
                            }var e = 1;null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b);
                        });
                    }, a.exports = b["default"];
                }, function (a, b) {
                    "use strict";
                    b.__esModule = !0, b["default"] = function (a) {
                        a.registerHelper("lookup", function (a, b) {
                            return a && a[b];
                        });
                    }, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    b.__esModule = !0;var d = c(5);b["default"] = function (a) {
                        a.registerHelper("with", function (a, b) {
                            d.isFunction(a) && (a = a.call(this));var c = b.fn;if (d.isEmpty(a)) return b.inverse(this);var e = b.data;return b.data && b.ids && (e = d.createFrame(b.data), e.contextPath = d.appendContextPath(b.data.contextPath, b.ids[0])), c(a, { data: e, blockParams: d.blockParams([a], [e && e.contextPath]) });
                        });
                    }, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d(a) {
                        g["default"](a);
                    }var e = c(1)["default"];b.__esModule = !0, b.registerDefaultDecorators = d;var f = c(19),
                        g = e(f);
                }, function (a, b, c) {
                    "use strict";
                    b.__esModule = !0;var d = c(5);b["default"] = function (a) {
                        a.registerDecorator("inline", function (a, b, c, e) {
                            var f = a;return b.partials || (b.partials = {}, f = function f(e, _f) {
                                var g = c.partials;c.partials = d.extend({}, g, b.partials);var h = a(e, _f);return c.partials = g, h;
                            }), b.partials[e.args[0]] = e.fn, f;
                        });
                    }, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    b.__esModule = !0;var d = c(5),
                        e = { methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function lookupLevel(a) {
                            if ("string" == typeof a) {
                                var b = d.indexOf(e.methodMap, a.toLowerCase());a = b >= 0 ? b : parseInt(a, 10);
                            }return a;
                        }, log: function log(a) {
                            if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
                                var b = e.methodMap[a];console[b] || (b = "log");for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) {
                                    d[f - 1] = arguments[f];
                                }console[b].apply(console, d);
                            }
                        } };b["default"] = e, a.exports = b["default"];
                }, function (a, b) {
                    "use strict";
                    function c(a) {
                        this.string = a;
                    }b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function () {
                        return "" + this.string;
                    }, b["default"] = c, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d(a) {
                        var b = a && a[0] || 1,
                            c = s.COMPILER_REVISION;if (b !== c) {
                            if (b < c) {
                                var d = s.REVISION_CHANGES[c],
                                    e = s.REVISION_CHANGES[b];throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").");
                            }throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
                        }
                    }function e(a, b) {
                        function c(c, d, e) {
                            e.hash && (d = p.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);var f = b.VM.invokePartial.call(this, c, d, e);if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), f = e.partials[e.name](d, e)), null != f) {
                                if (e.indent) {
                                    for (var g = f.split("\n"), h = 0, i = g.length; h < i && (g[h] || h + 1 !== i); h++) {
                                        g[h] = e.indent + g[h];
                                    }f = g.join("\n");
                                }return f;
                            }throw new r["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode");
                        }function d(b) {
                            function c(b) {
                                return "" + a.main(e, b, e.helpers, e.partials, g, i, h);
                            }var f = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                g = f.data;d._setup(f), !f.partial && a.useData && (g = j(b, g));var h = void 0,
                                i = a.useBlockParams ? [] : void 0;return a.useDepths && (h = f.depths ? b != f.depths[0] ? [b].concat(f.depths) : f.depths : [b]), (c = k(a.main, c, e, f.depths || [], g, i))(b, f);
                        }if (!b) throw new r["default"]("No environment passed to template");if (!a || !a.main) throw new r["default"]("Unknown template object: " + (typeof a === 'undefined' ? 'undefined' : _typeof(a)));a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);var e = { strict: function strict(a, b) {
                                if (!(b in a)) throw new r["default"]('"' + b + '" not defined in ' + a);return a[b];
                            }, lookup: function lookup(a, b) {
                                for (var c = a.length, d = 0; d < c; d++) {
                                    if (a[d] && null != a[d][b]) return a[d][b];
                                }
                            }, lambda: function lambda(a, b) {
                                return "function" == typeof a ? a.call(b) : a;
                            }, escapeExpression: p.escapeExpression, invokePartial: c, fn: function fn(b) {
                                var c = a[b];return c.decorator = a[b + "_d"], c;
                            }, programs: [], program: function program(a, b, c, d, e) {
                                var g = this.programs[a],
                                    h = this.fn(a);return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g;
                            }, data: function data(a, b) {
                                for (; a && b--;) {
                                    a = a._parent;
                                }return a;
                            }, merge: function merge(a, b) {
                                var c = a || b;return a && b && a !== b && (c = p.extend({}, b, a)), c;
                            }, nullContext: l({}), noop: b.VM.noop, compilerInfo: a.compiler };return d.isTop = !0, d._setup = function (c) {
                            c.partial ? (e.helpers = c.helpers, e.partials = c.partials, e.decorators = c.decorators) : (e.helpers = e.merge(c.helpers, b.helpers), a.usePartial && (e.partials = e.merge(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (e.decorators = e.merge(c.decorators, b.decorators)));
                        }, d._child = function (b, c, d, g) {
                            if (a.useBlockParams && !d) throw new r["default"]("must pass block params");if (a.useDepths && !g) throw new r["default"]("must pass parent depths");return f(e, b, a[b], c, 0, d, g);
                        }, d;
                    }function f(a, b, c, d, e, f, g) {
                        function h(b) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                h = g;return !g || b == g[0] || b === a.nullContext && null === g[0] || (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h);
                        }return h = k(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h;
                    }function g(a, b, c) {
                        return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name], a;
                    }function h(a, b, c) {
                        var d = c.data && c.data["partial-block"];c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);var e = void 0;if (c.fn && c.fn !== i && !function () {
                            c.data = s.createFrame(c.data);var a = c.fn;e = c.data["partial-block"] = function (b) {
                                var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];return c.data = s.createFrame(c.data), c.data["partial-block"] = d, a(b, c);
                            }, a.partials && (c.partials = p.extend({}, c.partials, a.partials));
                        }(), void 0 === a && e && (a = e), void 0 === a) throw new r["default"]("The partial " + c.name + " could not be found");if (a instanceof Function) return a(b, c);
                    }function i() {
                        return "";
                    }function j(a, b) {
                        return b && "root" in b || (b = b ? s.createFrame(b) : {}, b.root = a), b;
                    }function k(a, b, c, d, e, f) {
                        if (a.decorator) {
                            var g = {};b = a.decorator(b, g, c, d && d[0], e, f, d), p.extend(b, g);
                        }return b;
                    }var l = c(23)["default"],
                        m = c(3)["default"],
                        n = c(1)["default"];b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;var o = c(5),
                        p = m(o),
                        q = c(6),
                        r = n(q),
                        s = c(4);
                }, function (a, b, c) {
                    a.exports = { "default": c(24), __esModule: !0 };
                }, function (a, b, c) {
                    c(25), a.exports = c(30).Object.seal;
                }, function (a, b, c) {
                    var d = c(26);c(27)("seal", function (a) {
                        return function (b) {
                            return a && d(b) ? a(b) : b;
                        };
                    });
                }, function (a, b) {
                    a.exports = function (a) {
                        return "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? null !== a : "function" == typeof a;
                    };
                }, function (a, b, c) {
                    var d = c(28),
                        e = c(30),
                        f = c(33);a.exports = function (a, b) {
                        var c = (e.Object || {})[a] || Object[a],
                            g = {};g[a] = b(c), d(d.S + d.F * f(function () {
                            c(1);
                        }), "Object", g);
                    };
                }, function (a, b, c) {
                    var d = c(29),
                        e = c(30),
                        f = c(31),
                        g = "prototype",
                        h = function h(a, b, c) {
                        var i,
                            j,
                            k,
                            l = a & h.F,
                            m = a & h.G,
                            n = a & h.S,
                            o = a & h.P,
                            p = a & h.B,
                            q = a & h.W,
                            r = m ? e : e[b] || (e[b] = {}),
                            s = m ? d : n ? d[b] : (d[b] || {})[g];m && (c = b);for (i in c) {
                            j = !l && s && i in s, j && i in r || (k = j ? s[i] : c[i], r[i] = m && "function" != typeof s[i] ? c[i] : p && j ? f(k, d) : q && s[i] == k ? function (a) {
                                var b = function b(_b) {
                                    return this instanceof a ? new a(_b) : a(_b);
                                };return b[g] = a[g], b;
                            }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k));
                        }
                    };h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h;
                }, function (a, b) {
                    var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = c);
                }, function (a, b) {
                    var c = a.exports = { version: "1.2.6" };"number" == typeof __e && (__e = c);
                }, function (a, b, c) {
                    var d = c(32);a.exports = function (a, b, c) {
                        if (d(a), void 0 === b) return a;switch (c) {case 1:
                                return function (c) {
                                    return a.call(b, c);
                                };case 2:
                                return function (c, d) {
                                    return a.call(b, c, d);
                                };case 3:
                                return function (c, d, e) {
                                    return a.call(b, c, d, e);
                                };}return function () {
                            return a.apply(b, arguments);
                        };
                    };
                }, function (a, b) {
                    a.exports = function (a) {
                        if ("function" != typeof a) throw TypeError(a + " is not a function!");return a;
                    };
                }, function (a, b) {
                    a.exports = function (a) {
                        try {
                            return !!a();
                        } catch (b) {
                            return !0;
                        }
                    };
                }, function (a, b) {
                    (function (c) {
                        "use strict";
                        b.__esModule = !0, b["default"] = function (a) {
                            var b = "undefined" != typeof c ? c : window,
                                d = b.Handlebars;a.noConflict = function () {
                                return b.Handlebars === a && (b.Handlebars = d), a;
                            };
                        }, a.exports = b["default"];
                    }).call(b, function () {
                        return this;
                    }());
                }, function (a, b) {
                    "use strict";
                    b.__esModule = !0;var c = { helpers: { helperExpression: function helperExpression(a) {
                                return "SubExpression" === a.type || ("MustacheStatement" === a.type || "BlockStatement" === a.type) && !!(a.params && a.params.length || a.hash);
                            }, scopedId: function scopedId(a) {
                                return (/^\.|this\b/.test(a.original)
                                );
                            }, simpleId: function simpleId(a) {
                                return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth;
                            } } };b["default"] = c, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d(a, b) {
                        if ("Program" === a.type) return a;h["default"].yy = n, n.locInfo = function (a) {
                            return new n.SourceLocation(b && b.srcName, a);
                        };var c = new j["default"](b);return c.accept(h["default"].parse(a));
                    }var e = c(1)["default"],
                        f = c(3)["default"];b.__esModule = !0, b.parse = d;var g = c(37),
                        h = e(g),
                        i = c(38),
                        j = e(i),
                        k = c(40),
                        l = f(k),
                        m = c(5);b.parser = h["default"];var n = {};m.extend(n, l);
                }, function (a, b) {
                    "use strict";
                    b.__esModule = !0;var c = function () {
                        function a() {
                            this.yy = {};
                        }var b = { trace: function trace() {}, yy: {}, symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition_plus0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 }, terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" }, productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]], performAction: function performAction(a, b, c, d, e, f, g) {
                                var h = f.length - 1;switch (e) {case 1:
                                        return f[h - 1];case 2:
                                        this.$ = d.prepareProgram(f[h]);break;case 3:
                                        this.$ = f[h];break;case 4:
                                        this.$ = f[h];break;case 5:
                                        this.$ = f[h];break;case 6:
                                        this.$ = f[h];break;case 7:
                                        this.$ = f[h];break;case 8:
                                        this.$ = f[h];break;case 9:
                                        this.$ = { type: "CommentStatement", value: d.stripComment(f[h]), strip: d.stripFlags(f[h], f[h]), loc: d.locInfo(this._$) };break;case 10:
                                        this.$ = { type: "ContentStatement", original: f[h], value: f[h], loc: d.locInfo(this._$) };break;case 11:
                                        this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);break;case 12:
                                        this.$ = { path: f[h - 3], params: f[h - 2], hash: f[h - 1] };break;case 13:
                                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);break;case 14:
                                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);break;case 15:
                                        this.$ = { open: f[h - 5], path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };break;case 16:
                                        this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };break;case 17:
                                        this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };break;case 18:
                                        this.$ = { strip: d.stripFlags(f[h - 1], f[h - 1]), program: f[h] };break;case 19:
                                        var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                                            j = d.prepareProgram([i], f[h - 1].loc);j.chained = !0, this.$ = { strip: f[h - 2].strip, program: j, chain: !0 };break;case 20:
                                        this.$ = f[h];break;case 21:
                                        this.$ = { path: f[h - 1], strip: d.stripFlags(f[h - 2], f[h]) };break;case 22:
                                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);break;case 23:
                                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);break;case 24:
                                        this.$ = { type: "PartialStatement", name: f[h - 3], params: f[h - 2], hash: f[h - 1], indent: "", strip: d.stripFlags(f[h - 4], f[h]), loc: d.locInfo(this._$) };break;case 25:
                                        this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);break;case 26:
                                        this.$ = { path: f[h - 3], params: f[h - 2], hash: f[h - 1], strip: d.stripFlags(f[h - 4], f[h]) };break;case 27:
                                        this.$ = f[h];break;case 28:
                                        this.$ = f[h];break;case 29:
                                        this.$ = { type: "SubExpression", path: f[h - 3], params: f[h - 2], hash: f[h - 1], loc: d.locInfo(this._$) };break;case 30:
                                        this.$ = { type: "Hash", pairs: f[h], loc: d.locInfo(this._$) };break;case 31:
                                        this.$ = { type: "HashPair", key: d.id(f[h - 2]), value: f[h], loc: d.locInfo(this._$) };break;case 32:
                                        this.$ = d.id(f[h - 1]);break;case 33:
                                        this.$ = f[h];break;case 34:
                                        this.$ = f[h];break;case 35:
                                        this.$ = { type: "StringLiteral", value: f[h], original: f[h], loc: d.locInfo(this._$) };break;case 36:
                                        this.$ = { type: "NumberLiteral", value: Number(f[h]), original: Number(f[h]), loc: d.locInfo(this._$) };break;case 37:
                                        this.$ = { type: "BooleanLiteral", value: "true" === f[h], original: "true" === f[h], loc: d.locInfo(this._$) };break;case 38:
                                        this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: d.locInfo(this._$) };break;case 39:
                                        this.$ = { type: "NullLiteral", original: null, value: null, loc: d.locInfo(this._$) };break;case 40:
                                        this.$ = f[h];break;case 41:
                                        this.$ = f[h];break;case 42:
                                        this.$ = d.preparePath(!0, f[h], this._$);break;case 43:
                                        this.$ = d.preparePath(!1, f[h], this._$);break;case 44:
                                        f[h - 2].push({ part: d.id(f[h]), original: f[h], separator: f[h - 1] }), this.$ = f[h - 2];break;case 45:
                                        this.$ = [{ part: d.id(f[h]), original: f[h] }];break;case 46:
                                        this.$ = [];break;case 47:
                                        f[h - 1].push(f[h]);break;case 48:
                                        this.$ = [f[h]];break;case 49:
                                        f[h - 1].push(f[h]);break;case 50:
                                        this.$ = [];break;case 51:
                                        f[h - 1].push(f[h]);break;case 58:
                                        this.$ = [];break;case 59:
                                        f[h - 1].push(f[h]);break;case 64:
                                        this.$ = [];break;case 65:
                                        f[h - 1].push(f[h]);break;case 70:
                                        this.$ = [];break;case 71:
                                        f[h - 1].push(f[h]);break;case 78:
                                        this.$ = [];break;case 79:
                                        f[h - 1].push(f[h]);break;case 82:
                                        this.$ = [];break;case 83:
                                        f[h - 1].push(f[h]);break;case 86:
                                        this.$ = [];break;case 87:
                                        f[h - 1].push(f[h]);break;case 90:
                                        this.$ = [];break;case 91:
                                        f[h - 1].push(f[h]);break;case 94:
                                        this.$ = [];break;case 95:
                                        f[h - 1].push(f[h]);break;case 98:
                                        this.$ = [f[h]];break;case 99:
                                        f[h - 1].push(f[h]);break;case 100:
                                        this.$ = [f[h]];break;case 101:
                                        f[h - 1].push(f[h]);}
                            }, table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87],
                                85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }], defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] }, parseError: function parseError(a, b) {
                                throw new Error(a);
                            }, parse: function parse(a) {
                                function b() {
                                    var a;return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a;
                                }var c = this,
                                    d = [0],
                                    e = [null],
                                    f = [],
                                    g = this.table,
                                    h = "",
                                    i = 0,
                                    j = 0,
                                    k = 0;this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});var l = this.lexer.yylloc;f.push(l);var m = this.lexer.options && this.lexer.options.ranges;"function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                                    if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                                        var x = "";if (!k) {
                                            v = [];for (s in g[p]) {
                                                this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                            }x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, { text: this.lexer.match, token: this.terminals_[n] || n, line: this.lexer.yylineno, loc: l, expected: v });
                                        }
                                    }if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);switch (q[0]) {case 1:
                                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);break;case 2:
                                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = { first_line: f[f.length - (t || 1)].first_line, last_line: f[f.length - 1].last_line, first_column: f[f.length - (t || 1)].first_column, last_column: f[f.length - 1].last_column }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);break;case 3:
                                            return !0;}
                                }return !0;
                            } },
                            c = function () {
                            var a = { EOF: 1, parseError: function parseError(a, b) {
                                    if (!this.yy.parser) throw new Error(a);this.yy.parser.parseError(a, b);
                                }, setInput: function setInput(a) {
                                    return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
                                }, input: function input() {
                                    var a = this._input[0];this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;var b = a.match(/(?:\r\n?|\n).*/g);return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a;
                                }, unput: function unput(a) {
                                    var b = a.length,
                                        c = a.split(/(?:\r\n?|\n)/g);this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;var d = this.match.split(/(?:\r\n?|\n)/g);this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);var e = this.yylloc.range;return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this;
                                }, more: function more() {
                                    return this._more = !0, this;
                                }, less: function less(a) {
                                    this.unput(this.match.slice(a));
                                }, pastInput: function pastInput() {
                                    var a = this.matched.substr(0, this.matched.length - this.match.length);return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "");
                                }, upcomingInput: function upcomingInput() {
                                    var a = this.match;return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "");
                                }, showPosition: function showPosition() {
                                    var a = this.pastInput(),
                                        b = new Array(a.length + 1).join("-");return a + this.upcomingInput() + "\n" + b + "^";
                                }, next: function next() {
                                    if (this.done) return this.EOF;this._input || (this.done = !0);var a, b, c, d, e;this._more || (this.yytext = "", this.match = "");for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++) {}return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
                                }, lex: function lex() {
                                    var a = this.next();return "undefined" != typeof a ? a : this.lex();
                                }, begin: function begin(a) {
                                    this.conditionStack.push(a);
                                }, popState: function popState() {
                                    return this.conditionStack.pop();
                                }, _currentRules: function _currentRules() {
                                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                                }, topState: function topState() {
                                    return this.conditionStack[this.conditionStack.length - 2];
                                }, pushState: function pushState(a) {
                                    this.begin(a);
                                } };return a.options = {}, a.performAction = function (a, b, c, d) {
                                function e(a, c) {
                                    return b.yytext = b.yytext.substr(a, b.yyleng - c);
                                }switch (c) {case 0:
                                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;break;case 1:
                                        return 15;case 2:
                                        return this.popState(), 15;case 3:
                                        return this.begin("raw"), 15;case 4:
                                        return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (b.yytext = b.yytext.substr(5, b.yyleng - 9), "END_RAW_BLOCK");case 5:
                                        return 15;case 6:
                                        return this.popState(), 14;case 7:
                                        return 65;case 8:
                                        return 68;case 9:
                                        return 19;case 10:
                                        return this.popState(), this.begin("raw"), 23;case 11:
                                        return 55;case 12:
                                        return 60;case 13:
                                        return 29;case 14:
                                        return 47;case 15:
                                        return this.popState(), 44;case 16:
                                        return this.popState(), 44;case 17:
                                        return 34;case 18:
                                        return 39;case 19:
                                        return 51;case 20:
                                        return 48;case 21:
                                        this.unput(b.yytext), this.popState(), this.begin("com");break;case 22:
                                        return this.popState(), 14;case 23:
                                        return 48;case 24:
                                        return 73;case 25:
                                        return 72;case 26:
                                        return 72;case 27:
                                        return 87;case 28:
                                        break;case 29:
                                        return this.popState(), 54;case 30:
                                        return this.popState(), 33;case 31:
                                        return b.yytext = e(1, 2).replace(/\\"/g, '"'), 80;case 32:
                                        return b.yytext = e(1, 2).replace(/\\'/g, "'"), 80;case 33:
                                        return 85;case 34:
                                        return 82;case 35:
                                        return 82;case 36:
                                        return 83;case 37:
                                        return 84;case 38:
                                        return 81;case 39:
                                        return 75;case 40:
                                        return 77;case 41:
                                        return 72;case 42:
                                        return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;case 43:
                                        return "INVALID";case 44:
                                        return 5;}
                            }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, a;
                        }();return b.lexer = c, a.prototype = b, b.Parser = a, new a();
                    }();b["default"] = c, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d() {
                        var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];this.options = a;
                    }function e(a, b, c) {
                        void 0 === b && (b = a.length);var d = a[b - 1],
                            e = a[b - 2];return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c;
                    }function f(a, b, c) {
                        void 0 === b && (b = -1);var d = a[b + 1],
                            e = a[b + 2];return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c;
                    }function g(a, b, c) {
                        var d = a[null == b ? 0 : b + 1];if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                            var e = d.value;d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e;
                        }
                    }function h(a, b, c) {
                        var d = a[null == b ? a.length - 1 : b - 1];if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                            var e = d.value;return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped;
                        }
                    }var i = c(1)["default"];b.__esModule = !0;var j = c(39),
                        k = i(j);d.prototype = new k["default"](), d.prototype.Program = function (a) {
                        var b = !this.options.ignoreStandalone,
                            c = !this.isRootSeen;this.isRootSeen = !0;for (var d = a.body, i = 0, j = d.length; i < j; i++) {
                            var k = d[i],
                                l = this.accept(k);if (l) {
                                var m = e(d, i, c),
                                    n = f(d, i, c),
                                    o = l.openStandalone && m,
                                    p = l.closeStandalone && n,
                                    q = l.inlineStandalone && m && n;l.close && g(d, i, !0), l.open && h(d, i, !0), b && q && (g(d, i), h(d, i) && "PartialStatement" === k.type && (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])), b && o && (g((k.program || k.inverse).body), h(d, i)), b && p && (g(d, i), h((k.inverse || k.program).body));
                            }
                        }return a;
                    }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function (a) {
                        this.accept(a.program), this.accept(a.inverse);var b = a.program || a.inverse,
                            c = a.program && a.inverse,
                            d = c,
                            i = c;if (c && c.chained) for (d = c.body[0].program; i.chained;) {
                            i = i.body[i.body.length - 1].program;
                        }var j = { open: a.openStrip.open, close: a.closeStrip.close, openStandalone: f(b.body), closeStandalone: e((d || b).body) };if (a.openStrip.close && g(b.body, null, !0), c) {
                            var k = a.inverseStrip;k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), !this.options.ignoreStandalone && e(b.body) && f(d.body) && (h(b.body), g(d.body));
                        } else a.closeStrip.open && h(b.body, null, !0);return j;
                    }, d.prototype.Decorator = d.prototype.MustacheStatement = function (a) {
                        return a.strip;
                    }, d.prototype.PartialStatement = d.prototype.CommentStatement = function (a) {
                        var b = a.strip || {};return { inlineStandalone: !0, open: b.open, close: b.close };
                    }, b["default"] = d, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d() {
                        this.parents = [];
                    }function e(a) {
                        this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
                    }function f(a) {
                        e.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse");
                    }function g(a) {
                        this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
                    }var h = c(1)["default"];b.__esModule = !0;var i = c(6),
                        j = h(i);d.prototype = { constructor: d, mutating: !1, acceptKey: function acceptKey(a, b) {
                            var c = this.accept(a[b]);if (this.mutating) {
                                if (c && !d.prototype[c.type]) throw new j["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);a[b] = c;
                            }
                        }, acceptRequired: function acceptRequired(a, b) {
                            if (this.acceptKey(a, b), !a[b]) throw new j["default"](a.type + " requires " + b);
                        }, acceptArray: function acceptArray(a) {
                            for (var b = 0, c = a.length; b < c; b++) {
                                this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--);
                            }
                        }, accept: function accept(a) {
                            if (a) {
                                if (!this[a.type]) throw new j["default"]("Unknown type: " + a.type, a);this.current && this.parents.unshift(this.current), this.current = a;var b = this[a.type](a);return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0;
                            }
                        }, Program: function Program(a) {
                            this.acceptArray(a.body);
                        }, MustacheStatement: e, Decorator: e, BlockStatement: f, DecoratorBlock: f, PartialStatement: g, PartialBlockStatement: function PartialBlockStatement(a) {
                            g.call(this, a), this.acceptKey(a, "program");
                        }, ContentStatement: function ContentStatement() {}, CommentStatement: function CommentStatement() {}, SubExpression: e, PathExpression: function PathExpression() {}, StringLiteral: function StringLiteral() {}, NumberLiteral: function NumberLiteral() {}, BooleanLiteral: function BooleanLiteral() {}, UndefinedLiteral: function UndefinedLiteral() {}, NullLiteral: function NullLiteral() {}, Hash: function Hash(a) {
                            this.acceptArray(a.pairs);
                        }, HashPair: function HashPair(a) {
                            this.acceptRequired(a, "value");
                        } }, b["default"] = d, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d(a, b) {
                        if (b = b.path ? b.path.original : b, a.path.original !== b) {
                            var c = { loc: a.path.loc };throw new q["default"](a.path.original + " doesn't match " + b, c);
                        }
                    }function e(a, b) {
                        this.source = a, this.start = { line: b.first_line, column: b.first_column }, this.end = { line: b.last_line, column: b.last_column };
                    }function f(a) {
                        return (/^\[.*\]$/.test(a) ? a.substr(1, a.length - 2) : a
                        );
                    }function g(a, b) {
                        return { open: "~" === a.charAt(2), close: "~" === b.charAt(b.length - 3) };
                    }function h(a) {
                        return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
                    }function i(a, b, c) {
                        c = this.locInfo(c);for (var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length; h < i; h++) {
                            var j = b[h].part,
                                k = b[h].original !== j;if (d += (b[h].separator || "") + j, k || ".." !== j && "." !== j && "this" !== j) e.push(j);else {
                                if (e.length > 0) throw new q["default"]("Invalid path: " + d, { loc: c });".." === j && (f++, g += "../");
                            }
                        }return { type: "PathExpression", data: a, depth: f, parts: e, original: d, loc: c };
                    }function j(a, b, c, d, e, f) {
                        var g = d.charAt(3) || d.charAt(2),
                            h = "{" !== g && "&" !== g,
                            i = /\*/.test(d);return { type: i ? "Decorator" : "MustacheStatement", path: a, params: b, hash: c, escaped: h, strip: e, loc: this.locInfo(f) };
                    }function k(a, b, c, e) {
                        d(a, c), e = this.locInfo(e);var f = { type: "Program", body: b, strip: {}, loc: e };return { type: "BlockStatement", path: a.path, params: a.params, hash: a.hash, program: f, openStrip: {}, inverseStrip: {}, closeStrip: {}, loc: e };
                    }function l(a, b, c, e, f, g) {
                        e && e.path && d(a, e);var h = /\*/.test(a.open);b.blockParams = a.blockParams;var i = void 0,
                            j = void 0;if (c) {
                            if (h) throw new q["default"]("Unexpected inverse block on decorator", c);c.chain && (c.program.body[0].closeStrip = e.strip), j = c.strip, i = c.program;
                        }return f && (f = i, i = b, b = f), { type: h ? "DecoratorBlock" : "BlockStatement", path: a.path, params: a.params, hash: a.hash, program: b, inverse: i, openStrip: a.strip, inverseStrip: j, closeStrip: e && e.strip, loc: this.locInfo(g) };
                    }function m(a, b) {
                        if (!b && a.length) {
                            var c = a[0].loc,
                                d = a[a.length - 1].loc;c && d && (b = { source: c.source, start: { line: c.start.line, column: c.start.column }, end: { line: d.end.line, column: d.end.column } });
                        }return { type: "Program", body: a, strip: {}, loc: b };
                    }function n(a, b, c, e) {
                        return d(a, c), { type: "PartialBlockStatement", name: a.path, params: a.params, hash: a.hash, program: b, openStrip: a.strip, closeStrip: c && c.strip, loc: this.locInfo(e) };
                    }var o = c(1)["default"];b.__esModule = !0, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;var p = c(6),
                        q = o(p);
                }, function (a, b, c) {
                    "use strict";
                    function d() {}function e(a, b, c) {
                        if (null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);var d = c.parse(a, b),
                            e = new c.Compiler().compile(d, b);return new c.JavaScriptCompiler().compile(e, b);
                    }function f(a, b, c) {
                        function d() {
                            var d = c.parse(a, b),
                                e = new c.Compiler().compile(d, b),
                                f = new c.JavaScriptCompiler().compile(e, b, void 0, !0);return c.template(f);
                        }function e(a, b) {
                            return f || (f = d()), f.call(this, a, b);
                        }if (void 0 === b && (b = {}), null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);b = l.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);var f = void 0;return e._setup = function (a) {
                            return f || (f = d()), f._setup(a);
                        }, e._child = function (a, b, c, e) {
                            return f || (f = d()), f._child(a, b, c, e);
                        }, e;
                    }function g(a, b) {
                        if (a === b) return !0;if (l.isArray(a) && l.isArray(b) && a.length === b.length) {
                            for (var c = 0; c < a.length; c++) {
                                if (!g(a[c], b[c])) return !1;
                            }return !0;
                        }
                    }function h(a) {
                        if (!a.path.parts) {
                            var b = a.path;a.path = { type: "PathExpression", data: !1, depth: 0, parts: [b.original + ""], original: b.original + "", loc: b.loc };
                        }
                    }var i = c(1)["default"];b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;var j = c(6),
                        k = i(j),
                        l = c(5),
                        m = c(35),
                        n = i(m),
                        o = [].slice;d.prototype = { compiler: d, equals: function equals(a) {
                            var b = this.opcodes.length;if (a.opcodes.length !== b) return !1;for (var c = 0; c < b; c++) {
                                var d = this.opcodes[c],
                                    e = a.opcodes[c];if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
                            }b = this.children.length;for (var c = 0; c < b; c++) {
                                if (!this.children[c].equals(a.children[c])) return !1;
                            }return !0;
                        }, guid: 0, compile: function compile(a, b) {
                            this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [];var c = b.knownHelpers;if (b.knownHelpers = { helperMissing: !0, blockHelperMissing: !0, each: !0, "if": !0, unless: !0, "with": !0, log: !0, lookup: !0 }, c) for (var d in c) {
                                d in c && (this.options.knownHelpers[d] = c[d]);
                            }return this.accept(a);
                        }, compileProgram: function compileProgram(a) {
                            var b = new this.compiler(),
                                c = b.compile(a, this.options),
                                d = this.guid++;return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d;
                        }, accept: function accept(a) {
                            if (!this[a.type]) throw new k["default"]("Unknown type: " + a.type, a);this.sourceNode.unshift(a);var b = this[a.type](a);return this.sourceNode.shift(), b;
                        }, Program: function Program(a) {
                            this.options.blockParams.unshift(a.blockParams);for (var b = a.body, c = b.length, d = 0; d < c; d++) {
                                this.accept(b[d]);
                            }return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this;
                        }, BlockStatement: function BlockStatement(a) {
                            h(a);var b = a.program,
                                c = a.inverse;b = b && this.compileProgram(b), c = c && this.compileProgram(c);var d = this.classifySexpr(a);"helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
                        }, DecoratorBlock: function DecoratorBlock(a) {
                            var b = a.program && this.compileProgram(a.program),
                                c = this.setupFullMustacheParams(a, b, void 0),
                                d = a.path;this.useDecorators = !0, this.opcode("registerDecorator", c.length, d.original);
                        }, PartialStatement: function PartialStatement(a) {
                            this.usePartial = !0;var b = a.program;b && (b = this.compileProgram(a.program));var c = a.params;if (c.length > 1) throw new k["default"]("Unsupported number of partial arguments: " + c.length, a);c.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c.push({ type: "PathExpression", parts: [], depth: 0 }));var d = a.name.original,
                                e = "SubExpression" === a.name.type;e && this.accept(a.name), this.setupFullMustacheParams(a, b, void 0, !0);var f = a.indent || "";this.options.preventIndent && f && (this.opcode("appendContent", f), f = ""), this.opcode("invokePartial", e, d, f), this.opcode("append");
                        }, PartialBlockStatement: function PartialBlockStatement(a) {
                            this.PartialStatement(a);
                        }, MustacheStatement: function MustacheStatement(a) {
                            this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
                        }, Decorator: function Decorator(a) {
                            this.DecoratorBlock(a);
                        }, ContentStatement: function ContentStatement(a) {
                            a.value && this.opcode("appendContent", a.value);
                        }, CommentStatement: function CommentStatement() {}, SubExpression: function SubExpression(a) {
                            h(a);var b = this.classifySexpr(a);"simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a);
                        }, ambiguousSexpr: function ambiguousSexpr(a, b, c) {
                            var d = a.path,
                                e = d.parts[0],
                                f = null != b || null != c;this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), d.strict = !0, this.accept(d), this.opcode("invokeAmbiguous", e, f);
                        }, simpleSexpr: function simpleSexpr(a) {
                            var b = a.path;b.strict = !0, this.accept(b), this.opcode("resolvePossibleLambda");
                        }, helperSexpr: function helperSexpr(a, b, c) {
                            var d = this.setupFullMustacheParams(a, b, c),
                                e = a.path,
                                f = e.parts[0];if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);else {
                                if (this.options.knownHelpersOnly) throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);e.strict = !0, e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, n["default"].helpers.simpleId(e));
                            }
                        }, PathExpression: function PathExpression(a) {
                            this.addDepth(a.depth), this.opcode("getContext", a.depth);var b = a.parts[0],
                                c = n["default"].helpers.scopedId(a),
                                d = !a.depth && !c && this.blockParamIndex(b);d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts, a.strict)) : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c) : this.opcode("pushContext");
                        }, StringLiteral: function StringLiteral(a) {
                            this.opcode("pushString", a.value);
                        }, NumberLiteral: function NumberLiteral(a) {
                            this.opcode("pushLiteral", a.value);
                        }, BooleanLiteral: function BooleanLiteral(a) {
                            this.opcode("pushLiteral", a.value);
                        }, UndefinedLiteral: function UndefinedLiteral() {
                            this.opcode("pushLiteral", "undefined");
                        }, NullLiteral: function NullLiteral() {
                            this.opcode("pushLiteral", "null");
                        }, Hash: function Hash(a) {
                            var b = a.pairs,
                                c = 0,
                                d = b.length;for (this.opcode("pushHash"); c < d; c++) {
                                this.pushParam(b[c].value);
                            }for (; c--;) {
                                this.opcode("assignToHash", b[c].key);
                            }this.opcode("popHash");
                        }, opcode: function opcode(a) {
                            this.opcodes.push({ opcode: a, args: o.call(arguments, 1), loc: this.sourceNode[0].loc });
                        }, addDepth: function addDepth(a) {
                            a && (this.useDepths = !0);
                        }, classifySexpr: function classifySexpr(a) {
                            var b = n["default"].helpers.simpleId(a.path),
                                c = b && !!this.blockParamIndex(a.path.parts[0]),
                                d = !c && n["default"].helpers.helperExpression(a),
                                e = !c && (d || b);if (e && !d) {
                                var f = a.path.parts[0],
                                    g = this.options;g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1);
                            }return d ? "helper" : e ? "ambiguous" : "simple";
                        }, pushParams: function pushParams(a) {
                            for (var b = 0, c = a.length; b < c; b++) {
                                this.pushParam(a[b]);
                            }
                        }, pushParam: function pushParam(a) {
                            var b = null != a.value ? a.value : a.original || "";if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);else {
                                if (this.trackIds) {
                                    var c = void 0;if (!a.parts || n["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
                                        var d = a.parts.slice(1).join(".");this.opcode("pushId", "BlockParam", c, d);
                                    } else b = a.original || b, b.replace && (b = b.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a.type, b);
                                }this.accept(a);
                            }
                        }, setupFullMustacheParams: function setupFullMustacheParams(a, b, c, d) {
                            var e = a.params;return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e;
                        }, blockParamIndex: function blockParamIndex(a) {
                            for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
                                var d = this.options.blockParams[b],
                                    e = d && l.indexOf(d, a);if (d && e >= 0) return [b, e];
                            }
                        } };
                }, function (a, b, c) {
                    "use strict";
                    function d(a) {
                        this.value = a;
                    }function e() {}function f(a, b, c, d) {
                        var e = b.popStack(),
                            f = 0,
                            g = c.length;for (a && g--; f < g; f++) {
                            e = b.nameLookup(e, c[f], d);
                        }return a ? [b.aliasable("container.strict"), "(", e, ", ", b.quotedString(c[f]), ")"] : e;
                    }var g = c(1)["default"];b.__esModule = !0;var h = c(4),
                        i = c(6),
                        j = g(i),
                        k = c(5),
                        l = c(43),
                        m = g(l);e.prototype = { nameLookup: function nameLookup(a, b) {
                            return e.isValidJavaScriptVariableName(b) ? [a, ".", b] : [a, "[", JSON.stringify(b), "]"];
                        }, depthedLookup: function depthedLookup(a) {
                            return [this.aliasable("container.lookup"), '(depths, "', a, '")'];
                        }, compilerInfo: function compilerInfo() {
                            var a = h.COMPILER_REVISION,
                                b = h.REVISION_CHANGES[a];return [a, b];
                        }, appendToBuffer: function appendToBuffer(a, b, c) {
                            return k.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a);
                        }, initializeBuffer: function initializeBuffer() {
                            return this.quotedString("");
                        }, compile: function compile(a, b, c, d) {
                            this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || { decorators: [], programs: [], environments: [] }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || a.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;var e = a.opcodes,
                                f = void 0,
                                g = void 0,
                                h = void 0,
                                i = void 0;for (h = 0, i = e.length; h < i; h++) {
                                f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
                            }if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new j["default"]("Compile completed with content left on stack");this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), d ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));var k = this.createFunctionContext(d);if (this.isChild) return k;var l = { compiler: this.compilerInfo(), main: k };this.decorators && (l.main_d = this.decorators, l.useDecorators = !0);var m = this.context,
                                n = m.programs,
                                o = m.decorators;for (h = 0, i = n.length; h < i; h++) {
                                n[h] && (l[h] = n[h], o[h] && (l[h + "_d"] = o[h], l.useDecorators = !0));
                            }return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({ file: b.destName }), l.map = l.map && l.map.toString()) : l = l.toString()), l;
                        }, preamble: function preamble() {
                            this.lastContext = 0, this.source = new m["default"](this.options.srcName), this.decorators = new m["default"](this.options.srcName);
                        }, createFunctionContext: function createFunctionContext(a) {
                            var b = "",
                                c = this.stackVars.concat(this.registers.list);c.length > 0 && (b += ", " + c.join(", "));var d = 0;for (var e in this.aliases) {
                                var f = this.aliases[e];this.aliases.hasOwnProperty(e) && f.children && f.referenceCount > 1 && (b += ", alias" + ++d + "=" + e, f.children[0] = "alias" + d);
                            }var g = ["container", "depth0", "helpers", "partials", "data"];(this.useBlockParams || this.useDepths) && g.push("blockParams"), this.useDepths && g.push("depths");var h = this.mergeSource(b);return a ? (g.push(h), Function.apply(this, g)) : this.source.wrap(["function(", g.join(","), ") {\n  ", h, "}"]);
                        }, mergeSource: function mergeSource(a) {
                            var b = this.environment.isSimple,
                                c = !this.forceBuffer,
                                d = void 0,
                                e = void 0,
                                f = void 0,
                                g = void 0;return this.source.each(function (a) {
                                a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1));
                            }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge();
                        }, blockValue: function blockValue(a) {
                            var b = this.aliasable("helpers.blockHelperMissing"),
                                c = [this.contextName(0)];this.setupHelperArgs(a, 0, c);var d = this.popStack();c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c));
                        }, ambiguousBlockValue: function ambiguousBlockValue() {
                            var a = this.aliasable("helpers.blockHelperMissing"),
                                b = [this.contextName(0)];this.setupHelperArgs("", 0, b, !0), this.flushInline();var c = this.topStack();b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"]);
                        }, appendContent: function appendContent(a) {
                            this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a;
                        }, append: function append() {
                            if (this.isInline()) this.replaceStack(function (a) {
                                return [" != null ? ", a, ' : ""'];
                            }), this.pushSource(this.appendToBuffer(this.popStack()));else {
                                var a = this.popStack();this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
                            }
                        }, appendEscaped: function appendEscaped() {
                            this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
                        }, getContext: function getContext(a) {
                            this.lastContext = a;
                        }, pushContext: function pushContext() {
                            this.pushStackLiteral(this.contextName(this.lastContext));
                        }, lookupOnContext: function lookupOnContext(a, b, c, d) {
                            var e = 0;d || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[e++])), this.resolvePath("context", a, e, b, c);
                        }, lookupBlockParam: function lookupBlockParam(a, b) {
                            this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1);
                        }, lookupData: function lookupData(a, b, c) {
                            a ? this.pushStackLiteral("container.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0, c);
                        }, resolvePath: function resolvePath(a, b, c, d, e) {
                            var g = this;if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict && e, this, b, a));for (var h = b.length; c < h; c++) {
                                this.replaceStack(function (e) {
                                    var f = g.nameLookup(e, b[c], a);return d ? [" && ", f] : [" != null ? ", f, " : ", e];
                                });
                            }
                        }, resolvePossibleLambda: function resolvePossibleLambda() {
                            this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
                        }, pushStringParam: function pushStringParam(a, b) {
                            this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a));
                        }, emptyHash: function emptyHash(a) {
                            this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}");
                        }, pushHash: function pushHash() {
                            this.hash && this.hashes.push(this.hash), this.hash = { values: [], types: [], contexts: [], ids: [] };
                        }, popHash: function popHash() {
                            var a = this.hash;this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values));
                        }, pushString: function pushString(a) {
                            this.pushStackLiteral(this.quotedString(a));
                        }, pushLiteral: function pushLiteral(a) {
                            this.pushStackLiteral(a);
                        }, pushProgram: function pushProgram(a) {
                            null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null);
                        }, registerDecorator: function registerDecorator(a, b) {
                            var c = this.nameLookup("decorators", b, "decorator"),
                                d = this.setupHelperArgs(b, a);this.decorators.push(["fn = ", this.decorators.functionCall(c, "", ["fn", "props", "container", d]), " || fn;"]);
                        }, invokeHelper: function invokeHelper(a, b, c) {
                            var d = this.popStack(),
                                e = this.setupHelper(a, b),
                                f = c ? [e.name, " || "] : "",
                                g = ["("].concat(f, d);this.options.strict || g.push(" || ", this.aliasable("helpers.helperMissing")), g.push(")"), this.push(this.source.functionCall(g, "call", e.callParams));
                        }, invokeKnownHelper: function invokeKnownHelper(a, b) {
                            var c = this.setupHelper(a, b);this.push(this.source.functionCall(c.name, "call", c.callParams));
                        }, invokeAmbiguous: function invokeAmbiguous(a, b) {
                            this.useRegister("helper");var c = this.popStack();this.emptyHash();var d = this.setupHelper(0, a, b),
                                e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                                f = ["(", "(helper = ", e, " || ", c, ")"];this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"]);
                        }, invokePartial: function invokePartial(a, b, c) {
                            var d = [],
                                e = this.setupParams(b, 1, d);a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", e.decorators = "container.decorators", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("container.invokePartial", "", d));
                        }, assignToHash: function assignToHash(a) {
                            var b = this.popStack(),
                                c = void 0,
                                d = void 0,
                                e = void 0;this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());var f = this.hash;c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b;
                        }, pushId: function pushId(a, b, c) {
                            "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
                        }, compiler: e, compileChildren: function compileChildren(a, b) {
                            for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; f < g; f++) {
                                d = c[f], e = new this.compiler();var h = this.matchExistingProgram(d);if (null == h) {
                                    this.context.programs.push("");var i = this.context.programs.length;d.index = i, d.name = "program" + i, this.context.programs[i] = e.compile(d, b, this.context, !this.precompile), this.context.decorators[i] = e.decorators, this.context.environments[i] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams, d.useDepths = this.useDepths, d.useBlockParams = this.useBlockParams;
                                } else d.index = h.index, d.name = "program" + h.index, this.useDepths = this.useDepths || h.useDepths, this.useBlockParams = this.useBlockParams || h.useBlockParams;
                            }
                        }, matchExistingProgram: function matchExistingProgram(a) {
                            for (var b = 0, c = this.context.environments.length; b < c; b++) {
                                var d = this.context.environments[b];if (d && d.equals(a)) return d;
                            }
                        }, programExpression: function programExpression(a) {
                            var b = this.environment.children[a],
                                c = [b.index, "data", b.blockParams];return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "container.program(" + c.join(", ") + ")";
                        }, useRegister: function useRegister(a) {
                            this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a));
                        }, push: function push(a) {
                            return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a;
                        }, pushStackLiteral: function pushStackLiteral(a) {
                            this.push(new d(a));
                        }, pushSource: function pushSource(a) {
                            this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a);
                        }, replaceStack: function replaceStack(a) {
                            var b = ["("],
                                c = void 0,
                                e = void 0,
                                f = void 0;if (!this.isInline()) throw new j["default"]("replaceStack on non-inline");var g = this.popStack(!0);if (g instanceof d) c = [g.value], b = ["(", c], f = !0;else {
                                e = !0;var h = this.incrStack();b = ["((", this.push(h), " = ", g, ")"], c = this.topStack();
                            }var i = a.call(this, c);f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"));
                        }, incrStack: function incrStack() {
                            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
                        }, topStackName: function topStackName() {
                            return "stack" + this.stackSlot;
                        }, flushInline: function flushInline() {
                            var a = this.inlineStack;this.inlineStack = [];for (var b = 0, c = a.length; b < c; b++) {
                                var e = a[b];if (e instanceof d) this.compileStack.push(e);else {
                                    var f = this.incrStack();this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f);
                                }
                            }
                        }, isInline: function isInline() {
                            return this.inlineStack.length;
                        }, popStack: function popStack(a) {
                            var b = this.isInline(),
                                c = (b ? this.inlineStack : this.compileStack).pop();if (!a && c instanceof d) return c.value;if (!b) {
                                if (!this.stackSlot) throw new j["default"]("Invalid stack pop");this.stackSlot--;
                            }return c;
                        }, topStack: function topStack() {
                            var a = this.isInline() ? this.inlineStack : this.compileStack,
                                b = a[a.length - 1];return b instanceof d ? b.value : b;
                        }, contextName: function contextName(a) {
                            return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
                        }, quotedString: function quotedString(a) {
                            return this.source.quotedString(a);
                        }, objectLiteral: function objectLiteral(a) {
                            return this.source.objectLiteral(a);
                        }, aliasable: function aliasable(a) {
                            var b = this.aliases[a];return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b);
                        }, setupHelper: function setupHelper(a, b, c) {
                            var d = [],
                                e = this.setupHelperArgs(b, a, d, c),
                                f = this.nameLookup("helpers", b, "helper"),
                                g = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");return { params: d, paramsInit: e, name: f, callParams: [g].concat(d) };
                        }, setupParams: function setupParams(a, b, c) {
                            var d = {},
                                e = [],
                                f = [],
                                g = [],
                                h = !c,
                                i = void 0;h && (c = []), d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());var j = this.popStack(),
                                k = this.popStack();(k || j) && (d.fn = k || "container.noop", d.inverse = j || "container.noop");for (var l = b; l--;) {
                                i = this.popStack(), c[l] = i, this.trackIds && (g[l] = this.popStack()), this.stringParams && (f[l] = this.popStack(), e[l] = this.popStack());
                            }return h && (d.args = this.source.generateArray(c)), this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d;
                        }, setupHelperArgs: function setupHelperArgs(a, b, c, d) {
                            var e = this.setupParams(a, b, c);return e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : c ? (c.push(e), "") : e;
                        } }, function () {
                        for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; c < d; c++) {
                            b[a[c]] = !0;
                        }
                    }(), e.isValidJavaScriptVariableName = function (a) {
                        return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
                    }, b["default"] = e, a.exports = b["default"];
                }, function (a, b, c) {
                    "use strict";
                    function d(a, b, c) {
                        if (f.isArray(a)) {
                            for (var d = [], e = 0, g = a.length; e < g; e++) {
                                d.push(b.wrap(a[e], c));
                            }return d;
                        }return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
                    }function e(a) {
                        this.srcFile = a, this.source = [];
                    }b.__esModule = !0;var f = c(5),
                        g = void 0;try {} catch (h) {}g || (g = function g(a, b, c, d) {
                        this.src = "", d && this.add(d);
                    }, g.prototype = { add: function add(a) {
                            f.isArray(a) && (a = a.join("")), this.src += a;
                        }, prepend: function prepend(a) {
                            f.isArray(a) && (a = a.join("")), this.src = a + this.src;
                        }, toStringWithSourceMap: function toStringWithSourceMap() {
                            return { code: this.toString() };
                        }, toString: function toString() {
                            return this.src;
                        } }), e.prototype = { isEmpty: function isEmpty() {
                            return !this.source.length;
                        }, prepend: function prepend(a, b) {
                            this.source.unshift(this.wrap(a, b));
                        }, push: function push(a, b) {
                            this.source.push(this.wrap(a, b));
                        }, merge: function merge() {
                            var a = this.empty();return this.each(function (b) {
                                a.add(["  ", b, "\n"]);
                            }), a;
                        }, each: function each(a) {
                            for (var b = 0, c = this.source.length; b < c; b++) {
                                a(this.source[b]);
                            }
                        }, empty: function empty() {
                            var a = this.currentLocation || { start: {} };return new g(a.start.line, a.start.column, this.srcFile);
                        }, wrap: function wrap(a) {
                            var b = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || { start: {} } : arguments[1];return a instanceof g ? a : (a = d(a, this, b), new g(b.start.line, b.start.column, this.srcFile, a));
                        }, functionCall: function functionCall(a, b, c) {
                            return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"]);
                        }, quotedString: function quotedString(a) {
                            return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + '"';
                        }, objectLiteral: function objectLiteral(a) {
                            var b = [];for (var c in a) {
                                if (a.hasOwnProperty(c)) {
                                    var e = d(a[c], this);"undefined" !== e && b.push([this.quotedString(c), ":", e]);
                                }
                            }var f = this.generateList(b);return f.prepend("{"), f.add("}"), f;
                        }, generateList: function generateList(a) {
                            for (var b = this.empty(), c = 0, e = a.length; c < e; c++) {
                                c && b.add(","), b.add(d(a[c], this));
                            }return b;
                        }, generateArray: function generateArray(a) {
                            var b = this.generateList(a);return b.prepend("["), b.add("]"), b;
                        } }, b["default"] = e, a.exports = b["default"];
                }]);
            });

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /**!
                                                                               * Sortable
                                                                               * @author	RubaXa   <trash@rubaxa.org>
                                                                               * @license MIT
                                                                               */

            (function sortableModule(factory) {
                "use strict";

                if (true) {
                    !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof module != "undefined" && typeof module.exports != "undefined") {
                    module.exports = factory();
                } else {
                    /* jshint sub:true */
                    window["Sortable"] = factory();
                }
            })(function sortableFactory() {
                "use strict";

                if (typeof window === "undefined" || !window.document) {
                    return function sortableError() {
                        throw new Error("Sortable.js requires a window with a document");
                    };
                }

                var dragEl,
                    parentEl,
                    ghostEl,
                    cloneEl,
                    rootEl,
                    nextEl,
                    lastDownEl,
                    scrollEl,
                    scrollParentEl,
                    scrollCustomFn,
                    lastEl,
                    lastCSS,
                    lastParentCSS,
                    oldIndex,
                    newIndex,
                    activeGroup,
                    putSortable,
                    autoScroll = {},
                    tapEvt,
                    touchEvt,
                    moved,


                /** @const */
                R_SPACE = /\s+/g,
                    R_FLOAT = /left|right|inline/,
                    expando = 'Sortable' + new Date().getTime(),
                    win = window,
                    document = win.document,
                    parseInt = win.parseInt,
                    setTimeout = win.setTimeout,
                    $ = win.jQuery || win.Zepto,
                    Polymer = win.Polymer,
                    captureMode = false,
                    passiveMode = false,
                    supportDraggable = 'draggable' in document.createElement('div'),
                    supportCssPointerEvents = function (el) {
                    // false when IE11
                    if (!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)) {
                        return false;
                    }
                    el = document.createElement('x');
                    el.style.cssText = 'pointer-events:auto';
                    return el.style.pointerEvents === 'auto';
                }(),
                    _silent = false,
                    abs = Math.abs,
                    min = Math.min,
                    savedInputChecked = [],
                    touchDragOverListeners = [],
                    _autoScroll = _throttle(function ( /**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
                    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
                    if (rootEl && options.scroll) {
                        var _this = rootEl[expando],
                            el,
                            rect,
                            sens = options.scrollSensitivity,
                            speed = options.scrollSpeed,
                            x = evt.clientX,
                            y = evt.clientY,
                            winWidth = window.innerWidth,
                            winHeight = window.innerHeight,
                            vx,
                            vy,
                            scrollOffsetX,
                            scrollOffsetY;

                        // Delect scrollEl
                        if (scrollParentEl !== rootEl) {
                            scrollEl = options.scroll;
                            scrollParentEl = rootEl;
                            scrollCustomFn = options.scrollFn;

                            if (scrollEl === true) {
                                scrollEl = rootEl;

                                do {
                                    if (scrollEl.offsetWidth < scrollEl.scrollWidth || scrollEl.offsetHeight < scrollEl.scrollHeight) {
                                        break;
                                    }
                                    /* jshint boss:true */
                                } while (scrollEl = scrollEl.parentNode);
                            }
                        }

                        if (scrollEl) {
                            el = scrollEl;
                            rect = scrollEl.getBoundingClientRect();
                            vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
                            vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
                        }

                        if (!(vx || vy)) {
                            vx = (winWidth - x <= sens) - (x <= sens);
                            vy = (winHeight - y <= sens) - (y <= sens);

                            /* jshint expr:true */
                            (vx || vy) && (el = win);
                        }

                        if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
                            autoScroll.el = el;
                            autoScroll.vx = vx;
                            autoScroll.vy = vy;

                            clearInterval(autoScroll.pid);

                            if (el) {
                                autoScroll.pid = setInterval(function () {
                                    scrollOffsetY = vy ? vy * speed : 0;
                                    scrollOffsetX = vx ? vx * speed : 0;

                                    if ('function' === typeof scrollCustomFn) {
                                        return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
                                    }

                                    if (el === win) {
                                        win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
                                    } else {
                                        el.scrollTop += scrollOffsetY;
                                        el.scrollLeft += scrollOffsetX;
                                    }
                                }, 24);
                            }
                        }
                    }
                }, 30),
                    _prepareGroup = function _prepareGroup(options) {
                    function toFn(value, pull) {
                        if (value === void 0 || value === true) {
                            value = group.name;
                        }

                        if (typeof value === 'function') {
                            return value;
                        } else {
                            return function (to, from) {
                                var fromGroup = from.options.group.name;

                                return pull ? value : value && (value.join ? value.indexOf(fromGroup) > -1 : fromGroup == value);
                            };
                        }
                    }

                    var group = {};
                    var originalGroup = options.group;

                    if (!originalGroup || (typeof originalGroup === 'undefined' ? 'undefined' : _typeof(originalGroup)) != 'object') {
                        originalGroup = { name: originalGroup };
                    }

                    group.name = originalGroup.name;
                    group.checkPull = toFn(originalGroup.pull, true);
                    group.checkPut = toFn(originalGroup.put);
                    group.revertClone = originalGroup.revertClone;

                    options.group = group;
                };

                // Detect support a passive mode
                try {
                    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                        get: function get() {
                            // `false`, because everything starts to work incorrectly and instead of d'n'd,
                            // begins the page has scrolled.
                            passiveMode = false;
                            captureMode = {
                                capture: false,
                                passive: passiveMode
                            };
                        }
                    }));
                } catch (err) {}

                /**
                 * @class  Sortable
                 * @param  {HTMLElement}  el
                 * @param  {Object}       [options]
                 */
                function Sortable(el, options) {
                    if (!(el && el.nodeType && el.nodeType === 1)) {
                        throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
                    }

                    this.el = el; // root element
                    this.options = options = _extend({}, options);

                    // Export instance
                    el[expando] = this;

                    // Default options
                    var defaults = {
                        group: Math.random(),
                        sort: true,
                        disabled: false,
                        store: null,
                        handle: null,
                        scroll: true,
                        scrollSensitivity: 30,
                        scrollSpeed: 10,
                        draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
                        ghostClass: 'sortable-ghost',
                        chosenClass: 'sortable-chosen',
                        dragClass: 'sortable-drag',
                        ignore: 'a, img',
                        filter: null,
                        preventOnFilter: true,
                        animation: 0,
                        setData: function setData(dataTransfer, dragEl) {
                            dataTransfer.setData('Text', dragEl.textContent);
                        },
                        dropBubble: false,
                        dragoverBubble: false,
                        dataIdAttr: 'data-id',
                        delay: 0,
                        forceFallback: false,
                        fallbackClass: 'sortable-fallback',
                        fallbackOnBody: false,
                        fallbackTolerance: 0,
                        fallbackOffset: { x: 0, y: 0 },
                        supportPointer: Sortable.supportPointer !== false
                    };

                    // Set default options
                    for (var name in defaults) {
                        !(name in options) && (options[name] = defaults[name]);
                    }

                    _prepareGroup(options);

                    // Bind all private methods
                    for (var fn in this) {
                        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
                            this[fn] = this[fn].bind(this);
                        }
                    }

                    // Setup drag mode
                    this.nativeDraggable = options.forceFallback ? false : supportDraggable;

                    // Bind events
                    _on(el, 'mousedown', this._onTapStart);
                    _on(el, 'touchstart', this._onTapStart);
                    options.supportPointer && _on(el, 'pointerdown', this._onTapStart);

                    if (this.nativeDraggable) {
                        _on(el, 'dragover', this);
                        _on(el, 'dragenter', this);
                    }

                    touchDragOverListeners.push(this._onDragOver);

                    // Restore sorting
                    options.store && this.sort(options.store.get(this));
                }

                Sortable.prototype = /** @lends Sortable.prototype */{
                    constructor: Sortable,

                    _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
                        var _this = this,
                            el = this.el,
                            options = this.options,
                            preventOnFilter = options.preventOnFilter,
                            type = evt.type,
                            touch = evt.touches && evt.touches[0],
                            target = (touch || evt).target,
                            originalTarget = evt.target.shadowRoot && evt.path && evt.path[0] || target,
                            filter = options.filter,
                            startIndex;

                        _saveInputCheckedState(el);

                        // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
                        if (dragEl) {
                            return;
                        }

                        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
                            return; // only left button or enabled
                        }

                        // cancel dnd if original target is content editable
                        if (originalTarget.isContentEditable) {
                            return;
                        }

                        target = _closest(target, options.draggable, el);

                        if (!target) {
                            return;
                        }

                        if (lastDownEl === target) {
                            // Ignoring duplicate `down`
                            return;
                        }

                        // Get the index of the dragged element within its parent
                        startIndex = _index(target, options.draggable);

                        // Check filter
                        if (typeof filter === 'function') {
                            if (filter.call(this, evt, target, this)) {
                                _dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
                                preventOnFilter && evt.preventDefault();
                                return; // cancel dnd
                            }
                        } else if (filter) {
                            filter = filter.split(',').some(function (criteria) {
                                criteria = _closest(originalTarget, criteria.trim(), el);

                                if (criteria) {
                                    _dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
                                    return true;
                                }
                            });

                            if (filter) {
                                preventOnFilter && evt.preventDefault();
                                return; // cancel dnd
                            }
                        }

                        if (options.handle && !_closest(originalTarget, options.handle, el)) {
                            return;
                        }

                        // Prepare `dragstart`
                        this._prepareDragStart(evt, touch, target, startIndex);
                    },

                    _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
                        var _this = this,
                            el = _this.el,
                            options = _this.options,
                            ownerDocument = el.ownerDocument,
                            dragStartFn;

                        if (target && !dragEl && target.parentNode === el) {
                            tapEvt = evt;

                            rootEl = el;
                            dragEl = target;
                            parentEl = dragEl.parentNode;
                            nextEl = dragEl.nextSibling;
                            lastDownEl = target;
                            activeGroup = options.group;
                            oldIndex = startIndex;

                            this._lastX = (touch || evt).clientX;
                            this._lastY = (touch || evt).clientY;

                            dragEl.style['will-change'] = 'all';

                            dragStartFn = function dragStartFn() {
                                // Delayed drag has been triggered
                                // we can re-enable the events: touchmove/mousemove
                                _this._disableDelayedDrag();

                                // Make the element draggable
                                dragEl.draggable = _this.nativeDraggable;

                                // Chosen item
                                _toggleClass(dragEl, options.chosenClass, true);

                                // Bind the events: dragstart/dragend
                                _this._triggerDragStart(evt, touch);

                                // Drag start event
                                _dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);
                            };

                            // Disable "draggable"
                            options.ignore.split(',').forEach(function (criteria) {
                                _find(dragEl, criteria.trim(), _disableDraggable);
                            });

                            _on(ownerDocument, 'mouseup', _this._onDrop);
                            _on(ownerDocument, 'touchend', _this._onDrop);
                            _on(ownerDocument, 'touchcancel', _this._onDrop);
                            _on(ownerDocument, 'selectstart', _this);
                            options.supportPointer && _on(ownerDocument, 'pointercancel', _this._onDrop);

                            if (options.delay) {
                                // If the user moves the pointer or let go the click or touch
                                // before the delay has been reached:
                                // disable the delayed drag
                                _on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                                _on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                                _on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                                _on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
                                _on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
                                options.supportPointer && _on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

                                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
                            } else {
                                dragStartFn();
                            }
                        }
                    },

                    _disableDelayedDrag: function _disableDelayedDrag() {
                        var ownerDocument = this.el.ownerDocument;

                        clearTimeout(this._dragStartTimer);
                        _off(ownerDocument, 'mouseup', this._disableDelayedDrag);
                        _off(ownerDocument, 'touchend', this._disableDelayedDrag);
                        _off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
                        _off(ownerDocument, 'mousemove', this._disableDelayedDrag);
                        _off(ownerDocument, 'touchmove', this._disableDelayedDrag);
                        _off(ownerDocument, 'pointermove', this._disableDelayedDrag);
                    },

                    _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
                        touch = touch || (evt.pointerType == 'touch' ? evt : null);

                        if (touch) {
                            // Touch device support
                            tapEvt = {
                                target: dragEl,
                                clientX: touch.clientX,
                                clientY: touch.clientY
                            };

                            this._onDragStart(tapEvt, 'touch');
                        } else if (!this.nativeDraggable) {
                            this._onDragStart(tapEvt, true);
                        } else {
                            _on(dragEl, 'dragend', this);
                            _on(rootEl, 'dragstart', this._onDragStart);
                        }

                        try {
                            if (document.selection) {
                                // Timeout neccessary for IE9
                                _nextTick(function () {
                                    document.selection.empty();
                                });
                            } else {
                                window.getSelection().removeAllRanges();
                            }
                        } catch (err) {}
                    },

                    _dragStarted: function _dragStarted() {
                        if (rootEl && dragEl) {
                            var options = this.options;

                            // Apply effect
                            _toggleClass(dragEl, options.ghostClass, true);
                            _toggleClass(dragEl, options.dragClass, false);

                            Sortable.active = this;

                            // Drag start event
                            _dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
                        } else {
                            this._nulling();
                        }
                    },

                    _emulateDragOver: function _emulateDragOver() {
                        if (touchEvt) {
                            if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
                                return;
                            }

                            this._lastX = touchEvt.clientX;
                            this._lastY = touchEvt.clientY;

                            if (!supportCssPointerEvents) {
                                _css(ghostEl, 'display', 'none');
                            }

                            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                            var parent = target;
                            var i = touchDragOverListeners.length;

                            if (target && target.shadowRoot) {
                                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                                parent = target;
                            }

                            if (parent) {
                                do {
                                    if (parent[expando]) {
                                        while (i--) {
                                            touchDragOverListeners[i]({
                                                clientX: touchEvt.clientX,
                                                clientY: touchEvt.clientY,
                                                target: target,
                                                rootEl: parent
                                            });
                                        }

                                        break;
                                    }

                                    target = parent; // store last element
                                }
                                /* jshint boss:true */
                                while (parent = parent.parentNode);
                            }

                            if (!supportCssPointerEvents) {
                                _css(ghostEl, 'display', '');
                            }
                        }
                    },

                    _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
                        if (tapEvt) {
                            var options = this.options,
                                fallbackTolerance = options.fallbackTolerance,
                                fallbackOffset = options.fallbackOffset,
                                touch = evt.touches ? evt.touches[0] : evt,
                                dx = touch.clientX - tapEvt.clientX + fallbackOffset.x,
                                dy = touch.clientY - tapEvt.clientY + fallbackOffset.y,
                                translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

                            // only set the status to dragging, when we are actually dragging
                            if (!Sortable.active) {
                                if (fallbackTolerance && min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance) {
                                    return;
                                }

                                this._dragStarted();
                            }

                            // as well as creating the ghost element on the document body
                            this._appendGhost();

                            moved = true;
                            touchEvt = touch;

                            _css(ghostEl, 'webkitTransform', translate3d);
                            _css(ghostEl, 'mozTransform', translate3d);
                            _css(ghostEl, 'msTransform', translate3d);
                            _css(ghostEl, 'transform', translate3d);

                            evt.preventDefault();
                        }
                    },

                    _appendGhost: function _appendGhost() {
                        if (!ghostEl) {
                            var rect = dragEl.getBoundingClientRect(),
                                css = _css(dragEl),
                                options = this.options,
                                ghostRect;

                            ghostEl = dragEl.cloneNode(true);

                            _toggleClass(ghostEl, options.ghostClass, false);
                            _toggleClass(ghostEl, options.fallbackClass, true);
                            _toggleClass(ghostEl, options.dragClass, true);

                            _css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
                            _css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
                            _css(ghostEl, 'width', rect.width);
                            _css(ghostEl, 'height', rect.height);
                            _css(ghostEl, 'opacity', '0.8');
                            _css(ghostEl, 'position', 'fixed');
                            _css(ghostEl, 'zIndex', '100000');
                            _css(ghostEl, 'pointerEvents', 'none');

                            options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

                            // Fixing dimensions.
                            ghostRect = ghostEl.getBoundingClientRect();
                            _css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
                            _css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
                        }
                    },

                    _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/useFallback) {
                        var _this = this;
                        var dataTransfer = evt.dataTransfer;
                        var options = _this.options;

                        _this._offUpEvents();

                        if (activeGroup.checkPull(_this, _this, dragEl, evt)) {
                            cloneEl = _clone(dragEl);

                            cloneEl.draggable = false;
                            cloneEl.style['will-change'] = '';

                            _css(cloneEl, 'display', 'none');
                            _toggleClass(cloneEl, _this.options.chosenClass, false);

                            // #1143: IFrame support workaround
                            _this._cloneId = _nextTick(function () {
                                rootEl.insertBefore(cloneEl, dragEl);
                                _dispatchEvent(_this, rootEl, 'clone', dragEl);
                            });
                        }

                        _toggleClass(dragEl, options.dragClass, true);

                        if (useFallback) {
                            if (useFallback === 'touch') {
                                // Bind touch events
                                _on(document, 'touchmove', _this._onTouchMove);
                                _on(document, 'touchend', _this._onDrop);
                                _on(document, 'touchcancel', _this._onDrop);

                                if (options.supportPointer) {
                                    _on(document, 'pointermove', _this._onTouchMove);
                                    _on(document, 'pointerup', _this._onDrop);
                                }
                            } else {
                                // Old brwoser
                                _on(document, 'mousemove', _this._onTouchMove);
                                _on(document, 'mouseup', _this._onDrop);
                            }

                            _this._loopId = setInterval(_this._emulateDragOver, 50);
                        } else {
                            if (dataTransfer) {
                                dataTransfer.effectAllowed = 'move';
                                options.setData && options.setData.call(_this, dataTransfer, dragEl);
                            }

                            _on(document, 'drop', _this);

                            // #1143: Бывает элемент с IFrame внутри блокирует `drop`,
                            // поэтому если вызвался `mouseover`, значит надо отменять весь d'n'd.
                            // Breaking Chrome 62+
                            // _on(document, 'mouseover', _this);

                            _this._dragStartId = _nextTick(_this._dragStarted);
                        }
                    },

                    _onDragOver: function _onDragOver( /**Event*/evt) {
                        var el = this.el,
                            target,
                            dragRect,
                            targetRect,
                            revert,
                            options = this.options,
                            group = options.group,
                            activeSortable = Sortable.active,
                            isOwner = activeGroup === group,
                            isMovingBetweenSortable = false,
                            canSort = options.sort;

                        if (evt.preventDefault !== void 0) {
                            evt.preventDefault();
                            !options.dragoverBubble && evt.stopPropagation();
                        }

                        if (dragEl.animated) {
                            return;
                        }

                        moved = true;

                        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
                        : putSortable === this || (activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt)) && (evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
                        ) {
                                // Smart auto-scrolling
                                _autoScroll(evt, options, this.el);

                                if (_silent) {
                                    return;
                                }

                                target = _closest(evt.target, options.draggable, el);
                                dragRect = dragEl.getBoundingClientRect();

                                if (putSortable !== this) {
                                    putSortable = this;
                                    isMovingBetweenSortable = true;
                                }

                                if (revert) {
                                    _cloneHide(activeSortable, true);
                                    parentEl = rootEl; // actualization

                                    if (cloneEl || nextEl) {
                                        rootEl.insertBefore(dragEl, cloneEl || nextEl);
                                    } else if (!canSort) {
                                        rootEl.appendChild(dragEl);
                                    }

                                    return;
                                }

                                if (el.children.length === 0 || el.children[0] === ghostEl || el === evt.target && _ghostIsLast(el, evt)) {
                                    //assign target only if condition is true
                                    if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
                                        target = el.lastElementChild;
                                    }

                                    if (target) {
                                        if (target.animated) {
                                            return;
                                        }

                                        targetRect = target.getBoundingClientRect();
                                    }

                                    _cloneHide(activeSortable, isOwner);

                                    if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
                                        if (!dragEl.contains(el)) {
                                            el.appendChild(dragEl);
                                            parentEl = el; // actualization
                                        }

                                        this._animate(dragRect, dragEl);
                                        target && this._animate(targetRect, target);
                                    }
                                } else if (target && !target.animated && target !== dragEl && target.parentNode[expando] !== void 0) {
                                    if (lastEl !== target) {
                                        lastEl = target;
                                        lastCSS = _css(target);
                                        lastParentCSS = _css(target.parentNode);
                                    }

                                    targetRect = target.getBoundingClientRect();

                                    var width = targetRect.right - targetRect.left,
                                        height = targetRect.bottom - targetRect.top,
                                        floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display) || lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0,
                                        isWide = target.offsetWidth > dragEl.offsetWidth,
                                        isLong = target.offsetHeight > dragEl.offsetHeight,
                                        halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
                                        nextSibling = target.nextElementSibling,
                                        after = false;

                                    if (floating) {
                                        var elTop = dragEl.offsetTop,
                                            tgTop = target.offsetTop;

                                        if (elTop === tgTop) {
                                            after = target.previousElementSibling === dragEl && !isWide || halfway && isWide;
                                        } else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
                                            after = (evt.clientY - targetRect.top) / height > 0.5;
                                        } else {
                                            after = tgTop > elTop;
                                        }
                                    } else if (!isMovingBetweenSortable) {
                                        after = nextSibling !== dragEl && !isLong || halfway && isLong;
                                    }

                                    var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

                                    if (moveVector !== false) {
                                        if (moveVector === 1 || moveVector === -1) {
                                            after = moveVector === 1;
                                        }

                                        _silent = true;
                                        setTimeout(_unsilent, 30);

                                        _cloneHide(activeSortable, isOwner);

                                        if (!dragEl.contains(el)) {
                                            if (after && !nextSibling) {
                                                el.appendChild(dragEl);
                                            } else {
                                                target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                                            }
                                        }

                                        parentEl = dragEl.parentNode; // actualization

                                        this._animate(dragRect, dragEl);
                                        this._animate(targetRect, target);
                                    }
                                }
                            }
                    },

                    _animate: function _animate(prevRect, target) {
                        var ms = this.options.animation;

                        if (ms) {
                            var currentRect = target.getBoundingClientRect();

                            if (prevRect.nodeType === 1) {
                                prevRect = prevRect.getBoundingClientRect();
                            }

                            _css(target, 'transition', 'none');
                            _css(target, 'transform', 'translate3d(' + (prevRect.left - currentRect.left) + 'px,' + (prevRect.top - currentRect.top) + 'px,0)');

                            target.offsetWidth; // repaint

                            _css(target, 'transition', 'all ' + ms + 'ms');
                            _css(target, 'transform', 'translate3d(0,0,0)');

                            clearTimeout(target.animated);
                            target.animated = setTimeout(function () {
                                _css(target, 'transition', '');
                                _css(target, 'transform', '');
                                target.animated = false;
                            }, ms);
                        }
                    },

                    _offUpEvents: function _offUpEvents() {
                        var ownerDocument = this.el.ownerDocument;

                        _off(document, 'touchmove', this._onTouchMove);
                        _off(document, 'pointermove', this._onTouchMove);
                        _off(ownerDocument, 'mouseup', this._onDrop);
                        _off(ownerDocument, 'touchend', this._onDrop);
                        _off(ownerDocument, 'pointerup', this._onDrop);
                        _off(ownerDocument, 'touchcancel', this._onDrop);
                        _off(ownerDocument, 'pointercancel', this._onDrop);
                        _off(ownerDocument, 'selectstart', this);
                    },

                    _onDrop: function _onDrop( /**Event*/evt) {
                        var el = this.el,
                            options = this.options;

                        clearInterval(this._loopId);
                        clearInterval(autoScroll.pid);
                        clearTimeout(this._dragStartTimer);

                        _cancelNextTick(this._cloneId);
                        _cancelNextTick(this._dragStartId);

                        // Unbind events
                        _off(document, 'mouseover', this);
                        _off(document, 'mousemove', this._onTouchMove);

                        if (this.nativeDraggable) {
                            _off(document, 'drop', this);
                            _off(el, 'dragstart', this._onDragStart);
                        }

                        this._offUpEvents();

                        if (evt) {
                            if (moved) {
                                evt.preventDefault();
                                !options.dropBubble && evt.stopPropagation();
                            }

                            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

                            if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
                                // Remove clone
                                cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
                            }

                            if (dragEl) {
                                if (this.nativeDraggable) {
                                    _off(dragEl, 'dragend', this);
                                }

                                _disableDraggable(dragEl);
                                dragEl.style['will-change'] = '';

                                // Remove class's
                                _toggleClass(dragEl, this.options.ghostClass, false);
                                _toggleClass(dragEl, this.options.chosenClass, false);

                                // Drag stop event
                                _dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex);

                                if (rootEl !== parentEl) {
                                    newIndex = _index(dragEl, options.draggable);

                                    if (newIndex >= 0) {
                                        // Add event
                                        _dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex);

                                        // Remove event
                                        _dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex);

                                        // drag from one list and drop into another
                                        _dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
                                        _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
                                    }
                                } else {
                                    if (dragEl.nextSibling !== nextEl) {
                                        // Get the index of the dragged element within its parent
                                        newIndex = _index(dragEl, options.draggable);

                                        if (newIndex >= 0) {
                                            // drag & drop within the same list
                                            _dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex);
                                            _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
                                        }
                                    }
                                }

                                if (Sortable.active) {
                                    /* jshint eqnull:true */
                                    if (newIndex == null || newIndex === -1) {
                                        newIndex = oldIndex;
                                    }

                                    _dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex);

                                    // Save sorting
                                    this.save();
                                }
                            }
                        }

                        this._nulling();
                    },

                    _nulling: function _nulling() {
                        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = scrollEl = scrollParentEl = tapEvt = touchEvt = moved = newIndex = lastEl = lastCSS = putSortable = activeGroup = Sortable.active = null;

                        savedInputChecked.forEach(function (el) {
                            el.checked = true;
                        });
                        savedInputChecked.length = 0;
                    },

                    handleEvent: function handleEvent( /**Event*/evt) {
                        switch (evt.type) {
                            case 'drop':
                            case 'dragend':
                                this._onDrop(evt);
                                break;

                            case 'dragover':
                            case 'dragenter':
                                if (dragEl) {
                                    this._onDragOver(evt);
                                    _globalDragOver(evt);
                                }
                                break;

                            case 'mouseover':
                                this._onDrop(evt);
                                break;

                            case 'selectstart':
                                evt.preventDefault();
                                break;
                        }
                    },

                    /**
                     * Serializes the item into an array of string.
                     * @returns {String[]}
                     */
                    toArray: function toArray() {
                        var order = [],
                            el,
                            children = this.el.children,
                            i = 0,
                            n = children.length,
                            options = this.options;

                        for (; i < n; i++) {
                            el = children[i];
                            if (_closest(el, options.draggable, this.el)) {
                                order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
                            }
                        }

                        return order;
                    },

                    /**
                     * Sorts the elements according to the array.
                     * @param  {String[]}  order  order of the items
                     */
                    sort: function sort(order) {
                        var items = {},
                            rootEl = this.el;

                        this.toArray().forEach(function (id, i) {
                            var el = rootEl.children[i];

                            if (_closest(el, this.options.draggable, rootEl)) {
                                items[id] = el;
                            }
                        }, this);

                        order.forEach(function (id) {
                            if (items[id]) {
                                rootEl.removeChild(items[id]);
                                rootEl.appendChild(items[id]);
                            }
                        });
                    },

                    /**
                     * Save the current sorting
                     */
                    save: function save() {
                        var store = this.options.store;
                        store && store.set(this);
                    },

                    /**
                     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
                     * @param   {HTMLElement}  el
                     * @param   {String}       [selector]  default: `options.draggable`
                     * @returns {HTMLElement|null}
                     */
                    closest: function closest(el, selector) {
                        return _closest(el, selector || this.options.draggable, this.el);
                    },

                    /**
                     * Set/get option
                     * @param   {string} name
                     * @param   {*}      [value]
                     * @returns {*}
                     */
                    option: function option(name, value) {
                        var options = this.options;

                        if (value === void 0) {
                            return options[name];
                        } else {
                            options[name] = value;

                            if (name === 'group') {
                                _prepareGroup(options);
                            }
                        }
                    },

                    /**
                     * Destroy
                     */
                    destroy: function destroy() {
                        var el = this.el;

                        el[expando] = null;

                        _off(el, 'mousedown', this._onTapStart);
                        _off(el, 'touchstart', this._onTapStart);
                        _off(el, 'pointerdown', this._onTapStart);

                        if (this.nativeDraggable) {
                            _off(el, 'dragover', this);
                            _off(el, 'dragenter', this);
                        }

                        // Remove draggable attributes
                        Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
                            el.removeAttribute('draggable');
                        });

                        touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

                        this._onDrop();

                        this.el = el = null;
                    }
                };

                function _cloneHide(sortable, state) {
                    if (sortable.lastPullMode !== 'clone') {
                        state = true;
                    }

                    if (cloneEl && cloneEl.state !== state) {
                        _css(cloneEl, 'display', state ? 'none' : '');

                        if (!state) {
                            if (cloneEl.state) {
                                if (sortable.options.group.revertClone) {
                                    rootEl.insertBefore(cloneEl, nextEl);
                                    sortable._animate(dragEl, cloneEl);
                                } else {
                                    rootEl.insertBefore(cloneEl, dragEl);
                                }
                            }
                        }

                        cloneEl.state = state;
                    }
                }

                function _closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
                    if (el) {
                        ctx = ctx || document;

                        do {
                            if (selector === '>*' && el.parentNode === ctx || _matches(el, selector)) {
                                return el;
                            }
                            /* jshint boss:true */
                        } while (el = _getParentOrHost(el));
                    }

                    return null;
                }

                function _getParentOrHost(el) {
                    var parent = el.host;

                    return parent && parent.nodeType ? parent : el.parentNode;
                }

                function _globalDragOver( /**Event*/evt) {
                    if (evt.dataTransfer) {
                        evt.dataTransfer.dropEffect = 'move';
                    }
                    evt.preventDefault();
                }

                function _on(el, event, fn) {
                    el.addEventListener(event, fn, captureMode);
                }

                function _off(el, event, fn) {
                    el.removeEventListener(event, fn, captureMode);
                }

                function _toggleClass(el, name, state) {
                    if (el) {
                        if (el.classList) {
                            el.classList[state ? 'add' : 'remove'](name);
                        } else {
                            var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
                            el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
                        }
                    }
                }

                function _css(el, prop, val) {
                    var style = el && el.style;

                    if (style) {
                        if (val === void 0) {
                            if (document.defaultView && document.defaultView.getComputedStyle) {
                                val = document.defaultView.getComputedStyle(el, '');
                            } else if (el.currentStyle) {
                                val = el.currentStyle;
                            }

                            return prop === void 0 ? val : val[prop];
                        } else {
                            if (!(prop in style)) {
                                prop = '-webkit-' + prop;
                            }

                            style[prop] = val + (typeof val === 'string' ? '' : 'px');
                        }
                    }
                }

                function _find(ctx, tagName, iterator) {
                    if (ctx) {
                        var list = ctx.getElementsByTagName(tagName),
                            i = 0,
                            n = list.length;

                        if (iterator) {
                            for (; i < n; i++) {
                                iterator(list[i], i);
                            }
                        }

                        return list;
                    }

                    return [];
                }

                function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex) {
                    sortable = sortable || rootEl[expando];

                    var evt = document.createEvent('Event'),
                        options = sortable.options,
                        onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

                    evt.initEvent(name, true, true);

                    evt.to = toEl || rootEl;
                    evt.from = fromEl || rootEl;
                    evt.item = targetEl || rootEl;
                    evt.clone = cloneEl;

                    evt.oldIndex = startIndex;
                    evt.newIndex = newIndex;

                    rootEl.dispatchEvent(evt);

                    if (options[onName]) {
                        options[onName].call(sortable, evt);
                    }
                }

                function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
                    var evt,
                        sortable = fromEl[expando],
                        onMoveFn = sortable.options.onMove,
                        retVal;

                    evt = document.createEvent('Event');
                    evt.initEvent('move', true, true);

                    evt.to = toEl;
                    evt.from = fromEl;
                    evt.dragged = dragEl;
                    evt.draggedRect = dragRect;
                    evt.related = targetEl || toEl;
                    evt.relatedRect = targetRect || toEl.getBoundingClientRect();
                    evt.willInsertAfter = willInsertAfter;

                    fromEl.dispatchEvent(evt);

                    if (onMoveFn) {
                        retVal = onMoveFn.call(sortable, evt, originalEvt);
                    }

                    return retVal;
                }

                function _disableDraggable(el) {
                    el.draggable = false;
                }

                function _unsilent() {
                    _silent = false;
                }

                /** @returns {HTMLElement|false} */
                function _ghostIsLast(el, evt) {
                    var lastEl = el.lastElementChild,
                        rect = lastEl.getBoundingClientRect();

                    // 5 — min delta
                    // abs — нельзя добавлять, а то глюки при наведении сверху
                    return evt.clientY - (rect.top + rect.height) > 5 || evt.clientX - (rect.left + rect.width) > 5;
                }

                /**
                 * Generate id
                 * @param   {HTMLElement} el
                 * @returns {String}
                 * @private
                 */
                function _generateId(el) {
                    var str = el.tagName + el.className + el.src + el.href + el.textContent,
                        i = str.length,
                        sum = 0;

                    while (i--) {
                        sum += str.charCodeAt(i);
                    }

                    return sum.toString(36);
                }

                /**
                 * Returns the index of an element within its parent for a selected set of
                 * elements
                 * @param  {HTMLElement} el
                 * @param  {selector} selector
                 * @return {number}
                 */
                function _index(el, selector) {
                    var index = 0;

                    if (!el || !el.parentNode) {
                        return -1;
                    }

                    while (el && (el = el.previousElementSibling)) {
                        if (el.nodeName.toUpperCase() !== 'TEMPLATE' && (selector === '>*' || _matches(el, selector))) {
                            index++;
                        }
                    }

                    return index;
                }

                function _matches( /**HTMLElement*/el, /**String*/selector) {
                    if (el) {
                        selector = selector.split('.');

                        var tag = selector.shift().toUpperCase(),
                            re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

                        return (tag === '' || el.nodeName.toUpperCase() == tag) && (!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length);
                    }

                    return false;
                }

                function _throttle(callback, ms) {
                    var args, _this;

                    return function () {
                        if (args === void 0) {
                            args = arguments;
                            _this = this;

                            setTimeout(function () {
                                if (args.length === 1) {
                                    callback.call(_this, args[0]);
                                } else {
                                    callback.apply(_this, args);
                                }

                                args = void 0;
                            }, ms);
                        }
                    };
                }

                function _extend(dst, src) {
                    if (dst && src) {
                        for (var key in src) {
                            if (src.hasOwnProperty(key)) {
                                dst[key] = src[key];
                            }
                        }
                    }

                    return dst;
                }

                function _clone(el) {
                    if (Polymer && Polymer.dom) {
                        return Polymer.dom(el).cloneNode(true);
                    } else if ($) {
                        return $(el).clone(true)[0];
                    } else {
                        return el.cloneNode(true);
                    }
                }

                function _saveInputCheckedState(root) {
                    var inputs = root.getElementsByTagName('input');
                    var idx = inputs.length;

                    while (idx--) {
                        var el = inputs[idx];
                        el.checked && savedInputChecked.push(el);
                    }
                }

                function _nextTick(fn) {
                    return setTimeout(fn, 0);
                }

                function _cancelNextTick(id) {
                    return clearTimeout(id);
                }

                // Fixed #973:
                _on(document, 'touchmove', function (evt) {
                    if (Sortable.active) {
                        evt.preventDefault();
                    }
                });

                // Export utils
                Sortable.utils = {
                    on: _on,
                    off: _off,
                    css: _css,
                    find: _find,
                    is: function is(el, selector) {
                        return !!_closest(el, selector, el);
                    },
                    extend: _extend,
                    throttle: _throttle,
                    closest: _closest,
                    toggleClass: _toggleClass,
                    clone: _clone,
                    index: _index,
                    nextTick: _nextTick,
                    cancelNextTick: _cancelNextTick
                };

                /**
                 * Create sortable instance
                 * @param {HTMLElement}  el
                 * @param {Object}      [options]
                 */
                Sortable.create = function (el, options) {
                    return new Sortable(el, options);
                };

                // Export
                Sortable.version = '1.7.0';
                return Sortable;
            });

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function (jQuery) {
                /*** IMPORTS FROM imports-loader ***/
                var define = false;
                var exports = false;

                /*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
                * http://jqueryui.com
                * Includes: widget.js
                * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

                (function (factory) {
                    if (typeof define === "function" && define.amd) {

                        // AMD. Register as an anonymous module.
                        define(["jquery"], factory);
                    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === "object") {

                        // Node/CommonJS
                        factory(__webpack_require__(0));
                    } else {

                        // Browser globals
                        factory(jQuery);
                    }
                })(function ($) {
                    /*!
                     * jQuery UI Widget 1.11.4
                     * http://jqueryui.com
                     *
                     * Copyright jQuery Foundation and other contributors
                     * Released under the MIT license.
                     * http://jquery.org/license
                     *
                     * http://api.jqueryui.com/jQuery.widget/
                     */

                    var widget_uuid = 0,
                        widget_slice = Array.prototype.slice;

                    $.cleanData = function (orig) {
                        return function (elems) {
                            var events, elem, i;
                            for (i = 0; (elem = elems[i]) != null; i++) {
                                try {

                                    // Only trigger remove when necessary to save time
                                    events = $._data(elem, "events");
                                    if (events && events.remove) {
                                        $(elem).triggerHandler("remove");
                                    }

                                    // http://bugs.jquery.com/ticket/8235
                                } catch (e) {}
                            }
                            orig(elems);
                        };
                    }($.cleanData);

                    $.widget = function (name, base, prototype) {
                        var fullName,
                            existingConstructor,
                            constructor,
                            basePrototype,

                        // proxiedPrototype allows the provided prototype to remain unmodified
                        // so that it can be used as a mixin for multiple widgets (#8876)
                        proxiedPrototype = {},
                            namespace = name.split(".")[0];

                        name = name.split(".")[1];
                        fullName = namespace + "-" + name;

                        if (!prototype) {
                            prototype = base;
                            base = $.Widget;
                        }

                        // create selector for plugin
                        $.expr[":"][fullName.toLowerCase()] = function (elem) {
                            return !!$.data(elem, fullName);
                        };

                        $[namespace] = $[namespace] || {};
                        existingConstructor = $[namespace][name];
                        constructor = $[namespace][name] = function (options, element) {
                            // allow instantiation without "new" keyword
                            if (!this._createWidget) {
                                return new constructor(options, element);
                            }

                            // allow instantiation without initializing for simple inheritance
                            // must use "new" keyword (the code above always passes args)
                            if (arguments.length) {
                                this._createWidget(options, element);
                            }
                        };
                        // extend with the existing constructor to carry over any static properties
                        $.extend(constructor, existingConstructor, {
                            version: prototype.version,
                            // copy the object used to create the prototype in case we need to
                            // redefine the widget later
                            _proto: $.extend({}, prototype),
                            // track widgets that inherit from this widget in case this widget is
                            // redefined after a widget inherits from it
                            _childConstructors: []
                        });

                        basePrototype = new base();
                        // we need to make the options hash a property directly on the new instance
                        // otherwise we'll modify the options hash on the prototype that we're
                        // inheriting from
                        basePrototype.options = $.widget.extend({}, basePrototype.options);
                        $.each(prototype, function (prop, value) {
                            if (!$.isFunction(value)) {
                                proxiedPrototype[prop] = value;
                                return;
                            }
                            proxiedPrototype[prop] = function () {
                                var _super = function _super() {
                                    return base.prototype[prop].apply(this, arguments);
                                },
                                    _superApply = function _superApply(args) {
                                    return base.prototype[prop].apply(this, args);
                                };
                                return function () {
                                    var __super = this._super,
                                        __superApply = this._superApply,
                                        returnValue;

                                    this._super = _super;
                                    this._superApply = _superApply;

                                    returnValue = value.apply(this, arguments);

                                    this._super = __super;
                                    this._superApply = __superApply;

                                    return returnValue;
                                };
                            }();
                        });
                        constructor.prototype = $.widget.extend(basePrototype, {
                            // TODO: remove support for widgetEventPrefix
                            // always use the name + a colon as the prefix, e.g., draggable:start
                            // don't prefix for widgets that aren't DOM-based
                            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
                        }, proxiedPrototype, {
                            constructor: constructor,
                            namespace: namespace,
                            widgetName: name,
                            widgetFullName: fullName
                        });

                        // If this widget is being redefined then we need to find all widgets that
                        // are inheriting from it and redefine all of them so that they inherit from
                        // the new version of this widget. We're essentially trying to replace one
                        // level in the prototype chain.
                        if (existingConstructor) {
                            $.each(existingConstructor._childConstructors, function (i, child) {
                                var childPrototype = child.prototype;

                                // redefine the child widget using the same prototype that was
                                // originally used, but inherit from the new version of the base
                                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
                            });
                            // remove the list of existing child constructors from the old constructor
                            // so the old child constructors can be garbage collected
                            delete existingConstructor._childConstructors;
                        } else {
                            base._childConstructors.push(constructor);
                        }

                        $.widget.bridge(name, constructor);

                        return constructor;
                    };

                    $.widget.extend = function (target) {
                        var input = widget_slice.call(arguments, 1),
                            inputIndex = 0,
                            inputLength = input.length,
                            key,
                            value;
                        for (; inputIndex < inputLength; inputIndex++) {
                            for (key in input[inputIndex]) {
                                value = input[inputIndex][key];
                                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                                    // Clone objects
                                    if ($.isPlainObject(value)) {
                                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) :
                                        // Don't extend strings, arrays, etc. with objects
                                        $.widget.extend({}, value);
                                        // Copy everything else by reference
                                    } else {
                                        target[key] = value;
                                    }
                                }
                            }
                        }
                        return target;
                    };

                    $.widget.bridge = function (name, object) {
                        var fullName = object.prototype.widgetFullName || name;
                        $.fn[name] = function (options) {
                            var isMethodCall = typeof options === "string",
                                args = widget_slice.call(arguments, 1),
                                returnValue = this;

                            if (isMethodCall) {
                                this.each(function () {
                                    var methodValue,
                                        instance = $.data(this, fullName);
                                    if (options === "instance") {
                                        returnValue = instance;
                                        return false;
                                    }
                                    if (!instance) {
                                        return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                                    }
                                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                                    }
                                    methodValue = instance[options].apply(instance, args);
                                    if (methodValue !== instance && methodValue !== undefined) {
                                        returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                                        return false;
                                    }
                                });
                            } else {

                                // Allow multiple hashes to be passed on init
                                if (args.length) {
                                    options = $.widget.extend.apply(null, [options].concat(args));
                                }

                                this.each(function () {
                                    var instance = $.data(this, fullName);
                                    if (instance) {
                                        instance.option(options || {});
                                        if (instance._init) {
                                            instance._init();
                                        }
                                    } else {
                                        $.data(this, fullName, new object(options, this));
                                    }
                                });
                            }

                            return returnValue;
                        };
                    };

                    $.Widget = function () /* options, element */{};
                    $.Widget._childConstructors = [];

                    $.Widget.prototype = {
                        widgetName: "widget",
                        widgetEventPrefix: "",
                        defaultElement: "<div>",
                        options: {
                            disabled: false,

                            // callbacks
                            create: null
                        },
                        _createWidget: function _createWidget(options, element) {
                            element = $(element || this.defaultElement || this)[0];
                            this.element = $(element);
                            this.uuid = widget_uuid++;
                            this.eventNamespace = "." + this.widgetName + this.uuid;

                            this.bindings = $();
                            this.hoverable = $();
                            this.focusable = $();

                            if (element !== this) {
                                $.data(element, this.widgetFullName, this);
                                this._on(true, this.element, {
                                    remove: function remove(event) {
                                        if (event.target === element) {
                                            this.destroy();
                                        }
                                    }
                                });
                                this.document = $(element.style ?
                                // element within the document
                                element.ownerDocument :
                                // element is window or document
                                element.document || element);
                                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
                            }

                            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);

                            this._create();
                            this._trigger("create", null, this._getCreateEventData());
                            this._init();
                        },
                        _getCreateOptions: $.noop,
                        _getCreateEventData: $.noop,
                        _create: $.noop,
                        _init: $.noop,

                        destroy: function destroy() {
                            this._destroy();
                            // we can probably remove the unbind calls in 2.0
                            // all event bindings should go through this._on()
                            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName)
                            // support: jquery <1.6.3
                            // http://bugs.jquery.com/ticket/9413
                            .removeData($.camelCase(this.widgetFullName));
                            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");

                            // clean up events and states
                            this.bindings.unbind(this.eventNamespace);
                            this.hoverable.removeClass("ui-state-hover");
                            this.focusable.removeClass("ui-state-focus");
                        },
                        _destroy: $.noop,

                        widget: function widget() {
                            return this.element;
                        },

                        option: function option(key, value) {
                            var options = key,
                                parts,
                                curOption,
                                i;

                            if (arguments.length === 0) {
                                // don't return a reference to the internal hash
                                return $.widget.extend({}, this.options);
                            }

                            if (typeof key === "string") {
                                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                                options = {};
                                parts = key.split(".");
                                key = parts.shift();
                                if (parts.length) {
                                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                                    for (i = 0; i < parts.length - 1; i++) {
                                        curOption[parts[i]] = curOption[parts[i]] || {};
                                        curOption = curOption[parts[i]];
                                    }
                                    key = parts.pop();
                                    if (arguments.length === 1) {
                                        return curOption[key] === undefined ? null : curOption[key];
                                    }
                                    curOption[key] = value;
                                } else {
                                    if (arguments.length === 1) {
                                        return this.options[key] === undefined ? null : this.options[key];
                                    }
                                    options[key] = value;
                                }
                            }

                            this._setOptions(options);

                            return this;
                        },
                        _setOptions: function _setOptions(options) {
                            var key;

                            for (key in options) {
                                this._setOption(key, options[key]);
                            }

                            return this;
                        },
                        _setOption: function _setOption(key, value) {
                            this.options[key] = value;

                            if (key === "disabled") {
                                this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);

                                // If the widget is becoming disabled, then nothing is interactive
                                if (value) {
                                    this.hoverable.removeClass("ui-state-hover");
                                    this.focusable.removeClass("ui-state-focus");
                                }
                            }

                            return this;
                        },

                        enable: function enable() {
                            return this._setOptions({ disabled: false });
                        },
                        disable: function disable() {
                            return this._setOptions({ disabled: true });
                        },

                        _on: function _on(suppressDisabledCheck, element, handlers) {
                            var delegateElement,
                                instance = this;

                            // no suppressDisabledCheck flag, shuffle arguments
                            if (typeof suppressDisabledCheck !== "boolean") {
                                handlers = element;
                                element = suppressDisabledCheck;
                                suppressDisabledCheck = false;
                            }

                            // no element argument, shuffle and use this.element
                            if (!handlers) {
                                handlers = element;
                                element = this.element;
                                delegateElement = this.widget();
                            } else {
                                element = delegateElement = $(element);
                                this.bindings = this.bindings.add(element);
                            }

                            $.each(handlers, function (event, handler) {
                                function handlerProxy() {
                                    // allow widgets to customize the disabled handling
                                    // - disabled as an array instead of boolean
                                    // - disabled class as method for disabling individual parts
                                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                                        return;
                                    }
                                    return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                                }

                                // copy the guid so direct unbinding works
                                if (typeof handler !== "string") {
                                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                                }

                                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                                    eventName = match[1] + instance.eventNamespace,
                                    selector = match[2];
                                if (selector) {
                                    delegateElement.delegate(selector, eventName, handlerProxy);
                                } else {
                                    element.bind(eventName, handlerProxy);
                                }
                            });
                        },

                        _off: function _off(element, eventName) {
                            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                            element.unbind(eventName).undelegate(eventName);

                            // Clear the stack to avoid memory leaks (#10056)
                            this.bindings = $(this.bindings.not(element).get());
                            this.focusable = $(this.focusable.not(element).get());
                            this.hoverable = $(this.hoverable.not(element).get());
                        },

                        _delay: function _delay(handler, delay) {
                            function handlerProxy() {
                                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                            }
                            var instance = this;
                            return setTimeout(handlerProxy, delay || 0);
                        },

                        _hoverable: function _hoverable(element) {
                            this.hoverable = this.hoverable.add(element);
                            this._on(element, {
                                mouseenter: function mouseenter(event) {
                                    $(event.currentTarget).addClass("ui-state-hover");
                                },
                                mouseleave: function mouseleave(event) {
                                    $(event.currentTarget).removeClass("ui-state-hover");
                                }
                            });
                        },

                        _focusable: function _focusable(element) {
                            this.focusable = this.focusable.add(element);
                            this._on(element, {
                                focusin: function focusin(event) {
                                    $(event.currentTarget).addClass("ui-state-focus");
                                },
                                focusout: function focusout(event) {
                                    $(event.currentTarget).removeClass("ui-state-focus");
                                }
                            });
                        },

                        _trigger: function _trigger(type, event, data) {
                            var prop,
                                orig,
                                callback = this.options[type];

                            data = data || {};
                            event = $.Event(event);
                            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
                            // the original event may come from any element
                            // so we need to reset the target on the new event
                            event.target = this.element[0];

                            // copy original event properties over to the new event
                            orig = event.originalEvent;
                            if (orig) {
                                for (prop in orig) {
                                    if (!(prop in event)) {
                                        event[prop] = orig[prop];
                                    }
                                }
                            }

                            this.element.trigger(event, data);
                            return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
                        }
                    };

                    $.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
                        $.Widget.prototype["_" + method] = function (element, options, callback) {
                            if (typeof options === "string") {
                                options = { effect: options };
                            }
                            var hasOptions,
                                effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
                            options = options || {};
                            if (typeof options === "number") {
                                options = { duration: options };
                            }
                            hasOptions = !$.isEmptyObject(options);
                            options.complete = callback;
                            if (options.delay) {
                                element.delay(options.delay);
                            }
                            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                                element[method](options);
                            } else if (effectName !== method && element[effectName]) {
                                element[effectName](options.duration, options.easing, callback);
                            } else {
                                element.queue(function (next) {
                                    $(this)[method]();
                                    if (callback) {
                                        callback.call(element[0]);
                                    }
                                    next();
                                });
                            }
                        };
                    });

                    var widget = $.widget;
                });

                /* WEBPACK VAR INJECTION */
            }).call(exports, __webpack_require__(0));

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            /*** IMPORTS FROM imports-loader ***/
            var define = false;
            var exports = false;

            /*
             * jQuery Iframe Transport Plugin
             * https://github.com/blueimp/jQuery-File-Upload
             *
             * Copyright 2011, Sebastian Tschan
             * https://blueimp.net
             *
             * Licensed under the MIT license:
             * https://opensource.org/licenses/MIT
             */

            /* global define, require, window, document, JSON */

            ;(function (factory) {
                'use strict';

                if (typeof define === 'function' && define.amd) {
                    // Register as an anonymous AMD module:
                    define(['jquery'], factory);
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                    // Node/CommonJS:
                    factory(__webpack_require__(0));
                } else {
                    // Browser globals:
                    factory(window.jQuery);
                }
            })(function ($) {
                'use strict';

                // Helper variable to create unique names for the transport iframes:

                var counter = 0,
                    jsonAPI = $,
                    jsonParse = 'parseJSON';

                if ('JSON' in window && 'parse' in JSON) {
                    jsonAPI = JSON;
                    jsonParse = 'parse';
                }

                // The iframe transport accepts four additional options:
                // options.fileInput: a jQuery collection of file input fields
                // options.paramName: the parameter name for the file form data,
                //  overrides the name property of the file input field(s),
                //  can be a string or an array of strings.
                // options.formData: an array of objects with name and value properties,
                //  equivalent to the return data of .serializeArray(), e.g.:
                //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
                // options.initialIframeSrc: the URL of the initial iframe src,
                //  by default set to "javascript:false;"
                $.ajaxTransport('iframe', function (options) {
                    if (options.async) {
                        // javascript:false as initial iframe src
                        // prevents warning popups on HTTPS in IE6:
                        /*jshint scripturl: true */
                        var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',

                        /*jshint scripturl: false */
                        form,
                            iframe,
                            addParamChar;
                        return {
                            send: function send(_, completeCallback) {
                                form = $('<form style="display:none;"></form>');
                                form.attr('accept-charset', options.formAcceptCharset);
                                addParamChar = /\?/.test(options.url) ? '&' : '?';
                                // XDomainRequest only supports GET and POST:
                                if (options.type === 'DELETE') {
                                    options.url = options.url + addParamChar + '_method=DELETE';
                                    options.type = 'POST';
                                } else if (options.type === 'PUT') {
                                    options.url = options.url + addParamChar + '_method=PUT';
                                    options.type = 'POST';
                                } else if (options.type === 'PATCH') {
                                    options.url = options.url + addParamChar + '_method=PATCH';
                                    options.type = 'POST';
                                }
                                // IE versions below IE8 cannot set the name property of
                                // elements that have already been added to the DOM,
                                // so we set the name along with the iframe HTML markup:
                                counter += 1;
                                iframe = $('<iframe src="' + initialIframeSrc + '" name="iframe-transport-' + counter + '"></iframe>').bind('load', function () {
                                    var fileInputClones,
                                        paramNames = $.isArray(options.paramName) ? options.paramName : [options.paramName];
                                    iframe.unbind('load').bind('load', function () {
                                        var response;
                                        // Wrap in a try/catch block to catch exceptions thrown
                                        // when trying to access cross-domain iframe contents:
                                        try {
                                            response = iframe.contents();
                                            // Google Chrome and Firefox do not throw an
                                            // exception when calling iframe.contents() on
                                            // cross-domain requests, so we unify the response:
                                            if (!response.length || !response[0].firstChild) {
                                                throw new Error();
                                            }
                                        } catch (e) {
                                            response = undefined;
                                        }
                                        // The complete callback returns the
                                        // iframe content document as response object:
                                        completeCallback(200, 'success', { 'iframe': response });
                                        // Fix for IE endless progress bar activity bug
                                        // (happens on form submits to iframe targets):
                                        $('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(form);
                                        window.setTimeout(function () {
                                            // Removing the form in a setTimeout call
                                            // allows Chrome's developer tools to display
                                            // the response result
                                            form.remove();
                                        }, 0);
                                    });
                                    form.prop('target', iframe.prop('name')).prop('action', options.url).prop('method', options.type);
                                    if (options.formData) {
                                        $.each(options.formData, function (index, field) {
                                            $('<input type="hidden"/>').prop('name', field.name).val(field.value).appendTo(form);
                                        });
                                    }
                                    if (options.fileInput && options.fileInput.length && options.type === 'POST') {
                                        fileInputClones = options.fileInput.clone();
                                        // Insert a clone for each file input field:
                                        options.fileInput.after(function (index) {
                                            return fileInputClones[index];
                                        });
                                        if (options.paramName) {
                                            options.fileInput.each(function (index) {
                                                $(this).prop('name', paramNames[index] || options.paramName);
                                            });
                                        }
                                        // Appending the file input fields to the hidden form
                                        // removes them from their original location:
                                        form.append(options.fileInput).prop('enctype', 'multipart/form-data')
                                        // enctype must be set as encoding for IE:
                                        .prop('encoding', 'multipart/form-data');
                                        // Remove the HTML5 form attribute from the input(s):
                                        options.fileInput.removeAttr('form');
                                    }
                                    form.submit();
                                    // Insert the file input fields at their original location
                                    // by replacing the clones with the originals:
                                    if (fileInputClones && fileInputClones.length) {
                                        options.fileInput.each(function (index, input) {
                                            var clone = $(fileInputClones[index]);
                                            // Restore the original name and form properties:
                                            $(input).prop('name', clone.prop('name')).attr('form', clone.attr('form'));
                                            clone.replaceWith(input);
                                        });
                                    }
                                });
                                form.append(iframe).appendTo(document.body);
                            },
                            abort: function abort() {
                                if (iframe) {
                                    // javascript:false as iframe src aborts the request
                                    // and prevents warning popups on HTTPS in IE6.
                                    // concat is used to avoid the "Script URL" JSLint error:
                                    iframe.unbind('load').prop('src', initialIframeSrc);
                                }
                                if (form) {
                                    form.remove();
                                }
                            }
                        };
                    }
                });

                // The iframe transport returns the iframe content document as response.
                // The following adds converters from iframe to text, json, html, xml
                // and script.
                // Please note that the Content-Type for JSON responses has to be text/plain
                // or text/html, if the browser doesn't include application/json in the
                // Accept header, else IE will show a download dialog.
                // The Content-Type for XML responses on the other hand has to be always
                // application/xml or text/xml, so IE properly parses the XML response.
                // See also
                // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
                $.ajaxSetup({
                    converters: {
                        'iframe text': function iframeText(iframe) {
                            return iframe && $(iframe[0].body).text();
                        },
                        'iframe json': function iframeJson(iframe) {
                            return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
                        },
                        'iframe html': function iframeHtml(iframe) {
                            return iframe && $(iframe[0].body).html();
                        },
                        'iframe xml': function iframeXml(iframe) {
                            var xmlDoc = iframe && iframe[0];
                            return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc : $.parseXML(xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml || $(xmlDoc.body).html());
                        },
                        'iframe script': function iframeScript(iframe) {
                            return iframe && $.globalEval($(iframe[0].body).text());
                        }
                    }
                });
            });

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            /*** IMPORTS FROM imports-loader ***/
            var define = false;
            var exports = false;

            /*
             * jQuery File Upload Plugin
             * https://github.com/blueimp/jQuery-File-Upload
             *
             * Copyright 2010, Sebastian Tschan
             * https://blueimp.net
             *
             * Licensed under the MIT license:
             * https://opensource.org/licenses/MIT
             */

            /* jshint nomen:false */
            /* global define, require, window, document, location, Blob, FormData */

            ;(function (factory) {
                'use strict';

                if (typeof define === 'function' && define.amd) {
                    // Register as an anonymous AMD module:
                    define(['jquery', 'jquery-ui/ui/widget'], factory);
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                    // Node/CommonJS:
                    factory(__webpack_require__(0), __webpack_require__(10));
                } else {
                    // Browser globals:
                    factory(window.jQuery);
                }
            })(function ($) {
                'use strict';

                // Detect file input support, based on
                // http://viljamis.com/blog/2012/file-upload-support-on-mobile/

                $.support.fileInput = !(new RegExp(
                // Handle devices which give false positives for the feature detection:
                '(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) ||
                // Feature detection for all other devices:
                $('<input type="file">').prop('disabled'));

                // The FileReader API is not actually used, but works as feature detection,
                // as some Safari versions (5?) support XHR file uploads via the FormData API,
                // but not non-multipart XHR file uploads.
                // window.XMLHttpRequestUpload is not available on IE10, so we check for
                // window.ProgressEvent instead to detect XHR2 file upload capability:
                $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
                $.support.xhrFormDataFileUpload = !!window.FormData;

                // Detect support for Blob slicing (required for chunked uploads):
                $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

                // Helper function to create drag handlers for dragover/dragenter/dragleave:
                function getDragHandler(type) {
                    var isDragOver = type === 'dragover';
                    return function (e) {
                        e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
                        var dataTransfer = e.dataTransfer;
                        if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, { delegatedEvent: e })) !== false) {
                            e.preventDefault();
                            if (isDragOver) {
                                dataTransfer.dropEffect = 'copy';
                            }
                        }
                    };
                }

                // The fileupload widget listens for change events on file input fields defined
                // via fileInput setting and paste or drop events of the given dropZone.
                // In addition to the default jQuery Widget methods, the fileupload widget
                // exposes the "add" and "send" methods, to add or directly send files using
                // the fileupload API.
                // By default, files added via file input selection, paste, drag & drop or
                // "add" method are uploaded immediately, but it is possible to override
                // the "add" callback option to queue file uploads.
                $.widget('blueimp.fileupload', {

                    options: {
                        // The drop target element(s), by the default the complete document.
                        // Set to null to disable drag & drop support:
                        dropZone: $(document),
                        // The paste target element(s), by the default undefined.
                        // Set to a DOM node or jQuery object to enable file pasting:
                        pasteZone: undefined,
                        // The file input field(s), that are listened to for change events.
                        // If undefined, it is set to the file input fields inside
                        // of the widget element on plugin initialization.
                        // Set to null to disable the change listener.
                        fileInput: undefined,
                        // By default, the file input field is replaced with a clone after
                        // each input field change event. This is required for iframe transport
                        // queues and allows change events to be fired for the same file
                        // selection, but can be disabled by setting the following option to false:
                        replaceFileInput: true,
                        // The parameter name for the file form data (the request argument name).
                        // If undefined or empty, the name property of the file input field is
                        // used, or "files[]" if the file input name property is also empty,
                        // can be a string or an array of strings:
                        paramName: undefined,
                        // By default, each file of a selection is uploaded using an individual
                        // request for XHR type uploads. Set to false to upload file
                        // selections in one request each:
                        singleFileUploads: true,
                        // To limit the number of files uploaded with one XHR request,
                        // set the following option to an integer greater than 0:
                        limitMultiFileUploads: undefined,
                        // The following option limits the number of files uploaded with one
                        // XHR request to keep the request size under or equal to the defined
                        // limit in bytes:
                        limitMultiFileUploadSize: undefined,
                        // Multipart file uploads add a number of bytes to each uploaded file,
                        // therefore the following option adds an overhead for each file used
                        // in the limitMultiFileUploadSize configuration:
                        limitMultiFileUploadSizeOverhead: 512,
                        // Set the following option to true to issue all file upload requests
                        // in a sequential order:
                        sequentialUploads: false,
                        // To limit the number of concurrent uploads,
                        // set the following option to an integer greater than 0:
                        limitConcurrentUploads: undefined,
                        // Set the following option to true to force iframe transport uploads:
                        forceIframeTransport: false,
                        // Set the following option to the location of a redirect url on the
                        // origin server, for cross-domain iframe transport uploads:
                        redirect: undefined,
                        // The parameter name for the redirect url, sent as part of the form
                        // data and set to 'redirect' if this option is empty:
                        redirectParamName: undefined,
                        // Set the following option to the location of a postMessage window,
                        // to enable postMessage transport uploads:
                        postMessage: undefined,
                        // By default, XHR file uploads are sent as multipart/form-data.
                        // The iframe transport is always using multipart/form-data.
                        // Set to false to enable non-multipart XHR uploads:
                        multipart: true,
                        // To upload large files in smaller chunks, set the following option
                        // to a preferred maximum chunk size. If set to 0, null or undefined,
                        // or the browser does not support the required Blob API, files will
                        // be uploaded as a whole.
                        maxChunkSize: undefined,
                        // When a non-multipart upload or a chunked multipart upload has been
                        // aborted, this option can be used to resume the upload by setting
                        // it to the size of the already uploaded bytes. This option is most
                        // useful when modifying the options object inside of the "add" or
                        // "send" callbacks, as the options are cloned for each file upload.
                        uploadedBytes: undefined,
                        // By default, failed (abort or error) file uploads are removed from the
                        // global progress calculation. Set the following option to false to
                        // prevent recalculating the global progress data:
                        recalculateProgress: true,
                        // Interval in milliseconds to calculate and trigger progress events:
                        progressInterval: 100,
                        // Interval in milliseconds to calculate progress bitrate:
                        bitrateInterval: 500,
                        // By default, uploads are started automatically when adding files:
                        autoUpload: true,

                        // Error and info messages:
                        messages: {
                            uploadedBytes: 'Uploaded bytes exceed file size'
                        },

                        // Translation function, gets the message key to be translated
                        // and an object with context specific data as arguments:
                        i18n: function i18n(message, context) {
                            message = this.messages[message] || message.toString();
                            if (context) {
                                $.each(context, function (key, value) {
                                    message = message.replace('{' + key + '}', value);
                                });
                            }
                            return message;
                        },

                        // Additional form data to be sent along with the file uploads can be set
                        // using this option, which accepts an array of objects with name and
                        // value properties, a function returning such an array, a FormData
                        // object (for XHR file uploads), or a simple object.
                        // The form of the first fileInput is given as parameter to the function:
                        formData: function formData(form) {
                            return form.serializeArray();
                        },

                        // The add callback is invoked as soon as files are added to the fileupload
                        // widget (via file input selection, drag & drop, paste or add API call).
                        // If the singleFileUploads option is enabled, this callback will be
                        // called once for each file in the selection for XHR file uploads, else
                        // once for each file selection.
                        //
                        // The upload starts when the submit method is invoked on the data parameter.
                        // The data object contains a files property holding the added files
                        // and allows you to override plugin options as well as define ajax settings.
                        //
                        // Listeners for this callback can also be bound the following way:
                        // .bind('fileuploadadd', func);
                        //
                        // data.submit() returns a Promise object and allows to attach additional
                        // handlers using jQuery's Deferred callbacks:
                        // data.submit().done(func).fail(func).always(func);
                        add: function add(e, data) {
                            if (e.isDefaultPrevented()) {
                                return false;
                            }
                            if (data.autoUpload || data.autoUpload !== false && $(this).fileupload('option', 'autoUpload')) {
                                data.process().done(function () {
                                    data.submit();
                                });
                            }
                        },

                        // Other callbacks:

                        // Callback for the submit event of each file upload:
                        // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

                        // Callback for the start of each file upload request:
                        // send: function (e, data) {}, // .bind('fileuploadsend', func);

                        // Callback for successful uploads:
                        // done: function (e, data) {}, // .bind('fileuploaddone', func);

                        // Callback for failed (abort or error) uploads:
                        // fail: function (e, data) {}, // .bind('fileuploadfail', func);

                        // Callback for completed (success, abort or error) requests:
                        // always: function (e, data) {}, // .bind('fileuploadalways', func);

                        // Callback for upload progress events:
                        // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

                        // Callback for global upload progress events:
                        // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

                        // Callback for uploads start, equivalent to the global ajaxStart event:
                        // start: function (e) {}, // .bind('fileuploadstart', func);

                        // Callback for uploads stop, equivalent to the global ajaxStop event:
                        // stop: function (e) {}, // .bind('fileuploadstop', func);

                        // Callback for change events of the fileInput(s):
                        // change: function (e, data) {}, // .bind('fileuploadchange', func);

                        // Callback for paste events to the pasteZone(s):
                        // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

                        // Callback for drop events of the dropZone(s):
                        // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

                        // Callback for dragover events of the dropZone(s):
                        // dragover: function (e) {}, // .bind('fileuploaddragover', func);

                        // Callback for the start of each chunk upload request:
                        // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

                        // Callback for successful chunk uploads:
                        // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

                        // Callback for failed (abort or error) chunk uploads:
                        // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

                        // Callback for completed (success, abort or error) chunk upload requests:
                        // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

                        // The plugin options are used as settings object for the ajax calls.
                        // The following are jQuery ajax settings required for the file uploads:
                        processData: false,
                        contentType: false,
                        cache: false,
                        timeout: 0
                    },

                    // A list of options that require reinitializing event listeners and/or
                    // special initialization code:
                    _specialOptions: ['fileInput', 'dropZone', 'pasteZone', 'multipart', 'forceIframeTransport'],

                    _blobSlice: $.support.blobSlice && function () {
                        var slice = this.slice || this.webkitSlice || this.mozSlice;
                        return slice.apply(this, arguments);
                    },

                    _BitrateTimer: function _BitrateTimer() {
                        this.timestamp = Date.now ? Date.now() : new Date().getTime();
                        this.loaded = 0;
                        this.bitrate = 0;
                        this.getBitrate = function (now, loaded, interval) {
                            var timeDiff = now - this.timestamp;
                            if (!this.bitrate || !interval || timeDiff > interval) {
                                this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                                this.loaded = loaded;
                                this.timestamp = now;
                            }
                            return this.bitrate;
                        };
                    },

                    _isXHRUpload: function _isXHRUpload(options) {
                        return !options.forceIframeTransport && (!options.multipart && $.support.xhrFileUpload || $.support.xhrFormDataFileUpload);
                    },

                    _getFormData: function _getFormData(options) {
                        var formData;
                        if ($.type(options.formData) === 'function') {
                            return options.formData(options.form);
                        }
                        if ($.isArray(options.formData)) {
                            return options.formData;
                        }
                        if ($.type(options.formData) === 'object') {
                            formData = [];
                            $.each(options.formData, function (name, value) {
                                formData.push({ name: name, value: value });
                            });
                            return formData;
                        }
                        return [];
                    },

                    _getTotal: function _getTotal(files) {
                        var total = 0;
                        $.each(files, function (index, file) {
                            total += file.size || 1;
                        });
                        return total;
                    },

                    _initProgressObject: function _initProgressObject(obj) {
                        var progress = {
                            loaded: 0,
                            total: 0,
                            bitrate: 0
                        };
                        if (obj._progress) {
                            $.extend(obj._progress, progress);
                        } else {
                            obj._progress = progress;
                        }
                    },

                    _initResponseObject: function _initResponseObject(obj) {
                        var prop;
                        if (obj._response) {
                            for (prop in obj._response) {
                                if (obj._response.hasOwnProperty(prop)) {
                                    delete obj._response[prop];
                                }
                            }
                        } else {
                            obj._response = {};
                        }
                    },

                    _onProgress: function _onProgress(e, data) {
                        if (e.lengthComputable) {
                            var now = Date.now ? Date.now() : new Date().getTime(),
                                loaded;
                            if (data._time && data.progressInterval && now - data._time < data.progressInterval && e.loaded !== e.total) {
                                return;
                            }
                            data._time = now;
                            loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
                            // Add the difference from the previously loaded state
                            // to the global loaded counter:
                            this._progress.loaded += loaded - data._progress.loaded;
                            this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
                            data._progress.loaded = data.loaded = loaded;
                            data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
                            // Trigger a custom progress event with a total data property set
                            // to the file size(s) of the current upload and a loaded data
                            // property calculated accordingly:
                            this._trigger('progress', $.Event('progress', { delegatedEvent: e }), data);
                            // Trigger a global progress event for all current file uploads,
                            // including ajax calls queued for sequential file uploads:
                            this._trigger('progressall', $.Event('progressall', { delegatedEvent: e }), this._progress);
                        }
                    },

                    _initProgressListener: function _initProgressListener(options) {
                        var that = this,
                            xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
                        // Accesss to the native XHR object is required to add event listeners
                        // for the upload progress event:
                        if (xhr.upload) {
                            $(xhr.upload).bind('progress', function (e) {
                                var oe = e.originalEvent;
                                // Make sure the progress event properties get copied over:
                                e.lengthComputable = oe.lengthComputable;
                                e.loaded = oe.loaded;
                                e.total = oe.total;
                                that._onProgress(e, options);
                            });
                            options.xhr = function () {
                                return xhr;
                            };
                        }
                    },

                    _isInstanceOf: function _isInstanceOf(type, obj) {
                        // Cross-frame instanceof check
                        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
                    },

                    _initXHRData: function _initXHRData(options) {
                        var that = this,
                            formData,
                            file = options.files[0],

                        // Ignore non-multipart setting if not supported:
                        multipart = options.multipart || !$.support.xhrFileUpload,
                            paramName = $.type(options.paramName) === 'array' ? options.paramName[0] : options.paramName;
                        options.headers = $.extend({}, options.headers);
                        if (options.contentRange) {
                            options.headers['Content-Range'] = options.contentRange;
                        }
                        if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                            options.headers['Content-Disposition'] = 'attachment; filename="' + encodeURI(file.name) + '"';
                        }
                        if (!multipart) {
                            options.contentType = file.type || 'application/octet-stream';
                            options.data = options.blob || file;
                        } else if ($.support.xhrFormDataFileUpload) {
                            if (options.postMessage) {
                                // window.postMessage does not allow sending FormData
                                // objects, so we just add the File/Blob objects to
                                // the formData array and let the postMessage window
                                // create the FormData object out of this array:
                                formData = this._getFormData(options);
                                if (options.blob) {
                                    formData.push({
                                        name: paramName,
                                        value: options.blob
                                    });
                                } else {
                                    $.each(options.files, function (index, file) {
                                        formData.push({
                                            name: $.type(options.paramName) === 'array' && options.paramName[index] || paramName,
                                            value: file
                                        });
                                    });
                                }
                            } else {
                                if (that._isInstanceOf('FormData', options.formData)) {
                                    formData = options.formData;
                                } else {
                                    formData = new FormData();
                                    $.each(this._getFormData(options), function (index, field) {
                                        formData.append(field.name, field.value);
                                    });
                                }
                                if (options.blob) {
                                    formData.append(paramName, options.blob, file.name);
                                } else {
                                    $.each(options.files, function (index, file) {
                                        // This check allows the tests to run with
                                        // dummy objects:
                                        if (that._isInstanceOf('File', file) || that._isInstanceOf('Blob', file)) {
                                            formData.append($.type(options.paramName) === 'array' && options.paramName[index] || paramName, file, file.uploadName || file.name);
                                        }
                                    });
                                }
                            }
                            options.data = formData;
                        }
                        // Blob reference is not needed anymore, free memory:
                        options.blob = null;
                    },

                    _initIframeSettings: function _initIframeSettings(options) {
                        var targetHost = $('<a></a>').prop('href', options.url).prop('host');
                        // Setting the dataType to iframe enables the iframe transport:
                        options.dataType = 'iframe ' + (options.dataType || '');
                        // The iframe transport accepts a serialized array as form data:
                        options.formData = this._getFormData(options);
                        // Add redirect url to form data on cross-domain uploads:
                        if (options.redirect && targetHost && targetHost !== location.host) {
                            options.formData.push({
                                name: options.redirectParamName || 'redirect',
                                value: options.redirect
                            });
                        }
                    },

                    _initDataSettings: function _initDataSettings(options) {
                        if (this._isXHRUpload(options)) {
                            if (!this._chunkedUpload(options, true)) {
                                if (!options.data) {
                                    this._initXHRData(options);
                                }
                                this._initProgressListener(options);
                            }
                            if (options.postMessage) {
                                // Setting the dataType to postmessage enables the
                                // postMessage transport:
                                options.dataType = 'postmessage ' + (options.dataType || '');
                            }
                        } else {
                            this._initIframeSettings(options);
                        }
                    },

                    _getParamName: function _getParamName(options) {
                        var fileInput = $(options.fileInput),
                            paramName = options.paramName;
                        if (!paramName) {
                            paramName = [];
                            fileInput.each(function () {
                                var input = $(this),
                                    name = input.prop('name') || 'files[]',
                                    i = (input.prop('files') || [1]).length;
                                while (i) {
                                    paramName.push(name);
                                    i -= 1;
                                }
                            });
                            if (!paramName.length) {
                                paramName = [fileInput.prop('name') || 'files[]'];
                            }
                        } else if (!$.isArray(paramName)) {
                            paramName = [paramName];
                        }
                        return paramName;
                    },

                    _initFormSettings: function _initFormSettings(options) {
                        // Retrieve missing options from the input field and the
                        // associated form, if available:
                        if (!options.form || !options.form.length) {
                            options.form = $(options.fileInput.prop('form'));
                            // If the given file input doesn't have an associated form,
                            // use the default widget file input's form:
                            if (!options.form.length) {
                                options.form = $(this.options.fileInput.prop('form'));
                            }
                        }
                        options.paramName = this._getParamName(options);
                        if (!options.url) {
                            options.url = options.form.prop('action') || location.href;
                        }
                        // The HTTP request method must be "POST" or "PUT":
                        options.type = (options.type || $.type(options.form.prop('method')) === 'string' && options.form.prop('method') || '').toUpperCase();
                        if (options.type !== 'POST' && options.type !== 'PUT' && options.type !== 'PATCH') {
                            options.type = 'POST';
                        }
                        if (!options.formAcceptCharset) {
                            options.formAcceptCharset = options.form.attr('accept-charset');
                        }
                    },

                    _getAJAXSettings: function _getAJAXSettings(data) {
                        var options = $.extend({}, this.options, data);
                        this._initFormSettings(options);
                        this._initDataSettings(options);
                        return options;
                    },

                    // jQuery 1.6 doesn't provide .state(),
                    // while jQuery 1.8+ removed .isRejected() and .isResolved():
                    _getDeferredState: function _getDeferredState(deferred) {
                        if (deferred.state) {
                            return deferred.state();
                        }
                        if (deferred.isResolved()) {
                            return 'resolved';
                        }
                        if (deferred.isRejected()) {
                            return 'rejected';
                        }
                        return 'pending';
                    },

                    // Maps jqXHR callbacks to the equivalent
                    // methods of the given Promise object:
                    _enhancePromise: function _enhancePromise(promise) {
                        promise.success = promise.done;
                        promise.error = promise.fail;
                        promise.complete = promise.always;
                        return promise;
                    },

                    // Creates and returns a Promise object enhanced with
                    // the jqXHR methods abort, success, error and complete:
                    _getXHRPromise: function _getXHRPromise(resolveOrReject, context, args) {
                        var dfd = $.Deferred(),
                            promise = dfd.promise();
                        context = context || this.options.context || promise;
                        if (resolveOrReject === true) {
                            dfd.resolveWith(context, args);
                        } else if (resolveOrReject === false) {
                            dfd.rejectWith(context, args);
                        }
                        promise.abort = dfd.promise;
                        return this._enhancePromise(promise);
                    },

                    // Adds convenience methods to the data callback argument:
                    _addConvenienceMethods: function _addConvenienceMethods(e, data) {
                        var that = this,
                            getPromise = function getPromise(args) {
                            return $.Deferred().resolveWith(that, args).promise();
                        };
                        data.process = function (resolveFunc, rejectFunc) {
                            if (resolveFunc || rejectFunc) {
                                data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).then(function () {
                                    if (data.errorThrown) {
                                        return $.Deferred().rejectWith(that, [data]).promise();
                                    }
                                    return getPromise(arguments);
                                }).then(resolveFunc, rejectFunc);
                            }
                            return this._processQueue || getPromise([this]);
                        };
                        data.submit = function () {
                            if (this.state() !== 'pending') {
                                data.jqXHR = this.jqXHR = that._trigger('submit', $.Event('submit', { delegatedEvent: e }), this) !== false && that._onSend(e, this);
                            }
                            return this.jqXHR || that._getXHRPromise();
                        };
                        data.abort = function () {
                            if (this.jqXHR) {
                                return this.jqXHR.abort();
                            }
                            this.errorThrown = 'abort';
                            that._trigger('fail', null, this);
                            return that._getXHRPromise(false);
                        };
                        data.state = function () {
                            if (this.jqXHR) {
                                return that._getDeferredState(this.jqXHR);
                            }
                            if (this._processQueue) {
                                return that._getDeferredState(this._processQueue);
                            }
                        };
                        data.processing = function () {
                            return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === 'pending';
                        };
                        data.progress = function () {
                            return this._progress;
                        };
                        data.response = function () {
                            return this._response;
                        };
                    },

                    // Parses the Range header from the server response
                    // and returns the uploaded bytes:
                    _getUploadedBytes: function _getUploadedBytes(jqXHR) {
                        var range = jqXHR.getResponseHeader('Range'),
                            parts = range && range.split('-'),
                            upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
                        return upperBytesPos && upperBytesPos + 1;
                    },

                    // Uploads a file in multiple, sequential requests
                    // by splitting the file up in multiple blob chunks.
                    // If the second parameter is true, only tests if the file
                    // should be uploaded in chunks, but does not invoke any
                    // upload requests:
                    _chunkedUpload: function _chunkedUpload(options, testOnly) {
                        options.uploadedBytes = options.uploadedBytes || 0;
                        var that = this,
                            file = options.files[0],
                            fs = file.size,
                            ub = options.uploadedBytes,
                            mcs = options.maxChunkSize || fs,
                            slice = this._blobSlice,
                            dfd = $.Deferred(),
                            promise = dfd.promise(),
                            jqXHR,
                            _upload2;
                        if (!(this._isXHRUpload(options) && slice && (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)) || options.data) {
                            return false;
                        }
                        if (testOnly) {
                            return true;
                        }
                        if (ub >= fs) {
                            file.error = options.i18n('uploadedBytes');
                            return this._getXHRPromise(false, options.context, [null, 'error', file.error]);
                        }
                        // The chunk upload method:
                        _upload2 = function upload() {
                            // Clone the options object for each chunk upload:
                            var o = $.extend({}, options),
                                currentLoaded = o._progress.loaded;
                            o.blob = slice.call(file, ub, ub + ($.type(mcs) === 'function' ? mcs(o) : mcs), file.type);
                            // Store the current chunk size, as the blob itself
                            // will be dereferenced after data processing:
                            o.chunkSize = o.blob.size;
                            // Expose the chunk bytes position range:
                            o.contentRange = 'bytes ' + ub + '-' + (ub + o.chunkSize - 1) + '/' + fs;
                            // Process the upload data (the blob and potential form data):
                            that._initXHRData(o);
                            // Add progress listeners for this chunk upload:
                            that._initProgressListener(o);
                            jqXHR = (that._trigger('chunksend', null, o) !== false && $.ajax(o) || that._getXHRPromise(false, o.context)).done(function (result, textStatus, jqXHR) {
                                ub = that._getUploadedBytes(jqXHR) || ub + o.chunkSize;
                                // Create a progress event if no final progress event
                                // with loaded equaling total has been triggered
                                // for this chunk:
                                if (currentLoaded + o.chunkSize - o._progress.loaded) {
                                    that._onProgress($.Event('progress', {
                                        lengthComputable: true,
                                        loaded: ub - o.uploadedBytes,
                                        total: ub - o.uploadedBytes
                                    }), o);
                                }
                                options.uploadedBytes = o.uploadedBytes = ub;
                                o.result = result;
                                o.textStatus = textStatus;
                                o.jqXHR = jqXHR;
                                that._trigger('chunkdone', null, o);
                                that._trigger('chunkalways', null, o);
                                if (ub < fs) {
                                    // File upload not yet complete,
                                    // continue with the next chunk:
                                    _upload2();
                                } else {
                                    dfd.resolveWith(o.context, [result, textStatus, jqXHR]);
                                }
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                o.jqXHR = jqXHR;
                                o.textStatus = textStatus;
                                o.errorThrown = errorThrown;
                                that._trigger('chunkfail', null, o);
                                that._trigger('chunkalways', null, o);
                                dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown]);
                            });
                        };
                        this._enhancePromise(promise);
                        promise.abort = function () {
                            return jqXHR.abort();
                        };
                        _upload2();
                        return promise;
                    },

                    _beforeSend: function _beforeSend(e, data) {
                        if (this._active === 0) {
                            // the start callback is triggered when an upload starts
                            // and no other uploads are currently running,
                            // equivalent to the global ajaxStart event:
                            this._trigger('start');
                            // Set timer for global bitrate progress calculation:
                            this._bitrateTimer = new this._BitrateTimer();
                            // Reset the global progress values:
                            this._progress.loaded = this._progress.total = 0;
                            this._progress.bitrate = 0;
                        }
                        // Make sure the container objects for the .response() and
                        // .progress() methods on the data object are available
                        // and reset to their initial state:
                        this._initResponseObject(data);
                        this._initProgressObject(data);
                        data._progress.loaded = data.loaded = data.uploadedBytes || 0;
                        data._progress.total = data.total = this._getTotal(data.files) || 1;
                        data._progress.bitrate = data.bitrate = 0;
                        this._active += 1;
                        // Initialize the global progress values:
                        this._progress.loaded += data.loaded;
                        this._progress.total += data.total;
                    },

                    _onDone: function _onDone(result, textStatus, jqXHR, options) {
                        var total = options._progress.total,
                            response = options._response;
                        if (options._progress.loaded < total) {
                            // Create a progress event if no final progress event
                            // with loaded equaling total has been triggered:
                            this._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: total,
                                total: total
                            }), options);
                        }
                        response.result = options.result = result;
                        response.textStatus = options.textStatus = textStatus;
                        response.jqXHR = options.jqXHR = jqXHR;
                        this._trigger('done', null, options);
                    },

                    _onFail: function _onFail(jqXHR, textStatus, errorThrown, options) {
                        var response = options._response;
                        if (options.recalculateProgress) {
                            // Remove the failed (error or abort) file upload from
                            // the global progress calculation:
                            this._progress.loaded -= options._progress.loaded;
                            this._progress.total -= options._progress.total;
                        }
                        response.jqXHR = options.jqXHR = jqXHR;
                        response.textStatus = options.textStatus = textStatus;
                        response.errorThrown = options.errorThrown = errorThrown;
                        this._trigger('fail', null, options);
                    },

                    _onAlways: function _onAlways(jqXHRorResult, textStatus, jqXHRorError, options) {
                        // jqXHRorResult, textStatus and jqXHRorError are added to the
                        // options object via done and fail callbacks
                        this._trigger('always', null, options);
                    },

                    _onSend: function _onSend(e, data) {
                        if (!data.submit) {
                            this._addConvenienceMethods(e, data);
                        }
                        var that = this,
                            jqXHR,
                            aborted,
                            slot,
                            pipe,
                            options = that._getAJAXSettings(data),
                            send = function send() {
                            that._sending += 1;
                            // Set timer for bitrate progress calculation:
                            options._bitrateTimer = new that._BitrateTimer();
                            jqXHR = jqXHR || ((aborted || that._trigger('send', $.Event('send', { delegatedEvent: e }), options) === false) && that._getXHRPromise(false, options.context, aborted) || that._chunkedUpload(options) || $.ajax(options)).done(function (result, textStatus, jqXHR) {
                                that._onDone(result, textStatus, jqXHR, options);
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                that._onFail(jqXHR, textStatus, errorThrown, options);
                            }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                                that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
                                that._sending -= 1;
                                that._active -= 1;
                                if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                                    // Start the next queued upload,
                                    // that has not been aborted:
                                    var nextSlot = that._slots.shift();
                                    while (nextSlot) {
                                        if (that._getDeferredState(nextSlot) === 'pending') {
                                            nextSlot.resolve();
                                            break;
                                        }
                                        nextSlot = that._slots.shift();
                                    }
                                }
                                if (that._active === 0) {
                                    // The stop callback is triggered when all uploads have
                                    // been completed, equivalent to the global ajaxStop event:
                                    that._trigger('stop');
                                }
                            });
                            return jqXHR;
                        };
                        this._beforeSend(e, options);
                        if (this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) {
                            if (this.options.limitConcurrentUploads > 1) {
                                slot = $.Deferred();
                                this._slots.push(slot);
                                pipe = slot.then(send);
                            } else {
                                this._sequence = this._sequence.then(send, send);
                                pipe = this._sequence;
                            }
                            // Return the piped Promise object, enhanced with an abort method,
                            // which is delegated to the jqXHR object of the current upload,
                            // and jqXHR callbacks mapped to the equivalent Promise methods:
                            pipe.abort = function () {
                                aborted = [undefined, 'abort', 'abort'];
                                if (!jqXHR) {
                                    if (slot) {
                                        slot.rejectWith(options.context, aborted);
                                    }
                                    return send();
                                }
                                return jqXHR.abort();
                            };
                            return this._enhancePromise(pipe);
                        }
                        return send();
                    },

                    _onAdd: function _onAdd(e, data) {
                        var that = this,
                            result = true,
                            options = $.extend({}, this.options, data),
                            files = data.files,
                            filesLength = files.length,
                            limit = options.limitMultiFileUploads,
                            limitSize = options.limitMultiFileUploadSize,
                            overhead = options.limitMultiFileUploadSizeOverhead,
                            batchSize = 0,
                            paramName = this._getParamName(options),
                            paramNameSet,
                            paramNameSlice,
                            fileSet,
                            i,
                            j = 0;
                        if (!filesLength) {
                            return false;
                        }
                        if (limitSize && files[0].size === undefined) {
                            limitSize = undefined;
                        }
                        if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
                            fileSet = [files];
                            paramNameSet = [paramName];
                        } else if (!(options.singleFileUploads || limitSize) && limit) {
                            fileSet = [];
                            paramNameSet = [];
                            for (i = 0; i < filesLength; i += limit) {
                                fileSet.push(files.slice(i, i + limit));
                                paramNameSlice = paramName.slice(i, i + limit);
                                if (!paramNameSlice.length) {
                                    paramNameSlice = paramName;
                                }
                                paramNameSet.push(paramNameSlice);
                            }
                        } else if (!options.singleFileUploads && limitSize) {
                            fileSet = [];
                            paramNameSet = [];
                            for (i = 0; i < filesLength; i = i + 1) {
                                batchSize += files[i].size + overhead;
                                if (i + 1 === filesLength || batchSize + files[i + 1].size + overhead > limitSize || limit && i + 1 - j >= limit) {
                                    fileSet.push(files.slice(j, i + 1));
                                    paramNameSlice = paramName.slice(j, i + 1);
                                    if (!paramNameSlice.length) {
                                        paramNameSlice = paramName;
                                    }
                                    paramNameSet.push(paramNameSlice);
                                    j = i + 1;
                                    batchSize = 0;
                                }
                            }
                        } else {
                            paramNameSet = paramName;
                        }
                        data.originalFiles = files;
                        $.each(fileSet || files, function (index, element) {
                            var newData = $.extend({}, data);
                            newData.files = fileSet ? element : [element];
                            newData.paramName = paramNameSet[index];
                            that._initResponseObject(newData);
                            that._initProgressObject(newData);
                            that._addConvenienceMethods(e, newData);
                            result = that._trigger('add', $.Event('add', { delegatedEvent: e }), newData);
                            return result;
                        });
                        return result;
                    },

                    _replaceFileInput: function _replaceFileInput(data) {
                        var input = data.fileInput,
                            inputClone = input.clone(true),
                            restoreFocus = input.is(document.activeElement);
                        // Add a reference for the new cloned file input to the data argument:
                        data.fileInputClone = inputClone;
                        $('<form></form>').append(inputClone)[0].reset();
                        // Detaching allows to insert the fileInput on another form
                        // without loosing the file input value:
                        input.after(inputClone).detach();
                        // If the fileInput had focus before it was detached,
                        // restore focus to the inputClone.
                        if (restoreFocus) {
                            inputClone.focus();
                        }
                        // Avoid memory leaks with the detached file input:
                        $.cleanData(input.unbind('remove'));
                        // Replace the original file input element in the fileInput
                        // elements set with the clone, which has been copied including
                        // event handlers:
                        this.options.fileInput = this.options.fileInput.map(function (i, el) {
                            if (el === input[0]) {
                                return inputClone[0];
                            }
                            return el;
                        });
                        // If the widget has been initialized on the file input itself,
                        // override this.element with the file input clone:
                        if (input[0] === this.element[0]) {
                            this.element = inputClone;
                        }
                    },

                    _handleFileTreeEntry: function _handleFileTreeEntry(entry, path) {
                        var that = this,
                            dfd = $.Deferred(),
                            entries = [],
                            dirReader,
                            errorHandler = function errorHandler(e) {
                            if (e && !e.entry) {
                                e.entry = entry;
                            }
                            // Since $.when returns immediately if one
                            // Deferred is rejected, we use resolve instead.
                            // This allows valid files and invalid items
                            // to be returned together in one set:
                            dfd.resolve([e]);
                        },
                            successHandler = function successHandler(entries) {
                            that._handleFileTreeEntries(entries, path + entry.name + '/').done(function (files) {
                                dfd.resolve(files);
                            }).fail(errorHandler);
                        },
                            readEntries = function readEntries() {
                            dirReader.readEntries(function (results) {
                                if (!results.length) {
                                    successHandler(entries);
                                } else {
                                    entries = entries.concat(results);
                                    readEntries();
                                }
                            }, errorHandler);
                        };
                        path = path || '';
                        if (entry.isFile) {
                            if (entry._file) {
                                // Workaround for Chrome bug #149735
                                entry._file.relativePath = path;
                                dfd.resolve(entry._file);
                            } else {
                                entry.file(function (file) {
                                    file.relativePath = path;
                                    dfd.resolve(file);
                                }, errorHandler);
                            }
                        } else if (entry.isDirectory) {
                            dirReader = entry.createReader();
                            readEntries();
                        } else {
                            // Return an empy list for file system items
                            // other than files or directories:
                            dfd.resolve([]);
                        }
                        return dfd.promise();
                    },

                    _handleFileTreeEntries: function _handleFileTreeEntries(entries, path) {
                        var that = this;
                        return $.when.apply($, $.map(entries, function (entry) {
                            return that._handleFileTreeEntry(entry, path);
                        })).then(function () {
                            return Array.prototype.concat.apply([], arguments);
                        });
                    },

                    _getDroppedFiles: function _getDroppedFiles(dataTransfer) {
                        dataTransfer = dataTransfer || {};
                        var items = dataTransfer.items;
                        if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
                            return this._handleFileTreeEntries($.map(items, function (item) {
                                var entry;
                                if (item.webkitGetAsEntry) {
                                    entry = item.webkitGetAsEntry();
                                    if (entry) {
                                        // Workaround for Chrome bug #149735:
                                        entry._file = item.getAsFile();
                                    }
                                    return entry;
                                }
                                return item.getAsEntry();
                            }));
                        }
                        return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise();
                    },

                    _getSingleFileInputFiles: function _getSingleFileInputFiles(fileInput) {
                        fileInput = $(fileInput);
                        var entries = fileInput.prop('webkitEntries') || fileInput.prop('entries'),
                            files,
                            value;
                        if (entries && entries.length) {
                            return this._handleFileTreeEntries(entries);
                        }
                        files = $.makeArray(fileInput.prop('files'));
                        if (!files.length) {
                            value = fileInput.prop('value');
                            if (!value) {
                                return $.Deferred().resolve([]).promise();
                            }
                            // If the files property is not available, the browser does not
                            // support the File API and we add a pseudo File object with
                            // the input value as name with path information removed:
                            files = [{ name: value.replace(/^.*\\/, '') }];
                        } else if (files[0].name === undefined && files[0].fileName) {
                            // File normalization for Safari 4 and Firefox 3:
                            $.each(files, function (index, file) {
                                file.name = file.fileName;
                                file.size = file.fileSize;
                            });
                        }
                        return $.Deferred().resolve(files).promise();
                    },

                    _getFileInputFiles: function _getFileInputFiles(fileInput) {
                        if (!(fileInput instanceof $) || fileInput.length === 1) {
                            return this._getSingleFileInputFiles(fileInput);
                        }
                        return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).then(function () {
                            return Array.prototype.concat.apply([], arguments);
                        });
                    },

                    _onChange: function _onChange(e) {
                        var that = this,
                            data = {
                            fileInput: $(e.target),
                            form: $(e.target.form)
                        };
                        this._getFileInputFiles(data.fileInput).always(function (files) {
                            data.files = files;
                            if (that.options.replaceFileInput) {
                                that._replaceFileInput(data);
                            }
                            if (that._trigger('change', $.Event('change', { delegatedEvent: e }), data) !== false) {
                                that._onAdd(e, data);
                            }
                        });
                    },

                    _onPaste: function _onPaste(e) {
                        var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                            data = { files: [] };
                        if (items && items.length) {
                            $.each(items, function (index, item) {
                                var file = item.getAsFile && item.getAsFile();
                                if (file) {
                                    data.files.push(file);
                                }
                            });
                            if (this._trigger('paste', $.Event('paste', { delegatedEvent: e }), data) !== false) {
                                this._onAdd(e, data);
                            }
                        }
                    },

                    _onDrop: function _onDrop(e) {
                        e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
                        var that = this,
                            dataTransfer = e.dataTransfer,
                            data = {};
                        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                            e.preventDefault();
                            this._getDroppedFiles(dataTransfer).always(function (files) {
                                data.files = files;
                                if (that._trigger('drop', $.Event('drop', { delegatedEvent: e }), data) !== false) {
                                    that._onAdd(e, data);
                                }
                            });
                        }
                    },

                    _onDragOver: getDragHandler('dragover'),

                    _onDragEnter: getDragHandler('dragenter'),

                    _onDragLeave: getDragHandler('dragleave'),

                    _initEventHandlers: function _initEventHandlers() {
                        if (this._isXHRUpload(this.options)) {
                            this._on(this.options.dropZone, {
                                dragover: this._onDragOver,
                                drop: this._onDrop,
                                // event.preventDefault() on dragenter is required for IE10+:
                                dragenter: this._onDragEnter,
                                // dragleave is not required, but added for completeness:
                                dragleave: this._onDragLeave
                            });
                            this._on(this.options.pasteZone, {
                                paste: this._onPaste
                            });
                        }
                        if ($.support.fileInput) {
                            this._on(this.options.fileInput, {
                                change: this._onChange
                            });
                        }
                    },

                    _destroyEventHandlers: function _destroyEventHandlers() {
                        this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
                        this._off(this.options.pasteZone, 'paste');
                        this._off(this.options.fileInput, 'change');
                    },

                    _destroy: function _destroy() {
                        this._destroyEventHandlers();
                    },

                    _setOption: function _setOption(key, value) {
                        var reinit = $.inArray(key, this._specialOptions) !== -1;
                        if (reinit) {
                            this._destroyEventHandlers();
                        }
                        this._super(key, value);
                        if (reinit) {
                            this._initSpecialOptions();
                            this._initEventHandlers();
                        }
                    },

                    _initSpecialOptions: function _initSpecialOptions() {
                        var options = this.options;
                        if (options.fileInput === undefined) {
                            options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]');
                        } else if (!(options.fileInput instanceof $)) {
                            options.fileInput = $(options.fileInput);
                        }
                        if (!(options.dropZone instanceof $)) {
                            options.dropZone = $(options.dropZone);
                        }
                        if (!(options.pasteZone instanceof $)) {
                            options.pasteZone = $(options.pasteZone);
                        }
                    },

                    _getRegExp: function _getRegExp(str) {
                        var parts = str.split('/'),
                            modifiers = parts.pop();
                        parts.shift();
                        return new RegExp(parts.join('/'), modifiers);
                    },

                    _isRegExpOption: function _isRegExpOption(key, value) {
                        return key !== 'url' && $.type(value) === 'string' && /^\/.*\/[igm]{0,3}$/.test(value);
                    },

                    _initDataAttributes: function _initDataAttributes() {
                        var that = this,
                            options = this.options,
                            data = this.element.data();
                        // Initialize options set via HTML5 data-attributes:
                        $.each(this.element[0].attributes, function (index, attr) {
                            var key = attr.name.toLowerCase(),
                                value;
                            if (/^data-/.test(key)) {
                                // Convert hyphen-ated key to camelCase:
                                key = key.slice(5).replace(/-[a-z]/g, function (str) {
                                    return str.charAt(1).toUpperCase();
                                });
                                value = data[key];
                                if (that._isRegExpOption(key, value)) {
                                    value = that._getRegExp(value);
                                }
                                options[key] = value;
                            }
                        });
                    },

                    _create: function _create() {
                        this._initDataAttributes();
                        this._initSpecialOptions();
                        this._slots = [];
                        this._sequence = this._getXHRPromise(true);
                        this._sending = this._active = 0;
                        this._initProgressObject(this);
                        this._initEventHandlers();
                    },

                    // This method is exposed to the widget API and allows to query
                    // the number of active uploads:
                    active: function active() {
                        return this._active;
                    },

                    // This method is exposed to the widget API and allows to query
                    // the widget upload progress.
                    // It returns an object with loaded, total and bitrate properties
                    // for the running uploads:
                    progress: function progress() {
                        return this._progress;
                    },

                    // This method is exposed to the widget API and allows adding files
                    // using the fileupload API. The data parameter accepts an object which
                    // must have a files property and can contain additional options:
                    // .fileupload('add', {files: filesList});
                    add: function add(data) {
                        var that = this;
                        if (!data || this.options.disabled) {
                            return;
                        }
                        if (data.fileInput && !data.files) {
                            this._getFileInputFiles(data.fileInput).always(function (files) {
                                data.files = files;
                                that._onAdd(null, data);
                            });
                        } else {
                            data.files = $.makeArray(data.files);
                            this._onAdd(null, data);
                        }
                    },

                    // This method is exposed to the widget API and allows sending files
                    // using the fileupload API. The data parameter accepts an object which
                    // must have a files or fileInput property and can contain additional options:
                    // .fileupload('send', {files: filesList});
                    // The method returns a Promise object for the file upload call.
                    send: function send(data) {
                        if (data && !this.options.disabled) {
                            if (data.fileInput && !data.files) {
                                var that = this,
                                    dfd = $.Deferred(),
                                    promise = dfd.promise(),
                                    jqXHR,
                                    aborted;
                                promise.abort = function () {
                                    aborted = true;
                                    if (jqXHR) {
                                        return jqXHR.abort();
                                    }
                                    dfd.reject(null, 'abort', 'abort');
                                    return promise;
                                };
                                this._getFileInputFiles(data.fileInput).always(function (files) {
                                    if (aborted) {
                                        return;
                                    }
                                    if (!files.length) {
                                        dfd.reject();
                                        return;
                                    }
                                    data.files = files;
                                    jqXHR = that._onSend(null, data);
                                    jqXHR.then(function (result, textStatus, jqXHR) {
                                        dfd.resolve(result, textStatus, jqXHR);
                                    }, function (jqXHR, textStatus, errorThrown) {
                                        dfd.reject(jqXHR, textStatus, errorThrown);
                                    });
                                });
                                return this._enhancePromise(promise);
                            }
                            data.files = $.makeArray(data.files);
                            if (data.files.length) {
                                return this._onSend(null, data);
                            }
                        }
                        return this._getXHRPromise(false, data && data.context);
                    }

                });
            });

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
                                                                                                             * http://jqueryui.com
                                                                                                             * Includes: widget.js
                                                                                                             * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

            (function (factory) {
                if (true) {

                    // AMD. Register as an anonymous module.
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === "object") {

                    // Node/CommonJS
                    factory(require("jquery"));
                } else {

                    // Browser globals
                    factory(jQuery);
                }
            })(function ($) {
                /*!
                 * jQuery UI Widget 1.11.4
                 * http://jqueryui.com
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license.
                 * http://jquery.org/license
                 *
                 * http://api.jqueryui.com/jQuery.widget/
                 */

                var widget_uuid = 0,
                    widget_slice = Array.prototype.slice;

                $.cleanData = function (orig) {
                    return function (elems) {
                        var events, elem, i;
                        for (i = 0; (elem = elems[i]) != null; i++) {
                            try {

                                // Only trigger remove when necessary to save time
                                events = $._data(elem, "events");
                                if (events && events.remove) {
                                    $(elem).triggerHandler("remove");
                                }

                                // http://bugs.jquery.com/ticket/8235
                            } catch (e) {}
                        }
                        orig(elems);
                    };
                }($.cleanData);

                $.widget = function (name, base, prototype) {
                    var fullName,
                        existingConstructor,
                        constructor,
                        basePrototype,

                    // proxiedPrototype allows the provided prototype to remain unmodified
                    // so that it can be used as a mixin for multiple widgets (#8876)
                    proxiedPrototype = {},
                        namespace = name.split(".")[0];

                    name = name.split(".")[1];
                    fullName = namespace + "-" + name;

                    if (!prototype) {
                        prototype = base;
                        base = $.Widget;
                    }

                    // create selector for plugin
                    $.expr[":"][fullName.toLowerCase()] = function (elem) {
                        return !!$.data(elem, fullName);
                    };

                    $[namespace] = $[namespace] || {};
                    existingConstructor = $[namespace][name];
                    constructor = $[namespace][name] = function (options, element) {
                        // allow instantiation without "new" keyword
                        if (!this._createWidget) {
                            return new constructor(options, element);
                        }

                        // allow instantiation without initializing for simple inheritance
                        // must use "new" keyword (the code above always passes args)
                        if (arguments.length) {
                            this._createWidget(options, element);
                        }
                    };
                    // extend with the existing constructor to carry over any static properties
                    $.extend(constructor, existingConstructor, {
                        version: prototype.version,
                        // copy the object used to create the prototype in case we need to
                        // redefine the widget later
                        _proto: $.extend({}, prototype),
                        // track widgets that inherit from this widget in case this widget is
                        // redefined after a widget inherits from it
                        _childConstructors: []
                    });

                    basePrototype = new base();
                    // we need to make the options hash a property directly on the new instance
                    // otherwise we'll modify the options hash on the prototype that we're
                    // inheriting from
                    basePrototype.options = $.widget.extend({}, basePrototype.options);
                    $.each(prototype, function (prop, value) {
                        if (!$.isFunction(value)) {
                            proxiedPrototype[prop] = value;
                            return;
                        }
                        proxiedPrototype[prop] = function () {
                            var _super = function _super() {
                                return base.prototype[prop].apply(this, arguments);
                            },
                                _superApply = function _superApply(args) {
                                return base.prototype[prop].apply(this, args);
                            };
                            return function () {
                                var __super = this._super,
                                    __superApply = this._superApply,
                                    returnValue;

                                this._super = _super;
                                this._superApply = _superApply;

                                returnValue = value.apply(this, arguments);

                                this._super = __super;
                                this._superApply = __superApply;

                                return returnValue;
                            };
                        }();
                    });
                    constructor.prototype = $.widget.extend(basePrototype, {
                        // TODO: remove support for widgetEventPrefix
                        // always use the name + a colon as the prefix, e.g., draggable:start
                        // don't prefix for widgets that aren't DOM-based
                        widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
                    }, proxiedPrototype, {
                        constructor: constructor,
                        namespace: namespace,
                        widgetName: name,
                        widgetFullName: fullName
                    });

                    // If this widget is being redefined then we need to find all widgets that
                    // are inheriting from it and redefine all of them so that they inherit from
                    // the new version of this widget. We're essentially trying to replace one
                    // level in the prototype chain.
                    if (existingConstructor) {
                        $.each(existingConstructor._childConstructors, function (i, child) {
                            var childPrototype = child.prototype;

                            // redefine the child widget using the same prototype that was
                            // originally used, but inherit from the new version of the base
                            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
                        });
                        // remove the list of existing child constructors from the old constructor
                        // so the old child constructors can be garbage collected
                        delete existingConstructor._childConstructors;
                    } else {
                        base._childConstructors.push(constructor);
                    }

                    $.widget.bridge(name, constructor);

                    return constructor;
                };

                $.widget.extend = function (target) {
                    var input = widget_slice.call(arguments, 1),
                        inputIndex = 0,
                        inputLength = input.length,
                        key,
                        value;
                    for (; inputIndex < inputLength; inputIndex++) {
                        for (key in input[inputIndex]) {
                            value = input[inputIndex][key];
                            if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                                // Clone objects
                                if ($.isPlainObject(value)) {
                                    target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) :
                                    // Don't extend strings, arrays, etc. with objects
                                    $.widget.extend({}, value);
                                    // Copy everything else by reference
                                } else {
                                    target[key] = value;
                                }
                            }
                        }
                    }
                    return target;
                };

                $.widget.bridge = function (name, object) {
                    var fullName = object.prototype.widgetFullName || name;
                    $.fn[name] = function (options) {
                        var isMethodCall = typeof options === "string",
                            args = widget_slice.call(arguments, 1),
                            returnValue = this;

                        if (isMethodCall) {
                            this.each(function () {
                                var methodValue,
                                    instance = $.data(this, fullName);
                                if (options === "instance") {
                                    returnValue = instance;
                                    return false;
                                }
                                if (!instance) {
                                    return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                                }
                                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                                    return $.error("no such method '" + options + "' for " + name + " widget instance");
                                }
                                methodValue = instance[options].apply(instance, args);
                                if (methodValue !== instance && methodValue !== undefined) {
                                    returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                                    return false;
                                }
                            });
                        } else {

                            // Allow multiple hashes to be passed on init
                            if (args.length) {
                                options = $.widget.extend.apply(null, [options].concat(args));
                            }

                            this.each(function () {
                                var instance = $.data(this, fullName);
                                if (instance) {
                                    instance.option(options || {});
                                    if (instance._init) {
                                        instance._init();
                                    }
                                } else {
                                    $.data(this, fullName, new object(options, this));
                                }
                            });
                        }

                        return returnValue;
                    };
                };

                $.Widget = function () /* options, element */{};
                $.Widget._childConstructors = [];

                $.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {
                        disabled: false,

                        // callbacks
                        create: null
                    },
                    _createWidget: function _createWidget(options, element) {
                        element = $(element || this.defaultElement || this)[0];
                        this.element = $(element);
                        this.uuid = widget_uuid++;
                        this.eventNamespace = "." + this.widgetName + this.uuid;

                        this.bindings = $();
                        this.hoverable = $();
                        this.focusable = $();

                        if (element !== this) {
                            $.data(element, this.widgetFullName, this);
                            this._on(true, this.element, {
                                remove: function remove(event) {
                                    if (event.target === element) {
                                        this.destroy();
                                    }
                                }
                            });
                            this.document = $(element.style ?
                            // element within the document
                            element.ownerDocument :
                            // element is window or document
                            element.document || element);
                            this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
                        }

                        this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);

                        this._create();
                        this._trigger("create", null, this._getCreateEventData());
                        this._init();
                    },
                    _getCreateOptions: $.noop,
                    _getCreateEventData: $.noop,
                    _create: $.noop,
                    _init: $.noop,

                    destroy: function destroy() {
                        this._destroy();
                        // we can probably remove the unbind calls in 2.0
                        // all event bindings should go through this._on()
                        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName)
                        // support: jquery <1.6.3
                        // http://bugs.jquery.com/ticket/9413
                        .removeData($.camelCase(this.widgetFullName));
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");

                        // clean up events and states
                        this.bindings.unbind(this.eventNamespace);
                        this.hoverable.removeClass("ui-state-hover");
                        this.focusable.removeClass("ui-state-focus");
                    },
                    _destroy: $.noop,

                    widget: function widget() {
                        return this.element;
                    },

                    option: function option(key, value) {
                        var options = key,
                            parts,
                            curOption,
                            i;

                        if (arguments.length === 0) {
                            // don't return a reference to the internal hash
                            return $.widget.extend({}, this.options);
                        }

                        if (typeof key === "string") {
                            // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                            options = {};
                            parts = key.split(".");
                            key = parts.shift();
                            if (parts.length) {
                                curOption = options[key] = $.widget.extend({}, this.options[key]);
                                for (i = 0; i < parts.length - 1; i++) {
                                    curOption[parts[i]] = curOption[parts[i]] || {};
                                    curOption = curOption[parts[i]];
                                }
                                key = parts.pop();
                                if (arguments.length === 1) {
                                    return curOption[key] === undefined ? null : curOption[key];
                                }
                                curOption[key] = value;
                            } else {
                                if (arguments.length === 1) {
                                    return this.options[key] === undefined ? null : this.options[key];
                                }
                                options[key] = value;
                            }
                        }

                        this._setOptions(options);

                        return this;
                    },
                    _setOptions: function _setOptions(options) {
                        var key;

                        for (key in options) {
                            this._setOption(key, options[key]);
                        }

                        return this;
                    },
                    _setOption: function _setOption(key, value) {
                        this.options[key] = value;

                        if (key === "disabled") {
                            this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);

                            // If the widget is becoming disabled, then nothing is interactive
                            if (value) {
                                this.hoverable.removeClass("ui-state-hover");
                                this.focusable.removeClass("ui-state-focus");
                            }
                        }

                        return this;
                    },

                    enable: function enable() {
                        return this._setOptions({ disabled: false });
                    },
                    disable: function disable() {
                        return this._setOptions({ disabled: true });
                    },

                    _on: function _on(suppressDisabledCheck, element, handlers) {
                        var delegateElement,
                            instance = this;

                        // no suppressDisabledCheck flag, shuffle arguments
                        if (typeof suppressDisabledCheck !== "boolean") {
                            handlers = element;
                            element = suppressDisabledCheck;
                            suppressDisabledCheck = false;
                        }

                        // no element argument, shuffle and use this.element
                        if (!handlers) {
                            handlers = element;
                            element = this.element;
                            delegateElement = this.widget();
                        } else {
                            element = delegateElement = $(element);
                            this.bindings = this.bindings.add(element);
                        }

                        $.each(handlers, function (event, handler) {
                            function handlerProxy() {
                                // allow widgets to customize the disabled handling
                                // - disabled as an array instead of boolean
                                // - disabled class as method for disabling individual parts
                                if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                                    return;
                                }
                                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                            }

                            // copy the guid so direct unbinding works
                            if (typeof handler !== "string") {
                                handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                            }

                            var match = event.match(/^([\w:-]*)\s*(.*)$/),
                                eventName = match[1] + instance.eventNamespace,
                                selector = match[2];
                            if (selector) {
                                delegateElement.delegate(selector, eventName, handlerProxy);
                            } else {
                                element.bind(eventName, handlerProxy);
                            }
                        });
                    },

                    _off: function _off(element, eventName) {
                        eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                        element.unbind(eventName).undelegate(eventName);

                        // Clear the stack to avoid memory leaks (#10056)
                        this.bindings = $(this.bindings.not(element).get());
                        this.focusable = $(this.focusable.not(element).get());
                        this.hoverable = $(this.hoverable.not(element).get());
                    },

                    _delay: function _delay(handler, delay) {
                        function handlerProxy() {
                            return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                        }
                        var instance = this;
                        return setTimeout(handlerProxy, delay || 0);
                    },

                    _hoverable: function _hoverable(element) {
                        this.hoverable = this.hoverable.add(element);
                        this._on(element, {
                            mouseenter: function mouseenter(event) {
                                $(event.currentTarget).addClass("ui-state-hover");
                            },
                            mouseleave: function mouseleave(event) {
                                $(event.currentTarget).removeClass("ui-state-hover");
                            }
                        });
                    },

                    _focusable: function _focusable(element) {
                        this.focusable = this.focusable.add(element);
                        this._on(element, {
                            focusin: function focusin(event) {
                                $(event.currentTarget).addClass("ui-state-focus");
                            },
                            focusout: function focusout(event) {
                                $(event.currentTarget).removeClass("ui-state-focus");
                            }
                        });
                    },

                    _trigger: function _trigger(type, event, data) {
                        var prop,
                            orig,
                            callback = this.options[type];

                        data = data || {};
                        event = $.Event(event);
                        event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
                        // the original event may come from any element
                        // so we need to reset the target on the new event
                        event.target = this.element[0];

                        // copy original event properties over to the new event
                        orig = event.originalEvent;
                        if (orig) {
                            for (prop in orig) {
                                if (!(prop in event)) {
                                    event[prop] = orig[prop];
                                }
                            }
                        }

                        this.element.trigger(event, data);
                        return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
                    }
                };

                $.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
                    $.Widget.prototype["_" + method] = function (element, options, callback) {
                        if (typeof options === "string") {
                            options = { effect: options };
                        }
                        var hasOptions,
                            effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
                        options = options || {};
                        if (typeof options === "number") {
                            options = { duration: options };
                        }
                        hasOptions = !$.isEmptyObject(options);
                        options.complete = callback;
                        if (options.delay) {
                            element.delay(options.delay);
                        }
                        if (hasOptions && $.effects && $.effects.effect[effectName]) {
                            element[method](options);
                        } else if (effectName !== method && element[effectName]) {
                            element[effectName](options.duration, options.easing, callback);
                        } else {
                            element.queue(function (next) {
                                $(this)[method]();
                                if (callback) {
                                    callback.call(element[0]);
                                }
                                next();
                            });
                        }
                    };
                });

                var widget = $.widget;
            });

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            /*** IMPORTS FROM imports-loader ***/
            var define = false;
            var exports = false;

            /*
             * jQuery File Upload Processing Plugin
             * https://github.com/blueimp/jQuery-File-Upload
             *
             * Copyright 2012, Sebastian Tschan
             * https://blueimp.net
             *
             * Licensed under the MIT license:
             * https://opensource.org/licenses/MIT
             */

            /* jshint nomen:false */
            /* global define, require, window */

            ;(function (factory) {
                'use strict';

                if (typeof define === 'function' && define.amd) {
                    // Register as an anonymous AMD module:
                    define(['jquery', './jquery.fileupload'], factory);
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                    // Node/CommonJS:
                    factory(__webpack_require__(0), __webpack_require__(1));
                } else {
                    // Browser globals:
                    factory(window.jQuery);
                }
            })(function ($) {
                'use strict';

                var originalAdd = $.blueimp.fileupload.prototype.options.add;

                // The File Upload Processing plugin extends the fileupload widget
                // with file processing functionality:
                $.widget('blueimp.fileupload', $.blueimp.fileupload, {

                    options: {
                        // The list of processing actions:
                        processQueue: [
                            /*
                            {
                                action: 'log',
                                type: 'debug'
                            }
                            */
                        ],
                        add: function add(e, data) {
                            var $this = $(this);
                            data.process(function () {
                                return $this.fileupload('process', data);
                            });
                            originalAdd.call(this, e, data);
                        }
                    },

                    processActions: {
                        /*
                        log: function (data, options) {
                            console[options.type](
                                'Processing "' + data.files[data.index].name + '"'
                            );
                        }
                        */
                    },

                    _processFile: function _processFile(data, originalData) {
                        var that = this,
                            dfd = $.Deferred().resolveWith(that, [data]),
                            chain = dfd.promise();
                        this._trigger('process', null, data);
                        $.each(data.processQueue, function (i, settings) {
                            var func = function func(data) {
                                if (originalData.errorThrown) {
                                    return $.Deferred().rejectWith(that, [originalData]).promise();
                                }
                                return that.processActions[settings.action].call(that, data, settings);
                            };
                            chain = chain.then(func, settings.always && func);
                        });
                        chain.done(function () {
                            that._trigger('processdone', null, data);
                            that._trigger('processalways', null, data);
                        }).fail(function () {
                            that._trigger('processfail', null, data);
                            that._trigger('processalways', null, data);
                        });
                        return chain;
                    },

                    // Replaces the settings of each processQueue item that
                    // are strings starting with an "@", using the remaining
                    // substring as key for the option map,
                    // e.g. "@autoUpload" is replaced with options.autoUpload:
                    _transformProcessQueue: function _transformProcessQueue(options) {
                        var processQueue = [];
                        $.each(options.processQueue, function () {
                            var settings = {},
                                action = this.action,
                                prefix = this.prefix === true ? action : this.prefix;
                            $.each(this, function (key, value) {
                                if ($.type(value) === 'string' && value.charAt(0) === '@') {
                                    settings[key] = options[value.slice(1) || (prefix ? prefix + key.charAt(0).toUpperCase() + key.slice(1) : key)];
                                } else {
                                    settings[key] = value;
                                }
                            });
                            processQueue.push(settings);
                        });
                        options.processQueue = processQueue;
                    },

                    // Returns the number of files currently in the processsing queue:
                    processing: function processing() {
                        return this._processing;
                    },

                    // Processes the files given as files property of the data parameter,
                    // returns a Promise object that allows to bind callbacks:
                    process: function process(data) {
                        var that = this,
                            options = $.extend({}, this.options, data);
                        if (options.processQueue && options.processQueue.length) {
                            this._transformProcessQueue(options);
                            if (this._processing === 0) {
                                this._trigger('processstart');
                            }
                            $.each(data.files, function (index) {
                                var opts = index ? $.extend({}, options) : options,
                                    func = function func() {
                                    if (data.errorThrown) {
                                        return $.Deferred().rejectWith(that, [data]).promise();
                                    }
                                    return that._processFile(opts, data);
                                };
                                opts.index = index;
                                that._processing += 1;
                                that._processingQueue = that._processingQueue.then(func, func).always(function () {
                                    that._processing -= 1;
                                    if (that._processing === 0) {
                                        that._trigger('processstop');
                                    }
                                });
                            });
                        }
                        return this._processingQueue;
                    },

                    _create: function _create() {
                        this._super();
                        this._processing = 0;
                        this._processingQueue = $.Deferred().resolveWith(this).promise();
                    }

                });
            });

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                                                             * jQuery UI Widget 1.12.1
                                                                                                             * http://jqueryui.com
                                                                                                             *
                                                                                                             * Copyright jQuery Foundation and other contributors
                                                                                                             * Released under the MIT license.
                                                                                                             * http://jquery.org/license
                                                                                                             */

            //>>label: Widget
            //>>group: Core
            //>>description: Provides a factory for creating stateful widgets with a common API.
            //>>docs: http://api.jqueryui.com/jQuery.widget/
            //>>demos: http://jqueryui.com/widget/

            (function (factory) {
                if (true) {

                    // AMD. Register as an anonymous module.
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {

                    // Browser globals
                    factory(jQuery);
                }
            })(function ($) {

                var widgetUuid = 0;
                var widgetSlice = Array.prototype.slice;

                $.cleanData = function (orig) {
                    return function (elems) {
                        var events, elem, i;
                        for (i = 0; (elem = elems[i]) != null; i++) {
                            try {

                                // Only trigger remove when necessary to save time
                                events = $._data(elem, "events");
                                if (events && events.remove) {
                                    $(elem).triggerHandler("remove");
                                }

                                // Http://bugs.jquery.com/ticket/8235
                            } catch (e) {}
                        }
                        orig(elems);
                    };
                }($.cleanData);

                $.widget = function (name, base, prototype) {
                    var existingConstructor, constructor, basePrototype;

                    // ProxiedPrototype allows the provided prototype to remain unmodified
                    // so that it can be used as a mixin for multiple widgets (#8876)
                    var proxiedPrototype = {};

                    var namespace = name.split(".")[0];
                    name = name.split(".")[1];
                    var fullName = namespace + "-" + name;

                    if (!prototype) {
                        prototype = base;
                        base = $.Widget;
                    }

                    if ($.isArray(prototype)) {
                        prototype = $.extend.apply(null, [{}].concat(prototype));
                    }

                    // Create selector for plugin
                    $.expr[":"][fullName.toLowerCase()] = function (elem) {
                        return !!$.data(elem, fullName);
                    };

                    $[namespace] = $[namespace] || {};
                    existingConstructor = $[namespace][name];
                    constructor = $[namespace][name] = function (options, element) {

                        // Allow instantiation without "new" keyword
                        if (!this._createWidget) {
                            return new constructor(options, element);
                        }

                        // Allow instantiation without initializing for simple inheritance
                        // must use "new" keyword (the code above always passes args)
                        if (arguments.length) {
                            this._createWidget(options, element);
                        }
                    };

                    // Extend with the existing constructor to carry over any static properties
                    $.extend(constructor, existingConstructor, {
                        version: prototype.version,

                        // Copy the object used to create the prototype in case we need to
                        // redefine the widget later
                        _proto: $.extend({}, prototype),

                        // Track widgets that inherit from this widget in case this widget is
                        // redefined after a widget inherits from it
                        _childConstructors: []
                    });

                    basePrototype = new base();

                    // We need to make the options hash a property directly on the new instance
                    // otherwise we'll modify the options hash on the prototype that we're
                    // inheriting from
                    basePrototype.options = $.widget.extend({}, basePrototype.options);
                    $.each(prototype, function (prop, value) {
                        if (!$.isFunction(value)) {
                            proxiedPrototype[prop] = value;
                            return;
                        }
                        proxiedPrototype[prop] = function () {
                            function _super() {
                                return base.prototype[prop].apply(this, arguments);
                            }

                            function _superApply(args) {
                                return base.prototype[prop].apply(this, args);
                            }

                            return function () {
                                var __super = this._super;
                                var __superApply = this._superApply;
                                var returnValue;

                                this._super = _super;
                                this._superApply = _superApply;

                                returnValue = value.apply(this, arguments);

                                this._super = __super;
                                this._superApply = __superApply;

                                return returnValue;
                            };
                        }();
                    });
                    constructor.prototype = $.widget.extend(basePrototype, {

                        // TODO: remove support for widgetEventPrefix
                        // always use the name + a colon as the prefix, e.g., draggable:start
                        // don't prefix for widgets that aren't DOM-based
                        widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
                    }, proxiedPrototype, {
                        constructor: constructor,
                        namespace: namespace,
                        widgetName: name,
                        widgetFullName: fullName
                    });

                    // If this widget is being redefined then we need to find all widgets that
                    // are inheriting from it and redefine all of them so that they inherit from
                    // the new version of this widget. We're essentially trying to replace one
                    // level in the prototype chain.
                    if (existingConstructor) {
                        $.each(existingConstructor._childConstructors, function (i, child) {
                            var childPrototype = child.prototype;

                            // Redefine the child widget using the same prototype that was
                            // originally used, but inherit from the new version of the base
                            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
                        });

                        // Remove the list of existing child constructors from the old constructor
                        // so the old child constructors can be garbage collected
                        delete existingConstructor._childConstructors;
                    } else {
                        base._childConstructors.push(constructor);
                    }

                    $.widget.bridge(name, constructor);

                    return constructor;
                };

                $.widget.extend = function (target) {
                    var input = widgetSlice.call(arguments, 1);
                    var inputIndex = 0;
                    var inputLength = input.length;
                    var key;
                    var value;

                    for (; inputIndex < inputLength; inputIndex++) {
                        for (key in input[inputIndex]) {
                            value = input[inputIndex][key];
                            if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {

                                // Clone objects
                                if ($.isPlainObject(value)) {
                                    target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) :

                                    // Don't extend strings, arrays, etc. with objects
                                    $.widget.extend({}, value);

                                    // Copy everything else by reference
                                } else {
                                    target[key] = value;
                                }
                            }
                        }
                    }
                    return target;
                };

                $.widget.bridge = function (name, object) {
                    var fullName = object.prototype.widgetFullName || name;
                    $.fn[name] = function (options) {
                        var isMethodCall = typeof options === "string";
                        var args = widgetSlice.call(arguments, 1);
                        var returnValue = this;

                        if (isMethodCall) {

                            // If this is an empty collection, we need to have the instance method
                            // return undefined instead of the jQuery instance
                            if (!this.length && options === "instance") {
                                returnValue = undefined;
                            } else {
                                this.each(function () {
                                    var methodValue;
                                    var instance = $.data(this, fullName);

                                    if (options === "instance") {
                                        returnValue = instance;
                                        return false;
                                    }

                                    if (!instance) {
                                        return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                                    }

                                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                                    }

                                    methodValue = instance[options].apply(instance, args);

                                    if (methodValue !== instance && methodValue !== undefined) {
                                        returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                                        return false;
                                    }
                                });
                            }
                        } else {

                            // Allow multiple hashes to be passed on init
                            if (args.length) {
                                options = $.widget.extend.apply(null, [options].concat(args));
                            }

                            this.each(function () {
                                var instance = $.data(this, fullName);
                                if (instance) {
                                    instance.option(options || {});
                                    if (instance._init) {
                                        instance._init();
                                    }
                                } else {
                                    $.data(this, fullName, new object(options, this));
                                }
                            });
                        }

                        return returnValue;
                    };
                };

                $.Widget = function () /* options, element */{};
                $.Widget._childConstructors = [];

                $.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",

                    options: {
                        classes: {},
                        disabled: false,

                        // Callbacks
                        create: null
                    },

                    _createWidget: function _createWidget(options, element) {
                        element = $(element || this.defaultElement || this)[0];
                        this.element = $(element);
                        this.uuid = widgetUuid++;
                        this.eventNamespace = "." + this.widgetName + this.uuid;

                        this.bindings = $();
                        this.hoverable = $();
                        this.focusable = $();
                        this.classesElementLookup = {};

                        if (element !== this) {
                            $.data(element, this.widgetFullName, this);
                            this._on(true, this.element, {
                                remove: function remove(event) {
                                    if (event.target === element) {
                                        this.destroy();
                                    }
                                }
                            });
                            this.document = $(element.style ?

                            // Element within the document
                            element.ownerDocument :

                            // Element is window or document
                            element.document || element);
                            this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
                        }

                        this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);

                        this._create();

                        if (this.options.disabled) {
                            this._setOptionDisabled(this.options.disabled);
                        }

                        this._trigger("create", null, this._getCreateEventData());
                        this._init();
                    },

                    _getCreateOptions: function _getCreateOptions() {
                        return {};
                    },

                    _getCreateEventData: $.noop,

                    _create: $.noop,

                    _init: $.noop,

                    destroy: function destroy() {
                        var that = this;

                        this._destroy();
                        $.each(this.classesElementLookup, function (key, value) {
                            that._removeClass(value, key);
                        });

                        // We can probably remove the unbind calls in 2.0
                        // all event bindings should go through this._on()
                        this.element.off(this.eventNamespace).removeData(this.widgetFullName);
                        this.widget().off(this.eventNamespace).removeAttr("aria-disabled");

                        // Clean up events and states
                        this.bindings.off(this.eventNamespace);
                    },

                    _destroy: $.noop,

                    widget: function widget() {
                        return this.element;
                    },

                    option: function option(key, value) {
                        var options = key;
                        var parts;
                        var curOption;
                        var i;

                        if (arguments.length === 0) {

                            // Don't return a reference to the internal hash
                            return $.widget.extend({}, this.options);
                        }

                        if (typeof key === "string") {

                            // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                            options = {};
                            parts = key.split(".");
                            key = parts.shift();
                            if (parts.length) {
                                curOption = options[key] = $.widget.extend({}, this.options[key]);
                                for (i = 0; i < parts.length - 1; i++) {
                                    curOption[parts[i]] = curOption[parts[i]] || {};
                                    curOption = curOption[parts[i]];
                                }
                                key = parts.pop();
                                if (arguments.length === 1) {
                                    return curOption[key] === undefined ? null : curOption[key];
                                }
                                curOption[key] = value;
                            } else {
                                if (arguments.length === 1) {
                                    return this.options[key] === undefined ? null : this.options[key];
                                }
                                options[key] = value;
                            }
                        }

                        this._setOptions(options);

                        return this;
                    },

                    _setOptions: function _setOptions(options) {
                        var key;

                        for (key in options) {
                            this._setOption(key, options[key]);
                        }

                        return this;
                    },

                    _setOption: function _setOption(key, value) {
                        if (key === "classes") {
                            this._setOptionClasses(value);
                        }

                        this.options[key] = value;

                        if (key === "disabled") {
                            this._setOptionDisabled(value);
                        }

                        return this;
                    },

                    _setOptionClasses: function _setOptionClasses(value) {
                        var classKey, elements, currentElements;

                        for (classKey in value) {
                            currentElements = this.classesElementLookup[classKey];
                            if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
                                continue;
                            }

                            // We are doing this to create a new jQuery object because the _removeClass() call
                            // on the next line is going to destroy the reference to the current elements being
                            // tracked. We need to save a copy of this collection so that we can add the new classes
                            // below.
                            elements = $(currentElements.get());
                            this._removeClass(currentElements, classKey);

                            // We don't use _addClass() here, because that uses this.options.classes
                            // for generating the string of classes. We want to use the value passed in from
                            // _setOption(), this is the new value of the classes option which was passed to
                            // _setOption(). We pass this value directly to _classes().
                            elements.addClass(this._classes({
                                element: elements,
                                keys: classKey,
                                classes: value,
                                add: true
                            }));
                        }
                    },

                    _setOptionDisabled: function _setOptionDisabled(value) {
                        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);

                        // If the widget is becoming disabled, then nothing is interactive
                        if (value) {
                            this._removeClass(this.hoverable, null, "ui-state-hover");
                            this._removeClass(this.focusable, null, "ui-state-focus");
                        }
                    },

                    enable: function enable() {
                        return this._setOptions({ disabled: false });
                    },

                    disable: function disable() {
                        return this._setOptions({ disabled: true });
                    },

                    _classes: function _classes(options) {
                        var full = [];
                        var that = this;

                        options = $.extend({
                            element: this.element,
                            classes: this.options.classes || {}
                        }, options);

                        function processClassString(classes, checkOption) {
                            var current, i;
                            for (i = 0; i < classes.length; i++) {
                                current = that.classesElementLookup[classes[i]] || $();
                                if (options.add) {
                                    current = $($.unique(current.get().concat(options.element.get())));
                                } else {
                                    current = $(current.not(options.element).get());
                                }
                                that.classesElementLookup[classes[i]] = current;
                                full.push(classes[i]);
                                if (checkOption && options.classes[classes[i]]) {
                                    full.push(options.classes[classes[i]]);
                                }
                            }
                        }

                        this._on(options.element, {
                            "remove": "_untrackClassesElement"
                        });

                        if (options.keys) {
                            processClassString(options.keys.match(/\S+/g) || [], true);
                        }
                        if (options.extra) {
                            processClassString(options.extra.match(/\S+/g) || []);
                        }

                        return full.join(" ");
                    },

                    _untrackClassesElement: function _untrackClassesElement(event) {
                        var that = this;
                        $.each(that.classesElementLookup, function (key, value) {
                            if ($.inArray(event.target, value) !== -1) {
                                that.classesElementLookup[key] = $(value.not(event.target).get());
                            }
                        });
                    },

                    _removeClass: function _removeClass(element, keys, extra) {
                        return this._toggleClass(element, keys, extra, false);
                    },

                    _addClass: function _addClass(element, keys, extra) {
                        return this._toggleClass(element, keys, extra, true);
                    },

                    _toggleClass: function _toggleClass(element, keys, extra, add) {
                        add = typeof add === "boolean" ? add : extra;
                        var shift = typeof element === "string" || element === null,
                            options = {
                            extra: shift ? keys : extra,
                            keys: shift ? element : keys,
                            element: shift ? this.element : element,
                            add: add
                        };
                        options.element.toggleClass(this._classes(options), add);
                        return this;
                    },

                    _on: function _on(suppressDisabledCheck, element, handlers) {
                        var delegateElement;
                        var instance = this;

                        // No suppressDisabledCheck flag, shuffle arguments
                        if (typeof suppressDisabledCheck !== "boolean") {
                            handlers = element;
                            element = suppressDisabledCheck;
                            suppressDisabledCheck = false;
                        }

                        // No element argument, shuffle and use this.element
                        if (!handlers) {
                            handlers = element;
                            element = this.element;
                            delegateElement = this.widget();
                        } else {
                            element = delegateElement = $(element);
                            this.bindings = this.bindings.add(element);
                        }

                        $.each(handlers, function (event, handler) {
                            function handlerProxy() {

                                // Allow widgets to customize the disabled handling
                                // - disabled as an array instead of boolean
                                // - disabled class as method for disabling individual parts
                                if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                                    return;
                                }
                                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                            }

                            // Copy the guid so direct unbinding works
                            if (typeof handler !== "string") {
                                handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                            }

                            var match = event.match(/^([\w:-]*)\s*(.*)$/);
                            var eventName = match[1] + instance.eventNamespace;
                            var selector = match[2];

                            if (selector) {
                                delegateElement.on(eventName, selector, handlerProxy);
                            } else {
                                element.on(eventName, handlerProxy);
                            }
                        });
                    },

                    _off: function _off(element, eventName) {
                        eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                        element.off(eventName).off(eventName);

                        // Clear the stack to avoid memory leaks (#10056)
                        this.bindings = $(this.bindings.not(element).get());
                        this.focusable = $(this.focusable.not(element).get());
                        this.hoverable = $(this.hoverable.not(element).get());
                    },

                    _delay: function _delay(handler, delay) {
                        function handlerProxy() {
                            return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                        }
                        var instance = this;
                        return setTimeout(handlerProxy, delay || 0);
                    },

                    _hoverable: function _hoverable(element) {
                        this.hoverable = this.hoverable.add(element);
                        this._on(element, {
                            mouseenter: function mouseenter(event) {
                                this._addClass($(event.currentTarget), null, "ui-state-hover");
                            },
                            mouseleave: function mouseleave(event) {
                                this._removeClass($(event.currentTarget), null, "ui-state-hover");
                            }
                        });
                    },

                    _focusable: function _focusable(element) {
                        this.focusable = this.focusable.add(element);
                        this._on(element, {
                            focusin: function focusin(event) {
                                this._addClass($(event.currentTarget), null, "ui-state-focus");
                            },
                            focusout: function focusout(event) {
                                this._removeClass($(event.currentTarget), null, "ui-state-focus");
                            }
                        });
                    },

                    _trigger: function _trigger(type, event, data) {
                        var prop, orig;
                        var callback = this.options[type];

                        data = data || {};
                        event = $.Event(event);
                        event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();

                        // The original event may come from any element
                        // so we need to reset the target on the new event
                        event.target = this.element[0];

                        // Copy original event properties over to the new event
                        orig = event.originalEvent;
                        if (orig) {
                            for (prop in orig) {
                                if (!(prop in event)) {
                                    event[prop] = orig[prop];
                                }
                            }
                        }

                        this.element.trigger(event, data);
                        return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
                    }
                };

                $.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
                    $.Widget.prototype["_" + method] = function (element, options, callback) {
                        if (typeof options === "string") {
                            options = { effect: options };
                        }

                        var hasOptions;
                        var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;

                        options = options || {};
                        if (typeof options === "number") {
                            options = { duration: options };
                        }

                        hasOptions = !$.isEmptyObject(options);
                        options.complete = callback;

                        if (options.delay) {
                            element.delay(options.delay);
                        }

                        if (hasOptions && $.effects && $.effects.effect[effectName]) {
                            element[method](options);
                        } else if (effectName !== method && element[effectName]) {
                            element[effectName](options.duration, options.easing, callback);
                        } else {
                            element.queue(function (next) {
                                $(this)[method]();
                                if (callback) {
                                    callback.call(element[0]);
                                }
                                next();
                            });
                        }
                    };
                });

                return $.widget;
            });

            /***/
        },
        /* 13 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
                if (true) {

                    // AMD. Register as an anonymous module.
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {

                    // Browser globals
                    factory(jQuery);
                }
            })(function ($) {

                $.ui = $.ui || {};

                return $.ui.version = "1.12.1";
            });

            /***/
        },
        /* 14 */
        /***/function (module, exports, __webpack_require__) {

            /*** IMPORTS FROM imports-loader ***/
            var define = false;
            var exports = false;

            /*
             * jQuery File Upload Validation Plugin
             * https://github.com/blueimp/jQuery-File-Upload
             *
             * Copyright 2013, Sebastian Tschan
             * https://blueimp.net
             *
             * Licensed under the MIT license:
             * https://opensource.org/licenses/MIT
             */

            /* global define, require, window */

            ;(function (factory) {
                'use strict';

                if (typeof define === 'function' && define.amd) {
                    // Register as an anonymous AMD module:
                    define(['jquery', './jquery.fileupload-process'], factory);
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                    // Node/CommonJS:
                    factory(__webpack_require__(0), __webpack_require__(15));
                } else {
                    // Browser globals:
                    factory(window.jQuery);
                }
            })(function ($) {
                'use strict';

                // Append to the default processQueue:

                $.blueimp.fileupload.prototype.options.processQueue.push({
                    action: 'validate',
                    // Always trigger this action,
                    // even if the previous action was rejected:
                    always: true,
                    // Options taken from the global options map:
                    acceptFileTypes: '@',
                    maxFileSize: '@',
                    minFileSize: '@',
                    maxNumberOfFiles: '@',
                    disabled: '@disableValidation'
                });

                // The File Upload Validation plugin extends the fileupload widget
                // with file validation functionality:
                $.widget('blueimp.fileupload', $.blueimp.fileupload, {

                    options: {
                        /*
                        // The regular expression for allowed file types, matches
                        // against either file type or file name:
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                        // The maximum allowed file size in bytes:
                        maxFileSize: 10000000, // 10 MB
                        // The minimum allowed file size in bytes:
                        minFileSize: undefined, // No minimal file size
                        // The limit of files to be uploaded:
                        maxNumberOfFiles: 10,
                        */

                        // Function returning the current number of files,
                        // has to be overriden for maxNumberOfFiles validation:
                        getNumberOfFiles: $.noop,

                        // Error and info messages:
                        messages: {
                            maxNumberOfFiles: 'Maximum number of files exceeded',
                            acceptFileTypes: 'File type not allowed',
                            maxFileSize: 'File is too large',
                            minFileSize: 'File is too small'
                        }
                    },

                    processActions: {

                        validate: function validate(data, options) {
                            if (options.disabled) {
                                return data;
                            }
                            var dfd = $.Deferred(),
                                settings = this.options,
                                file = data.files[data.index],
                                fileSize;
                            if (options.minFileSize || options.maxFileSize) {
                                fileSize = file.size;
                            }
                            if ($.type(options.maxNumberOfFiles) === 'number' && (settings.getNumberOfFiles() || 0) + data.files.length > options.maxNumberOfFiles) {
                                file.error = settings.i18n('maxNumberOfFiles');
                            } else if (options.acceptFileTypes && !(options.acceptFileTypes.test(file.type) || options.acceptFileTypes.test(file.name))) {
                                file.error = settings.i18n('acceptFileTypes');
                            } else if (fileSize > options.maxFileSize) {
                                file.error = settings.i18n('maxFileSize');
                            } else if ($.type(fileSize) === 'number' && fileSize < options.minFileSize) {
                                file.error = settings.i18n('minFileSize');
                            } else {
                                delete file.error;
                            }
                            if (file.error || data.files.error) {
                                data.files.error = true;
                                dfd.rejectWith(this, [data]);
                            } else {
                                dfd.resolveWith(this, [data]);
                            }
                            return dfd.promise();
                        }

                    }

                });
            });

            /***/
        },
        /* 15 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
                                                                                                             * jQuery File Upload Processing Plugin
                                                                                                             * https://github.com/blueimp/jQuery-File-Upload
                                                                                                             *
                                                                                                             * Copyright 2012, Sebastian Tschan
                                                                                                             * https://blueimp.net
                                                                                                             *
                                                                                                             * Licensed under the MIT license:
                                                                                                             * https://opensource.org/licenses/MIT
                                                                                                             */

            /* jshint nomen:false */
            /* global define, require, window */

            ;(function (factory) {
                'use strict';

                if (true) {
                    // Register as an anonymous AMD module:
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                    // Node/CommonJS:
                    factory(require('jquery'), require('./jquery.fileupload'));
                } else {
                    // Browser globals:
                    factory(window.jQuery);
                }
            })(function ($) {
                'use strict';

                var originalAdd = $.blueimp.fileupload.prototype.options.add;

                // The File Upload Processing plugin extends the fileupload widget
                // with file processing functionality:
                $.widget('blueimp.fileupload', $.blueimp.fileupload, {

                    options: {
                        // The list of processing actions:
                        processQueue: [
                            /*
                            {
                                action: 'log',
                                type: 'debug'
                            }
                            */
                        ],
                        add: function add(e, data) {
                            var $this = $(this);
                            data.process(function () {
                                return $this.fileupload('process', data);
                            });
                            originalAdd.call(this, e, data);
                        }
                    },

                    processActions: {
                        /*
                        log: function (data, options) {
                            console[options.type](
                                'Processing "' + data.files[data.index].name + '"'
                            );
                        }
                        */
                    },

                    _processFile: function _processFile(data, originalData) {
                        var that = this,
                            dfd = $.Deferred().resolveWith(that, [data]),
                            chain = dfd.promise();
                        this._trigger('process', null, data);
                        $.each(data.processQueue, function (i, settings) {
                            var func = function func(data) {
                                if (originalData.errorThrown) {
                                    return $.Deferred().rejectWith(that, [originalData]).promise();
                                }
                                return that.processActions[settings.action].call(that, data, settings);
                            };
                            chain = chain.then(func, settings.always && func);
                        });
                        chain.done(function () {
                            that._trigger('processdone', null, data);
                            that._trigger('processalways', null, data);
                        }).fail(function () {
                            that._trigger('processfail', null, data);
                            that._trigger('processalways', null, data);
                        });
                        return chain;
                    },

                    // Replaces the settings of each processQueue item that
                    // are strings starting with an "@", using the remaining
                    // substring as key for the option map,
                    // e.g. "@autoUpload" is replaced with options.autoUpload:
                    _transformProcessQueue: function _transformProcessQueue(options) {
                        var processQueue = [];
                        $.each(options.processQueue, function () {
                            var settings = {},
                                action = this.action,
                                prefix = this.prefix === true ? action : this.prefix;
                            $.each(this, function (key, value) {
                                if ($.type(value) === 'string' && value.charAt(0) === '@') {
                                    settings[key] = options[value.slice(1) || (prefix ? prefix + key.charAt(0).toUpperCase() + key.slice(1) : key)];
                                } else {
                                    settings[key] = value;
                                }
                            });
                            processQueue.push(settings);
                        });
                        options.processQueue = processQueue;
                    },

                    // Returns the number of files currently in the processsing queue:
                    processing: function processing() {
                        return this._processing;
                    },

                    // Processes the files given as files property of the data parameter,
                    // returns a Promise object that allows to bind callbacks:
                    process: function process(data) {
                        var that = this,
                            options = $.extend({}, this.options, data);
                        if (options.processQueue && options.processQueue.length) {
                            this._transformProcessQueue(options);
                            if (this._processing === 0) {
                                this._trigger('processstart');
                            }
                            $.each(data.files, function (index) {
                                var opts = index ? $.extend({}, options) : options,
                                    func = function func() {
                                    if (data.errorThrown) {
                                        return $.Deferred().rejectWith(that, [data]).promise();
                                    }
                                    return that._processFile(opts, data);
                                };
                                opts.index = index;
                                that._processing += 1;
                                that._processingQueue = that._processingQueue.then(func, func).always(function () {
                                    that._processing -= 1;
                                    if (that._processing === 0) {
                                        that._trigger('processstop');
                                    }
                                });
                            });
                        }
                        return this._processingQueue;
                    },

                    _create: function _create() {
                        this._super();
                        this._processing = 0;
                        this._processingQueue = $.Deferred().resolveWith(this).promise();
                    }

                });
            });

            /***/
        },
        /* 16 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 17 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 18 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 19 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 20 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 21 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 22 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 23 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 24 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 25 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 26 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 27 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 28 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/},
        /* 29 */
        /***/function (module, exports) {

            // removed by extract-text-webpack-plugin

            /***/}]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 109)(module)))

/***/ }),
/* 109 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 110 */
/*!********************************************************************************!*\
  !*** /Users/tomascelizna/Devel/simple_form_attachments/package/dist/index.css ***!
  \********************************************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=application-3285f2088c383de37435.js.map