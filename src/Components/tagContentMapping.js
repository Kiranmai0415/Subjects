// tagContentMapping.js

const tagContentMapping = (tagName, language) => {
    let definition = "";
    let example = "";



    switch (language) {
        case 'html':
            switch (tagName) {
                case '!DOCTYPE':
                    definition = "The <!DOCTYPE> declaration represents the document type and helps browsers to display web pages correctly.";
                    example = "<!DOCTYPE html>";
                    break;
                case 'Headings':
                    definition = "HTML headings are defined with the <h1> to <h6> tags.";
                    example = "<h1>This is a Heading 1</h1> //Note: similarly for h2 to h6";
                    break;
                case 'Paragraphs':
                    definition = "HTML paragraphs are defined with the <p> tag.";
                    example = "<p>This is a paragraph.</p>";
                    break;
                case 'Links':
                    definition = "HTML links are defined with the <a> tag.";
                    example = '<a href="https://www.example.com">This is a link</a>';
                    break;
                case 'Images':
                    definition = "HTML images are defined with the <img> tag. The source file (src), alternative text (alt), width, and height are provided as attributes.";
                    example = '<img src="example.jpg" alt="Example Image" width="300" height="200">';
                    break;
                case 'Favicon':
                    definition = "A favicon is a small image displayed next to the page title in the browser tab.";
                    example = "<link rel='icon' type='image/x-icon' href='/images/favicon.ico'>";
                    break;
                case 'href':
                    definition = "The <a> tag defines a hyperlink. The href attribute specifies the URL of the page.";
                    example = "<a href='https://www.w3schools.com'>Visit W3Schools</a>";
                    break;
                case 'src':
                    definition = "The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed.";
                    example = '<img src="img_girl.jpg">';
                    break;
                case 'alt':
                    definition = "The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed.";
                    example = '<img src="img_girl.jpg" alt="Girl with a jacket">';
                    break;
                case 'width and height':
                    definition = "The <img> tag should also contain the width and height attributes, which specify the width and height of the image.";
                    example = '<img src="img_girl.jpg" width="500" height="600">';
                    break;
                case 'style':
                    definition = "The style attribute is used to add styles to an element, such as color, font, size, and more.";
                    example = '<p style="color:red;">This is a red paragraph.</p>';
                    break;
                case 'lang':
                    definition = "You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers";
                    example = '<html lang="en">';
                    break;
                case 'title':
                    definition = "The title attribute defines some extra information about an element.";
                    example = "<p title='I'm a tooltip'>This is a paragraph.</p>";
                    break;
                case 'anchor':
                    definition = "The HTML <a> tag defines a hyperlink. The target attribute specifies where to open the linked document.";
                    example = '<a href="https://www.w3schools.com/"  target="_blank">Visit W3Schools.com!</a>';
                    break;
                case 'link':
                    definition = 'The <link> tag is most often used to link to external style sheets or to add a favicon to your website';
                    example = '<link rel="stylesheet" href="styles.css">';
                    break;
                case 'nav':
                    definition = 'The <nav> tag defines a set of navigation links.';
                    example = '<nav> <a href="/html/">HTML</a> |  <a href="/css/">CSS</a> </nav>'; // HTML CSS
                    break;
                case 'table':
                    definition = " A Table in Html consists of table cells inside rows and columns and also consists of <thead> and</thead> for heading and <tr> table row</tr> and <td> table data</td>. A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.";
                    example =
                        '<table> content  </table>';
                    break;
                case 'thead':
                    definition = "Sometimes you want your cells to be table header cells. In those cases use the <th> tag instead of the <td>";
                    example = '<table> <th> table head </th> </table>';
                    break;
                case 'tbody':
                    definition = "Table body consists of table rows and table data";
                    example = '<tbody> <tr> <td> content </td> </tr> </tbody>';
                    break;
                case 'bold':
                    definition = 'The HTML <b> element defines bold text, without any extra importance.';
                    example = '<b>This text is bold</b>';
                    break;
                case 'strong':
                    definition = "The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold.";
                    example = '<strong>This text is important!</strong>';
                    break;
                case 'italic':
                    definition = "The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.";
                    example = '<i>This text is italic</i>';
                    break;
                case 'em':
                    definition = "The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.";
                    example = '<em>This text is emphasized</em>';
                    break;
                case 'small':
                    definition = "The HTML <small> element defines smaller text:";
                    example = '<small>This is some smaller text.</small>';
                    break;
                case 'mark':
                    definition = "The HTML <mark> element defines text that should be marked or highlighted";
                    example = '<p>Do not forget to buy <mark>milk</mark> today.</p>';
                    break;
                case 'del':
                    definition = "The HTML <del> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text";
                    example = '<p>My favorite color is <del>blue</del> red.</p>';
                    break;
                case 'ins':
                    definition = "The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text";
                    example = '<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>';
                    break;
                case 'sub':
                    definition = "The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font.";
                    example = '<p>This is <sub>subscripted</sub> text.</p>';
                    break;
                case 'sup':
                    definition = "The HTML <sup> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font.";
                    example = '<p>This is <sup>superscripted</sup> text.</p>';
                    break;
                case 'Ordered List':
                    definition = 'An ordered list starts with the <ol> tag. Each list item starts with the <li> tag. The list items will be marked with numbers by defaul';
                    example = '<ol> <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ol>';
                    break;
                case 'Unordered List':
                    definition = 'An unordered list starts with the <ul> tag. Each list item starts with the <li> tag. The list items will be marked with bullets (small black circles) by default';
                    example = '<ul> <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ul>';
                    break;
                case 'Description List':
                    definition = 'A description list is a list of terms, with a description of each term.The <dl> tag defines the description list, the <dt> tag defines the term (name), and the <dd> tag describes each term';
                    example = '<dl> <dt>Coffee</dt> <dd>- black hot drink</dd> <dt>Milk</dt> <dd>- white cold drink</dd> </dl>';
                    break;
                case 'Block':
                    definition = "A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. // Note : A block-level element always starts on a new line and takes up the full width available";
                    example = 'The block element is a block-level element.';
                    break;
                case 'div':
                    definition = "The <div> element defines a division or a section in an HTML document.";
                    example = '<div> content any other tags</div>';
                    break;
                case 'paragraph':
                    definition = "The <p> element defines a paragraph in an HTML document.";
                    example = '<p> Paragraph </p>';
                    break;
                case 'footer':
                    definition = "The <footer> tag defines a footer for a document or section. A <footer> element typically contains: authorship information, copyright information, contact information, sitemap, back to top links, related documents";
                    example = 'Author: Hege Refsnes hege@example.com';
                    break;
                case 'main':
                    definition = "The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.";
                    example = '<main> <h1>Most Popular Browsers</h1> </main>';
                    break;
                case 'section':
                    definition = "The <section> tag defines a section in a document.";
                    example = '<section> <h1>WWF</h1> </section>';
                    break;
                case 'video':
                    definition = "The <video> tag is used to embed video content in a document, such as a movie clip or other video streams. The <video> tag contains one or more <source> tags with different video sources. The browser will choose the first source it supports.";
                    example =
                        '<video width="320" height="240" controls> <source src="movie.mp4" type="video/mp4"></source> </video>';
                    break;
                case 'Inline':
                    definition = 'An inline element does not start on a new line. An inline element only takes up as much width as necessary. // Note : An inline element does not start on a new line and it only takes up as much width as necessary';
                    example = '<p> hi <span> inline</span> <p>';
                    break;
                case 'span':
                    definition = 'The <span> element is an inline container used to mark up a part of a text, or a part of a document. The <span> element has no required attributes, but style, class and id are common.';
                    example = '<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes </p>';
                    break;
                case 'script':
                    definition = "The <script> element either contains script statements, or it points to an external script file through the src attribute. Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content. To select an HTML element, JavaScript most often uses the document.getElementById() method.";
                    example = '<script> document.getElementById("demo").innerHTML = "Hello JavaScript!"; </script>';
                    break;
                case 'Responsive':
                    definition = "Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones)";
                    break;
                case 'Viewport':
                    definition = 'This will set the viewport of your page, which will give the browser instructions on how to control the pages dimensions and scaling.';
                    example = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
                    break;
                case 'Meta':
                    definition = "The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data. <meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings. Metadata will not be displayed on the page, but is machine parsable.";
                    example = '<meta name="keywords" content="HTML, CSS, JavaScript">';
                case 'class selector':
                    definition = 'The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.';
                    example = '<div class="className"> HI World </div> || .className { display :flex }';
                    break;
                case 'Id Selector':
                    definition = 'The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.';
                    example = '<div id="id"> HI World </div> || #id : { display :flex }';
                    break;
                case 'Named Selector':
                    definition = "The Named selector is used to spaecify with the name tag";
                    example = "'<div > HI World </div>  || div: { display :flex }';";
                    break;
                case 'Universal Selector':
                    definition = "The Universal Selector is used to specify and give the style to all the page";
                    example = "* { margin: 0; padding : 0}";
                    break;

                default:
                    definition = "Definition not found";
                    example = "Example not found";
            }
            break;
        case 'python':
            switch (tagName) {
                case "variables":
                    definition = "Variables are containers for storing data values. In Python, you create a variable by assigning a value to it using the '=' operator.";
                    example = `x = 10\nprint(x)  # Output: 10`;
                    break;
                case "data types":
                    definition = "Data types specify the type of data a variable can hold. Common data types in Python include integers, floats, strings, and booleans.";
                    example = `x = 10          # int\npi = 3.14        # float\nname = 'Alice'   # str\nis_valid = True  # bool`;
                    break;
                case "comments":
                    definition = "Comments are used to explain code and are ignored by the Python interpreter. They start with a '#' symbol.";
                    example = `# This is a single-line comment\n\n# This is a multi-line comment:\n# Line 1\n# Line 2`;
                    break;
                case "input":
                    definition = "The 'input()' function is used to take user input from the console.";
                    example = `name = input('Enter your name: ')\nprint('Hello,', name)`;
                    break;
                case "print":
                    definition = "The 'print()' function is used to output data to the console.";
                    example = `print('Hello, World!')  # Output: Hello, World!`;
                    break;
                case "if statement":
                    definition = "An 'if' statement is used to execute a block of code only if a condition is true.";
                    example = `x = 10\nif x > 5:\n    print('x is greater than 5')`;
                    break;
                case "elif":
                    definition = "'elif' stands for 'else if'. It allows you to check multiple conditions in an 'if' statement.";
                    example = `x = 10\nif x > 15:\n    print('x is greater than 15')\nelif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is 5 or less')`;
                    break;
                case "else":
                    definition = "The 'else' statement is used to execute a block of code if none of the previous conditions in 'if' or 'elif' are true.";
                    example = `x = 3\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is 5 or less')`;
                    break;
                case "for loop":
                    definition = "A 'for' loop is used to iterate over a sequence (like a list or a string).";
                    example = `for i in range(5):\n    print(i)  # Output: 0 1 2 3 4`;
                    break;
                case "while loop":
                    definition = "A 'while' loop repeatedly executes a block of code as long as a condition is true.";
                    example = `i = 0\nwhile i < 5:\n    print(i)\n    i += 1  # Output: 0 1 2 3 4`;
                    break;
                case "break":
                    definition = "The 'break' statement is used to exit a loop prematurely.";
                    example = `for i in range(10):\n    if i == 5:\n        break\n    print(i)  # Output: 0 1 2 3 4`;
                    break;
                case "continue":
                    definition = "The 'continue' statement is used to skip the current iteration of a loop and proceed to the next iteration.";
                    example = `for i in range(5):\n    if i == 3:\n        continue\n    print(i)  # Output: 0 1 2 4`;
                    break;
                case "functions":
                    definition = "Functions are blocks of reusable code that perform a specific task. You define a function using the 'def' keyword.";
                    example = `def greet(name):\n    return 'Hello, ' + name\nprint(greet('Alice'))  # Output: Hello, Alice`;
                    break;
                case "lambda":
                    definition = "Lambda functions are small anonymous functions defined with the 'lambda' keyword.";
                    example = `square = lambda x: x * x\nprint(square(5))  # Output: 25`;
                    break;
                case "return":
                    definition = "The 'return' statement is used to exit a function and return a value.";
                    example = `def add(a, b):\n    return a + b\nprint(add(2, 3))  # Output: 5`;
                    break;
                case "def":
                    definition = "The 'def' keyword is used to define a function.";
                    example = `def say_hello():\n    print('Hello')\nsay_hello()  # Output: Hello`;
                    break;
                case "parameters":
                    definition = "Parameters are variables listed as part of a function's definition.";
                    example = `def multiply(a, b):\n    return a * b\nprint(multiply(4, 5))  # Output: 20`;
                    break;
                case "arguments":
                    definition = "Arguments are the values passed to a function when it is called.";
                    example = `def greet(name):\n    return 'Hello, ' + name\nprint(greet('Alice'))  # Output: Hello, Alice`;
                    break;
                case "lists":
                    definition = "Lists are ordered collections of items that can be of any type. Lists are defined using square brackets.";
                    example = `my_list = [1, 2, 3, 'hello']\nprint(my_list)  # Output: [1, 2, 3, 'hello']`;
                    break;
                case "tuples":
                    definition = "Tuples are similar to lists but are immutable (cannot be changed). They are defined using parentheses.";
                    example = `my_tuple = (1, 2, 3, 'hello')\nprint(my_tuple)  # Output: (1, 2, 3, 'hello')`;
                    break;
                case "dictionaries":
                    definition = "Dictionaries are collections of key-value pairs. They are defined using curly braces.";
                    example = `my_dict = {'name': 'Alice', 'age': 25}\nprint(my_dict)  # Output: {'name': 'Alice', 'age': 25}`;
                    break;
                case "sets":
                    definition = "Sets are unordered collections of unique items. They are defined using curly braces.";
                    example = `my_set = {1, 2, 3, 'hello'}\nprint(my_set)  # Output: {1, 2, 3, 'hello'}`;
                    break;
                case "class":
                    definition = "Classes are blueprints for creating objects. They define attributes and methods that the objects created from the class will have.";
                    example = `class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return 'Woof!'\nmy_dog = Dog('Rex')\nprint(my_dog.bark())  # Output: Woof!`;
                    break;
                case "object":
                    definition = "Objects are instances of classes. They have attributes and methods defined by their class.";
                    example = `class Cat:\n    def __init__(self, name):\n        self.name = name\nmy_cat = Cat('Whiskers')\nprint(my_cat.name)  # Output: Whiskers`;
                    break;
                case "inheritance":
                    definition = "Inheritance allows a class to inherit attributes and methods from another class.";
                    example = `class Animal:\n    def speak(self):\n        return 'Animal sound'\nclass Dog(Animal):\n    def bark(self):\n        return 'Woof!'\nmy_dog = Dog()\nprint(my_dog.speak())  # Output: Animal sound\nprint(my_dog.bark())  # Output: Woof!`;
                    break;
                case "constructor":
                    definition = "Constructors are special methods used to initialize objects. In Python, the constructor is defined with the '__init__' method.";
                    example = `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\nperson = Person('John', 30)\nprint(person.name)  # Output: John\nprint(person.age)  # Output: 30`;
                    break;
                case "import":
                    definition = "The 'import' statement is used to include the functionality of another module into your script.";
                    example = `import math\nprint(math.sqrt(16))  # Output: 4.0`;
                    break;
                case "from":
                    definition = "The 'from' keyword is used to import specific functions or variables from a module.";
                    example = `from math import sqrt\nprint(sqrt(16))  # Output: 4.0`;
                    break;
                case "as":
                    definition = "The 'as' keyword is used to create an alias for a module or a function.";
                    example = `import numpy as np\nprint(np.array([1, 2, 3]))  # Output: [1 2 3]`;
                    break;
                case "math":
                    definition = "The 'math' module provides mathematical functions and constants.";
                    example = `import math\nprint(math.pi)  # Output: 3.141592653589793`;
                    break;
                case "datetime":
                    definition = "The 'datetime' module supplies classes for manipulating dates and times.";
                    example = `from datetime import datetime\nnow = datetime.now()\nprint(now)  # Output: current date and time`;
                    break;
                case "os":
                    definition = "The 'os' module provides a way to interact with the operating system, including file operations and environment variables.";
                    example = `import os\nprint(os.getcwd())  # Output: current working directory`;
                    break;
                case "open":
                    definition = "The 'open' function is used to open a file.";
                    example = `file = open('example.txt', 'w')\nfile.write('Hello, world!')\nfile.close()`;
                    break;
                case "read":
                    definition = "The 'read' method reads the contents of a file.";
                    example = `file = open('example.txt', 'r')\ncontent = file.read()\nprint(content)  # Output: Hello, world!`;
                    break;
                case "write":
                    definition = "The 'write' method writes data to a file.";
                    example = `file = open('example.txt', 'w')\nfile.write('New content')\nfile.close()`;
                    break;
                case "append":
                    definition = "The 'append' mode adds data to the end of a file without overwriting existing content.";
                    example = `file = open('example.txt', 'a')\nfile.write('Appending more text')\nfile.close()`;
                    break;
                case "close":
                    definition = "The 'close' method closes a file, ensuring data is saved and resources are released.";
                    example = `file = open('example.txt', 'r')\nfile.close()`;
                    break;
                case "try except":
                    definition = "The 'try' and 'except' blocks are used for handling exceptions (errors) that occur during execution.";
                    example = `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')`;
                    break;
                case "finally":
                    definition = "The 'finally' block is used to execute code that should run regardless of whether an exception was raised or not.";
                    example = `try:\n    file = open('example.txt', 'r')\nfinally:\n    file.close()`;
                    break;
                case "raise":
                    definition = "The 'raise' statement is used to manually trigger an exception.";
                    example = `raise ValueError('A custom error message')`;
                    break;
                case "decorators":
                    definition = "Decorators are functions that modify the behavior of other functions or methods.";
                    example = `def decorator_function(func):\n    def wrapper():\n        print('Something is happening before the function is called.')\n        func()\n        print('Something is happening after the function is called.')\n    return wrapper\n\n@decorator_function\ndef say_hello():\n    print('Hello!')\nsay_hello()`;
                    break;
                case "generators":
                    definition = "Generators are functions that return an iterator that yields values one at a time, allowing iteration over large sequences efficiently.";
                    example = `def count_up_to(max):\n    count = 1\n    while count <= max:\n        yield count\n        count += 1\n\nfor num in count_up_to(5):\n    print(num)  # Output: 1 2 3 4 5`;
                    break;
                case "list comprehensions":
                    definition = "List comprehensions provide a concise way to create lists based on existing lists.";
                    example = `[x * x for x in range(5)]  # Output: [0, 1, 4, 9, 16]`;
                    break;
                case "numpy":
                    definition = "NumPy is a library for numerical computations in Python, providing support for arrays and mathematical functions.";
                    example = `import numpy as np\narr = np.array([1, 2, 3])\nprint(arr)  # Output: [1 2 3]`;
                    break;
                case "pandas":
                    definition = "Pandas is a library for data manipulation and analysis, providing data structures like DataFrame.";
                    example = `import pandas as pd\ndata = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)`;
                    break;
                case "matplotlib":
                    definition = "Matplotlib is a plotting library for creating static, interactive, and animated visualizations in Python.";
                    example = `import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.show()`;
                    break;
                case "requests":
                    definition = "Requests is a library for making HTTP requests in Python, allowing you to send HTTP/1.1 requests easily.";
                    example = `import requests\nresponse = requests.get('https://api.github.com')\nprint(response.status_code)  # Output: 200`;
                    break;
                default:
                    definition = "Definition not found";
                    example = "Example not found";
            }
            break;
        case 'javascript':
            switch (tagName) {
                // Basics
                case 'variables':
                    definition = "Variables are containers for storing data values in JavaScript.";
                    example = "Example: `let x = 10; const y = 'Hello';`.";
                    break;
                case 'data types':
                    definition = "JavaScript has various data types including numbers, strings, booleans, objects, and arrays.";
                    example = "Example: `let number = 10; let name = 'John';`.";
                    break;
                case 'functions':
                    definition = "Functions are blocks of code designed to perform a particular task.";
                    example = "Example: `function greet() { console.log('Hello'); } greet();`.";
                    break;
                case 'comments':
                    definition = "Comments are used to leave notes or explanations in the code, which are ignored during execution.";
                    example = "Example: `// This is a single line comment` or `/* This is a multi-line comment */`.";
                    break;
                case 'operators':
                    definition = "Operators are symbols used to perform operations on variables and values.";
                    example = "Example: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division).";

                // Control Flow
                case 'if statement':
                    definition = "The if statement executes a block of code if a specified condition is true.";
                    example = "Example: `if (x > 5) { console.log('x is greater than 5'); }`.";
                    break;
                case 'switch':
                    definition = "The switch statement evaluates an expression and executes code blocks based on matching case values.";
                    example = "Example: `switch (day) { case 1: console.log('Monday'); break; ... }`.";
                    break;
                case 'for loop':
                    definition = "The for loop executes a block of code a specified number of times.";
                    example = "Example: `for (let i = 0; i < 5; i++) { console.log(i); }`.";
                    break;
                case 'while loop':
                    definition = "The while loop executes a block of code as long as the specified condition is true.";
                    example = "Example: `while (i < 5) { console.log(i); i++; }`.";
                    break;
                case 'do while loop':
                    definition = "The do while loop executes a block of code once, and then repeats the loop as long as the condition is true.";
                    example = "Example: `do { console.log(i); i++; } while (i < 5);`.";

                // Functions
                case 'function':
                    definition = "A function is a block of code designed to perform a particular task and can be called multiple times.";
                    example = "Example: `function add(a, b) { return a + b; }`.";
                    break;
                case 'arrow function':
                    definition = "Arrow functions provide a concise syntax for writing functions and have a lexical `this` binding.";
                    example = "Example: `const add = (a, b) => a + b;`.";
                    break;
                case 'callback':
                    definition = "A callback is a function passed as an argument to another function, which is then executed inside the outer function.";
                    example = "Example: `function processData(callback) { callback(); } processData(() => console.log('Processing complete'));`.";
                    break;
                case 'closure':
                    definition = "A closure is a feature where a function retains access to its lexical scope, even when the function is executed outside that scope.";
                    example = "Example: `function makeCounter() { let count = 0; return function() { count++; return count; }; } const counter = makeCounter(); console.log(counter());`.";

                // Objects
                case 'object':
                    definition = "An object is a data structure that allows you to store collections of data and more complex entities.";
                    example = "Example: `const person = { name: 'John', age: 30 };`.";
                    break;
                case 'constructor':
                    definition = "A constructor is a special function used to create and initialize an object instance.";
                    example = "Example: `function Person(name, age) { this.name = name; this.age = age; }`.";
                    break;
                case 'methods':
                    definition = "Methods are functions that are defined as properties of an object.";
                    example = "Example: `const person = { greet() { return 'Hello'; } };`.";
                    break;
                case 'prototypes':
                    definition = "Prototypes are a mechanism to add properties and methods to objects in JavaScript.";
                    example = "Example: `Person.prototype.sayHello = function() { return 'Hello'; };`.";

                // Arrays
                case 'array':
                    definition = "An array is a data structure that can hold multiple values in a single variable.";
                    example = "Example: `const fruits = ['apple', 'banana', 'cherry'];`.";
                    break;
                case 'methods':
                    definition = "Array methods are functions that perform operations on arrays, such as `push`, `pop`, and `map`.";
                    example = "Example: `fruits.push('date');` adds 'date' to the end of the array.";
                    break;
                case 'iteration':
                    definition = "Iteration refers to looping through array elements using methods like `forEach` or `map`.";
                    example = "Example: `fruits.forEach(fruit => console.log(fruit));`.";
                    break;
                case 'destructuring':
                    definition = "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.";
                    example = "Example: `const [a, b] = [1, 2];` and `const { name, age } = person;`.";

                // DOM Manipulation
                case 'querySelector':
                    definition = "The `querySelector` method returns the first element that matches a specified CSS selector.";
                    example = "Example: `document.querySelector('#myId');` selects the element with ID 'myId'.";
                    break;
                case 'addEventListener':
                    definition = "The `addEventListener` method attaches an event handler to an element.";
                    example = "Example: `button.addEventListener('click', () => { console.log('Button clicked'); });`.";
                    break;
                case 'innerHTML':
                    definition = "The `innerHTML` property sets or retrieves the HTML content inside an element.";
                    example = "Example: `element.innerHTML = '<p>New content</p>';`.";

                // Events
                case 'event':
                    definition = "An event is an action or occurrence that happens in the browser, such as a mouse click or keyboard press.";
                    example = "Example: `click`, `keydown`, `submit`.";
                    break;
                case 'event listener':
                    definition = "An event listener is a function that waits for a specific event to occur and then executes a callback function.";
                    example = "Example: `element.addEventListener('click', handleClick);`.";
                    break;
                case 'event handler':
                    definition = "An event handler is a function that handles the logic to be executed when an event occurs.";
                    example = "Example: `function handleClick(event) { console.log('Clicked!', event); }`.";

                // ES6 Features
                case 'let and const':
                    definition = "The `let` and `const` keywords declare variables in block scope, with `const` being immutable.";
                    example = "Example: `let name = 'John'; const age = 30;`.";
                    break;
                case 'template literals':
                    definition = "Template literals allow for embedded expressions and multi-line strings.";
                    example = "Example: ``Hello, ${name}``.";
                    break;
                case 'spread operator':
                    definition = "The spread operator (`...`) expands an iterable into multiple elements.";
                    example = "Example: `const numbers = [1, 2, 3]; const moreNumbers = [...numbers, 4, 5];`.";
                    break;
                case 'destructuring':
                    definition = "Destructuring is a syntax for extracting values from arrays or properties from objects.";
                    example = "Example: `const [a, b] = [1, 2];` and `const { name, age } = person;`.";

                // Async Programming
                case 'promises':
                    definition = "Promises represent the result of an asynchronous operation and its eventual completion or failure.";
                    example = "Example: `let promise = new Promise((resolve, reject) => { /* async code */ });`.";
                    break;
                case 'async/await':
                    definition = "Async/await simplifies working with promises by allowing you to write asynchronous code in a synchronous manner.";
                    example = "Example: `async function fetchData() { let response = await fetch('url'); let data = await response.json(); }`.";
                    break;
                case 'fetch':
                    definition = "The `fetch` method is used to make network requests and returns a promise that resolves to the response.";
                    example = "Example: `fetch('url').then(response => response.json()).then(data => console.log(data));`.";

                // Libraries
                case 'jQuery':
                    definition = "jQuery is a JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation.";
                    example = "Example: `$(document).ready(function() { $('p').text('Hello World'); });`.";
                    break;
                case 'React':
                    definition = "React is a JavaScript library for building user interfaces by creating reusable UI components.";
                    example = "Example: `function App() { return <h1>Hello, World!</h1>; }`.";
                    break;
                case 'Lodash':
                    definition = "Lodash is a JavaScript library that provides utility functions for common programming tasks.";
                    example = "Example: `_.chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]`.";

                default:
                    definition = "Definition not found";
                    example = "Example not found";
            }
            break;
        case 'css':
            switch (tagName) {
                // Basics
                case 'selectors':
                    definition = "Selectors are patterns used to select the elements you want to style in CSS.";
                    example = "Example: `h1 { color: blue; }` selects all `<h1>` elements and sets their text color to blue.";
                    break;
                case 'properties':
                    definition = "Properties are attributes of CSS rules that define how elements should be styled.";
                    example = "Example: `color`, `font-size`, `margin`, etc., are all CSS properties.";
                    break;
                case 'values':
                    definition = "Values are the settings applied to CSS properties to control the style of elements.";
                    example = "Example: `color: red;` sets the text color to red.";
                    break;
                case 'comments':
                    definition = "Comments in CSS are used to add notes or explanations within the stylesheet, which are ignored by the browser.";
                    example = "Example: `/* This is a comment */`.";

                // Text Styling
                case 'font-family':
                    definition = "The font-family property specifies the typeface used for text.";
                    example = "Example: `font-family: Arial, sans-serif;` sets the text to use the Arial font or a generic sans-serif font if Arial is unavailable.";
                    break;
                case 'font-size':
                    definition = "The font-size property sets the size of the text.";
                    example = "Example: `font-size: 16px;` sets the font size to 16 pixels.";
                    break;
                case 'color':
                    definition = "The color property sets the color of the text.";
                    example = "Example: `color: #ff0000;` sets the text color to red using a hexadecimal color code.";
                    break;
                case 'text-align':
                    definition = "The text-align property sets the horizontal alignment of text within its container.";
                    example = "Example: `text-align: center;` centers the text within its container.";

                // Box Model
                case 'margin':
                    definition = "The margin property sets the space outside the border of an element.";
                    example = "Example: `margin: 20px;` adds 20 pixels of space around the element.";
                    break;
                case 'border':
                    definition = "The border property sets the border of an element, including its width, style, and color.";
                    example = "Example: `border: 1px solid black;` adds a 1-pixel solid black border.";
                    break;
                case 'padding':
                    definition = "The padding property sets the space between the content of an element and its border.";
                    example = "Example: `padding: 10px;` adds 10 pixels of padding inside the element.";
                    break;
                case 'width':
                    definition = "The width property sets the width of an element.";
                    example = "Example: `width: 100%;` makes the element take up 100% of the width of its container.";
                    break;
                case 'height':
                    definition = "The height property sets the height of an element.";
                    example = "Example: `height: 200px;` sets the height to 200 pixels.";

                // Positioning
                case 'static':
                    definition = "The static position is the default positioning of an element where it is placed in the normal flow of the document.";
                    example = "Example: `position: static;` (default value) means the element will follow the normal document flow.";
                    break;
                case 'relative':
                    definition = "The relative position allows an element to be positioned relative to its normal position.";
                    example = "Example: `position: relative; top: 10px;` moves the element 10 pixels down from its normal position.";
                    break;
                case 'absolute':
                    definition = "The absolute position removes an element from the normal document flow, positioning it relative to its nearest positioned ancestor.";
                    example = "Example: `position: absolute; top: 20px; left: 30px;` positions the element 20 pixels from the top and 30 pixels from the left of its positioned ancestor.";
                    break;
                case 'fixed':
                    definition = "The fixed position positions an element relative to the viewport, so it stays in place even when the page is scrolled.";
                    example = "Example: `position: fixed; bottom: 0;` keeps the element at the bottom of the viewport regardless of scrolling.";
                    break;
                case 'sticky':
                    definition = "The sticky position is a hybrid between relative and fixed positioning, where the element is positioned relative until it reaches a defined scroll point.";
                    example = "Example: `position: sticky; top: 0;` makes the element stick to the top of its container when scrolled to that point.";

                // Flexbox
                case 'display: flex':
                    definition = "The display: flex property enables a flex container, allowing its children to be laid out in a flexible manner.";
                    example = "Example: `display: flex;` sets up a flex container for its children.";
                    break;
                case 'justify-content':
                    definition = "The justify-content property aligns flex items along the main axis of the flex container.";
                    example = "Example: `justify-content: center;` centers the flex items horizontally.";
                    break;
                case 'align-items':
                    definition = "The align-items property aligns flex items along the cross axis of the flex container.";
                    example = "Example: `align-items: stretch;` stretches the flex items to fill the container's cross axis.";
                    break;
                case 'flex-direction':
                    definition = "The flex-direction property defines the direction in which flex items are placed in the flex container.";
                    example = "Example: `flex-direction: column;` arranges the flex items vertically.";

                // Grid
                case 'display: grid':
                    definition = "The display: grid property enables a grid container, allowing its children to be laid out in a grid format.";
                    example = "Example: `display: grid;` sets up a grid container for its children.";
                    break;
                case 'grid-template-columns':
                    definition = "The grid-template-columns property defines the number and size of columns in a grid layout.";
                    example = "Example: `grid-template-columns: 1fr 2fr;` creates two columns, with the second being twice as wide as the first.";
                    break;
                case 'grid-template-rows':
                    definition = "The grid-template-rows property defines the number and size of rows in a grid layout.";
                    example = "Example: `grid-template-rows: 100px auto;` creates two rows, with the first being 100 pixels high and the second taking up the remaining space.";
                    break;
                case 'grid-area':
                    definition = "The grid-area property specifies where an item should be placed in the grid, covering the specified number of rows and columns.";
                    example = "Example: `grid-area: header;` positions the item in the grid area named 'header'.";

                // Pseudo-classes
                case ':hover':
                    definition = "The :hover pseudo-class applies styles to an element when the mouse pointer hovers over it.";
                    example = "Example: `a:hover { color: red; }` changes the link color to red when hovered.";
                    break;
                case ':active':
                    definition = "The :active pseudo-class applies styles to an element while it is being activated, such as during a click.";
                    example = "Example: `button:active { background-color: grey; }` changes the button background color when pressed.";
                    break;
                case ':focus':
                    definition = "The :focus pseudo-class applies styles to an element when it has focus, such as when a user clicks or tabs into it.";
                    example = "Example: `input:focus { border-color: blue; }` changes the input border color when focused.";
                    break;
                case ':nth-child':
                    definition = "The :nth-child pseudo-class selects elements based on their position within a parent element.";
                    example = "Example: `li:nth-child(odd) { background-color: #f2f2f2; }` applies a background color to odd list items.";

                // Responsive Design
                case 'media queries':
                    definition = "Media queries allow you to apply CSS rules based on the device characteristics, such as screen width or orientation.";
                    example = "Example: `@media (max-width: 600px) { body { font-size: 14px; } }` applies styles for screens narrower than 600 pixels.";
                    break;
                case 'viewport':
                    definition = "The viewport is the visible area of a web page on a device. It can be controlled with the viewport meta tag for responsive design.";
                    example = "Example: `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` ensures the page scales correctly on different devices.";
                    break;
                case 'flex-wrap':
                    definition = "The flex-wrap property controls whether flex items should wrap onto multiple lines within the flex container.";
                    example = "Example: `flex-wrap: wrap;` allows flex items to wrap to the next line if they exceed the container width.";

                // Animations
                case '@keyframes':
                    definition = "@keyframes define the name and rules of a CSS animation sequence.";
                    example = "Example: `@keyframes slide { from { transform: translateX(0); } to { transform: translateX(100px); } }` defines an animation that slides an element 100 pixels to the right.";
                    break;
                case 'animation':
                    definition = "The animation property applies CSS animations to an element, specifying the name, duration, and other properties.";
                    example = "Example: `animation: slide 2s ease-in-out;` applies the 'slide' animation with a 2-second duration.";
                    break;
                case 'transition':
                    definition = "The transition property allows you to change property values smoothly over a given duration.";
                    example = "Example: `transition: background-color 0.3s ease;` changes the background color over 0.3 seconds.";

                // Variables
                case 'CSS variables':
                    definition = "CSS variables (custom properties) are entities defined by CSS authors that contain specific values to be reused throughout a document.";
                    example = "Example: `--main-bg-color: #f0f0f0;` defines a custom property for the main background color.";
                    break;
                case 'custom properties':
                    definition = "Custom properties are the same as CSS variables, used to store values for reuse in different parts of the CSS.";
                    example = "Example: `:root { --primary-color: blue; }` and use `color: var(--primary-color);` to apply the value.";

                default:
                    definition = "Definition not found";
                    example = "Example not found";
            }
            break;
        case 'github':
            switch (tagName) {
                // Git Tutorial
                case 'what is git':
                    definition = "Git is a distributed version control system used to track changes in source code during software development.";
                    example = "Git allows multiple developers to work on the same project concurrently, tracking changes and merging them.";
                    break;
                case 'why github':
                    definition = "GitHub is a platform that hosts Git repositories and provides collaboration tools such as issue tracking, code review, and project management.";
                    example = "GitHub helps teams collaborate on code and track changes, issues, and project progress.";
                    break;
                case 'uses of git':
                    definition = "Git is used for version control, enabling teams to manage changes to source code, collaborate on projects, and maintain project history.";
                    example = "Using Git, developers can track changes, revert to previous versions, and collaborate effectively.";
                    break;
                case 'features of git':
                    definition = "Key features of Git include branching and merging, distributed version control, staging area, and efficient handling of large projects.";
                    example = "Git's branching allows developers to work on new features or fixes without affecting the main codebase.";
                    break;
                case 'git workflow':
                    definition = "A Git workflow defines the process for managing branches, commits, and merges in a Git repository to ensure a smooth development process.";
                    example = "Common workflows include Git Flow, GitHub Flow, and GitLab Flow, each suited to different project needs.";
                    break;

                // Git Basics
                case 'installing git':
                    definition = "Installing Git involves downloading and setting up Git on your system to use version control for your projects.";
                    example = "Download Git from the official website and follow the installation instructions for your operating system.";
                    break;
                case 'basic git commands':
                    definition = "Basic Git commands include git init, git clone, git add, git commit, and git status, used to manage Git repositories.";
                    example = "Commands like git init create a new repository, git add stages changes, and git commit saves changes.";
                    break;
                case 'configuring git':
                    definition = "Configuring Git involves setting up user details and preferences for your Git installation, such as user name and email.";
                    example = "Run git config --global user.name 'Your Name' and git config --global user.email 'you@example.com'.";
                    break;
                case 'git init':
                    definition = "The git init command initializes a new Git repository in the current directory, creating a .git subdirectory.";
                    example = "Run git init in a project directory to start tracking its files with Git.";
                    break;
                case 'git clone':
                    definition = "The git clone command creates a copy of a remote repository on your local machine, including all files and commit history.";
                    example = "Run git clone https://github.com/user/repo.git to clone a repository from GitHub.";
                    break;
                case 'git status':
                    definition = "The git status command displays the state of the working directory and staging area, showing changes to be committed or ignored.";
                    example = "Run git status to see which files have been modified or staged for commit.";
                    break;
                case 'git add':
                    definition = "The git add command stages changes, adding them to the staging area in preparation for the next commit.";
                    example = "Run git add file.txt to stage a specific file, or git add . to stage all changes.";
                    break;
                case 'git commit':
                    definition = "The git commit command records the staged changes in the repository’s history with a commit message.";
                    example = "Run git commit -m 'Commit message' to save changes with a descriptive message.";

                    break;

                // Branching & Merging
                case 'what is a branch':
                    definition = "A branch is a separate line of development in a repository that allows you to work on features or fixes independently from the main codebase.";
                    example = "Create a branch with git branch feature-branch and switch to it with git checkout feature-branch.";
                    break;
                case 'creating branches':
                    definition = "Creating branches allows you to work on new features or fixes without affecting the main codebase.";
                    example = "Run git branch new-feature to create a new branch, and git checkout new-feature to switch to it.";
                    break;
                case 'switching branches':
                    definition = "Switching branches allows you to move between different lines of development in a Git repository.";
                    example = "Run git checkout branch-name to switch to the specified branch.";
                    break;
                case 'merging branches':
                    definition = "Merging branches integrates changes from one branch into another, typically from a feature branch into the main branch.";
                    example = "Run git merge feature-branch from the main branch to combine changes from feature-branch.";
                    break;
                case 'resolving merge conflicts':
                    definition = "Resolving merge conflicts involves manually addressing discrepancies between branches during a merge process.";
                    example = "Edit the conflicted files, resolve the differences, and then run git add and git commit to finalize the merge.";
                    break;

                // Collaboration
                case 'forking repositories':
                    definition = "Forking a repository creates a personal copy of the repository where you can make changes without affecting the original project.";
                    example = "Click the 'Fork' button on GitHub to create your own copy of a repository.";
                    break;
                case 'cloning a repository':
                    definition = "Cloning a repository creates a local copy of a remote repository on your machine.";
                    example = "Run git clone https://github.com/user/repo.git to clone a repository from GitHub to your local machine.";
                    break;
                case 'creating pull requests':
                    definition = "Creating a pull request proposes changes from one branch or fork to be merged into another branch, typically into the main repository.";
                    example = "Submit a pull request on GitHub to review and merge changes into the main branch of the repository.";
                    break;
                case 'reviewing pull requests':
                    definition = "Reviewing pull requests involves evaluating proposed changes before they are merged into the main codebase.";
                    example = "Provide feedback on code changes in the pull request comments and approve or request changes before merging.";
                    break;
                case 'merging pull requests':
                    definition = "Merging pull requests integrates proposed changes into the target branch after review and approval.";
                    example = "Click 'Merge pull request' on GitHub to combine changes from a pull request into the main branch.";
                    break;

                // GitHub Features
                case 'issues':
                    definition = "Issues are used to track tasks, bugs, enhancements, or any other project-related discussions in a GitHub repository.";
                    example = "Create an issue to report a bug or request a new feature and track its progress through comments and labels.";
                    break;
                case 'milestones':
                    definition = "Milestones are used to track progress towards a specific goal or version in a GitHub project, grouping related issues and pull requests.";
                    example = "Create a milestone to organize issues and pull requests related to a particular release or project goal.";
                    break;
                case 'projects':
                    definition = "Projects on GitHub provide a way to organize and prioritize tasks or features using boards and cards, similar to project management tools.";
                    example = "Create a project board to track tasks and progress using columns like 'To Do', 'In Progress', and 'Done'.";
                    break;
                case 'wikis':
                    definition = "Wikis provide a space within a repository for documentation, notes, and other information related to the project.";
                    example = "Create and edit wiki pages to document setup instructions, usage, and contribution guidelines for your project.";
                    break;
                case 'releases':
                    definition = "Releases provide a way to package and distribute software versions, including release notes and downloadable assets.";
                    example = "Tag a commit as a release and provide release notes to describe the changes and improvements in that version.";
                    break;

                // Advanced Git
                case 'rebasing':
                    definition = "Rebasing is a process of applying changes from one branch onto another branch to create a linear project history.";
                    example = "Run git rebase main to apply your feature branch changes onto the latest main branch commits.";
                    break;
                case 'cherry-picking':
                    definition = "Cherry-picking allows you to apply specific commits from one branch to another branch without merging the entire branch.";
                    example = "Run git cherry-pick commit-hash to apply a particular commit to your current branch.";
                    break;
                case 'git stash':
                    definition = "Git stash temporarily saves changes that are not ready to be committed, allowing you to switch branches or work on other tasks.";
                    example = "Run git stash to save your uncommitted changes and git stash pop to apply them back when ready.";
                    break;
                case 'git rebase':
                    definition = "Git rebase moves or combines a sequence of commits to a new base commit, helping to maintain a cleaner project history.";
                    example = "Run git rebase main to update your branch with the latest changes from the main branch.";
                    break;
                case 'git revert':
                    definition = "Git revert creates a new commit that undoes changes made by a previous commit, without altering the project's history.";
                    example = "Run git revert commit-hash to create a new commit that reverses changes from the specified commit.";
                    break;
                case 'git reset':
                    definition = "Git reset changes the current branch's commit history, optionally modifying the working directory and staging area.";
                    example = "Run git reset --hard commit-hash to reset the branch to a specific commit and discard all changes after it.";
                    break;
                default:
                    definition = "Definition not found";
                    example = "Example not found";
            }
            break;
        case 'browserDevTools':
            switch (tagName) {
                // Elements Panel
                case 'dom inspection':
                    definition = "DOM inspection allows you to view and explore the structure of the HTML elements on a webpage.";
                    example = "Inspect an element on the webpage to see its HTML and CSS properties using the 'Elements' panel.";
                    break;
                case 'editing html/css':
                    definition = "Editing HTML/CSS lets you make live changes to a webpage's content and styles directly in the browser.";
                    example = "Change the font size or color of an element in the 'Elements' panel and see the update instantly.";
                    break;
                case 'element selection':
                    definition = "Element selection allows you to choose specific elements on the page for inspection and modification.";
                    example = "Use the 'Select an element' tool to click on an item and inspect its HTML structure.";
                    break;
                case 'box model visualization':
                    definition = "The box model visualization shows the padding, border, and margin around an HTML element.";
                    example = "Inspect the box model to adjust spacing, padding, or margins around an element and see the effects.";
                    break;
                case 'pseudo-classes':
                    definition = "Pseudo-classes allow you to simulate and test states like :hover, :focus, and :active in elements.";
                    example = "Use ':hover' in the 'Elements' panel to preview how an element's styles change when hovered.";
                    break;

                // Console Panel
                case 'logging messages':
                    definition = "Logging messages outputs custom messages or data to the console for debugging purposes.";
                    example = "Use console.log('Hello World') to print a message in the Console panel.";
                    break;
                case 'evaluating expressions':
                    definition = "Evaluating expressions allows you to run JavaScript code directly in the console and see the results.";
                    example = "Type 2 + 2 in the console and press enter to get the result.";
                    break;
                case 'error tracking':
                    definition = "Error tracking helps identify issues in your JavaScript code, such as syntax errors or runtime exceptions.";
                    example = "View uncaught JavaScript errors in the console and use the stack trace to debug them.";
                    break;
                case 'debugging scripts':
                    definition = "Debugging scripts involves pausing the execution of code at specific points to inspect variable values and the flow of the code.";
                    example = "Use the debugger keyword or set a breakpoint to pause execution and inspect the values of variables.";
                    break;
                case 'console methods':
                    definition = "Console methods like log, warn, and error are used to display information at different levels of importance in the console.";
                    example = "Use console.warn('Warning message') to log a warning in the console, which appears with a yellow icon.";
                    break;

                // Network Panel
                case 'viewing requests':
                    definition = "Viewing requests shows all network requests made by the page, such as API calls, scripts, and images.";
                    example = "Open the Network panel to see details about each network request, including status, size, and time.";
                    break;
                case 'xhr/fetch monitoring':
                    definition = "XHR and fetch monitoring track AJAX requests and fetch API calls, allowing you to see the data being sent and received.";
                    example = "Monitor asynchronous requests by looking at the Network panel while your web page makes API requests.";
                    break;
                case 'throttling network speed':
                    definition = "Throttling network speed simulates slower internet connections to test how your page loads under different conditions.";
                    example = "Choose a network speed like 'Slow 3G' in the Network panel to simulate a slow connection and see the load time.";
                    break;
                case 'request/response headers':
                    definition = "Request/response headers contain metadata about the HTTP requests and responses between the client and server.";
                    example = "Inspect the 'Headers' tab in the Network panel to view the request headers, like User-Agent or content-type.";
                    break;
                case 'caching':
                    definition = "Caching refers to storing resources locally to improve load times on subsequent page visits.";
                    example = "Check if resources are being served from cache by viewing the 'Size' and 'Transferred' columns in the Network panel.";
                    break;

                // Sources Panel
                case 'viewing and editing source code':
                    definition = "The Sources panel allows you to view and edit JavaScript and CSS files in your browser.";
                    example = "Modify a JavaScript function in the Sources panel to test changes without reloading the page.";
                    break;
                case 'setting breakpoints':
                    definition = "Breakpoints are markers you set in the code that pause execution when reached, allowing you to inspect values at that moment.";
                    example = "Set a breakpoint on a specific line of JavaScript to pause the code execution and inspect variable values.";
                    break;
                case 'stepping through code':
                    definition = "Stepping through code involves going line by line in paused code to analyze its behavior.";
                    example = "Use 'Step Over' or 'Step Into' in the Sources panel to move through your JavaScript code during debugging.";
                    break;
                case 'watching variables':
                    definition = "Watching variables lets you monitor specific variable values in real-time while debugging.";
                    example = "Add a variable to the Watch section in the Sources panel to keep track of its value while stepping through the code.";
                    break;
                case 'event listener breakpoints':
                    definition = "Event listener breakpoints allow you to pause code execution when specific DOM events, like clicks or keypresses, are triggered.";
                    example = "Set a click event listener breakpoint to pause code when a button is clicked.";
                    break;

                // Performance Panel
                case 'performance profiling':
                    definition = "Performance profiling helps to analyze the runtime performance of your web application, identifying slow tasks.";
                    example = "Use the 'Record' button to capture a performance trace while your page loads and analyze bottlenecks.";
                    break;
                case 'fps monitoring':
                    definition = "FPS (Frames Per Second) monitoring tracks the rendering performance of your webpage.";
                    example = "Check the FPS in the Performance panel to see how smoothly your page is running.";
                    break;
                case 'heap snapshots':
                    definition = "Heap snapshots allow you to capture and inspect memory allocations within your JavaScript application.";
                    example = "Take a heap snapshot to find memory leaks or inefficient memory usage.";
                    break;

                // Application Panel
                case 'storage inspection':
                    definition = "Storage inspection allows you to view and manage the different types of storage used by a web application, such as cookies and local storage.";
                    example = "Inspect local storage and cookies in the Application panel to see saved data for the webpage.";
                    break;
                case 'service workers':
                    definition = "Service workers are background scripts that intercept network requests and enable features like offline browsing and push notifications.";
                    example = "Use the Application panel to see active service workers and control their lifecycle.";
                    break;
                case 'cache management':
                    definition = "Cache management allows you to view and control the cache storage used by your web application, including the service worker cache.";
                    example = "Clear or update the cache from the Application panel to ensure your application is using the latest resources.";
                    break;

                // Lighthouse Panel
                case 'auditing':
                    definition = "Auditing with Lighthouse generates a performance, accessibility, SEO, and best practices report for your webpage.";
                    example = "Run a Lighthouse audit to get insights into how to improve page speed, SEO, and accessibility.";
                    break;
                case 'performance audit':
                    definition = "A performance audit evaluates the speed and efficiency of your webpage, providing recommendations for improvement.";
                    example = "Use the Lighthouse panel to run a performance audit and receive optimization suggestions.";
                    break;
                case 'accessibility audit':
                    definition = "An accessibility audit checks your page for compliance with accessibility standards, ensuring it is usable for people with disabilities.";
                    example = "Run an accessibility audit in Lighthouse to identify potential issues and improvements.";
                    break;

                // Accessibility Panel
                case 'accessibility tree':
                    definition = "The accessibility tree represents how a screen reader interprets the DOM, helping developers ensure their site is accessible.";
                    example = "Inspect the accessibility tree to see how elements are announced to users with assistive technologies.";
                    break;
                case 'color contrast checker':
                    definition = "The color contrast checker evaluates the contrast ratio between text and background colors, ensuring readability for users with visual impairments.";
                    example = "Use the contrast checker to verify that text meets WCAG contrast standards for accessibility.";
                    break;
                case 'ARIA attributes':
                    definition = "ARIA (Accessible Rich Internet Applications) attributes are used to improve the accessibility of web content by defining roles, properties, and states for elements.";
                    example = "Add aria-label to provide a clear description for screen readers without visually changing the page.";
                    break;
                case 'keyboard navigation':
                    definition = "Keyboard navigation allows users to move through the website using only the keyboard, which is essential for users with mobility impairments.";
                    example = "Test keyboard navigation by tabbing through the page to ensure focusable elements are accessible.";
                    break;
                case 'screen reader compatibility':
                    definition = "Screen reader compatibility ensures that web content is properly interpreted and communicated by screen readers for users with visual impairments.";
                    example = "Check the site's compatibility with screen readers by verifying alt text and semantic HTML structure.";
                    break;

                // Device Mode
                case 'responsive design testing':
                    definition = "Responsive design testing allows developers to simulate different screen sizes and device types to ensure the website looks good on all devices.";
                    example = "Use Device Mode to test how your website behaves on mobile, tablet, and desktop screen sizes.";
                    break;
                case 'viewport dimensions':
                    definition = "Viewport dimensions are the size of the visible area on a webpage, which affects how content is displayed on different devices.";
                    example = "Change the viewport dimensions in Device Mode to see how the layout adjusts for different screen sizes.";
                    break;
                case 'device emulation':
                    definition = "Device emulation simulates a specific device's screen size, resolution, and user agent string to test how the webpage behaves on that device.";
                    example = "Emulate an iPhone or Android device in the DevTools to see how your website responds to mobile environments.";
                    break;
                case 'network throttling':
                    definition = "Network throttling in Device Mode allows you to simulate slower network speeds, such as 3G, to test your website's load performance under constrained conditions.";
                    example = "Use the network throttling feature to see how your site performs on slower connections.";
                    break;
                case 'orientation change':
                    definition = "Orientation change simulates switching between portrait and landscape orientations on a mobile device.";
                    example = "Switch between landscape and portrait orientations in Device Mode to ensure your layout adapts correctly.";
                    break;

                // Timeline Panel (or Performance Panel)
                case 'JavaScript execution timeline':
                    definition = "The JavaScript execution timeline displays the timing of JavaScript execution to help identify performance bottlenecks.";
                    example = "Use the timeline to see how long individual JavaScript functions take to execute and find slow points in your code.";
                    break;
                case 'layout and paint events':
                    definition = "Layout and paint events show the browser's process of calculating the layout and rendering the visual elements on the screen.";
                    example = "Analyze layout and paint events to optimize how the browser draws elements on the page, reducing layout reflows and paints.";
                    break;
                case 'frame rendering':
                    definition = "Frame rendering displays how each frame is processed during page rendering, helping to identify performance issues like jank or dropped frames.";
                    example = "Use the frame rendering timeline to monitor the frame rate and ensure smooth animations and scrolling.";
                    break;
                case 'UI performance profiling':
                    definition = "UI performance profiling helps developers measure the impact of user interface interactions and animations on page performance.";
                    example = "Profile UI interactions like scrolling and hovering to detect areas where the page may be slow or laggy.";
                    break;
                case 'user interaction tracking':
                    definition = "User interaction tracking allows you to record and analyze how user input, such as clicks and scrolling, affects page performance.";
                    example = "Track user interactions to identify slowdowns caused by intensive JavaScript or DOM manipulation.";
                    break;

                // Audits
                case 'page speed audit':
                    definition = "A page speed audit evaluates how quickly your website loads and provides suggestions for improving load times.";
                    example = "Run a page speed audit to get recommendations on how to optimize your images, scripts, and overall load time.";
                    break;
                case 'mobile-friendly audit':
                    definition = "A mobile-friendly audit checks if your website is optimized for mobile devices, testing for responsive design, touch targets, and other mobile usability factors.";
                    example = "Run a mobile-friendly audit to ensure your site works well on smartphones and tablets.";
                    break;
                case 'progressive web app audit':
                    definition = "A progressive web app (PWA) audit evaluates whether your web app follows PWA best practices, such as being installable, responsive, and offline-capable.";
                    example = "Use a PWA audit to ensure your web app is compliant with PWA standards and offers a good user experience even offline.";
                    break;
                case 'accessibility audit':
                    definition = "An accessibility audit checks your website against accessibility standards, highlighting areas where users with disabilities may face issues.";
                    example = "Run an accessibility audit to find issues like missing alt text, low contrast, or improper ARIA roles.";
                    break;
                case 'SEO audit':
                    definition = "An SEO audit evaluates your website's search engine optimization, providing recommendations to improve your visibility in search engine results.";
                    example = "Run an SEO audit to ensure your meta tags, headers, and content structure are optimized for search engines.";
                    break;

                default:
                    definition = "Definition not found";
                    example = "Example not found";
            }





        default:
            definition = "Tag type not supported";
            example = "Tag type not supported";
    }

    return { definition, example };
};

export default tagContentMapping;
