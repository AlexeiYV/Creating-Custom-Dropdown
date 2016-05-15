(function(){
  this.Modal = function() {

    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    var defaults = {
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    }

    if ( arguments[0] && typeof arguments[0] === "object" ) {
      this.options = extendDefaults( defaults, arguments[0] );
    }
  }

  Modal.prototype.open = function() {

  } 

  function extendDefaults( source, properties ) {

    var property;
    for ( property in properties ) {
      if ( properties.hasOwnProperty( property ) ) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function buildOut() {

    var content, contentHolder, docFrag;

    if ( typeof this.options.content === "string" ) {
      content = this.options.content;
    } else {
      content = this.options.content.innerHTML;
    }

    docFrag = document.createDocumentFragment();

    this.modal = document.createElement("div");
    this.modal.className = "scotch-modal" + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    if ( this.options.closeButton === true ) {
      this.closeButton = document.createElement("button");
      this.closeButton.className = "scotch-close close-button";
      this.closeButton.innerHTML = "x";
      this.modal.appendChild(this.closeButton);
    }
  }
}());