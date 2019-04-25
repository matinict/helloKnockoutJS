//File: ko-init.js
// jQuery(function(){
//     viewModel = {
//         title:"Hello World",
//         content:"So many years of hello world"
//     };
//     ko.applyBindings(viewModel);
// });


// jQuery(function(){
//     var viewModelConstructor = function()
//     {
//         this.getTitle = function()
//         {
//             return "Hello World";
//         }
//        this.content = "So many years of hello world";
//        this.theValue = "2";
//     }
//     viewModel = new viewModelConstructor;
//     ko.applyBindings(viewModel);
// });



// jQuery(function(){
//     var viewModelConstructor = function()
//     {
//        this.theValue = ko.observable("1");
//     }
//
//     window.viewModel = new viewModelConstructor;
//     ko.applyBindings(window.viewModel);
// });


jQuery(function(){
    var viewModelConstructor = function()
    {
        this.theValue = ko.observable("1");
        var that = this;
        this.pickRandomValue = function(){
            var val = Math.floor(Math.random() * (3));
            that.theValue(val);
        };
    }

    window.viewModel = new viewModelConstructor;
    ko.applyBindings(window.viewModel);
});


//Template Binding File: ko-init.js
// jQuery(function(){
//     var viewModelConstructor = function()
//     {
//         this.first = {
//             theTitle:ko.observable("Hello World"),
//             theContent:ko.observable("Back to Hello World")
//         };
//         this.second = {
//             theTitle:ko.observable("Goodbye World"),
//             theContent:ko.observable("We're sailing west now")
//         };
//     }
//
//     viewModel = new viewModelConstructor;
//     ko.applyBindings(viewModel);
// });


//File: ko-init.js
// jQuery(function(){
//     var viewModelConstructor = function()
//     {
//         this.message = "Hello World";
//     }
//
//     ko.bindingHandlers.pulseStormHelloWorld = {
//         update: function(element, valueAccessor){
//             jQuery(element).html('<h1>' + valueAccessor() + '</h1>');
//         }
//     };
//     ko.applyBindings(new viewModelConstructor);
// });
