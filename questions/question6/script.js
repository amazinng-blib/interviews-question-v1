// Module pattern

var Module = (function () {
  function privateModule() {
    //do something
    console.log('private');
  }

  return {
    publicModule: function () {
      //call privateModule
      privateModule();
      console.log('public');
    },
  };
})();

Module.publicModule();

// Modules are a fundamental concept in modern programming that improve the organization, maintainability, and scalability of code. They enable developers to divide code into smaller, reusable, and manageable parts. Here's why modules are important and how they are used in real-life scenarios:

// Importance of Modules
// Encapsulation:

// Modules allow you to encapsulate functionality, keeping related variables and functions grouped together.
// This minimizes the risk of variable name clashes and helps maintain a cleaner global namespace.
// Security:

// Private modules protect sensitive data, logic, or configurations that should not be accessible to external systems or users.
// Reusability:

// Modules promote reusability by allowing you to use the same code in multiple parts of a project or across different projects.
// Maintainability:

// By breaking code into smaller modules, you can focus on fixing or updating specific parts without impacting other sections.
// It simplifies debugging, testing, and understanding the codebase.
// Separation of Concerns:

// Modules help developers adhere to the principle of separation of concerns, where each module handles a distinct functionality, making the code more organized.
// Improved Collaboration:

// Teams can work on different modules simultaneously without conflicts, increasing development efficiency.
// Dependency Management:

// Modules can manage their dependencies explicitly, avoiding the need for a single monolithic file with intertwined dependencies.
// Versioning and Sharing:

// Modules can be packaged and distributed (e.g., via npm), making it easy to share code and keep track of versions.

// further life application examples

// Private logic inside the module
function calculateDiscount(price) {
  return price * 0.1; // Private
}

// Public API of the module
function getDiscountedPrice(price) {
  return price - calculateDiscount(price); // Exposes functionality without exposing internal logic
}
